/**
 * EN-CSS theme audit.
 *
 * Checks every `themes/*.css` file against the contract of the refactored
 * EN-CSS token system:
 *
 *  - required semantic tokens (including `-active` and `--en-border-control`)
 *  - WCAG contrast of text on solid fills, text on surfaces, control borders
 *    and the focus ring (light and dark mode)
 *  - selector scoping (`[data-en-theme="x"]` / `.en-theme-x`, never `:root`)
 *  - no legacy primitive overrides (`--en-color-*`)
 *  - no overrides of derived scale tokens (`--en-space-*`, ...)
 *  - decorative layers / motion guards, texture application, logical properties
 *  - metadata sync (`themes.json`, `types.ts`, `README.md`)
 *
 * Usage (Bun or Node with a TypeScript runner such as tsx):
 *
 *   bun run themes/scripts/audit-themes.ts
 *   bun run themes/scripts/audit-themes.ts --only sunset,mono
 *   bun run themes/scripts/audit-themes.ts --json > audit.json
 *   bun run themes/scripts/audit-themes.ts --css ../src --quiet
 *
 * Options:
 *   --themes <dir>   directory holding the theme files (default: parent of this script)
 *   --css <dir>      EN-CSS `src` directory, used to detect unknown tokens (default: <themes>/../src)
 *   --only <a,b>     audit only the listed theme names
 *   --json           print the machine-readable report instead of text
 *   --quiet          print only the summary
 *   --warnings       also list warnings (default: errors and the summary only)
 *
 * Exit code is 1 when at least one error is found.
 */

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  AAA_THEMES,
  contrast,
  extractSelectors,
  extractVars,
  resolveColor,
  splitTopLevel,
  stripComments,
  type Mode,
  type RGB,
  type Vars,
} from './lib/css';

// ---------------------------------------------------------------------------
// Contract
// ---------------------------------------------------------------------------

const ACCENTS = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'] as const;

const TEXT_MIN = 4.5;
const TEXT_MIN_AAA = 7;
const UI_MIN = 3;

/** Tokens every theme must define. */
const REQUIRED_TOKENS: string[] = [
  ...ACCENTS.flatMap((a) => [
    `--en-${a}`,
    `--en-${a}-hover`,
    `--en-${a}-active`,
    `--en-${a}-subtle`,
    `--en-${a}-inverse`,
    `--en-fg-${a}`,
    `--en-fg-${a}-inverse`,
  ]),
  '--en-text-brand',
  '--en-text-brand-hover',
  '--en-bg',
  '--en-bg-subtle',
  '--en-bg-surface',
  '--en-bg-hover',
  '--en-bg-active',
  '--en-text',
  '--en-text-muted',
  '--en-border',
  '--en-border-subtle',
  '--en-border-control',
  '--en-focus-ring',
  '--en-disabled-bg',
  '--en-disabled-text',
  '--en-overlay',
  '--en-bg-inverse',
  '--en-bg-subtle-inverse',
  '--en-bg-surface-inverse',
  '--en-text-inverse',
  '--en-text-muted-inverse',
  '--en-border-inverse',
];

/**
 * Derived scale tokens (see core/tokens/tokens-scale.css): themes must use the
 * --en-density / --en-type-scale axes instead. Horizontal input padding is not
 * derived from an axis, so themes may set it.
 */
const DERIVED_TOKEN_RE = /^--en-(space-|input-padding-(?:sm-|lg-)?y$|control-height)/;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Severity = 'error' | 'warn';

interface Finding {
  theme: string;
  code: string;
  severity: Severity;
  message: string;
}

interface ThemeReport {
  theme: string;
  findings: Finding[];
  minTextRatio: number | null;
}

// ---------------------------------------------------------------------------
// Checks
// ---------------------------------------------------------------------------

interface Pair {
  label: string;
  fg: string;
  bg: string;
  min: number;
}

function buildPairs(theme: string): Pair[] {
  const textMin = AAA_THEMES.has(theme) ? TEXT_MIN_AAA : TEXT_MIN;
  const pairs: Pair[] = [];
  for (const a of ACCENTS) {
    for (const [state, suffix] of [['base', ''], ['hover', '-hover'], ['active', '-active']] as const) {
      pairs.push({ label: `${a}-${state}`, fg: `--en-fg-${a}`, bg: `--en-${a}${suffix}`, min: textMin });
    }
    pairs.push({ label: `${a}-inverse`, fg: `--en-fg-${a}-inverse`, bg: `--en-${a}-inverse`, min: textMin });
    pairs.push({ label: `text on ${a}-subtle`, fg: '--en-text', bg: `--en-${a}-subtle`, min: textMin });
  }
  pairs.push(
    { label: 'text on bg', fg: '--en-text', bg: '--en-bg', min: textMin },
    { label: 'text on surface', fg: '--en-text', bg: '--en-bg-surface', min: textMin },
    { label: 'text-muted on bg', fg: '--en-text-muted', bg: '--en-bg', min: textMin },
    { label: 'text-muted on surface', fg: '--en-text-muted', bg: '--en-bg-surface', min: textMin },
    { label: 'text-brand on bg', fg: '--en-text-brand', bg: '--en-bg', min: textMin },
    { label: 'text-brand on surface', fg: '--en-text-brand', bg: '--en-bg-surface', min: textMin },
    { label: 'border-control on bg', fg: '--en-border-control', bg: '--en-bg', min: UI_MIN },
    { label: 'border-control on surface', fg: '--en-border-control', bg: '--en-bg-surface', min: UI_MIN },
    { label: 'focus-ring on bg', fg: '--en-focus-ring', bg: '--en-bg', min: UI_MIN },
  );
  return pairs;
}

interface Context {
  knownTokens: Set<string> | null;
  metadata: { json: Set<string> | null; types: Set<string> | null; readme: string | null };
}

function auditTheme(name: string, css: string, ctx: Context): ThemeReport {
  const findings: Finding[] = [];
  const add = (code: string, severity: Severity, message: string) =>
    findings.push({ theme: name, code, severity, message });

  const vars = extractVars(css);
  const stripped = stripComments(css);

  // Scoping: every rule must be tied to this theme.
  const scopeRe = new RegExp(`\\[data-en-theme=["']${name}["']\\]|\\.en-theme-${name}(?![\\w-])`);
  // Every selector of a rule list must be scoped on its own (a stray `:root` in a list leaks the theme).
  const unscoped = extractSelectors(css).flatMap((list) => splitTopLevel(list)).filter((s) => !scopeRe.test(s));
  if (unscoped.length) {
    add('E-SCOPE', 'error', `selector(s) not scoped to [data-en-theme="${name}"] / .en-theme-${name}: ${[...new Set(unscoped.map((s) => s.replace(/\s+/g, ' ')))].join(' | ')}`);
  }

  // Legacy primitives.
  const legacy = [...vars.keys()].filter((k) => k.startsWith('--en-color-'));
  if (legacy.length) add('E-LEGACY', 'error', `overrides ${legacy.length} primitive color token(s) (e.g. ${legacy.slice(0, 3).join(', ')}); override semantic tokens instead`);

  // Required tokens.
  const missing = REQUIRED_TOKENS.filter((t) => !vars.has(t));
  if (missing.length) add('E-MISSING', 'error', `missing ${missing.length} required token(s): ${missing.join(', ')}`);

  // Contrast.
  const failures: string[] = [];
  const unresolved = new Set<string>();
  let minText: number | null = null;
  for (const pair of buildPairs(name)) {
    if (!vars.has(pair.fg) || !vars.has(pair.bg)) continue;
    for (const mode of ['light', 'dark'] as const) {
      // Translucent surfaces (glass) are composited over the page background.
      const page = vars.has('--en-bg') ? resolveColor(vars.get('--en-bg')!, vars, mode) : null;
      const fg = resolveColor(vars.get(pair.fg)!, vars, mode, pair.fg === '--en-bg' ? null : page);
      const bg = resolveColor(vars.get(pair.bg)!, vars, mode, pair.bg === '--en-bg' ? null : page);
      if (!fg || !bg) {
        unresolved.add(!fg ? pair.fg : pair.bg);
        continue;
      }
      const ratio = contrast(fg, bg);
      if (pair.min >= TEXT_MIN && (minText === null || ratio < minText)) minText = ratio;
      if (ratio < pair.min) failures.push(`${mode[0].toUpperCase()}:${pair.label} ${ratio.toFixed(1)} (<${pair.min})`);
    }
  }
  if (failures.length) add('E-CONTRAST', 'error', `${failures.length} failing pair(s): ${failures.join('; ')}`);
  if (unresolved.size) add('W-UNRESOLVED', 'warn', `could not resolve to a plain color (not audited): ${[...unresolved].join(', ')}`);

  // Derived scale tokens.
  const derived = [...vars.keys()].filter((k) => DERIVED_TOKEN_RE.test(k));
  if (derived.length) add('W-DERIVED', 'warn', `overrides derived scale token(s) directly (${derived.join(', ')}); use --en-density / --en-type-scale`);

  // Unknown tokens (not defined by EN-CSS, not consumed by EN-CSS, not consumed by the theme itself).
  if (ctx.knownTokens) {
    const selfRefs = new Set([...stripped.matchAll(/var\((--[\w-]+)/g)].map((m) => m[1]));
    const unknown = [...vars.keys()].filter((k) => !ctx.knownTokens!.has(k) && !selfRefs.has(k));
    if (unknown.length) add('W-UNKNOWN', 'warn', `token(s) neither defined nor consumed by EN-CSS: ${unknown.join(', ')}`);
  }

  // Decorative layers and motion.
  const noUrl = stripped.replace(/url\((?:"[^"]*"|'[^']*'|[^)]*)\)/g, 'url()');
  if (/body::(?:before|after)|--en-bg-texture|background-image/.test(noUrl) && !/forced-colors/.test(noUrl)) {
    add('W-FORCED', 'warn', 'decorative layers without a forced-colors block');
  }
  if (/@keyframes|animation\s*:|animation-name/.test(noUrl) && !/prefers-reduced-motion|data-motion/.test(noUrl)) {
    add('W-MOTION', 'warn', 'animation without a prefers-reduced-motion / data-motion guard');
  }

  // Texture: a defined texture token is only visible when a rule of the theme applies it.
  if (vars.has('--en-bg-texture') && !/var\(\s*--en-bg-texture/.test(stripped)) {
    add('W-TEXTURE', 'warn', '--en-bg-texture is defined but no rule in this file applies it (the texture is not rendered)');
  }

  // Physical properties.
  const physical = noUrl.match(/\b(?:margin|padding)-(?:left|right)\b|text-align\s*:\s*(?:left|right)\b|\bborder-(?:left|right)\b|(?<![\w-])(?:left|right)\s*:/g);
  if (physical) add('W-PHYSICAL', 'warn', `physical properties: ${[...new Set(physical.map((p) => p.replace(/\s+/g, ' ')))].join(', ')}`);

  // Metadata.
  const { json, types, readme } = ctx.metadata;
  if (json && !json.has(name)) add('W-META-JSON', 'warn', 'not listed in themes.json');
  if (types && !types.has(name)) add('W-META-TYPES', 'warn', 'not listed in types.ts (ThemeName)');
  if (readme !== null && !readme.includes(`\`${name}.css\``)) add('W-META-README', 'warn', 'not documented in README.md');

  return { theme: name, findings, minTextRatio: minText };
}

// ---------------------------------------------------------------------------
// IO
// ---------------------------------------------------------------------------

function listFiles(dir: string, ext: string): string[] {
  return readdirSync(dir).filter((f) => f.endsWith(ext) && statSync(join(dir, f)).isFile()).sort();
}

function collectKnownTokens(srcDir: string): Set<string> | null {
  if (!existsSync(srcDir)) return null;
  const known = new Set<string>();
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const p = join(dir, entry);
      if (statSync(p).isDirectory()) walk(p);
      else if (entry.endsWith('.css')) {
        const css = stripComments(readFileSync(p, 'utf8'));
        for (const m of css.matchAll(/(--en-[\w-]+)\s*:/g)) known.add(m[1]);
        for (const m of css.matchAll(/var\((--en-[\w-]+)/g)) known.add(m[1]);
      }
    }
  };
  walk(srcDir);
  return known;
}

function readMetadata(themesDir: string): Context['metadata'] {
  const read = (f: string) => (existsSync(join(themesDir, f)) ? readFileSync(join(themesDir, f), 'utf8') : null);
  const jsonRaw = read('themes.json');
  const typesRaw = read('types.ts');
  let json: Set<string> | null = null;
  if (jsonRaw) {
    try {
      json = new Set((JSON.parse(jsonRaw) as { file: string }[]).map((t) => t.file.replace(/\.css$/, '')));
    } catch {
      json = null;
    }
  }
  let types: Set<string> | null = null;
  if (typesRaw) {
    const block = typesRaw.match(/export type ThemeName\s*=([\s\S]*?);/);
    if (block) types = new Set([...block[1].matchAll(/'([\w-]+)'/g)].map((m) => m[1]));
  }
  return { json, types, readme: read('README.md') };
}

function argValue(args: string[], flag: string): string | undefined {
  const i = args.indexOf(flag);
  return i >= 0 ? args[i + 1] : undefined;
}

function main(): void {
  const args = process.argv.slice(2);
  const here = dirname(fileURLToPath(import.meta.url));
  const themesDir = resolve(argValue(args, '--themes') ?? join(here, '..'));
  const srcDir = resolve(argValue(args, '--css') ?? join(themesDir, '..', 'src'));
  const only = argValue(args, '--only')?.split(',').map((s) => s.trim());
  const asJson = args.includes('--json');
  const quiet = args.includes('--quiet');
  const showWarnings = args.includes('--warnings');

  const ctx: Context = { knownTokens: collectKnownTokens(srcDir), metadata: readMetadata(themesDir) };
  const files = listFiles(themesDir, '.css').filter((f) => !only || only.includes(basename(f, '.css')));
  const reports = files.map((f) => auditTheme(basename(f, '.css'), readFileSync(join(themesDir, f), 'utf8'), ctx));

  const errors = reports.flatMap((r) => r.findings).filter((f) => f.severity === 'error');
  const warnings = reports.flatMap((r) => r.findings).filter((f) => f.severity === 'warn');

  if (asJson) {
    console.log(JSON.stringify({ themes: reports, errors: errors.length, warnings: warnings.length }, null, 2));
  } else {
    if (!ctx.knownTokens) console.log(`note: ${srcDir} not found, unknown-token check skipped\n`);
    if (!quiet) {
      for (const r of reports) {
        const list = r.findings.filter((f) => showWarnings || f.severity === 'error');
        console.log(`${list.some((f) => f.severity === 'error') ? '✗' : '✓'} ${r.theme}`);
        for (const f of list) console.log(`    ${f.severity === 'error' ? 'ERROR' : 'warn '} ${f.code}: ${f.message}`);
      }
      console.log('');
    }
    const byCode = new Map<string, number>();
    for (const f of [...errors, ...warnings]) byCode.set(f.code, (byCode.get(f.code) ?? 0) + 1);
    const failing = reports.filter((r) => r.findings.some((f) => f.severity === 'error')).length;
    console.log(`Themes: ${reports.length}  |  failing: ${failing}  |  errors: ${errors.length}  |  warnings: ${warnings.length}`);
    for (const [code, n] of [...byCode.entries()].sort()) console.log(`  ${code.padEnd(14)} ${n}`);
  }

  process.exit(errors.length ? 1 : 0);
}

main();

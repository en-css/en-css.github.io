/**
 * Shared CSS and color helpers for the theme scripts (audit-themes.ts,
 * sync-metadata.ts). Pure functions, no I/O.
 */

export type Mode = 'light' | 'dark';
export type RGB = [number, number, number];
export type Vars = Map<string, string>;

/** Themes that must reach WCAG AAA (7:1) for text pairs. */
export const AAA_THEMES: ReadonlySet<string> = new Set(['highcontrast']);

// ---------------------------------------------------------------------------
// CSS helpers
// ---------------------------------------------------------------------------

/** Keyframe step selectors (`from`, `to`, `50%`) are not style rules of the theme. */
export const KEYFRAME_STEP_RE = /^(?:from|to|\d+(?:\.\d+)?%)(?:\s*,\s*(?:from|to|\d+(?:\.\d+)?%))*$/i;

export const stripComments = (css: string): string => css.replace(/\/\*[\s\S]*?\*\//g, '');

/** Collects `--custom: value;` declarations. The last declaration of a name wins. */
export function extractVars(css: string): Vars {
  const vars: Vars = new Map();
  const re = /(--[\w-]+)\s*:\s*([^;{}]+);/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(stripComments(css)))) vars.set(m[1], m[2].trim());
  return vars;
}

/** Returns the selector list of every style rule (at-rules are skipped). */
export function extractSelectors(css: string): string[] {
  const s = stripComments(css);
  const out: string[] = [];
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '{') {
      const prelude = s.slice(start, i).trim();
      if (prelude && !prelude.startsWith('@') && !KEYFRAME_STEP_RE.test(prelude)) out.push(prelude);
      start = i + 1;
    } else if (ch === '}' || ch === ';') {
      start = i + 1;
    }
  }
  return out;
}

export function splitTopLevel(input: string): string[] {
  const parts: string[] = [];
  let depth = 0;
  let cur = '';
  for (const ch of input) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ',' && depth === 0) {
      parts.push(cur.trim());
      cur = '';
    } else {
      cur += ch;
    }
  }
  parts.push(cur.trim());
  return parts;
}

// ---------------------------------------------------------------------------
// Colors
// ---------------------------------------------------------------------------

/** Parses a literal color. Translucent colors are composited over `backdrop` (null when unknown). */
export function parseLiteral(v: string, backdrop: RGB | null): RGB | null {
  const over = (rgb: RGB, alpha: number): RGB | null => {
    if (alpha >= 1) return rgb;
    if (!backdrop) return null;
    return rgb.map((c, i) => Math.round(c * alpha + backdrop[i] * (1 - alpha))) as RGB;
  };
  const hex = v.match(/^#([0-9a-f]{3,8})$/i);
  if (hex) {
    let h = hex[1];
    if (h.length === 3 || h.length === 4) h = [...h].map((c) => c + c).join('');
    if (h.length !== 6 && h.length !== 8) return null;
    const rgb = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) as RGB;
    return over(rgb, h.length === 8 ? parseInt(h.slice(6), 16) / 255 : 1);
  }
  const fn = v.match(/^(rgba?|hsla?)\(([^)]+)\)$/i);
  if (fn) {
    const nums = fn[2].split(/[\s,/]+/).filter(Boolean);
    const alpha = nums[3] !== undefined ? parseFloat(nums[3]) / (nums[3].endsWith('%') ? 100 : 1) : 1;
    if (Number.isNaN(alpha)) return null;
    if (fn[1].toLowerCase().startsWith('rgb')) {
      const ch = nums.slice(0, 3).map((n) => (n.endsWith('%') ? (parseFloat(n) / 100) * 255 : parseFloat(n)));
      return ch.some(Number.isNaN) ? null : over(ch.map((c) => Math.round(c)) as RGB, alpha);
    }
    const h = parseFloat(nums[0]);
    const s = parseFloat(nums[1]) / 100;
    const l = parseFloat(nums[2]) / 100;
    if ([h, s, l].some(Number.isNaN)) return null;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      return Math.round(255 * (l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))));
    };
    return over([f(0), f(8), f(4)], alpha);
  }
  if (/^white$/i.test(v)) return [255, 255, 255];
  if (/^black$/i.test(v)) return [0, 0, 0];
  return null;
}

/** Resolves `var()`, `light-dark()` and literal colors for one color scheme. */
export function resolveColor(raw: string, vars: Vars, mode: Mode, backdrop: RGB | null = null, seen: Set<string> = new Set()): RGB | null {
  const v = raw.trim().replace(/\s*!important$/, '');
  const variable = v.match(/^var\(\s*(--[\w-]+)\s*(?:,\s*([\s\S]+))?\)$/);
  if (variable) {
    if (seen.has(variable[1])) return null;
    const next = vars.get(variable[1]);
    if (next !== undefined) return resolveColor(next, vars, mode, backdrop, new Set(seen).add(variable[1]));
    return variable[2] ? resolveColor(variable[2], vars, mode, backdrop, seen) : null;
  }
  const pair = v.match(/^light-dark\(([\s\S]+)\)$/);
  if (pair) {
    const parts = splitTopLevel(pair[1]);
    return parts.length === 2 ? resolveColor(parts[mode === 'light' ? 0 : 1], vars, mode, backdrop, seen) : null;
  }
  return parseLiteral(v, backdrop);
}

export function luminance([r, g, b]: RGB): number {
  const f = (c: number) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

export function contrast(a: RGB, b: RGB): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

# Migration Guide — `@en32/en-css`

From the original `0.0.1-dev` layout (before the roadmap) to the current state
(roadmap phases 0–5). The package is still `0.0.1-dev`; the version bump belongs
to the release phase.

> There was no compatibility period: the old names were removed without aliases.
> Work through the checklist below, top to bottom. Most projects only need
> sections 1–3.

## Contents

1. [Quick checklist](#1-quick-checklist)
2. [Renamed and removed bundles](#2-renamed-and-removed-bundles)
3. [What `en.css` and `en-preset-standard` contain now](#3-what-encss-and-en-preset-standard-contain-now)
4. [Import paths and `package.json` exports](#4-import-paths-and-packagejson-exports)
5. [Scale tokens: `--en-scale` is now split](#5-scale-tokens---en-scale-is-now-split)
6. [Color tokens, solids and re-theming](#6-color-tokens-solids-and-re-theming)
7. [Visible changes you should expect](#7-visible-changes-you-should-expect)
8. [Accessibility, RTL and forced colors](#8-accessibility-rtl-and-forced-colors)
9. [Build scripts and browser support](#9-build-scripts-and-browser-support)
10. [New in this version](#10-new-in-this-version)
11. [Verifying your migration](#11-verifying-your-migration)

---

## 1. Quick checklist

- [ ] Replace old bundle names (section 2). Search your CSS, HTML, bundler config and docs.
- [ ] Decide for each project whether `en.css` (basic only) is enough, or whether you need
      `en-preset-standard`, `en-extra.css`, or `en.css` plus single extended files (section 3).
- [ ] Fix deep imports that point at old paths (section 4).
- [ ] If you set `--en-scale`, check that the result still looks right: it works as before,
      but there are two new axes (section 5).
- [ ] If you re-theme by overriding `--en-color-*` primitives, also override the new
      `solid-*` slots (section 6).
- [ ] If you use the pre-built themes, or wrote your own, update them to the new token
      model (section 6).
- [ ] Look at solid buttons, badges, alerts and form borders in light and dark mode (section 7).
- [ ] If you wrote CSS that targets framework internals with physical properties
      (`margin-left`, `border-right` ...), consider logical properties for RTL (section 8).

---

## 2. Renamed and removed bundles

Every preset now carries the `en-preset-` prefix. `en.css` and `en-extra.css` keep
their names.

<!-- en:legacy-names:start -->
| Old | New | Notes |
|---|---|---|
| `en-core.css` | `en-preset-core.css` | Foundation only |
| `en-lite.css` | `en-preset-lite.css` | Same contents (core + layout + basic form + basic components + core utilities) |
| `en-standard.css` | `en-preset-standard.css` | **Contents changed**, see section 3 |
| `en-extended.css` | `en-preset-extended.css` | Add-on with every extended component; now also ships the layout primitives |
| `en-full.css` | **removed** | Use `en-extra.css` |

Built files moved with them:

| Old | New |
|---|---|
| `dist/en-core.min.css` | `dist/presets/en-preset-core.min.css` |
| `dist/en-lite.min.css` | `dist/presets/en-preset-lite.min.css` |
| `dist/en-standard.min.css` | `dist/presets/en-preset-standard.min.css` |
| `dist/en-extended.min.css` | `dist/presets/en-preset-extended.min.css` |
| `dist/en-full.min.css` | `dist/en-extra.min.css` |
<!-- en:legacy-names:end -->

`en.css` → `dist/en.min.css` and `en-extra.css` → `dist/en-extra.min.css` are unchanged.

### Find and replace

Run from your project root (review the diff before committing). The patterns below are
written with a character class so that this guide itself does not trip the repository's
stale-name check.

```bash
# Linux (GNU sed). On macOS use: sed -i '' -E ...
grep -rlE 'en-(core|lite|standard|extended|full)(\.min)?\.css' src public docs 2>/dev/null \
| xargs sed -i -E \
    -e 's/en-(core|lite|standard|extended)(\.min)?\.css/en-preset-\1\2.css/g' \
    -e 's/en-full(\.min)?\.css/en-extra\1.css/g'
```

Then fix `dist/` paths by hand: presets moved into `dist/presets/` (table above).

---

## 3. What `en.css` and `en-preset-standard` contain now

### `en.css` is the basic set only

Before, `en.css` pulled in every extended component and form control (the build was about
270 KB unminified). Now it contains only:

- foundation (reset, tokens, base, layout, theme, forced colors),
- `form/form-basic.css`,
- all components in `components/basic/`,
- core utilities.

If you used an extended component through `en.css` (OTP, rating, kanban, calendar, tree,
carousel, gallery, lightbox, timeline, toast, avatar, prose, and so on), it is gone from
that file. Pick one of three routes:

| You want | Use |
|---|---|
| Everything in one file | `en-extra.css` |
| Basic set + extended form controls + Toast + Avatar | `en-preset-standard.css` |
| Basic set + only what you need | `en.css` + single `@import`s (below) |

Single extended files are standalone and mirror the folder layout:

```css
@import "@en32/en-css/en.css";
@import "@en32/en-css/components/extended/components-toast.css";
@import "@en32/en-css/form/extended/components-otp.css";
```

### `en-preset-standard` changed

It is now a thin alias: `en.css` + `form/extended/form-extended-index.css` + Toast + Avatar.
The old standard also included `layouts/layout-index.css` (16/24-column grids) and
`utilities/utilities-index.css` (extra utilities). Those are **no longer included**.
If you used `.en-grid-16`, `.en-grid-24`, text styles, shimmer, large spacing or
negative-margin utilities with the old standard, either switch to `en-extra.css` or add:

```css
@import "@en32/en-css/en-preset-standard.css";
@import "@en32/en-css/layouts/layout-index.css";
@import "@en32/en-css/utilities/utilities-index.css";
```

### Where to start

| Project type | Preset |
|---|---|
| Dashboard, admin panel, SaaS | `en-preset-app` |
| Analytics, boards, data-heavy | `en-preset-data` |
| Landing page, product site | `en-preset-marketing` |
| PWA, mobile web, chat | `en-preset-mobile` |
| Documentation, technical blog | `en-preset-docs` |
| Wizard, onboarding, checkout | `en-preset-forms` |
| Static page, embed, widget | `en-preset-nano` |
| You build your own components | `en-preset-bare` or `en-preset-core` |

Add-ons go **last**: `en-preset-a11y`, `en-preset-print`, `en-preset-extended`.

---

## 4. Import paths and `package.json` exports

The old `exports` map listed paths that did not match the files on disk. It is replaced by
wildcard patterns that mirror the folders:

```jsonc
{
  "./en.css": "./src/en.css",
  "./en-extra.css": "./src/en-extra.css",
  "./en-preset-*.css": "./src/presets/en-preset-*.css",
  "./core/*.css": "./src/core/*.css",
  "./components/basic/*.css": "./src/components/basic/*.css",
  "./components/extended/*.css": "./src/components/extended/*.css",
  "./form/*.css": "./src/form/*.css",
  "./form/extended/*.css": "./src/form/extended/*.css",
  "./layouts/*.css": "./src/layouts/*.css",
  "./utilities/*.css": "./src/utilities/*.css",
  "./dist/*.min.css": "./dist/*.min.css",
  "./dist/*.css": "./dist/*.css",
  "./package.json": "./package.json"
}
```

Path changes you may need to apply:

<!-- en:legacy-names:start -->
| Old import | New import |
|---|---|
| `@en32/en-css/tokens.css` | `@en32/en-css/core/tokens.css` |
| `@en32/en-css/components/avatar.css` | `@en32/en-css/components/extended/components-avatar.css` |
| `@en32/en-css/components/form/*` | `@en32/en-css/form/extended/*` |
| `@en32/en-css/en-lite.css` | `@en32/en-css/en-preset-lite.css` |
<!-- en:legacy-names:end -->

**File-name convention (locked).** The prefix stays in the file name, and therefore in the
import URL:

| Kind | Prefix | Example |
|---|---|---|
| Preset | `en-preset-` | `en-preset-docs.css` |
| Component (basic or extended) | `components-` | `components/extended/components-prose.css` |
| Extended form control | `components-` | `form/extended/components-otp.css` |
| Form basics and indexes | `form-` | `form/form-basic.css` |
| Layout | `layout-` | `layouts/layout-primitives.css` |
| Tokens | `tokens-` | `core/tokens/tokens-presets.css` |
| Utilities | `utilities-` | `utilities/utilities-touch.css` |
| Index | `*-index.css` | `components/extended/components-extended-index.css` |

Removed or moved files:

- `form/form-fieldset.css` was never shipped; `.en-fieldset` lives in `form/form-basic.css`.
  Drop any import of it.
- `src/DRAFT/tokens/` was a duplicate of `core/tokens/` and is deleted. Use `core/tokens/`.
- Themes and JS plugins are not part of this repository. References were removed.

---

## 5. Scale tokens: `--en-scale` is now split

`--en-scale` used to multiply spacing, radius, border, shadow **and** font size. A compact
layout therefore shrank the text too. There are now three axes (defined in
`core/tokens/tokens-scale.css`):

| Token | Controls | Default |
|---|---|---|
| `--en-scale` | Global multiplier (still works) | `1` |
| `--en-type-scale` | Typography only | `1` |
| `--en-density` | Spacing, gaps and control heights only | `1` |

Final size = base value × `--en-scale` × the axis that applies.

**Compatibility.** A config that only sets `--en-scale` renders exactly as before, because
the new axes default to `1`.

**If you wanted a compact UI**, stop shrinking everything with `--en-scale` and use the
dedicated axis. It leaves font sizes alone:

```html
<html data-density="compact">   <!-- 0.875 -->
```

or

```css
:root { --en-density: 0.875; }
```

Notes:

- The axes only take effect where `tokens-scale.css` is loaded. `en-extra.css` loads it;
  other bundles use the fixed tokens from `core/tokens.css`. To use them elsewhere:
  `@import "@en32/en-css/core/tokens/tokens-scale.css";`
- Set them on `:root` / `<html>`. Derived tokens are resolved there; a nested override
  does not re-derive them.
- **Do not read `--en-density` or `--en-type-scale` in your own component CSS.** Use the
  derived tokens (`--en-space-*`, `--en-text-*`, `--en-control-height*`). The repository
  check enforces this for the framework itself.
- New: `--en-control-height-sm | -md | -lg` follow `--en-density`.

### New appearance attributes (all optional, on `<html>`)

From `core/tokens/tokens-presets.css` (included in `en-extra.css`, importable on its own):

| Attribute | Values | Effect |
|---|---|---|
| `data-density` | `compact` · `comfortable` · `spacious` | `--en-density` |
| `data-type-scale` | `sm` · `md` · `lg` | `--en-type-scale` |
| `data-radius` | `sharp` · `soft` · `pill` | `--en-radius-*` |
| `data-elevation` | `flat` · `subtle` · `raised` | `--en-shadow-*` |
| `data-motion` | `full` · `reduced` · `none` | durations and easing |
| `data-contrast` | `normal` · `more` | firmer borders, muted text, focus ring |
| `data-font` | `system` · `humanist` · `serif` · `mono` | `--en-font-sans` |
| `data-accent` | `blue` · `violet` · `teal` · `amber` · `rose` | primary colour |

Omitting an attribute and writing its default value are the same.

---

## 6. Color tokens, solids and re-theming

### What changed

The fills of solid buttons, badges and alerts used to come from the 400–950 palette slots
and did not reach WCAG AA for text in several cases (white-ish text on success, warning,
danger, info and primary in light mode; some hover/active states in dark mode). They now
come from dedicated slots in `core/tokens/tokens-colors.css`:

```
--en-color-<accent>-solid-{base|hover|active}-{light|dark}
```

for `<accent>` in `primary`, `secondary`, `success`, `warning`, `danger`, `info`.

- the **`light`** set is dark (used with a light `--en-fg-*` on a light page);
- the **`dark`** set is light (used with a dark `--en-fg-*` on a dark page).

The semantic tokens map onto them:

| Token | Before | Now |
|---|---|---|
| `--en-primary` (and the other accents) | `light-dark(--en-color-primary-700, --en-color-primary-500)` | `light-dark(--en-color-primary-solid-base-light, --en-color-primary-solid-base-dark)` |
| `--en-<accent>-hover` | 800/900-slot values | `…-solid-hover-…` |
| `--en-<accent>-active` | primary only | defined for every accent, `…-solid-active-…` |
| `--en-<accent>-inverse` | slot values | solid slots with `light` and `dark` swapped |

`--en-fg-*` (text on solid fills) is unchanged.

### New token

`--en-border-control` — the boundary of a form control, at least 3:1 against the page
(WCAG 1.4.11). Inputs, selects, textareas, checkboxes, radios, switch tracks, range,
OTP, spin, adorned inputs, the file-upload zone and rating stars use it. Decorative
dividers (cards, tables, separators) keep `--en-border`.

### If you re-theme

Overriding only `--en-color-primary-700` / `-500` no longer changes the **fill** of solid
primary buttons. Override the solid slots as well, and keep the focus ring and brand-text
slots in sync:

```css
@layer en-tokens {
  :root {
    /* Solid fills: light page / dark page */
    --en-color-primary-solid-base-light:   #7e22ce;
    --en-color-primary-solid-hover-light:  #6b21a8;
    --en-color-primary-solid-active-light: #581c87;
    --en-color-primary-solid-base-dark:    #c084fc;
    --en-color-primary-solid-hover-dark:   #d8b4fe;
    --en-color-primary-solid-active-dark:  #e9d5ff;

    /* Focus ring (700 on light, 500 on dark) and brand text (900 / 500) */
    --en-color-primary-700: #9333ea;
    --en-color-primary-500: #c084fc;
    --en-color-primary-900: #6b21a8;
  }
}
```

Then run `bun run audit:contrast`. Text on every state of every fill must stay at 4.5:1 or
better; borders of controls and the focus ring at 3:1 or better. `data-accent` values are
audited the same way. The only documented exception is solid **amber** as a graphic on a
white page in light mode (its text label is still 4.5:1).

### If you use the pre-built themes

The themes in `themes/` were rewritten for the new token model. A theme is no longer a set
of primitive overrides: it overrides **semantic tokens** inside `[data-en-theme="<name>"]` /
`.en-theme-<name>`, and no theme applies to `:root` any more.

- **Custom themes written the old way must be rewritten.** Overriding `--en-color-*`
  primitives no longer changes solid fills, and a `:root` rule applies to the whole document.
  Start from `themes/template/theme.template.css`.
- **Required tokens.** Every theme must define `--en-<accent>-active` for all six accents,
  `--en-border-control`, hover for every accent, and the `-inverse` sets. A missing token
  silently falls back to the framework default (for example a blue pressed state inside a
  green theme).
- **Contrast.** Text on every solid state and on `--en-<accent>-subtle` is at least 4.5:1;
  muted and brand text on the page and surface 4.5:1; `--en-border-control` and the focus ring
  3:1; `highcontrast` reaches 7:1. Check your themes with
  `bun run themes/scripts/audit-themes.ts --css src`.
- **`monochrome` was merged into `mono`.** Replace `data-en-theme="monochrome"` with `mono`.
- **`compact` and `touch` use the density axis.** They set `--en-density` instead of
  overriding `--en-space-*`, so they need `en-extra.css` (`tokens-scale.css`) and
  `data-en-theme` on `<html>`. With the standard bundle their spacing no longer changes;
  colors, radius, shadows and horizontal input padding still do.
- **Textures.** Themes draw their own `--en-bg-texture` through an `en-base` rule; the
  framework does not map it. Eleven themes defined a texture without drawing it; they draw it
  again now.
- **Appearance attributes.** `data-density`, `data-radius`, `data-elevation` and
  `data-motion` on `<html>` are more specific than a theme and win for the same axis.
  `data-accent` has no visible effect under a theme.

---

## 7. Visible changes you should expect

These are intended and come from the accessibility audit.

| Area | Change |
|---|---|
| Solid buttons, badges, alerts (light mode) | Slightly darker fills so text passes AA |
| Solid fills (dark mode) | Hover and active get **lighter**, not darker, and the text stays dark |
| `success`, `danger` (light mode) | Noticeably darker greens and reds |
| Muted text (light mode) | A little darker (`--en-color-neutral-700`) |
| Form control borders | Firmer than before (`--en-border-control`) |
| Stepper, calendar events, sidebar badges, table headers/badges, mega-menu badges, kanban avatars, file-upload and spin buttons | Text on accent fills uses `--en-fg-*` instead of `white` (readable in dark mode) |
| Navbar `--gradient` | Text uses `--en-fg-primary` instead of `white` |
| Loading buttons | The spinner ring uses `--en-fg-*` of the button colour |
| `en-preset-standard` | No 16/24 grids or extra utilities (section 3) |

If you pinned screenshots (visual regression tests), update them.

---

## 8. Accessibility, RTL and forced colors

### RTL

- The switch thumb and the context-menu submenus now travel the right way in RTL
  (`:dir(rtl)`).
- Toast edge-to-edge cards use `border-inline: none`.
- New utilities `.en-border-s` / `.en-border-e` (and `-s-0`, `-e-0`) are the logical
  counterparts of `.en-border-l` / `.en-border-r`. The physical ones still exist; prefer the
  logical ones.
- The repository check now rejects physical properties (`margin-left`, `padding-right`,
  `text-align: left`, `float`, `border-top-left-radius`, …) inside `components/`, `form/`,
  `layouts/` and `core/`. Keep that rule in your own additions.

### Forced colors (Windows High Contrast)

- Every extended component carries its own `forced-colors` block, so a single file stays
  correct on its own.
- `core/forced-colors.css` now also covers buttons, alerts, callouts, cards, kbd, navbar,
  sidebar, empty states, close icons, accordion and table borders.
- The stat card's trend (up/down) shows a symbol (▲ / ▼) in forced-colors mode because
  colour alone is not available there.

### Motion and contrast preferences

The base reset already shortens animations under `prefers-reduced-motion`. For stricter
behaviour add `en-preset-a11y.css` last: it switches animation off (not only shortens it),
adds a 3px focus ring, follows `prefers-contrast: more` and
`prefers-reduced-transparency`, and keeps links, `:target` and focus visible in forced
colors.

### Printing

Add `en-preset-print.css` last for invoices, reports and articles. Everything is inside
`@media print`, so screens are unaffected. Chrome (buttons, navbars, shell, FAB, toasts)
is hidden; table headers repeat on each page; link URLs are written out inside `.en-prose`
and `.en-print-links`. Helper classes: `.en-print-hidden`, `.en-print-only`,
`.en-print-break-before`, `.en-print-break-after`, `.en-print-avoid-break`,
`.en-print-color`.

---

## 9. Build scripts and browser support

### Browser support

The support floor now comes from one place: `scripts/targets.ts`, derived from Baseline data
(`baseline-browser-mapping`, `BASELINE_YEAR = 2025`, roughly Chrome/Edge 141, Firefox 145,
Safari 26.2). The old hand-written floor (Chrome 110 / Firefox 115 / Safari 16) did not support
`light-dark()` and made LightningCSS add larger fallbacks. If you must support older
browsers, build your own bundle with lower targets, or do not use the dist files from this
version.

Features used without fallback: `@layer`, `light-dark()`, `color-mix()`, container queries,
`:has()`, native nesting, `<dialog>` and Popover API, `@starting-style`, `@property`,
`@scope`, logical properties. Features inside `@supports` (progressive enhancement):
scroll-driven animations, `:target-current`, `grid-lanes`.

### Scripts

| Script | Purpose |
|---|---|
| `bun run build` | Build every bundle in the manifest into `dist/` |
| `bun run build:prod` | Minified bundles |
| `bun run build:chunks` | One file per component, plus index files |
| `bun run build:all` | All of the above, tree JSON and regenerated docs |
| `bun run analyze` | Sizes (informational only; there are no size limits) |
| `bun run docs` | Regenerates the size tables in README, PRESETS, QUICKSTART, BUILD |
| `bun run check` | Consistency and accessibility checks (exit code 1 on failure) |
| `bun run audit:contrast` | WCAG contrast audit of the token pairs (new) |

### The manifest

`src/presets/manifest.json` is the single source of truth for shipped bundles. Hand-edit
only `name`, `kind`, `title`, `summary`, `audience`, `input`, `dist`; the build writes
`files`, `measured` and `targets`. Adding a preset means: create
`src/presets/en-preset-<name>.css`, add an entry to the manifest, run `bun run build:all`.

---

## 10. New in this version

**Presets:** `nano`, `bare`, `forms`, `docs`, `app`, `data`, `marketing`, `mobile`, and the
add-ons `a11y` and `print`.

**Layout primitives** (`layouts/layout-primitives.css`): Switcher, Sidebar layout
(`.en-with-sidebar`), Cover, Reel, Frame, Imposter, Bento, Masonry, Split pane.

**Extended components** (one file each, in `components/extended/` unless noted):

| Group | Components |
|---|---|
| Content and docs | prose, code, toc, footer, banner, error-page, skip-link |
| App and data | shell, chart (+ sparkline), meter (+ gauge), feed, filter-bar, combobox, tag-input, sheet, strength (`form/extended/`) |
| Marketing and mobile | hero, pricing, auth, bottom-nav, fab, chat |

**Utilities:** `utilities/utilities-touch.css` raises touch targets to at least 44 px on
coarse pointers (used by `en-preset-mobile`; opt out per element with `data-en-touch="off"`).
It is deliberately not part of `en-extra.css`.

**Attribute contract.** Interactive components show state through native attributes
(`aria-expanded`, `aria-selected`, `aria-current`, `[open]`, `:popover-open`, `:checked`),
not through state classes. Each component documents its markup, state attributes and
events in its header comment, so a JavaScript layer can be added later without CSS changes.

---

## 11. Verifying your migration

1. Search for leftovers of the old names (section 2 command) and for deep imports (section 4).
2. Load the page in light **and** dark mode and in a forced-colors emulation. Look at solid
   buttons, form borders, alerts and badges.
3. Test with `dir="rtl"` if you support right-to-left languages.
4. If you re-themed, run `bun run audit:contrast` in this repository against your overrides.
5. If you use or wrote themes, run `bun run themes/scripts/audit-themes.ts --css src`; it
   must report no errors.
6. If you build from source: `bun run build:all && bun run check`. A clean run ends with
   `All checks passed.`

Items that need a person or a real device and are **not** covered by the automated checks:
keyboard operation of every interactive component, real screen readers, real notched
phones (safe areas), and a visual review of the new components in your own layouts.

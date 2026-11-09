# EN-CSS Themes

Pre-built themes for the EN-CSS framework. A theme is a single CSS file that overrides
**semantic tokens** (`--en-primary`, `--en-bg`, `--en-text`, ...) inside its own scope. Every
theme supports light and dark mode through CSS `light-dark()` and meets the contrast rules
listed in [Accessibility guarantees](#accessibility-guarantees).

## Using a theme

Load the theme file after the EN-CSS bundle, then switch it on with an attribute or a class:

```html
<html data-en-theme="ocean">…</html>
<!-- or -->
<section class="en-theme-ocean">…</section>
```

```css
@import "@en32/en-css/en-extra.css";
@import "@en32/en-css/themes/ocean.css";
```

To load a theme at runtime, `setThemeRaw()` returns the CSS text of a theme (cached after the
first call) so you can put it in a `<style>` element:

```ts
import { setThemeRaw, type ThemeName } from '@en32/en-css/themes/themes';

const css = await setThemeRaw('ocean' satisfies ThemeName);
```

Light or dark mode follows the operating system. Set `data-theme="light"` or
`data-theme="dark"` on `<html>` to force one (see `core/theme.css`).

### Scope

Every rule of a theme is scoped to `[data-en-theme="<name>"]` or `.en-theme-<name>`; nothing
leaks to the rest of the page. A theme can therefore be applied to a whole page or to a single
container. Layout themes are the exception: see [Layout themes](#layout-themes).

### Combining with appearance attributes

Appearance attributes on `<html>` (`data-density`, `data-radius`, `data-elevation`,
`data-motion`, `data-type-scale`) are more specific than a theme, so they **win** over what a
theme sets for the same axis. `data-accent` changes the primitive color scale, while themes set
the semantic tokens directly, so `data-accent` has no visible effect under a theme.

## Available themes

<!-- themes:start -->

### Classic and special purpose

| Theme | File | Notes | Description |
|-------|------|-------|-------------|
| Brutal | `brutal.css` | texture | Bold, neobrutalist design with high contrast |
| Nature | `nature.css` | texture | Green, natural tones inspired by forests and plants |
| Nord | `nord.css` | texture | Arctic, frosted palette with muted colors |
| Pastel | `pastel.css` | texture | Soft, gentle colors with a dreamy feel |
| Retro | `retro.css` | texture | Vintage, nostalgic feel with warm colors |
| Cyberpunk | `cyberpunk.css` | texture | Neon futuristic dark mode with embossed light mode |
| Solarized | `solarized.css` | texture | Classic low-eyestrain developer theme with distinct warm/cool tones |
| Dracula | `dracula.css` | texture | Dark, vampiric theme with vibrant neon purple & pink accents |
| Synthwave | `synthwave.css` | texture | High energy retrowave aesthetics with neon lines |
| E-Ink | `e-ink.css` |  | Super flat, low-contrast, monochromatic theme mimicking e-paper |
| Royal Gold | `royal.css` | texture | Elegant, luxurious theme with gold accents |
| Compact | `compact.css` | layout, texture | Space-efficient theme with reduced density for data-dense interfaces |
| Touch | `touch.css` | layout, texture | Spacious theme with larger controls and spacing for touch interfaces |
| High Contrast | `highcontrast.css` | AAA | Black-and-white WCAG AAA (7:1) theme with bold outlines |
| Mono | `mono.css` |  | Pure black-and-white theme; statuses are told apart by lightness |

### Blue tones

| Theme | File | Notes | Description |
|-------|------|-------|-------------|
| Ocean/Marine | `ocean.css` | texture | Fresh, trustworthy theme inspired by the ocean |
| Arctic/Ice | `arctic.css` | texture | Clean, modern theme inspired by arctic ice |
| Midnight/Cosmic | `midnight.css` | texture | Deep, mysterious theme inspired by night sky |
| Corporate/Professional | `corporate.css` | texture | Professional, trustworthy theme for business applications |
| Galaxy | `galaxy.css` | texture | Cosmic and stellar, with glassy deep space aesthetics |
| Ocean Deep / Abyss | `abyss.css` | texture | Deep aquatic blues and bioluminescent cyans |
| macOS / Aqua | `macos.css` |  | Clean desktop aesthetic inspired by macOS |
| Windows / Fluent | `windows.css` |  | Fluent design aesthetic with mica-like surfaces |
| iOS / Mobile | `ios.css` |  | Mobile-first aesthetic with distinct rounded elements |

### Brown / earth tones

| Theme | File | Notes | Description |
|-------|------|-------|-------------|
| Coffee/Mocha | `coffee.css` | texture | Warm, inviting theme inspired by coffee culture |
| Earthy/Nature | `earthy.css` | texture | Organic, natural theme inspired by earth and nature |
| Desert/Sand | `desert.css` | texture | Warm desert theme with sandy and terracotta tones |

### Red and pink tones

| Theme | File | Notes | Description |
|-------|------|-------|-------------|
| Ruby/Jewel | `ruby.css` | texture | Elegant, luxurious theme inspired by ruby gemstone |
| Horror | `horror.css` | texture | Gothic gloom: cold fog by day, blood and shadow by night |
| Momiji / Autumn | `momiji.css` | texture | Japanese autumn in maple gold and sunset crimson |
| Sakura / Spring | `sakura.css` | texture | Soft cherry blossom pinks and a spring breeze |

### Purple tones

| Theme | File | Notes | Description |
|-------|------|-------|-------------|
| Lavender / Amethyst | `lavender.css` | texture | Soft purples and lilacs for a calm, soothing interface |
| Android / Material | `android.css` |  | Material design inspired with vibrant colors and elevated shadows |

### Green tones

| Theme | File | Notes | Description |
|-------|------|-------|-------------|
| Matcha | `matcha.css` | texture | Calm, organic greens and creams with rounded corners |
| Phosphor Terminal | `terminal.css` | texture | Amber vintage paper by day, phosphor-green CRT by night |

### Orange tones

| Theme | File | Notes | Description |
|-------|------|-------|-------------|
| Sunset/Dusk | `sunset.css` |  | Warm, vibrant theme inspired by sunset colors |
| Halloween / Pumpkin | `halloween.css` | texture | Deep purples, dark greys, and vibrant pumpkin orange |

### Yellow tones

| Theme | File | Notes | Description |
|-------|------|-------|-------------|
| Citrus / Fruity | `citrus.css` | texture | Bright energetic mix of lemon, lime, and tangerine |

<!-- themes:end -->

*The catalog above is generated by `scripts/sync-metadata.ts`. Notes: **layout** = also sets the
spacing axis, **texture** = draws a background texture, **AAA** = text contrast of at least 7:1.*

## Layout themes

`compact` and `touch` are colored themes that also change how much space the interface uses. They
do it through the `--en-density` axis (`compact` = 0.8, `touch` = 1.25) instead of overriding the
spacing tokens, so they compose with `--en-scale` and with `data-density`.

Two requirements follow from how the axes work:

- The scale tokens must be loaded: they are part of `en-extra.css` (`core/tokens/tokens-scale.css`).
  With the standard bundle only the colors, radius, shadows and horizontal input padding change.
- The theme attribute must be on `<html>`: derived tokens (`--en-space-*`, `--en-control-height*`,
  `--en-input-padding-*-y`) are resolved on `:root`, so a nested `.en-theme-compact` container does
  not re-derive them.

## Accessibility guarantees

Every theme is checked by `scripts/audit-themes.ts`, in light **and** dark mode:

| Pair | Minimum |
|------|---------|
| Text on every solid state (base, hover, active, inverse) | 4.5:1 |
| `--en-text` on the soft accent surfaces (`--en-<accent>-subtle`) | 4.5:1 |
| `--en-text`, `--en-text-muted`, `--en-text-brand` on `--en-bg` and `--en-bg-surface` | 4.5:1 |
| `--en-border-control` (form control boundary) and `--en-focus-ring` on `--en-bg` | 3:1 |
| Every text pair of `highcontrast` | 7:1 |

Decorative layers (textures, watermarks) are switched off under `forced-colors: active`, and
animated themes honor `prefers-reduced-motion`. Translucent surfaces (glass effects) are checked
as if composited over `--en-bg`.

## Creating a theme

1. Copy `template/theme.template.css` to `<name>.css` and replace every `<name>` placeholder.
2. Set the colors. Override **semantic tokens only**: never `--en-color-*` primitives, and never
   the derived spacing tokens (`--en-space-*`, `--en-control-height*`, `--en-input-padding-*-y`);
   use `--en-density` / `--en-type-scale` for layout.
3. Define every token in the template. The important ones that are easy to forget:
   `--en-<accent>-active` for all six accents, `--en-border-control`, and the `-inverse` set.
4. Hover and active move away from the foreground: darker when the text on the fill is light,
   lighter when it is dark.
5. Add an entry (`file`, `name`, `description`, `category`) to `themes.json`.
6. If the theme has a texture, apply it yourself: the framework does not draw
   `--en-bg-texture` (see the commented block in the template).
7. Run the scripts below until both are clean.

## Scripts

Run from the repository root with Bun (Node with a TypeScript runner such as `tsx` also works):

```bash
bun run themes/scripts/audit-themes.ts --css src          # contract, contrast and metadata checks
bun run themes/scripts/audit-themes.ts --only ocean --warnings
bun run themes/scripts/sync-metadata.ts                   # regenerate themes.json colors, types.ts, this catalog
bun run themes/scripts/sync-metadata.ts --check           # exit 1 when something is stale
```

Suggested `package.json` scripts: `"audit:themes"` and `"sync:themes"`.

## Migrating from the old mechanism

Before the refactor, a theme could override the primitive color scale (`--en-color-primary-700`,
...) on `:root`. Since the solid fills became separate slots, that no longer changes buttons,
badges or alerts, and a `:root` rule applies to the whole document. Rewrite such themes to
override the semantic tokens inside `[data-en-theme="<name>"]`, as in the template.
`monochrome` was merged into `mono`.

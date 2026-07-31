var e=`/*!
 * Theme: Retro Punk
 * Overrides for en-css tokens (01-tokens.css)
 */

@layer en-tokens {
  [data-en-theme="retro"],
  .en-theme-retro {
    /* Brand Colors */
    --en-primary: light-dark(#d81159, #f91880);
    --en-primary-contrast: light-dark(#ffffff, #000000);
    --en-secondary: light-dark(#00a8cc, #00f0ff);
    --en-success: light-dark(#05a838, #00ff41);
    --en-warning: light-dark(#e69500, #ffc000);
    --en-danger: light-dark(#e01a22, #ff3333);
    --en-info: light-dark(#5900cc, #7000ff);

    /* Surface & Background Colors */
    --en-bg: light-dark(#fdf6e3, #09090b);
    --en-bg-subtle: light-dark(#eee8d5, #131316);
    --en-surface: light-dark(#ffffff, #1c1c21);
    --en-text: light-dark(#2d2d2d, #e0e0ff);
    --en-text-muted: light-dark(#839496, #a599ce);
    --en-border: light-dark(#2d2d2d, #f91880);

    /* Border width, style & sharp radius */
    --en-border-width: 2px;
    --en-border-width-thick: 4px;
    --en-border-style: solid;
    --en-radius-sm: 0;
    --en-radius-md: 0;
    --en-radius-lg: 0;
    --en-radius-xl: 0;
    --en-radius-full: 0;

    /* Shadow */
    --en-shadow-sm: 2px 2px 0 var(--en-border);
    --en-shadow-md: 4px 4px 0 var(--en-border);
    --en-shadow-lg: 8px 8px 0 var(--en-border);

    /* Typography */
    --en-font-sans: "Courier New", Courier, ui-monospace, "Cascadia Code", Consolas, monospace;
    --en-font-mono: "Courier New", Courier, ui-monospace, "Cascadia Code", Consolas, monospace;
    --en-tracking-tight: -0.05em;
    --en-tracking-normal: -0.025em;
    --en-tracking-wide: 0;

    /* Focus ring */
    --en-ring-color: var(--en-secondary);
    --en-ring-width: 2px;
    --en-ring-offset: 4px;
    --en-ring-offset-color: var(--en-bg);

    /* Texture: Cyber grid (1:1 aspect ratio mapping) */
    --en-bg-texture: 
      linear-gradient(color-mix(in oklab, var(--en-secondary) 8%, transparent) 1px, transparent 1px),
      linear-gradient(90deg, color-mix(in oklab, var(--en-secondary) 8%, transparent) 1px, transparent 1px);
  }
}

@layer en-base {
  [data-en-theme="retro"] body, .en-theme-retro body {
    background-size: 40px 40px; /* Perfect square grid */
  }

  [data-en-theme="retro"] body::before, .en-theme-retro body::before {
    content: "🜏"; /* Leviathan / Sulfur */
    position: fixed;
    top: 10vh;
    right: 5vw;
    font-size: 45vw;
    color: color-mix(in oklab, var(--en-primary) 5%, transparent);
    z-index: 1;
    pointer-events: none;
    line-height: 1;
    font-family: monospace;
  }
}`;export{e as default};
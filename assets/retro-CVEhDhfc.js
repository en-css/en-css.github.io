var e=`/*!
 * Theme: Retro Punk
 * Overrides for en-css tokens (01-tokens.css)
 */

@layer en-tokens {
  [data-en-theme="retro"],
  .en-theme-retro {
    /* ===== Brand Colors ===== */
    /* Neon Pink & Cyan for that Synthwave / Cyberpunk vibe */
    --en-primary: light-dark(#d81159, #f91880);
    --en-primary-contrast: light-dark(#ffffff, #000000);
    --en-secondary: light-dark(#00a8cc, #00f0ff);
    
    /* Neon Matrix Green */
    --en-success: light-dark(#05a838, #00ff41);
    /* Bright Warning Yellow */
    --en-warning: light-dark(#e69500, #ffc000);
    /* Alert Red */
    --en-danger: light-dark(#e01a22, #ff3333);
    /* Deep Neon Purple */
    --en-info: light-dark(#5900cc, #7000ff);

    /* ===== Neutral / Surface Colors ===== */
    /* Light Mode: Creamy/Solarized. Dark Mode: Deep Cyber Dark */
    --en-bg: light-dark(#fdf6e3, #09090b);
    --en-bg-subtle: light-dark(#eee8d5, #131316);
    --en-surface: light-dark(#ffffff, #1c1c21);
    
    --en-text: light-dark(#2d2d2d, #e0e0ff);
    --en-text-muted: light-dark(#839496, #a599ce);
    
    /* Sharp borders. Dark borders in light mode, Neon Pink in dark mode */
    --en-border: light-dark(#2d2d2d, #f91880);

    /* ===== Border width & style ===== */
    /* Retro/punk style often uses thicker, bolder lines */
    --en-border-width: 2px;
    --en-border-width-thick: 4px;
    --en-border-style: solid;

    /* ===== Radius ===== */
    /* Sharp, unrounded corners */
    --en-radius-sm: 0;
    --en-radius-md: 0;
    --en-radius-lg: 0;
    --en-radius-xl: 0;
    --en-radius-full: 0;

    /* ===== Shadow ===== */
    /* Hard solid drop shadows characteristic of retro UI/Neo-brutalism */
    --en-shadow-sm: 2px 2px 0 var(--en-border);
    --en-shadow-md: 4px 4px 0 var(--en-border);
    --en-shadow-lg: 8px 8px 0 var(--en-border);

    /* ===== Typography ===== */
    /* Monospace everywhere for the hacker/retro feel */
    --en-font-sans: "Courier New", Courier, ui-monospace, "Cascadia Code", Consolas, monospace;
    --en-font-mono: "Courier New", Courier, ui-monospace, "Cascadia Code", Consolas, monospace;

    /* Tighten letter spacing for a more intense, code-like look */
    --en-tracking-tight: -0.05em;
    --en-tracking-normal: -0.025em;
    --en-tracking-wide: 0;

    /* ===== Transition ===== */
    /* Quicker transitions for snappier, robotic feel */
    --en-duration-fast: 100ms;
    --en-duration-base: 150ms;
    --en-duration-slow: 250ms;

    /* ===== Focus ring ===== */
    /* Bright cyan focus ring */
    --en-ring-color: var(--en-secondary);
    --en-ring-width: 2px;
    --en-ring-offset: 4px;
    --en-ring-offset-color: var(--en-bg);
  }
}
`;export{e as default};
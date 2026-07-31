var e=`/*!
 * EN-CSS Theme: Ocean/Marine
 * Fresh, trustworthy theme inspired by the ocean
 * Supports automatic light/dark mode via light-dark()
 */

@layer en-tokens {
  [data-en-theme="ocean"],
  .en-theme-ocean {
    /* Brand Colors */
    --en-primary: light-dark(#4A90E2, #5DADE2);
    --en-primary-contrast: light-dark(#FFFFFF, #0A1929);
    --en-secondary: light-dark(#00BCD4, #26C6DA);
    --en-success: light-dark(#00897B, #26A69A);
    --en-warning: light-dark(#FFB300, #FFC107);
    --en-danger: light-dark(#D32F2F, #EF5350);
    --en-info: light-dark(#0288D1, #29B6F6);

    /* Surface & Background Colors */
    --en-bg: light-dark(#F0F9FF, #0A1929);
    --en-bg-subtle: light-dark(#E0F2FE, #132F4C);
    --en-surface: light-dark(#FFFFFF, #1E3A5F);
    --en-text: light-dark(#0C4A6E, #E0F2FE);
    --en-text-muted: light-dark(#0369A1, #7DD3FC);
    --en-border: light-dark(#BAE6FD, #1E40AF);

    /* Typography */
    --en-font-sans: "Quicksand", system-ui, -apple-system, sans-serif;

    /* Texture: Sea bubbles (1:1 square tiles) */
    --en-bg-texture: 
      radial-gradient(circle at 30% 30%, color-mix(in oklab, var(--en-secondary) 15%, transparent) 2px, transparent 3px),
      radial-gradient(circle at 70% 80%, color-mix(in oklab, var(--en-primary) 10%, transparent) 3px, transparent 4px);
  }
}

@layer en-base {
  [data-en-theme="ocean"] body, .en-theme-ocean body {
    background-size: 60px 60px;
  }

  [data-en-theme="ocean"] body::before, .en-theme-ocean body::before {
    content: "🜄"; /* Alchemical Water */
    position: fixed;
    bottom: -5vh;
    right: 5vw;
    font-size: 40vw;
    color: color-mix(in oklab, var(--en-info) 4%, transparent);
    z-index: -1;
    pointer-events: none;
    line-height: 1;
    font-family: serif;
    rotate: -10deg;
  }
}`;export{e as default};
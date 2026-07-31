var e=`/*!
 * EN-CSS Theme: Earthy/Nature
 * Organic, natural theme inspired by earth and nature.
 * Supports automatic light/dark mode via light-dark()
 */

@layer en-tokens {
  [data-en-theme="earthy"],
  .en-theme-earthy {
    /* Brand Colors */
    --en-primary: light-dark(#8B7355, #CD853F);
    --en-primary-contrast: light-dark(#FFFFFF, #2C2416);
    --en-secondary: light-dark(#6B8E23, #9ACD32);
    --en-success: light-dark(#228B22, #32CD32);
    --en-warning: light-dark(#D2691E, #FF8C00);
    --en-danger: light-dark(#A0522D, #CD5C5C);
    --en-info: light-dark(#5F9EA0, #66CDAA);

    /* Surface & Background Colors */
    --en-bg: light-dark(#F5F5DC, #1A1612);
    --en-bg-subtle: light-dark(#EEE8AA, #2C2416);
    --en-surface: light-dark(#FFFAF0, #3A3226);
    --en-text: light-dark(#2C2416, #E8DCC8);
    --en-text-muted: light-dark(#6B5D4F, #C4B5A0);
    --en-border: light-dark(#D2B48C, #5D4E3A);
    
    /* Typography Override */
    --en-font-sans: "Quicksand", system-ui, -apple-system, sans-serif;

    /* Texture: Topographic/Woodgrain lines */
    --en-bg-texture: repeating-linear-gradient(
      45deg,
      color-mix(in oklab, var(--en-text) 2%, transparent),
      color-mix(in oklab, var(--en-text) 2%, transparent) 1px,
      transparent 1px,
      transparent 40px
    );
  }
}

@layer en-base {
  [data-en-theme="earthy"] body, .en-theme-earthy body {
    background-size: 100vw 100vh;
    background-attachment: fixed;
  }

  [data-en-theme="earthy"] body::before, .en-theme-earthy body::before {
    content: "🜃"; /* Alchemical symbol for Earth */
    position: fixed;
    top: -10vh;
    left: -5vw;
    font-size: 50vw;
    color: color-mix(in oklab, var(--en-success) 3%, transparent);
    z-index: -1;
    pointer-events: none;
    line-height: 1;
    font-family: serif;
    rotate: -15deg;
  }
}`;export{e as default};
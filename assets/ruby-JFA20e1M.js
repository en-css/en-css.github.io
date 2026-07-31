var e=`/*!
 * EN-CSS Theme: Ruby/Jewel
 * Elegant, luxurious theme inspired by ruby gemstone
 * Supports automatic light/dark mode via light-dark()
 */

@layer en-tokens {
  [data-en-theme="ruby"],
  .en-theme-ruby {
    /* Brand Colors */
    --en-primary: light-dark(#DC2626, #F87171);
    --en-primary-contrast: light-dark(#FFFFFF, #1A0A0A);
    --en-secondary: light-dark(#9F1239, #FB7185);
    --en-success: light-dark(#059669, #34D399);
    --en-warning: light-dark(#D97706, #FBBF24);
    --en-danger: light-dark(#B91C1C, #EF4444);
    --en-info: light-dark(#7C3AED, #A78BFA);

    /* Surface & Background Colors */
    --en-bg: light-dark(#FFF1F2, #1A0A0A);
    --en-bg-subtle: light-dark(#FFE4E6, #2A1414);
    --en-surface: light-dark(#FFFFFF, #3A1E1E);
    --en-text: light-dark(#450A0A, #FECACA);
    --en-text-muted: light-dark(#7F1D1D, #FCA5A5);
    --en-border: light-dark(#FECACA, #7F1D1D);

    /* Typography */
    --en-font-sans: "Quicksand", system-ui, -apple-system, sans-serif;

    /* Texture: Faceted jewel/diamond reflections */
    --en-bg-texture: 
      linear-gradient(135deg, color-mix(in oklab, var(--en-primary) 3%, transparent) 25%, transparent 25%),
      linear-gradient(225deg, color-mix(in oklab, var(--en-secondary) 3%, transparent) 25%, transparent 25%),
      linear-gradient(45deg, color-mix(in oklab, var(--en-primary) 3%, transparent) 25%, transparent 25%),
      linear-gradient(315deg, color-mix(in oklab, var(--en-secondary) 3%, transparent) 25%, transparent 25%);
  }
}

@layer en-base {
  [data-en-theme="ruby"] body, .en-theme-ruby body {
    background-size: 80px 80px; /* Square geometry */
    background-position: 40px 0, 40px 0, 0 0, 0 0;
  }

  [data-en-theme="ruby"] body::before,
  .en-theme-ruby body::before {
    content: "\\1F525\\FE0E";
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;

    font-family: "Segoe UI Symbol", "Noto Sans Symbols 2", serif;
    font-size: 60vw;
    line-height: 1;

    color: color-mix(
      in oklab,
      var(--en-primary) 10%,
      transparent
    );

    pointer-events: none;
  }
}
`;export{e as default};
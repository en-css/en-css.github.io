var e=`/*!
 * EN-CSS Theme: Midnight/Cosmic
 * Deep, mysterious theme inspired by night sky with stellar textures.
 * Supports automatic light/dark mode via light-dark()
 */

@layer en-tokens {
  [data-en-theme="midnight"],
  .en-theme-midnight {
    /* Brand Colors */
    --en-primary: light-dark(#1E3A8A, #60A5FA);
    --en-primary-contrast: light-dark(#FFFFFF, #0A0E1A);
    --en-secondary: light-dark(#6366F1, #818CF8);
    --en-success: light-dark(#059669, #34D399);
    --en-warning: light-dark(#D97706, #FBBF24);
    --en-danger: light-dark(#DC2626, #F87171);
    --en-info: light-dark(#0284C7, #38BDF8);

    /* Surface & Background Colors */
    --en-bg: light-dark(#F0F4FF, #0A0E1A);
    --en-bg-subtle: light-dark(#E0E7FF, #1A1F3A);
    --en-surface: light-dark(#FFFFFF, #1E2A4A);
    --en-text: light-dark(#1E293B, #E0E7FF);
    --en-text-muted: light-dark(#475569, #94A3B8);
    --en-border: light-dark(#C7D2FE, #3730A3);

    /* Typography Override */
    --en-font-sans: "Fredoka", "Quicksand", system-ui, -apple-system, sans-serif;

    /* Texture: Cosmic dust / Starfield */
    --en-bg-texture: 
      radial-gradient(1px 1px at 20px 30px, color-mix(in oklab, var(--en-info) 30%, transparent), transparent),
      radial-gradient(1.5px 1.5px at 40px 70px, color-mix(in oklab, var(--en-primary) 20%, transparent), transparent),
      radial-gradient(1px 1px at 90px 40px, color-mix(in oklab, var(--en-text) 15%, transparent), transparent);
  }
}

@layer en-base {
  [data-en-theme="midnight"] body, .en-theme-midnight body {
    background-size: 120px 120px;
  }

  [data-en-theme="midnight"] body::before, .en-theme-midnight body::before {
    content: "🜄"; /* Alchemical symbol for Water / Fluidity */
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    font-size: 60vw;
    color: color-mix(in oklab, var(--en-primary) 3%, transparent);
    z-index: -1;
    pointer-events: none;
    line-height: 1;
    font-family: serif;
  }
}`;export{e as default};
var e=`/*!
 * EN-CSS Theme: Desert/Sand
 * Warm desert theme with sandy and terracotta tones, organic typography, and heat ornaments.
 * Supports automatic light/dark mode via light-dark()
 */

@layer en-tokens {
  [data-en-theme="desert"],
  .en-theme-desert {
    /* Brand Colors */
    --en-primary: light-dark(#C19A6B, #E97451);
    --en-primary-contrast: light-dark(#FFFFFF, #2A1810);
    --en-secondary: light-dark(#D2691E, #F4A460);
    --en-success: light-dark(#9ACD32, #ADFF2F);
    --en-warning: light-dark(#FF8C00, #FFD700);
    --en-danger: light-dark(#CD5C5C, #FF6347);
    --en-info: light-dark(#87CEEB, #00CED1);

    /* Surface & Background Colors */
    --en-bg: light-dark(#FFF8DC, #1A1310);
    --en-bg-subtle: light-dark(#FFE4C4, #2A1F18);
    --en-surface: light-dark(#FFFAF0, #3A2820);
    --en-text: light-dark(#3E2723, #F5DEB3);
    --en-text-muted: light-dark(#8B7355, #D2B48C);
    --en-border: light-dark(#DEB887, #5D4037);

    /* Typography Override */
    --en-font-sans: "Quicksand", system-ui, -apple-system, sans-serif;
    
    /* Texture: Sand grain pattern dynamically adapting to light/dark via color-mix */
    --en-bg-texture: radial-gradient(circle at 50% 50%, color-mix(in oklab, var(--en-warning) 10%, transparent) 1px, transparent 1.5px);
  }
}

@layer en-base {
  /* Texture Sizing & Ornament Watermark */
  [data-en-theme="desert"] body, .en-theme-desert body {
    background-size: 20px 20px;
  }
  
  [data-en-theme="desert"] body::before, .en-theme-desert body::before {
    content: "🜂"; /* Alchemical symbol for Fire */
    position: fixed;
    bottom: -5vh;
    right: -2vw;
    font-size: 45vw;
    color: color-mix(in oklab, var(--en-primary) 4%, transparent);
    z-index: -1;
    pointer-events: none;
    line-height: 1;
    font-family: serif;
  }
}`;export{e as default};
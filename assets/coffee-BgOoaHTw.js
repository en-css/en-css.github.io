var e=`/*!
 * EN-CSS Theme: Coffee/Mocha
 * Warm, cozy paper & lounge aesthetic
 */

@layer en-tokens {
  [data-en-theme="coffe"],
  .en-theme-coffe,
  :root {
    --en-primary: light-dark(#8b4513, #d2691e);
    --en-primary-contrast: light-dark(#ffffff, #fff8dc);
    --en-secondary: light-dark(#a0522d, #cd853f);
    --en-success: light-dark(#556b2f, #8fbc8f);
    --en-warning: light-dark(#cd853f, #e9967a);
    --en-danger: light-dark(#8b0000, #ff6347);
    --en-info: light-dark(#8b7355, #d2b48c);

    --en-bg: light-dark(#fcf8f2, #18110e);
    --en-bg-subtle: light-dark(#f4ece1, #241a15);
    --en-surface: light-dark(#fffdfa, #2d201a);
    --en-text: light-dark(#2c1d11, #f5deb3);
    --en-text-muted: light-dark(#7c6354, #c5a880);
    --en-border: light-dark(#e2d2c1, #4a3528);

    /* Warm Paper Grain / Linen Crosshatch Texture */
    --en-bg-texture: 
      repeating-linear-gradient(0deg, transparent, transparent 3px, light-dark(rgba(139, 69, 19, 0.02), rgba(245, 222, 179, 0.02)) 3px, light-dark(rgba(139, 69, 19, 0.02), rgba(245, 222, 179, 0.02)) 6px),
      repeating-linear-gradient(90deg, transparent, transparent 3px, light-dark(rgba(139, 69, 19, 0.02), rgba(245, 222, 179, 0.02)) 3px, light-dark(rgba(139, 69, 19, 0.02), rgba(245, 222, 179, 0.02)) 6px);

    --en-border-radius: var(--en-radius-md);
    --en-shadow: 0 4px 15px -2px light-dark(rgba(60, 30, 10, 0.08), rgba(0, 0, 0, 0.5));
  }
}

@layer en-components {
  /* Cozy vintage card frame ornament */
  [data-en-theme="coffe"] .en-card,
  .en-theme-coffe .en-card {
    border: 1px solid var(--en-border);
    position: relative;
    box-shadow: var(--en-shadow);
  }

  /* Inner subtle warm border glow */
  [data-en-theme="coffe"] .en-card::after,
  .en-theme-coffe .en-card::after {
    content: "";
    position: absolute;
    inset: 3px;
    border: 1px dashed light-dark(rgba(139, 69, 19, 0.15), rgba(210, 105, 30, 0.2));
    pointer-events: none;
    border-radius: calc(var(--en-border-radius) - 2px);
  }
}`;export{e as default};
var e=`/*!
 * Theme: Neo-Brutalism
 * Overrides for en-css tokens with hard shadows and halftone textures
 */

@layer en-tokens {
  [data-en-theme="brutal"],
  .en-theme-brutal {
    --en-primary: light-dark(#b11409, #facc15);
    --en-primary-contrast: #000000;
    --en-secondary: light-dark(#3a86ff, #4cc9f0);
    --en-success: light-dark(#06d6a0, #00f5d4);
    --en-warning: light-dark(#ff9f1c, #ffb703);
    --en-danger: light-dark(#ff006e, #ef233c);
    --en-info: light-dark(#8338ec, #b5179e);

    --en-bg: light-dark(#f4f4f0, #121212);
    --en-bg-subtle: light-dark(#e2e2d8, #1a1a1a);
    --en-surface: light-dark(#ffffff, #1e1e1e);
    --en-text: light-dark(#000000, #ffffff);
    --en-text-muted: light-dark(#333333, #cccccc);
    --en-border: light-dark(#000000, #ffffff);

    --en-border-width: 3px;
    --en-border-width-thick: 5px;
    --en-border-style: solid;

    --en-radius-sm: 0px;
    --en-radius-md: 0px;
    --en-radius-lg: 0px;
    --en-radius-xl: 0px;

    /* Signature Hard Box Shadows */
    --en-shadow-sm: 3px 3px 0px var(--en-border);
    --en-shadow: 5px 5px 0px var(--en-border);
    --en-shadow-lg: 8px 8px 0px var(--en-border);

    /* Halftone Dot Grid Pattern */
    --en-bg-texture: radial-gradient(var(--en-border) 15%, transparent 16%) 0 0 / 16px 16px;

    --en-font-sans: "Space Grotesk", "Impact", "Inter", sans-serif;
  }
}

@layer en-components {
  /* Interactive offset animation on hover */
  [data-en-theme="brutal"] .en-btn:hover,
  .en-theme-brutal .en-btn:hover,
  [data-en-theme="brutal"] .en-card:hover,
  .en-theme-brutal .en-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 7px 7px 0px var(--en-border);
  }

  [data-en-theme="brutal"] .en-btn:active,
  .en-theme-brutal .en-btn:active {
    transform: translate(2px, 2px);
    box-shadow: 1px 1px 0px var(--en-border);
  }

  /* Hazard Stripe Texture Accent for Badges / Alert headers */
  [data-en-theme="brutal"] .en-badge,
  .en-theme-brutal .en-badge {
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 0.05em;
  }
}`;export{e as default};
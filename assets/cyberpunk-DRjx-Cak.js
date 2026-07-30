var e=`/*!
 * Theme: Cyberpunk (Neon / Emboss)
 * Overrides for en-css tokens (01-tokens.css)
 */

@layer en-tokens {
  [data-en-theme="cyberpunk"],
  .en-theme-cyberpunk {
    /* ===== Brand Colors ===== */
    --en-primary: light-dark(#d100d1, #00f0ff);
    --en-primary-contrast: light-dark(#ffffff, #001f24);
    --en-secondary: light-dark(#8a2be2, #ff00ff);
    --en-success: light-dark(#008f11, #39ff14);
    --en-warning: light-dark(#ff8c00, #ffb300);
    --en-danger: light-dark(#d90000, #ff003c);
    --en-info: light-dark(#005bb5, #00e5ff);

    /* ===== Neutral / Surface Colors ===== */
    --en-bg: light-dark(#d4d4d8, #050510);
    --en-bg-subtle: light-dark(#e4e4e7, #0b0b1a);
    --en-surface: light-dark(#e4e4e7, #121226);
    --en-text: light-dark(#3f3f46, #e0f8ff);
    --en-text-muted: light-dark(#71717a, #8ab4f8);
    --en-border: light-dark(#a1a1aa, #1f1f3a);

    /* ===== Focus ring ===== */
    --en-ring-color: var(--en-primary);
  }
}

@layer en-base {
  [data-en-theme="cyberpunk"],
  .en-theme-cyberpunk {
    /* 
      Light mode: Emboss (highlight bottom-right, shadow top-left)
      Dark mode: Neon glow
    */
    text-shadow:
      /* Emboss white highlight (light only) */
      1px 1px 0px light-dark(rgba(255, 255, 255, 0.7), transparent),
      /* Emboss dark shadow (light only) */
      -1px -1px 1px light-dark(rgba(0, 0, 0, 0.15), transparent),
      
      /* Neon core glow (dark only) */
      0 0 2px light-dark(transparent, rgba(255, 255, 255, 0.8)),
      /* Neon mid glow (dark only) */
      0 0 6px light-dark(transparent, var(--en-primary)),
      /* Neon outer glow (dark only) */
      0 0 12px light-dark(transparent, var(--en-primary));
  }
}
`;export{e as default};
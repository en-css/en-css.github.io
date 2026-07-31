var e=`/*!
 * Theme: Mono
 * Overrides for en-css tokens (01-tokens.css)
 *
 * Monochromatic theme based solely on black and white.
 * All color variants use grayscale transitions.
 *
 * Light mode : White background / black text.
 * Dark mode  : Black background / white text.
 */

@layer en-tokens {
  [data-en-theme="mono"],
  .en-theme-mono {
    /* ===== Brand Colors ===== */
    --en-primary: light-dark(#000000, #ffffff);
    --en-primary-contrast: light-dark(#ffffff, #000000);

    /* Secondary */
    --en-secondary: light-dark(#333333, #cccccc);
    --en-secondary-contrast: light-dark(#ffffff, #000000);

    /* Success */
    --en-success: light-dark(#000000, #ffffff);
    --en-success-contrast: light-dark(#ffffff, #000000);

    /* Warning */
    --en-warning: light-dark(#666666, #999999);
    --en-warning-contrast: light-dark(#ffffff, #000000);

    /* Danger */
    --en-danger: light-dark(#000000, #ffffff);
    --en-danger-contrast: light-dark(#ffffff, #000000);

    /* Info */
    --en-info: light-dark(#333333, #cccccc);
    --en-info-contrast: light-dark(#ffffff, #000000);

    /* ===== Neutral / Surface Colors ===== */
    /* Light Mode: Pure white. Dark Mode: Pure black. */
    --en-bg: light-dark(#ffffff, #000000);
    --en-bg-subtle: light-dark(#f0f0f0, #1a1a1a);
    --en-surface: light-dark(#fafafa, #0d0d0d);

    /* Text: Maximum contrast */
    --en-text: light-dark(#000000, #ffffff);
    --en-text-muted: light-dark(#666666, #999999);

    /* Border: Thick black in light, thick white in dark */
    --en-border: light-dark(#000000, #ffffff);

    /* ===== Border width & style ===== */
    --en-border-width: 1px;
    --en-border-width-thick: 2px;
    --en-border-style: solid;

    /* ===== Radius ===== */
    --en-radius-sm: 0;
    --en-radius-md: 0;
    --en-radius-lg: 0;
    --en-radius-xl: 0;
    --en-radius-full: 9999px;

    /* ===== Shadow ===== */
    --en-shadow-sm: 2px 2px 0 var(--en-border);
    --en-shadow-md: 4px 4px 0 var(--en-border);
    --en-shadow-lg: 6px 6px 0 var(--en-border);

    /* ===== Typography ===== */
    --en-font-sans: system-ui, -apple-system, sans-serif;

    --en-leading-normal: 1.5;
    --en-leading-relaxed: 1.625;

    --en-font-normal: 400;
    --en-font-medium: 500;
    --en-font-semibold: 600;
    --en-font-bold: 700;

    --en-tracking-normal: 0em;
    --en-tracking-wide: 0.025em;

  }
}

@layer en-components {
  [data-en-theme="mono"] .en-btn--danger,
  .en-theme-mono .en-btn--danger,
  [data-en-theme="mono"] .en-badge--danger,
  .en-theme-mono .en-badge--danger {
    color: var(--en-danger-contrast);
  }

  [data-en-theme="mono"] .en-btn--danger:hover,
  .en-theme-mono .en-btn--danger:hover {
    background: color-mix(in oklab, var(--en-danger) 85%, black);
    color: var(--en-danger-contrast);
  }

  [data-en-theme="mono"] .en-badge--success,
  .en-theme-mono .en-badge--success {
    color: var(--en-success-contrast);
  }
}

`;export{e as default};
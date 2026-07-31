var e=`/*!
 * EN-CSS Theme: Compact
 * Space-efficient theme with reduced padding for data-dense interfaces
 * Perfect for: Dashboards, admin panels, data-heavy applications
 * Vibe: Efficient, professional, information-dense
 * Supports automatic light/dark mode via light-dark()
 */

@layer en-tokens {
  :root {
    /* ===== Brand Colors ===== */
    --en-primary: light-dark(#2563eb, #3b82f6);
    --en-primary-contrast: light-dark(#ffffff, #0b1220);
    --en-secondary: light-dark(#64748b, #94a3b8);
    --en-success: light-dark(#16a34a, #4ade80);
    --en-warning: light-dark(#d97706, #fbbf24);
    --en-danger: light-dark(#dc2626, #f87171);
    --en-info: light-dark(#0891b2, #22d3ee);

    /* ===== Surface & Background Colors ===== */
    --en-bg: light-dark(#fafafa, #0a0e14);
    --en-bg-subtle: light-dark(#f4f4f5, #111519);
    --en-surface: light-dark(#ffffff, #171b22);
    --en-text: light-dark(#18181b, #e4e4e7);
    --en-text-muted: light-dark(#71717a, #a1a1aa);
    --en-border: light-dark(#e4e4e7, #27272a);

    /* ===== Compact Form Padding ===== */
    --en-input-padding-y: 0.4em;
    --en-input-padding-x: 0.6em;
    --en-input-padding-sm-y: 0.25em;
    --en-input-padding-sm-x: 0.5em;
    --en-input-padding-lg-y: 0.55em;
    --en-input-padding-lg-x: 0.8em;

    /* ===== Compact spacing adjustments ===== */
    --en-space-1: 0.2rem;   /* 3.2px instead of 4px */
    --en-space-2: 0.4rem;   /* 6.4px instead of 8px */
    --en-space-3: 0.6rem;   /* 9.6px instead of 12px */
    --en-space-4: 0.8rem;   /* 12.8px instead of 16px */

    /* ===== Reduced border radius for a more efficient look ===== */
    --en-radius-sm: 0.125rem; /* 2px */
    --en-radius-md: 0.25rem;  /* 4px */
    --en-radius-lg: 0.375rem; /* 6px */

    /* ===== Subtle shadows ===== */
    --en-shadow-sm: 0 1px 2px rgb(0 0 0 / 0.04);
    --en-shadow-md: 0 2px 4px rgb(0 0 0 / 0.06);
    --en-shadow-lg: 0 4px 8px rgb(0 0 0 / 0.08);
  }
}
`;export{e as default};
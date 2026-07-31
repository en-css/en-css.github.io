var e=`/*!
 * EN-CSS Theme: Touch
 * Spacious theme optimized for touch interfaces with larger padding
 * Perfect for: Mobile apps, kiosks, tablet interfaces, touch-first applications
 * Vibe: Spacious, accessible, touch-friendly
 * Supports automatic light/dark mode via light-dark()
 */

@layer en-tokens {
  :root {
    /* ===== Brand Colors ===== */
    --en-primary: light-dark(#3b82f6, #60a5fa);
    --en-primary-contrast: light-dark(#ffffff, #0b1220);
    --en-secondary: light-dark(#8b5cf6, #a78bfa);
    --en-success: light-dark(#10b981, #34d399);
    --en-warning: light-dark(#f59e0b, #fbbf24);
    --en-danger: light-dark(#ef4444, #f87171);
    --en-info: light-dark(#06b6d4, #22d3ee);

    /* ===== Surface & Background Colors ===== */
    --en-bg: light-dark(#ffffff, #0f172a);
    --en-bg-subtle: light-dark(#f8fafc, #1e293b);
    --en-surface: light-dark(#ffffff, #1e293b);
    --en-text: light-dark(#0f172a, #f1f5f9);
    --en-text-muted: light-dark(#64748b, #94a3b8);
    --en-border: light-dark(#e2e8f0, #334155);

    /* ===== Spacious Form Padding for Touch ===== */
    --en-input-padding-y: 0.75em;
    --en-input-padding-x: 1em;
    --en-input-padding-sm-y: 0.6em;
    --en-input-padding-sm-x: 0.8em;
    --en-input-padding-lg-y: 0.95em;
    --en-input-padding-lg-x: 1.3em;

    /* ===== Floating label adjustments for larger padding ===== */
    --en-input-floating-padding-top: 1.5em;
    --en-input-floating-padding-bottom: 0.65em;

    /* ===== Generous spacing for touch targets ===== */
    --en-space-1: 0.375rem;  /* 6px */
    --en-space-2: 0.625rem;  /* 10px */
    --en-space-3: 1rem;      /* 16px */
    --en-space-4: 1.25rem;   /* 20px */
    --en-space-5: 1.875rem;  /* 30px */
    --en-space-6: 2.5rem;    /* 40px */

    /* ===== Larger border radius for friendly feel ===== */
    --en-radius-sm: 0.5rem;   /* 8px */
    --en-radius-md: 0.75rem;  /* 12px */
    --en-radius-lg: 1rem;     /* 16px */
    --en-radius-xl: 1.5rem;   /* 24px */

    /* ===== Prominent shadows for depth perception ===== */
    --en-shadow-sm: 0 2px 4px rgb(0 0 0 / 0.08);
    --en-shadow-md: 0 4px 12px rgb(0 0 0 / 0.12);
    --en-shadow-lg: 0 10px 30px rgb(0 0 0 / 0.16);

    /* ===== Larger focus ring for visibility ===== */
    --en-ring-width: 3px;
    --en-ring-offset: 3px;
  }
}
`;export{e as default};
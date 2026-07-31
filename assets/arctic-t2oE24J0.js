var e=`/*!
 * EN-CSS Theme: Arctic/Ice
 * Clean, modern theme inspired by arctic ice & frost
 */

@layer en-tokens {
  [data-en-theme="arctic"],
  .en-theme-arctic,
  :root {
    /* Brand Colors */
    --en-primary: light-dark(#0284c7, #38bdf8);
    --en-primary-contrast: light-dark(#ffffff, #0f172a);
    --en-secondary: light-dark(#0891b2, #22d3ee);
    --en-success: light-dark(#059669, #34d399);
    --en-warning: light-dark(#d97706, #fbbf24);
    --en-danger: light-dark(#e11d48, #fb7185);
    --en-info: light-dark(#2563eb, #60a5fa);

    /* Surface & Background Colors */
    --en-bg: light-dark(#f0f9ff, #080e1a);
    --en-bg-subtle: light-dark(#e0f2fe, #0f172a);
    --en-surface: light-dark(rgba(255, 255, 255, 0.85), rgba(15, 23, 42, 0.75));
    --en-text: light-dark(#0c4a6e, #f0f9ff);
    --en-text-muted: light-dark(#0369a1, #7dd3fc);
    --en-border: light-dark(rgba(186, 230, 253, 0.8), rgba(56, 189, 248, 0.25));

    /* Custom Ornaments & Textures */
    --en-bg-texture: radial-gradient(circle at 50% 0%, light-dark(rgba(56, 189, 248, 0.15), rgba(14, 165, 233, 0.15)), transparent 70%),
                     repeating-linear-gradient(45deg, light-dark(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.02)) 0px, light-dark(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.02)) 2px, transparent 2px, transparent 8px);
    --en-border-radius: var(--en-radius-lg);
    --en-backdrop-filter: blur(12px) saturate(160%);
    --en-shadow: 0 8px 32px 0 light-dark(rgba(0, 186, 255, 0.1), rgba(0, 0, 0, 0.37));
  }
}

@layer en-components {
  /* Ice reflection effect on cards & modals */
  [data-en-theme="arctic"] .en-card,
  .en-theme-arctic .en-card,
  [data-en-theme="arctic"] .en-modal,
  .en-theme-arctic .en-modal {
    backdrop-filter: var(--en-backdrop-filter);
    border: 1px solid var(--en-border);
    box-shadow: var(--en-shadow), inset 0 1px 0 0 light-dark(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.15));
  }

  /* Frosty top border highlight for headers/cards */
  [data-en-theme="arctic"] .en-card::before,
  .en-theme-arctic .en-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 10%;
    right: 10%;
    height: 1px;
    background: linear-gradient(90deg, transparent, light-dark(#38bdf8, #7dd3fc), transparent);
  }
}`;export{e as default};
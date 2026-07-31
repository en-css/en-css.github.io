var e=`/*!
 * EN-CSS Theme: Corporate/Professional
 * Crisp, clean enterprise grid aesthetic
 */

@layer en-tokens {
  [data-en-theme="corporate"],
  .en-theme-corporate,
  :root {
    --en-primary: light-dark(#1e40af, #3b82f6);
    --en-primary-contrast: #ffffff;
    --en-secondary: light-dark(#475569, #94a3b8);
    --en-success: light-dark(#0d9488, #14b8a6);
    --en-warning: light-dark(#b45309, #f59e0b);
    --en-danger: light-dark(#be123c, #f43f5e);
    --en-info: light-dark(#0369a1, #0ea5e9);

    --en-bg: light-dark(#f8fafc, #0b1120);
    --en-bg-subtle: light-dark(#f1f5f9, #152035);
    --en-surface: light-dark(#ffffff, #1e293b);
    --en-text: light-dark(#0f172a, #f1f5f9);
    --en-text-muted: light-dark(#64748b, #94a3b8);
    --en-border: light-dark(#cbd5e1, #334155);

    /* Precision Grid Pattern Texture */
    --en-bg-texture: 
      linear-gradient(to right, light-dark(rgba(203, 213, 225, 0.4), rgba(51, 65, 85, 0.3)) 1px, transparent 1px),
      linear-gradient(to bottom, light-dark(rgba(203, 213, 225, 0.4), rgba(51, 65, 85, 0.3)) 1px, transparent 1px);
    background-size: 24px 24px;

    --en-border-radius: var(--en-radius-sm);
    --en-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);

    /* Optional: Customize form padding for a more compact or spacious feel
    --en-input-padding-y: 0.45em;
    --en-input-padding-x: 0.65em;
    */
  }
}

@layer en-components {
  /* Corporate Top Accent Bar on Cards */
  [data-en-theme="corporate"] .en-card,
  .en-theme-corporate .en-card {
    border-top: 3px solid var(--en-primary);
    box-shadow: var(--en-shadow);
  }

  /* Table zebra-striping refinement */
  [data-en-theme="corporate"] table,
  .en-theme-corporate table {
    border-collapse: separate;
    border-spacing: 0;
  }
}`;export{e as default};
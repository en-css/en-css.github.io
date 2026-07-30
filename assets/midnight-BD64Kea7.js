var e=`/*!
 * EN-CSS Theme: Midnight/Cosmic
 * Deep, mysterious theme inspired by night sky
 * Supports automatic light/dark mode via light-dark()
 */

@layer en-tokens {
  :root {
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
  }
}
`;export{e as default};
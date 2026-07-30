var e=`/*!
 * EN-CSS Theme: Desert/Sand
 * Warm desert theme with sandy and terracotta tones
 * Supports automatic light/dark mode via light-dark()
 */

@layer en-tokens {
  :root {
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
  }
}
`;export{e as default};
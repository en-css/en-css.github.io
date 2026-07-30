var e=`/*!
 * EN-CSS Theme: Sunset/Dusk
 * Warm, vibrant theme inspired by sunset colors
 * Supports automatic light/dark mode via light-dark()
 */

@layer en-tokens {
  :root {
    /* Brand Colors */
    --en-primary: light-dark(#F87171, #FB923C);
    --en-primary-contrast: light-dark(#FFFFFF, #1A0A14);
    --en-secondary: light-dark(#FB923C, #FBBF24);
    --en-success: light-dark(#34D399, #6EE7B7);
    --en-warning: light-dark(#FBBF24, #FCD34D);
    --en-danger: light-dark(#EF4444, #F87171);
    --en-info: light-dark(#A78BFA, #C4B5FD);

    /* Surface & Background Colors */
    --en-bg: light-dark(#FFF7ED, #1A0A14);
    --en-bg-subtle: light-dark(#FFEDD5, #2D1B3D);
    --en-surface: light-dark(#FFFFFF, #3D2447);
    --en-text: light-dark(#7C2D12, #FED7AA);
    --en-text-muted: light-dark(#C2410C, #FDBA74);
    --en-border: light-dark(#FED7AA, #6D28D9);
  }
}
`;export{e as default};
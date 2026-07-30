var e=`/*!
 * Theme: Nature / Ghibli
 * Overrides for en-css tokens (01-tokens.css)
 */

@layer en-tokens {
  [data-en-theme="nature"],
  .en-theme-nature {
    /* ===== Brand Colors ===== */
    /* Light: Moss Green, Dark: Soft Mint Green */
    --en-primary: light-dark(#4F7942, #81c784);
    --en-primary-contrast: light-dark(#ffffff, #0b1a13);
    /* Light: Soft Sky Blue, Dark: Night Sky Blue */
    --en-secondary: light-dark(#6fa8dc, #81d4fa);
    
    /* Success: Forest Green / Bright Leaf */
    --en-success: light-dark(#2e7d32, #69f0ae);
    /* Warning: Warm Golden Amber */
    --en-warning: light-dark(#ffb300, #ffd54f);
    /* Danger: Soft Persimmon / Coral */
    --en-danger: light-dark(#d32f2f, #e57373);
    /* Info: Soft Teal */
    --en-info: light-dark(#00838f, #4dd0e1);

    /* ===== Neutral / Surface Colors ===== */
    /* Light Mode: Warm Cream. Dark Mode: Deep Midnight Forest */
    --en-bg: light-dark(#fdfbf7, #0b1a13);
    --en-bg-subtle: light-dark(#eeeadd, #1c2d22);
    --en-surface: light-dark(#ffffff, #203328);
    
    /* Text: Deep Earthy Brown in light mode, Soft Creamy White in dark mode */
    --en-text: light-dark(#3e2723, #f1f8e9);
    --en-text-muted: light-dark(#8d6e63, #a5d6a7);
    
    /* Soft earthy borders */
    --en-border: light-dark(#d7ccc8, #2e4736);

    /* ===== Border width & style ===== */
    /* Organic and soft */
    --en-border-width: 1px;
    --en-border-width-thick: 2px;
    --en-border-style: solid;

    /* ===== Radius ===== */
    /* Very rounded, friendly, organic feel */
    --en-radius-sm: 0.5rem;
    --en-radius-md: 0.75rem;
    --en-radius-lg: 1rem;
    --en-radius-xl: 1.5rem;
    --en-radius-full: 9999px;

    /* ===== Shadow ===== */
    /* Soft, diffused, warm shadows like sunlight */
    --en-shadow-sm: 0 2px 4px light-dark(rgba(62, 39, 35, 0.05), rgba(0, 0, 0, 0.2));
    --en-shadow-md: 0 4px 12px light-dark(rgba(62, 39, 35, 0.08), rgba(0, 0, 0, 0.3));
    --en-shadow-lg: 0 12px 32px light-dark(rgba(62, 39, 35, 0.12), rgba(0, 0, 0, 0.4));

    /* ===== Typography ===== */
    /* Using friendly, rounded fonts if available, fallback to sans-serif */
    --en-font-sans: "Nunito", "Quicksand", system-ui, -apple-system, sans-serif;
    
    /* Generous, relaxed line-height for a calming read */
    --en-leading-normal: 1.7;
    --en-leading-relaxed: 1.85;

    /* ===== Transition ===== */
    /* Smooth, gentle transitions */
    --en-duration-fast: 200ms;
    --en-duration-base: 300ms;
    --en-duration-slow: 500ms;
    
    /* Very smooth ease-in-out */
    --en-ease-out: cubic-bezier(0.25, 1, 0.5, 1);
    --en-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);

    /* ===== Focus ring ===== */
    /* Soft leaf green focus ring */
    --en-ring-color: var(--en-primary);
    --en-ring-width: 3px;
    --en-ring-offset: 2px;
    --en-ring-offset-color: var(--en-bg);
  }
}
`;export{e as default};
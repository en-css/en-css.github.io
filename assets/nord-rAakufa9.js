var e=`/*!
 * Theme: Nord (Nordic / Arctic)
 * Overrides for en-css tokens (01-tokens.css)
 */

@layer en-tokens {
  [data-en-theme="nord"],
  .en-theme-nord {
    /* ===== Brand Colors (Nord Aurora & Frost) ===== */
    /* Primary: Frost Blue */
    --en-primary: light-dark(#5e81ac, #88c0d0);
    --en-primary-contrast: light-dark(#ffffff, #2e3440);
    
    /* Secondary: Muted Blue */
    --en-secondary: light-dark(#81a1c1, #8fbcbb);
    
    /* Success: Aurora Green */
    --en-success: light-dark(#8f9f75, #a3be8c);
    
    /* Warning: Aurora Yellow / Orange */
    --en-warning: light-dark(#cb9641, #ebcb8b);
    
    /* Danger: Aurora Red */
    --en-danger: light-dark(#ab4551, #bf616a);
    
    /* Info: Aurora Purple */
    --en-info: light-dark(#9d6892, #b48ead);

    /* ===== Neutral / Surface Colors ===== */
    /* Light Mode: Snow Storm. Dark Mode: Polar Night */
    --en-bg: light-dark(#eceff4, #2e3440);
    --en-bg-subtle: light-dark(#e5e9f0, #3b4252);
    --en-surface: light-dark(#ffffff, #434c5e);
    
    /* Text */
    --en-text: light-dark(#2e3440, #eceff4);
    --en-text-muted: light-dark(#4c566a, #d8dee9);
    
    /* Soft borders */
    --en-border: light-dark(#d8dee9, #4c566a);

    /* ===== Border width & style ===== */
    /* Clean and subtle */
    --en-border-width: 1px;
    --en-border-width-thick: 2px;
    --en-border-style: solid;

    /* ===== Radius ===== */
    /* Soft, standard rounded corners */
    --en-radius-sm: 0.25rem;
    --en-radius-md: 0.5rem;
    --en-radius-lg: 0.75rem;
    --en-radius-xl: 1rem;
    --en-radius-full: 9999px;

    /* ===== Shadow ===== */
    /* Very subtle, minimal drop shadows for a flat, clean look */
    --en-shadow-sm: 0 1px 3px light-dark(rgba(46, 52, 64, 0.05), rgba(0, 0, 0, 0.1));
    --en-shadow-md: 0 4px 6px light-dark(rgba(46, 52, 64, 0.08), rgba(0, 0, 0, 0.15));
    --en-shadow-lg: 0 10px 15px light-dark(rgba(46, 52, 64, 0.1), rgba(0, 0, 0, 0.2));

    /* ===== Typography ===== */
    /* Clean, highly legible system fonts */
    --en-font-sans: "Inter", "Roboto", system-ui, -apple-system, sans-serif;
    
    /* Slightly relaxed line-height for readability */
    --en-leading-normal: 1.65;
    --en-leading-relaxed: 1.8;

    /* ===== Transition ===== */
    /* Smooth, professional transitions */
    --en-duration-fast: 150ms;
    --en-duration-base: 250ms;
    --en-duration-slow: 400ms;
    
    --en-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    --en-ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);

    /* ===== Focus ring ===== */
    /* Subtle frost focus ring */
    --en-ring-color: var(--en-secondary);
    --en-ring-width: 2px;
    --en-ring-offset: 2px;
    --en-ring-offset-color: var(--en-bg);
  }
}
`;export{e as default};
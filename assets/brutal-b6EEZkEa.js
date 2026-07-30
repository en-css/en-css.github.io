var e=`/*!
 * Theme: Neo-Brutalism
 * Overrides for en-css tokens (01-tokens.css)
 */

@layer en-tokens {
  [data-en-theme="brutal"],
  .en-theme-brutal {
    /* ===== Brand Colors ===== */
    /* Vibrant, high-contrast colors typical of neo-brutalism */
    --en-primary: light-dark(#ffe600, #facc15); /* Bright yellow */
    --en-primary-contrast: light-dark(#000000, #000000); /* Always black for high contrast */
    
    --en-secondary: light-dark(#3a86ff, #4cc9f0); /* Electric Blue */
    --en-success: light-dark(#06d6a0, #00f5d4); /* Vibrant Green */
    --en-warning: light-dark(#ff9f1c, #ffb703); /* Bright Orange */
    --en-danger: light-dark(#ff006e, #ef233c); /* Hot Red/Pink */
    --en-info: light-dark(#8338ec, #b5179e); /* Deep Purple */

    /* ===== Neutral / Surface Colors ===== */
    /* Light Mode: Stark White/Cream. Dark Mode: Pure Black or Very Dark Grey */
    --en-bg: light-dark(#fafafa, #0a0a0a);
    --en-bg-subtle: light-dark(#e5e5e5, #1f1f1f);
    --en-surface: light-dark(#ffffff, #171717);
    
    /* Text: High contrast */
    --en-text: light-dark(#000000, #ffffff);
    --en-text-muted: light-dark(#404040, #a3a3a3);
    
    /* Signature pitch black borders in light mode, stark white in dark mode */
    --en-border: light-dark(#000000, #ffffff);

    /* ===== Border width & style ===== */
    /* Bold, thick lines are a must */
    --en-border-width: 3px;
    --en-border-width-thick: 5px;
    --en-border-style: solid;

    /* ===== Radius ===== */
    /* Very sharp or minimally rounded corners */
    --en-radius-sm: 0;
    --en-radius-md: 0;
    --en-radius-lg: 0;
    --en-radius-xl: 0;
    --en-radius-full: 0;

    /* ===== Shadow ===== */
    /* Signature Neo-Brutalist hard shadows (no blur!) */
    --en-shadow-sm: 3px 3px 0 var(--en-border);
    --en-shadow-md: 6px 6px 0 var(--en-border);
    --en-shadow-lg: 10px 10px 0 var(--en-border);

    /* ===== Typography ===== */
    /* Chunky, bold sans-serif */
    --en-font-sans: "Space Grotesk", "Archivo Black", "Inter", system-ui, sans-serif;
    
    /* Tighter line-heights to emphasize blocks of text */
    --en-leading-normal: 1.4;
    --en-leading-relaxed: 1.6;

    /* Extra bold weights for emphasis */
    --en-font-semibold: 700;
    --en-font-bold: 900;

    /* ===== Transition ===== */
    /* Snappy and slightly bouncy to make interactions feel punchy */
    --en-duration-fast: 150ms;
    --en-duration-base: 250ms;
    
    /* A playful, bouncy cubic-bezier */
    --en-ease-out: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    --en-ease-in-out: cubic-bezier(0.68, -0.55, 0.265, 1.55);

    /* ===== Focus ring ===== */
    /* Thick, offset focus ring matching the shadow style */
    --en-ring-color: var(--en-secondary);
    --en-ring-width: 3px;
    --en-ring-offset: 3px;
    --en-ring-offset-color: var(--en-bg);
  }
}
`;export{e as default};
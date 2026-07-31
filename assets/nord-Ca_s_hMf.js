var e=`/*!
 * Theme: Nord (Nordic / Arctic)
 * Overrides for en-css tokens (01-tokens.css) with geometric frost textures.
 */

@layer en-tokens {
  [data-en-theme="nord"],
  .en-theme-nord {
    /* Brand Colors (Nord Aurora & Frost) */
    --en-primary: light-dark(#5e81ac, #88c0d0);
    --en-primary-contrast: light-dark(#ffffff, #2e3440);
    --en-secondary: light-dark(#81a1c1, #8fbcbb);
    --en-success: light-dark(#8f9f75, #a3be8c);
    --en-warning: light-dark(#cb9641, #ebcb8b);
    --en-danger: light-dark(#ab4551, #bf616a);
    --en-info: light-dark(#9d6892, #b48ead);

    /* Neutral / Surface Colors */
    --en-bg: light-dark(#eceff4, #2e3440);
    --en-bg-subtle: light-dark(#e5e9f0, #3b4252);
    --en-surface: light-dark(#ffffff, #434c5e);
    --en-text: light-dark(#2e3440, #eceff4);
    --en-text-muted: light-dark(#4c566a, #d8dee9);
    --en-border: light-dark(#d8dee9, #4c566a);

    /* Border width, style & radius */
    --en-border-width: 1px;
    --en-border-width-thick: 2px;
    --en-border-style: solid;
    --en-radius-sm: 0.25rem;
    --en-radius-md: 0.5rem;
    --en-radius-lg: 0.75rem;
    --en-radius-xl: 1rem;
    --en-radius-full: 9999px;

    /* Shadows */
    --en-shadow-sm: 0 1px 3px light-dark(rgba(46, 52, 64, 0.05), rgba(0, 0, 0, 0.1));
    --en-shadow-md: 0 4px 6px light-dark(rgba(46, 52, 64, 0.08), rgba(0, 0, 0, 0.15));
    --en-shadow-lg: 0 10px 15px light-dark(rgba(46, 52, 64, 0.1), rgba(0, 0, 0, 0.2));

    /* Typography & Core Scales */
    --en-font-sans: "Inter", "Roboto", system-ui, -apple-system, sans-serif;
    --en-leading-normal: 1.65;
    --en-leading-relaxed: 1.8;
    --en-duration-fast: 150ms;
    --en-duration-base: 250ms;
    --en-duration-slow: 400ms;
    --en-ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    --en-ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
    --en-ring-color: var(--en-secondary);
    --en-ring-width: 2px;
    --en-ring-offset: 2px;
    --en-ring-offset-color: var(--en-bg);

    /* Texture: Crisp geometric frost grid */
    --en-bg-texture: 
      linear-gradient(45deg, color-mix(in oklab, var(--en-border) 30%, transparent) 25%, transparent 25%, transparent 75%, color-mix(in oklab, var(--en-border) 30%, transparent) 75%, color-mix(in oklab, var(--en-border) 30%, transparent)),
      linear-gradient(45deg, color-mix(in oklab, var(--en-border) 30%, transparent) 25%, transparent 25%, transparent 75%, color-mix(in oklab, var(--en-border) 30%, transparent) 75%, color-mix(in oklab, var(--en-border) 30%, transparent));
  }
}

@layer en-base {
  [data-en-theme="nord"] body, .en-theme-nord body {
    background-size: 60px 60px;
    background-position: 0 0, 30px 30px;
  }

  [data-en-theme="nord"] body::before, .en-theme-nord body::before {
    content: "🜁"; /* Alchemical symbol for Air */
    position: fixed;
    bottom: 5vh;
    left: 2vw;
    font-size: 35vw;
    color: color-mix(in oklab, var(--en-secondary) 4%, transparent);
    z-index: -1;
    pointer-events: none;
    line-height: 1;
    font-family: serif;
  }
}`;export{e as default};
var e=`/*!
 * Theme: Nature / Ghibli
 * Overrides for en-css tokens (01-tokens.css) with textured paper background.
 */

@layer en-tokens {
  [data-en-theme="nature"],
  .en-theme-nature {
    /* Brand Colors */
    --en-primary: light-dark(#4F7942, #81c784);
    --en-primary-contrast: light-dark(#ffffff, #0b1a13);
    --en-secondary: light-dark(#6fa8dc, #81d4fa);
    --en-success: light-dark(#2e7d32, #69f0ae);
    --en-warning: light-dark(#ffb300, #ffd54f);
    --en-danger: light-dark(#d32f2f, #e57373);
    --en-info: light-dark(#00838f, #4dd0e1);

    /* Neutral / Surface Colors */
    --en-bg: light-dark(#fdfbf7, #0b1a13);
    --en-bg-subtle: light-dark(#eeeadd, #1c2d22);
    --en-surface: light-dark(#ffffff, #203328);
    --en-text: light-dark(#3e2723, #f1f8e9);
    --en-text-muted: light-dark(#8d6e63, #a5d6a7);
    --en-border: light-dark(#d7ccc8, #2e4736);

    /* Border width, style & soft organic radius */
    --en-border-width: 1px;
    --en-border-width-thick: 2px;
    --en-border-style: solid;
    --en-radius-sm: 0.5rem;
    --en-radius-md: 0.75rem;
    --en-radius-lg: 1rem;
    --en-radius-xl: 1.5rem;
    --en-radius-full: 9999px;

    /* Warm diffused shadows */
    --en-shadow-sm: 0 2px 4px light-dark(rgba(62, 39, 35, 0.05), rgba(0, 0, 0, 0.2));
    --en-shadow-md: 0 4px 12px light-dark(rgba(62, 39, 35, 0.08), rgba(0, 0, 0, 0.3));
    --en-shadow-lg: 0 12px 32px light-dark(rgba(62, 39, 35, 0.12), rgba(0, 0, 0, 0.4));

    /* Typography Override */
    --en-font-sans: "Quicksand", "Nunito", system-ui, -apple-system, sans-serif;
    --en-leading-normal: 1.7;
    --en-leading-relaxed: 1.85;

    /* Transitions & Focus */
    --en-duration-fast: 200ms;
    --en-duration-base: 300ms;
    --en-duration-slow: 500ms;
    --en-ease-out: cubic-bezier(0.25, 1, 0.5, 1);
    --en-ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --en-ring-color: var(--en-primary);
    --en-ring-width: 3px;
    --en-ring-offset: 2px;
    --en-ring-offset-color: var(--en-bg);

    /* Texture: Soft paper grain / leaf scatter */
    --en-bg-texture: 
      radial-gradient(circle at 100% 50%, transparent 20%, color-mix(in oklab, var(--en-primary) 3%, transparent) 21%, color-mix(in oklab, var(--en-primary) 3%, transparent) 34%, transparent 35%, transparent),
      radial-gradient(circle at 0% 50%, transparent 20%, color-mix(in oklab, var(--en-secondary) 2%, transparent) 21%, color-mix(in oklab, var(--en-secondary) 2%, transparent) 34%, transparent 35%, transparent);
  }
}

@layer en-base {
  [data-en-theme="nature"] body, .en-theme-nature body {
    background-size: 80px 80px;
    background-position: 0 0, 40px 40px;
  }

  [data-en-theme="nature"] body::before, .en-theme-nature body::before {
    content: "🜃"; /* Alchemical symbol for Earth/Nature */
    position: fixed;
    top: 5vh;
    right: 5vw;
    font-size: 30vw;
    color: color-mix(in oklab, var(--en-success) 4%, transparent);
    z-index: -1;
    pointer-events: none;
    line-height: 1;
    font-family: serif;
    rotate: 10deg;
  }
}`;export{e as default};
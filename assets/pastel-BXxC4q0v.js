var e=`/*!
 * Theme: Pastel Sketch (Hand-drawn / Rough)
 * Overrides for en-css tokens (01-tokens.css)
 */

@layer en-tokens {
  [data-en-theme="pastel"],
  .en-theme-pastel {
    /* Brand Colors */
    --en-primary: light-dark(#ffb3ba, #ff8ca6);
    --en-primary-contrast: light-dark(#4a4a4a, #ffffff);
    --en-secondary: light-dark(#bae1ff, #82c9ff);
    --en-success: light-dark(#baffc9, #73e892);
    --en-warning: light-dark(#ffdfba, #ffc073);
    --en-danger: light-dark(#ff9ea6, #ff6b77);
    --en-info: light-dark(#d0c4fa, #b5a0f7);

    /* Surface & Background Colors */
    --en-bg: light-dark(#fffdf9, #2a2726);
    --en-bg-subtle: light-dark(#f4efe6, #363231);
    --en-surface: light-dark(#ffffff, #332f2d);
    --en-text: light-dark(#4a4a4a, #f4efe6);
    --en-text-muted: light-dark(#9e9e9e, #a09c99);
    --en-border: light-dark(#4a4a4a, #f4efe6);

    /* Border & Rough Radius */
    --en-border-width: 2px;
    --en-border-width-thick: 3px;
    --en-border-style: solid;
    --en-radius-sm: 2px 255px 3px 255px / 255px 5px 225px 3px;
    --en-radius-md: 255px 15px 225px 15px / 15px 225px 15px 255px;
    --en-radius-lg: 15px 225px 15px 255px / 255px 15px 225px 15px;
    --en-radius-xl: 30px 255px 20px 255px / 255px 20px 225px 30px;
    --en-radius-full: 90% 85% 95% 85% / 85% 95% 80% 90%;

    /* Shadow */
    --en-shadow-sm: 2px 2px 0 light-dark(rgba(74, 74, 74, 0.4), rgba(244, 239, 230, 0.3));
    --en-shadow-md: 4px 4px 0 light-dark(rgba(74, 74, 74, 0.6), rgba(244, 239, 230, 0.5));
    --en-shadow-lg: 6px 6px 0 light-dark(rgba(74, 74, 74, 0.8), rgba(244, 239, 230, 0.6));

    /* Typography */
    --en-font-sans: "Fredoka", "Comic Sans MS", "Chalkboard SE", system-ui, sans-serif;
    --en-leading-normal: 1.6;
    --en-leading-relaxed: 1.8;

    /* Focus ring */
    --en-ring-color: var(--en-secondary);
    --en-ring-width: 3px;
    --en-ring-offset: 3px;
    --en-ring-offset-color: var(--en-bg);

    /* Texture: Pencil hatching / Chalk dust */
    --en-bg-texture: repeating-linear-gradient(45deg, color-mix(in oklab, var(--en-text-muted) 3%, transparent) 0, color-mix(in oklab, var(--en-text-muted) 3%, transparent) 1px, transparent 1px, transparent 10px);
  }
}

@layer en-base {
  [data-en-theme="pastel"] body, .en-theme-pastel body {
    background-size: 80px 80px;
  }

  [data-en-theme="pastel"] body::before,
  .en-theme-pastel body::before {
    content: "⬡"; /* Alchemical Salt (Crystalline / Chalky) */
    position: fixed;
    top: 50%;
    left: 50%;

    font-size: 50vw;
    line-height: 1;
    font-family: serif;

    color: color-mix(in oklab, var(--en-primary) 5%, transparent);

    z-index: 1;
    pointer-events: none;

    animation: pastel-alchemy 25s ease-in-out infinite;  
  }

  @keyframes pastel-alchemy {
    0% {
      transform: translate(-50%, -50%) translate(0, 0) rotate(15deg);
    }

    25% {
      transform: translate(-50%, -50%) translate(5vw, -4vw) rotate(25deg);
    }

    50% {
      transform: translate(-50%, -50%) translate(0, 8vw) rotate(45deg);
    }

    75% {
      transform: translate(-50%, -50%) translate(-2vw, 6vw) rotate(25deg);
    }

    100% {
      transform: translate(-50%, -50%) translate(0, 0) rotate(15deg);
    }
  }

/* Table Overrides for Pastel Sketch */
  [data-en-theme="pastel"] .en-table-container,
  .en-theme-pastel .en-table-container {
    border: var(--en-border-width-thick) solid var(--en-border);
    border-radius: var(--en-radius-md);
    overflow: auto;
  }

  [data-en-theme="pastel"] .en-table,
  .en-theme-pastel .en-table {
    border-collapse: separate;
    border-spacing: 0;
  }

  [data-en-theme="pastel"] .en-table th,
  [data-en-theme="pastel"] .en-table td,
  .en-theme-pastel .en-table th,
  .en-theme-pastel .en-table td {
    border-block-end: var(--en-border-width) solid var(--en-border);
    border-inline-end: none;
    border-inline-start: none;
  }

  [data-en-theme="pastel"] .en-table tbody tr:last-child td,
  .en-theme-pastel .en-table tbody tr:last-child td {
    border-block-end: none;
  }

  @media (prefers-reduced-motion: reduce) {
    [data-en-theme="pastel"] body::before,
    .en-theme-pastel body::before {
      animation: none;
    }
  }
}`;export{e as default};
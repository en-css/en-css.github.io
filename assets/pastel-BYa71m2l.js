var e=`/*!
 * Theme: Pastel Sketch (Hand-drawn / Rough)
 * Overrides for en-css tokens (01-tokens.css)
 */

@layer en-tokens {
  [data-en-theme="pastel"],
  .en-theme-pastel {
    /* ===== Brand Colors (Soft Pastel Palette) ===== */
    /* Primary: Pastel Pink */
    --en-primary: light-dark(#ffb3ba, #ff8ca6);
    --en-primary-contrast: light-dark(#4a4a4a, #ffffff);
    
    /* Secondary: Pastel Blue */
    --en-secondary: light-dark(#bae1ff, #82c9ff);
    
    /* Success: Pastel Green */
    --en-success: light-dark(#baffc9, #73e892);
    
    /* Warning: Pastel Orange */
    --en-warning: light-dark(#ffdfba, #ffc073);
    
    /* Danger: Pastel Red */
    --en-danger: light-dark(#ff9ea6, #ff6b77);
    
    /* Info: Pastel Purple */
    --en-info: light-dark(#d0c4fa, #b5a0f7);

    /* ===== Neutral / Surface Colors ===== */
    /* Light Mode: Warm Paper. Dark Mode: Dark Chalkboard */
    --en-bg: light-dark(#fffdf9, #2a2726);
    --en-bg-subtle: light-dark(#f4efe6, #363231);
    --en-surface: light-dark(#ffffff, #332f2d);
    
    /* Text: Soft Ink */
    --en-text: light-dark(#4a4a4a, #f4efe6);
    --en-text-muted: light-dark(#9e9e9e, #a09c99);
    
    /* Borders act like pencil/ink lines */
    --en-border: light-dark(#4a4a4a, #f4efe6);

    /* ===== Border width & style ===== */
    /* Imperfect hand-drawn lines usually look best slightly thick */
    --en-border-width: 2px;
    --en-border-width-thick: 3px;
    --en-border-style: solid;

    /* ===== Radius (THE "ROUGHNESS" MAGIC) ===== */
    /* Menggunakan trik CSS 8-value border-radius untuk efek digambar tangan (imperfect) */
    --en-radius-sm: 2px 255px 3px 255px / 255px 5px 225px 3px;
    --en-radius-md: 255px 15px 225px 15px / 15px 225px 15px 255px;
    --en-radius-lg: 15px 225px 15px 255px / 255px 15px 225px 15px;
    --en-radius-xl: 30px 255px 20px 255px / 255px 20px 225px 30px;
    --en-radius-full: 90% 85% 95% 85% / 85% 95% 80% 90%; /* Tidak bulat sempurna */

    /* ===== Shadow ===== */
    /* Bayangan offset seperti coretan pensil */
    --en-shadow-sm: 2px 2px 0 light-dark(rgba(74, 74, 74, 0.4), rgba(244, 239, 230, 0.3));
    --en-shadow-md: 4px 4px 0 light-dark(rgba(74, 74, 74, 0.6), rgba(244, 239, 230, 0.5));
    --en-shadow-lg: 6px 6px 0 light-dark(rgba(74, 74, 74, 0.8), rgba(244, 239, 230, 0.6));

    /* ===== Typography ===== */
    /* Menggunakan font kasual, komik, atau tulisan tangan jika tersedia */
    --en-font-sans: "Comic Sans MS", "Comic Neue", "Chalkboard SE", "Marker Felt", system-ui, sans-serif;
    
    /* Agak renggang untuk kesan tulisan santai */
    --en-leading-normal: 1.6;
    --en-leading-relaxed: 1.8;

    /* ===== Transition ===== */
    /* Kasual dan ringan */
    --en-duration-fast: 150ms;
    --en-duration-base: 250ms;
    --en-duration-slow: 400ms;
    
    --en-ease-out: ease-out;
    --en-ease-in-out: ease-in-out;

    /* ===== Focus ring ===== */
    /* Cincin fokus tebal seperti ditandai stabilo / spidol */
    --en-ring-color: var(--en-secondary);
    --en-ring-width: 3px;
    --en-ring-offset: 3px;
    --en-ring-offset-color: var(--en-bg);
  }

  /* ===== Table Overrides for Pastel Sketch ===== */
  /* Memberikan border melengkung pada container agar tetap statis saat ditabel di-scroll (responsif) */
  [data-en-theme="pastel"] .en-table-container,
  .en-theme-pastel .en-table-container {
    border: var(--en-border-width-thick) solid var(--en-border);
    border-radius: var(--en-radius-md);
    overflow: auto; /* Memotong konten inner agar tidak keluar dari sudut lengkung, sekaligus mengaktifkan scroll */
  }

  /* Karena container sudah punya border, kita tidak perlu table memiliki border luar tambahan */
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
    /* Hilangkan border kanan/kiri luar yang berpotensi double dengan container */
    border-inline-end: none;
    border-inline-start: none;
  }

  [data-en-theme="pastel"] .en-table tbody tr:last-child td,
  .en-theme-pastel .en-table tbody tr:last-child td {
    border-block-end: none;
  }
}
`;export{e as default};
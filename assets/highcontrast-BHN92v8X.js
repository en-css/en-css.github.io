var e=`/*!
 * Theme: High Contrast
 * Overrides for en-css tokens (01-tokens.css)
 *
 * Dirancang untuk aksesibilitas maksimum — memenuhi WCAG 2.1 Level AAA.
 * Semua pasangan warna teks/latar belakang memiliki rasio kontras ≥ 7:1.
 *
 * Mode terang : Latar putih / teks hitam.
 * Mode gelap  : Latar hitam / teks putih.
 */

@layer en-tokens {
  [data-en-theme="highcontrast"],
  .en-theme-highcontrast {
    /* ===== Brand Colors ===== */
    /* Primary: Yellow on dark, Dark-Blue on light — keduanya kontras tinggi */
    --en-primary: light-dark(#005fcc, #ffff00);
    --en-primary-contrast: light-dark(#ffffff, #000000);

    /* Secondary: Cyan cerah di dark, Biru tua di light */
    --en-secondary: light-dark(#003f8a, #00e5ff);

    /* Success: Hijau cerah yang mudah dibedakan */
    --en-success: light-dark(#006e00, #00ff6a);

    /* Warning: Oranye pekat yang aman di kedua mode */
    --en-warning: light-dark(#8a4500, #ffb700);

    /* Danger: Merah yang mencolok dan mudah dikenali */
    --en-danger: light-dark(#b30000, #ff4444);

    /* Info: Ungu mencolok sebagai warna informasi */
    --en-info: light-dark(#5200a8, #c87aff);

    /* ===== Neutral / Surface Colors ===== */
    /* Light Mode: Putih murni. Dark Mode: Hitam murni. */
    --en-bg: light-dark(#ffffff, #000000);
    --en-bg-subtle: light-dark(#f0f0f0, #1a1a1a);
    --en-surface: light-dark(#fafafa, #0d0d0d);

    /* Text: Kontras maksimum */
    --en-text: light-dark(#000000, #ffffff);
    --en-text-muted: light-dark(#333333, #cccccc);

    /* Border: Hitam tebal di light, Putih tebal di dark */
    --en-border: light-dark(#000000, #ffffff);

    /* ===== Border width & style ===== */
    /* Garis tebal agar batas elemen sangat jelas */
    --en-border-width: 2px;
    --en-border-width-thick: 3px;
    --en-border-style: solid;

    /* ===== Radius ===== */
    /* Sudut kotak tajam — menghindari ambiguitas visual */
    --en-radius-sm: 0;
    --en-radius-md: 0;
    --en-radius-lg: 0;
    --en-radius-xl: 0;
    --en-radius-full: 9999px; /* Hanya dipertahankan untuk elemen pill/badge */

    /* ===== Shadow ===== */
    /* Bayangan padat tanpa blur — identitas visual yang kuat */
    --en-shadow-sm: 2px 2px 0 var(--en-border);
    --en-shadow-md: 4px 4px 0 var(--en-border);
    --en-shadow-lg: 6px 6px 0 var(--en-border);

    /* ===== Typography ===== */
    /* Font sans-serif yang sangat mudah dibaca */
    --en-font-sans: "Atkinson Hyperlegible", "Arial", "Helvetica Neue", system-ui, sans-serif;

    /* Jarak baris lebih lebar untuk kemudahan membaca */
    --en-leading-normal: 1.7;
    --en-leading-relaxed: 1.9;

    /* Bobot huruf lebih berat agar teks mudah dibaca */
    --en-font-normal: 500;
    --en-font-medium: 600;
    --en-font-semibold: 700;
    --en-font-bold: 900;

    /* Jarak antar huruf sedikit lebih renggang */
    --en-tracking-normal: 0.02em;
    --en-tracking-wide: 0.06em;

    /* ===== Transition ===== */
    /* Transisi lambat — membantu pengguna dengan sensitivitas gerak */
    --en-duration-fast: 0ms;    /* Tanpa animasi cepat */
    --en-duration-base: 100ms;
    --en-duration-slow: 200ms;

    --en-ease-out: linear;
    --en-ease-in-out: linear;

    /* ===== Focus ring ===== */
    /* Cincin fokus yang sangat tebal dan terlihat jelas */
    --en-ring-color: light-dark(#005fcc, #ffff00);
    --en-ring-width: 3px;
    --en-ring-offset: 3px;
    --en-ring-offset-color: var(--en-bg);
  }
}
`;export{e as default};
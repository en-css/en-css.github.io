var e=`/*!
 * Theme: Cyberpunk (Neon / HUD)
 * Light Mode: Emboss / Neumorphism
 * Dark Mode: Cyberpunk HUD with scanlines & neon glow
 */

@layer en-tokens {
  [data-en-theme="cyberpunk"],
  .en-theme-cyberpunk {
    --en-primary: light-dark(#d100d1, #00f0ff);
    --en-primary-contrast: light-dark(#ffffff, #001f24);
    --en-secondary: light-dark(#8a2be2, #ff00ff);
    --en-success: light-dark(#008f11, #39ff14);
    --en-warning: light-dark(#ff8c00, #ffb300);
    --en-danger: light-dark(#d90000, #ff003c);
    --en-info: light-dark(#005bb5, #00e5ff);

    /* Very subtle light background for emboss, deep dark for neon */
    --en-bg: light-dark(#e4e4e7, #05050c);
    --en-bg-subtle: light-dark(#d4d4d8, #0a0a16);
    --en-surface: light-dark(#e4e4e7, #0f0f22);
    --en-text: light-dark(#18181b, #00f0ff);
    --en-text-muted: light-dark(#52525b, #ff77ff);
    
    /* Subtle border in light mode to maintain component boundaries */
    --en-border: light-dark(rgba(161, 161, 170, 0.25), #ff007f);

    /* Texture: Blank for light mode, CRT Scanlines for dark mode */
    --en-bg-texture: linear-gradient(
      light-dark(transparent, rgba(18, 16, 16, 0)) 50%, 
      light-dark(transparent, rgba(0, 0, 0, 0.4)) 50%
    );
    background-size: 100% 4px;

    /* 
      Combined Shadow for both modes:
      Light mode uses the first two (Emboss), the neon ones are transparent.
      Dark mode uses the last two (Neon), the emboss ones are transparent.
    */
    --en-shadow: 
      6px 6px 12px light-dark(rgba(0, 0, 0, 0.15), transparent),
      -6px -6px 12px light-dark(rgba(255, 255, 255, 0.8), transparent),
      0 0 10px light-dark(transparent, rgba(0, 240, 255, 0.4)),
      inset 0 0 15px light-dark(transparent, rgba(0, 240, 255, 0.15));
  }
}

@layer en-base {
  /* Tech Glow / Emboss Effect on Headings */
  [data-en-theme="cyberpunk"] h1, [data-en-theme="cyberpunk"] h2,
  .en-theme-cyberpunk h1, .en-theme-cyberpunk h2 {
    text-shadow: 
      1px 1px 0px light-dark(rgba(255, 255, 255, 0.7), transparent),
      -1px -1px 1px light-dark(rgba(0, 0, 0, 0.15), transparent),
      0 0 8px light-dark(transparent, rgba(0, 240, 255, 0.8));
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
}

@layer en-components {
  /* Base card/btn settings (applies to Light Mode smoothly) */
  [data-en-theme="cyberpunk"] .en-card,
  .en-theme-cyberpunk .en-card,
  [data-en-theme="cyberpunk"] .en-btn,
  .en-theme-cyberpunk .en-btn {
    border: 1px solid var(--en-border);
    box-shadow: var(--en-shadow);
    transition: all 0.3s ease;
  }

  /* Cyber Corner Accent Bracket - Hidden in Light Mode */
  [data-en-theme="cyberpunk"] .en-card::before,
  .en-theme-cyberpunk .en-card::before {
    content: "// HUD_SYS_v2.0";
    position: absolute;
    top: 4px;
    right: 8px;
    font-family: var(--en-font-mono);
    font-size: 0.65rem;
    color: light-dark(transparent, var(--en-secondary));
    opacity: 0.7;
    pointer-events: none;
  }
}

/* 
  Isolate structural Dark Mode features (like clip-path and sharp corners) 
  using media queries and data attributes, since light-dark() only works for colors.
*/
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"])[data-en-theme="cyberpunk"] .en-card,
  :root:not([data-theme="light"]) .en-theme-cyberpunk .en-card,
  :root:not([data-theme="light"])[data-en-theme="cyberpunk"] .en-btn,
  :root:not([data-theme="light"]) .en-theme-cyberpunk .en-btn {
    border-radius: 0;
    clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
  }
}

:root[data-theme="dark"][data-en-theme="cyberpunk"] .en-card,
:root[data-theme="dark"] .en-theme-cyberpunk .en-card,
:root[data-theme="dark"][data-en-theme="cyberpunk"] .en-btn,
:root[data-theme="dark"] .en-theme-cyberpunk .en-btn {
  border-radius: 0;
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
}`;export{e as default};
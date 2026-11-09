import type { ThemeName } from './types';

export { type ThemeName };

// @ts-ignore import.meta.glob is provided by Vite-compatible bundlers
// @vite-ignore
const themeRawLoaders = import.meta.glob<string>(
  './*.css',
  { query: '?raw', import: 'default' }
);

const cssCache = new Map<ThemeName, string>();

/**
 * Returns the raw CSS text of a theme so it can be injected into a `<style>` element.
 * The result is cached after the first call. Unknown names (and `'default'`) resolve to
 * an empty string.
 */
export const setThemeRaw = async (themeName: ThemeName): Promise<string> => {
  if (cssCache.has(themeName)) {
    return cssCache.get(themeName)!;
  }

  if ((themeName as string) === 'default') {
    return '';
  }

  const key = `./${themeName}.css`;
  const loader = themeRawLoaders[key];

  if (!loader) {
    console.error(`[setThemeRaw] Theme "${themeName}" was not found in @en32/en-css/themes`);
    return '';
  }

  const css = await loader();
  cssCache.set(themeName, css);
  return css;
};

/**
 * Theme resolution, kept free of UI5 imports so `./init` can compute the theme for the
 * `data-ui5-config` tag before UI5's configuration is touched.
 */

/** Theme setting meaning "follow the operating system's color scheme and contrast preference". */
export const OPERATING_SYSTEM = "OperatingSystem";

// UI5's `_auto` themes carry `@media (prefers-color-scheme: dark)` in their parameter bundle, so
// dark/light switches inside the CSS — instantly, and without refetching theme assets. Only the
// contrast preference has to be resolved here, because it selects a different bundle.
export const AUTO_THEME = "sap_horizon_auto";
export const AUTO_THEME_HIGH_CONTRAST = "sap_horizon_hc_auto";

/**
 * Maps a theme setting to the UI5 theme to apply: a concrete theme is passed through, while
 * {@link OPERATING_SYSTEM} picks the auto theme matching the OS contrast preference.
 */
export const resolveTheme = (setting: string): string => {
  if (setting !== OPERATING_SYSTEM) {
    return setting;
  }
  return window.matchMedia("(prefers-contrast: more)").matches ? AUTO_THEME_HIGH_CONTRAST : AUTO_THEME;
};

import { setTheme as setUi5Theme } from "@ui5/webcomponents-base/dist/config/Theme.js";

import { readSetting, removeSetting, writeSetting } from "./storage";

/**
 * Callback interface for receiving theme changes.
 */
type ThemeUpdateFunc = (theme: string) => void;

/** localStorage key holding the user's theme choice, read back by the app on startup. */
export const THEME_STORAGE_KEY = "FuroTheme";

/** Theme setting meaning "follow the operating system's color scheme and contrast preference". */
export const OPERATING_SYSTEM = "OperatingSystem";

// UI5's `_auto` themes carry `@media (prefers-color-scheme: dark)` in their parameter bundle, so
// dark/light switches inside the CSS — instantly, and without refetching theme assets. Only the
// contrast preference has to be resolved here, because it selects a different bundle.
const AUTO_THEME = "sap_horizon_auto";
const AUTO_THEME_HIGH_CONTRAST = "sap_horizon_hc_auto";

/** The chosen setting: {@link OPERATING_SYSTEM} or a concrete UI5 theme name. */
let _setting: string | undefined;

/** Guards the one-time storage read, so resolving a theme is not a storage lookup per call. */
let _restored = false;

let _contrastListenerAttached = false;

const _callbacks: ThemeUpdateFunc[] = [];

const _contrastQuery = (): MediaQueryList => window.matchMedia("(prefers-contrast: more)");

// The persisted value is read once and then kept in memory: the app applies its stored settings
// during startup, before anything resolves a theme, so re-reading per call would buy nothing.
// A value written to localStorage afterwards is therefore only picked up via setTheme().
const _currentSetting = (): string => {
  if (!_restored) {
    _restored = true;
    _setting = readSetting(THEME_STORAGE_KEY);
  }
  return _setting ?? OPERATING_SYSTEM;
};

const _resolve = (setting: string): string => {
  if (setting !== OPERATING_SYSTEM) {
    return setting;
  }
  return _contrastQuery().matches ? AUTO_THEME_HIGH_CONTRAST : AUTO_THEME;
};

const _announce = (theme: string): void => {
  _callbacks.forEach(f => {
    f(theme);
  });
  window.dispatchEvent(new CustomEvent("furo-theme-changed", { detail: theme }));
};

// Attached on the first apply rather than at import, so this module has no side effect until the
// app actually takes over the theme.
const _attachContrastListener = (): void => {
  if (_contrastListenerAttached) {
    return;
  }
  _contrastListenerAttached = true;
  _contrastQuery().addEventListener("change", () => {
    // A concrete theme was chosen explicitly; only OS mode tracks the preference.
    if (_currentSetting() === OPERATING_SYSTEM) {
      void _apply(OPERATING_SYSTEM);
    }
  });
};

const _apply = async (setting: string): Promise<void> => {
  _attachContrastListener();
  const theme = _resolve(setting);
  await setUi5Theme(theme);
  _announce(theme);
};

/**
 * Returns the theme *setting*: {@link OPERATING_SYSTEM}, or the concrete UI5 theme the user chose.
 *
 * Use this to render a theme picker; use {@link getTheme} for the theme actually in effect.
 */
export const getThemeSetting = (): string => _currentSetting();

/**
 * Returns the UI5 theme currently in effect.
 *
 * In {@link OPERATING_SYSTEM} mode this is `sap_horizon_auto`, or `sap_horizon_hc_auto` when the OS
 * asks for more contrast. Those themes switch between light and dark *in CSS*, so this value does
 * not change when the OS flips to dark — it stays `sap_horizon_auto` and the colors follow.
 *
 * Pass a callback to subscribe to future changes. There is no unsubscribe; a component that
 * subscribes has to guard its callback after leaving the DOM.
 *
 * @param updateCallback - optional listener invoked with the new theme on every change.
 */
export const getTheme = (updateCallback?: ThemeUpdateFunc): string => {
  if (updateCallback) {
    _callbacks.push(updateCallback);
  }

  return _resolve(_currentSetting());
};

/**
 * Applies the current setting to UI5 without changing it — what an app calls on startup to restore
 * the user's persisted theme.
 *
 * @event {CustomEvent<string>} furo-theme-changed - Fired on `window` once the theme is applied.
 */
export const applyTheme = (): Promise<void> => _apply(_currentSetting());

/**
 * Sets the theme, persists it under `FuroTheme` and applies it to UI5.
 *
 * Resolves once UI5 has fetched and applied the theme assets, so `await` this before asserting on
 * rendered styles.
 *
 * @event {CustomEvent<string>} furo-theme-changed - Fired on `window` once the theme is applied.
 * @param theme - a UI5 theme name (e.g. "sap_horizon_dark") or {@link OPERATING_SYSTEM}.
 */
export const setTheme = async (theme: string): Promise<void> => {
  _setting = theme;
  _restored = true;
  writeSetting(THEME_STORAGE_KEY, theme);
  await _apply(theme);
};

/**
 * Clears the persisted theme, returning to {@link OPERATING_SYSTEM} mode and applying it.
 *
 * This also drops the memoized storage read, so the next resolve starts from scratch.
 *
 * @event {CustomEvent<string>} furo-theme-changed - Fired on `window` once the theme is applied.
 */
export const clearTheme = async (): Promise<void> => {
  _setting = undefined;
  _restored = false;
  removeSetting(THEME_STORAGE_KEY);
  // Nothing is left to override the default — applied directly rather than through the resolver,
  // which would re-arm the memo this is meant to release.
  await _apply(OPERATING_SYSTEM);
};

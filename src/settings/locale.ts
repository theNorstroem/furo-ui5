import getUi5Locale from "@ui5/webcomponents-base/dist/locale/getLocale.js";
import { attachLanguageChange } from "@ui5/webcomponents-base/dist/locale/languageChange.js";

import { LOCALE_STORAGE_KEY } from "./keys";
import { readSetting, removeSetting, writeSetting } from "./storage";

export { LOCALE_STORAGE_KEY };

/**
 * Callback interface for receiving locale changes.
 */
type LocaleUpdateFunc = (locale: string) => void;

/** Locale set during this session or restored from storage; `undefined` follows the UI5 locale. */
let _locale: string | undefined;

/** Guards the one-time storage read, so resolving a locale is not a storage lookup per call. */
let _restored = false;

/** Attached lazily on the first subscription, so importing this module has no side effect. */
let _languageListenerAttached = false;

const _callbacks: LocaleUpdateFunc[] = [];

// The persisted value is read once and then kept in memory: the app applies its stored settings
// during startup, before any component resolves a locale, so re-reading per call would buy nothing.
// A value written to localStorage afterwards is therefore only picked up via setLocale().
const _current = (): string => {
  if (!_restored) {
    _restored = true;
    _locale = readSetting(LOCALE_STORAGE_KEY);
  }
  // UI5 derives its locale from the configured language, falling back to the browser language and
  // then to its own default, so this always yields a usable BCP 47 tag.
  return _locale ?? getUi5Locale().toString();
};

const _notify = (locale: string): void => {
  _callbacks.forEach(f => {
    f(locale);
  });
};

/**
 * Returns the locale used for `Intl` formatting.
 *
 * Resolution order: the value last passed to {@link setLocale}, then the one persisted under
 * `FuroLocale` in `localStorage`, then the current UI5 locale — so with no explicit choice the
 * formatting stays in sync with UI5's own components.
 *
 * The persisted value is read once and cached, on the assumption that the app applies its stored
 * settings during startup. Write it through {@link setLocale} rather than to `localStorage`
 * directly; a direct write after the first resolve is not picked up (and notifies nobody).
 *
 * This is the *formatting* locale, not the UI language: it never changes UI5's configured language,
 * and message bundles are unaffected.
 *
 * Pass a callback to also subscribe to future changes — fired by {@link setLocale} and, while no
 * explicit or stored locale is set, by UI5 language changes. There is no unsubscribe; a component
 * that subscribes has to guard its callback after leaving the DOM.
 *
 * @param updateCallback - optional listener invoked with the new locale on every change.
 */
export const getLocale = (updateCallback?: LocaleUpdateFunc): string => {
  if (updateCallback) {
    _callbacks.push(updateCallback);

    if (!_languageListenerAttached) {
      // eslint-disable-next-line @typescript-eslint/require-await
      attachLanguageChange(async () => {
        // Resolve first, so a not-yet-restored stored value is taken into account. An explicit or
        // stored locale wins over the UI5 locale, so stay quiet while one is set.
        const locale = _current();
        if (_locale === undefined) {
          _notify(locale);
        }
      });
      _languageListenerAttached = true;
    }
  }

  return _current();
};

/**
 * Sets the formatting locale and persists it under `FuroLocale`, so it survives a reload.
 *
 * @event {CustomEvent<string>} furo-locale-changed - Fired on `window` when a new locale was set.
 * @param locale - BCP 47 language tag, e.g. "de-CH".
 */
export const setLocale = (locale: string): void => {
  _locale = locale;
  _restored = true;
  writeSetting(LOCALE_STORAGE_KEY, locale);
  _notify(locale);
  window.dispatchEvent(new CustomEvent("furo-locale-changed", { detail: locale }));
};

/**
 * Clears the session and persisted locale, so {@link getLocale} follows the UI5 locale again.
 *
 * This also drops the memoized storage read, so the next resolve starts from scratch — which is
 * what makes it usable as a reset in tests and in an app's "restore defaults".
 *
 * @event {CustomEvent<string>} furo-locale-changed - Fired on `window` with the locale now in effect.
 */
export const clearLocale = (): void => {
  _locale = undefined;
  _restored = false;
  removeSetting(LOCALE_STORAGE_KEY);
  // Both sources were just dropped, so the UI5 locale is what is left — computed directly rather
  // than through _current(), which would re-arm the memo this is meant to release.
  const locale = getUi5Locale().toString();
  _notify(locale);
  window.dispatchEvent(new CustomEvent("furo-locale-changed", { detail: locale }));
};

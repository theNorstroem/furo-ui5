import getUi5Locale from "@ui5/webcomponents-base/dist/locale/getLocale.js";
import { attachLanguageChange } from "@ui5/webcomponents-base/dist/locale/languageChange.js";

/**
 * Callback interface for receiving locale changes.
 */
type LocaleUpdateFunc = (locale: string) => void;

/** localStorage key holding the user's locale choice, read back by the app on startup. */
export const LOCALE_STORAGE_KEY = "FuroLocale";

/** Locale set during this session; `undefined` falls through to storage, then to the UI5 locale. */
let _locale: string | undefined;

/** Attached lazily on the first subscription, so importing this module has no side effect. */
let _languageListenerAttached = false;

const _callbacks: LocaleUpdateFunc[] = [];

// localStorage throws instead of returning null where it is unavailable (Safari with cross-site
// cookies blocked, sandboxed iframes), and a locale is never worth breaking rendering over.
const _readStored = (): string | undefined => {
  try {
    return localStorage.getItem(LOCALE_STORAGE_KEY) ?? undefined;
  } catch {
    return undefined;
  }
};

const _writeStored = (locale: string): void => {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // storage unavailable — the locale still applies for this session
  }
};

// Storage is re-read rather than cached, so a value written by the app's startup code (or by
// another tab) is picked up without this module having to be re-imported.
// UI5 derives its locale from the configured language, falling back to the browser language and
// then to its own default, so the last step always yields a usable BCP 47 tag.
const _current = (): string => _locale ?? _readStored() ?? getUi5Locale().toString();

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
        // An explicit or stored locale wins over the UI5 locale, so stay quiet while one is set.
        if (_locale === undefined && _readStored() === undefined) {
          _notify(_current());
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
  _writeStored(locale);
  _notify(locale);
  window.dispatchEvent(new CustomEvent("furo-locale-changed", { detail: locale }));
};

/**
 * Clears an explicit/persisted locale, so {@link getLocale} follows the UI5 locale again.
 *
 * @event {CustomEvent<string>} furo-locale-changed - Fired on `window` with the locale now in effect.
 */
export const clearLocale = (): void => {
  _locale = undefined;
  try {
    localStorage.removeItem(LOCALE_STORAGE_KEY);
  } catch {
    // storage unavailable — nothing was persisted anyway
  }
  const locale = _current();
  _notify(locale);
  window.dispatchEvent(new CustomEvent("furo-locale-changed", { detail: locale }));
};

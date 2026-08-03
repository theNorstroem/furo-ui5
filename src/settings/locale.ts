import { getLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";
import { attachLanguageChange } from "@ui5/webcomponents-base/dist/locale/languageChange.js";

/**
 * Callback interface for receiving locale changes.
 */
type LocaleUpdateFunc = (locale: string) => void;

/** Explicit override set via {@link setLocale}; `undefined` means "follow the UI5 language". */
let _locale: string | undefined;

/** Attached lazily on the first subscription, so importing this module has no side effect. */
let _languageListenerAttached = false;

const _callbacks: LocaleUpdateFunc[] = [];

const _current = (): string => _locale ?? getLanguage() ?? navigator.language;

const _notify = (locale: string): void => {
  _callbacks.forEach(f => {
    f(locale);
  });
};

/**
 * Returns the locale used for `Intl` formatting.
 *
 * Unless overridden via {@link setLocale}, this is the language configured on UI5 through its
 * `setLanguage()`, so numbers and dates format consistently with UI5's own components. It falls
 * back to the browser language when UI5 has no language configured.
 *
 * Pass a callback to also subscribe to future changes — fired by {@link setLocale} and, while no
 * explicit locale is set, by UI5 language changes. There is no unsubscribe; a component that
 * subscribes has to guard its callback after leaving the DOM.
 *
 * @param updateCallback - optional listener invoked with the new locale on every change.
 */
export const getLocale = (updateCallback?: LocaleUpdateFunc): string => {
  if (updateCallback) {
    _callbacks.push(updateCallback);

    if (!_languageListenerAttached) {
      // eslint-disable-next-line @typescript-eslint/require-await
      attachLanguageChange(async () => {
        // An explicit setLocale() wins over the UI5 language, so stay quiet while one is set.
        if (_locale === undefined) {
          _notify(_current());
        }
      });
      _languageListenerAttached = true;
    }
  }

  return _current();
};

/**
 * Overrides the formatting locale independently of the UI5 language, for apps that let users pick
 * a number/date format separately from the UI language.
 *
 * @event {CustomEvent<string>} furo-locale-changed - Fired on `window` when a new locale was set.
 * @param locale - BCP 47 language tag, e.g. "de-CH".
 */
export const setLocale = (locale: string): void => {
  _locale = locale;
  _notify(locale);
  window.dispatchEvent(new CustomEvent("furo-locale-changed", { detail: locale }));
};

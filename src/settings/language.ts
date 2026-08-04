import { getLanguage as getUi5Language, setLanguage as setUi5Language } from "@ui5/webcomponents-base/dist/config/Language.js";

import { LANGUAGE_STORAGE_KEY } from "./keys";
import { readSetting, removeSetting, writeSetting } from "./storage";

export { LANGUAGE_STORAGE_KEY };

/**
 * Callback interface for receiving language changes.
 */
type LanguageUpdateFunc = (language: string) => void;

/** Language set during this session or restored from storage; `undefined` follows UI5/the browser. */
let _language: string | undefined;

/** Guards the one-time storage read, so resolving a language is not a storage lookup per call. */
let _restored = false;

/** UI5's language before this module first changed it, so {@link clearLanguage} can restore it. */
let _ui5Default: string | undefined;
let _ui5DefaultCaptured = false;

const _callbacks: LanguageUpdateFunc[] = [];

/** UI5 spells "not configured" as the empty string, which `??` would otherwise let through. */
const _orUndefined = (value: string | undefined): string | undefined => (value === "" ? undefined : value);

// Captured before the first write, so an app that configured UI5 directly at startup gets that
// language back on clear, rather than whatever the user last picked.
const _captureUi5Default = (): void => {
  if (!_ui5DefaultCaptured) {
    _ui5DefaultCaptured = true;
    _ui5Default = getUi5Language();
  }
};

// The persisted value is read once and then kept in memory: the app applies its stored settings
// during startup, before anything resolves a language, so re-reading per call would buy nothing.
// A value written to localStorage afterwards is therefore only picked up via setLanguage().
const _current = (): string => {
  _captureUi5Default();
  if (!_restored) {
    _restored = true;
    _language = readSetting(LANGUAGE_STORAGE_KEY);
  }
  return _orUndefined(_language) ?? _orUndefined(getUi5Language()) ?? navigator.language;
};

const _notify = (language: string): void => {
  _callbacks.forEach(f => {
    f(language);
  });
};

const _announce = (language: string): void => {
  _notify(language);
  window.dispatchEvent(new CustomEvent("furo-language-changed", { detail: language }));
};

/**
 * Returns the UI language.
 *
 * Resolution order: the value last passed to {@link setLanguage}, then the one persisted under
 * `FuroLanguage` in `localStorage`, then the language configured on UI5, then the browser language.
 *
 * The persisted value is read once and cached, on the assumption that the app applies its stored
 * settings during startup. Write it through {@link setLanguage} rather than to `localStorage`
 * directly; a direct write after the first resolve is not picked up (and notifies nobody).
 *
 * This is the language of the UI text — which message bundles UI5 loads. Number and date formatting
 * follow `getLocale()`, which is a separate setting and only falls back to this one.
 *
 * Pass a callback to subscribe to future changes. There is no unsubscribe; a component that
 * subscribes has to guard its callback after leaving the DOM.
 *
 * @param updateCallback - optional listener invoked with the new language on every change.
 */
export const getLanguage = (updateCallback?: LanguageUpdateFunc): string => {
  if (updateCallback) {
    _callbacks.push(updateCallback);
  }

  return _current();
};

/**
 * Sets the UI language, persists it under `FuroLanguage` and applies it to UI5.
 *
 * Resolves once UI5 has refetched its message bundles and re-rendered every language-aware
 * component; subscribers and the event fire at that point, so `await` this before asserting on
 * rendered text.
 *
 * @event {CustomEvent<string>} furo-language-changed - Fired on `window` once the change is applied.
 * @param language - BCP 47 language tag, e.g. "de".
 */
export const setLanguage = async (language: string): Promise<void> => {
  _captureUi5Default();
  _language = language;
  _restored = true;
  writeSetting(LANGUAGE_STORAGE_KEY, language);
  await setUi5Language(language);
  _announce(language);
};

/**
 * Clears the session and persisted language, restoring the one UI5 had before this module first
 * changed it — the app's own configuration, or the browser language if it never set one.
 *
 * This also drops the memoized storage read, so the next resolve starts from scratch.
 *
 * @event {CustomEvent<string>} furo-language-changed - Fired on `window` once the change is applied.
 */
export const clearLanguage = async (): Promise<void> => {
  _captureUi5Default();
  _language = undefined;
  _restored = false;
  removeSetting(LANGUAGE_STORAGE_KEY);
  // "" is how UI5 spells "not configured": it then falls back to the browser language itself.
  await setUi5Language(_ui5Default ?? "");
  _announce(_orUndefined(getUi5Language()) ?? navigator.language);
};

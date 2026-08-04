import { getLanguage as getUi5Language } from "@ui5/webcomponents-base/dist/config/Language.js";
import { afterAll, afterEach, assert, describe, it } from "vitest";

import { LANGUAGE_STORAGE_KEY, clearLanguage, getLanguage, setLanguage } from "./language";
import { clearLocale, getLocale } from "./locale";

describe("settings/language", () => {
  afterEach(async () => {
    // The UI5 language and localStorage are global; start every case from "not configured".
    await clearLanguage();
  });

  afterAll(async () => {
    await clearLanguage();
  });

  it("should always return a non-empty string", () => {
    const language = getLanguage();
    assert.typeOf(language, "string");
    assert.isNotEmpty(language);
  });

  it("should fall back to the browser language while nothing is configured", () => {
    assert.equal(getLanguage(), navigator.language);
  });

  it("should apply the language to UI5, so message bundles follow", async () => {
    await setLanguage("de");
    assert.equal(getLanguage(), "de");
    assert.equal(getUi5Language(), "de");
  });

  it("should persist the language under FuroLanguage and drop it again on clearLanguage", async () => {
    await setLanguage("de");
    assert.equal(localStorage.getItem(LANGUAGE_STORAGE_KEY), "de");

    await clearLanguage();
    assert.isNull(localStorage.getItem(LANGUAGE_STORAGE_KEY));
    assert.equal(getLanguage(), navigator.language);
  });

  it("should prefer a persisted language over the UI5 language", async () => {
    // clearLanguage() in afterEach dropped the memoized read, so this is the page-load path.
    localStorage.setItem(LANGUAGE_STORAGE_KEY, "fr");
    assert.equal(getLanguage(), "fr");
  });

  it("should read storage only once, so later direct writes are ignored", () => {
    assert.equal(getLanguage(), navigator.language);

    // Bypassing setLanguage() after the first resolve is deliberately not picked up.
    localStorage.setItem(LANGUAGE_STORAGE_KEY, "fr");
    assert.equal(getLanguage(), navigator.language);
  });

  it("should drive the locale, which falls back to the UI5 locale when unset", async () => {
    clearLocale();
    await setLanguage("de");
    // The two are separate settings, but an app that only picks a language still formats in it.
    assert.equal(getLocale(), "de");
  });

  it("should notify subscribers and fire furo-language-changed once UI5 has applied it", async () => {
    const seen: string[] = [];
    getLanguage(language => seen.push(language));

    let eventDetail = "";
    window.addEventListener(
      "furo-language-changed",
      (e: Event) => {
        eventDetail = (e as CustomEvent<string>).detail;
      },
      { once: true }
    );

    await setLanguage("de");

    // Both fire only after UI5 resolved, so the language is already applied when they are observed.
    assert.deepEqual(seen, ["de"]);
    assert.equal(eventDetail, "de");
    assert.equal(getUi5Language(), "de");
  });
});

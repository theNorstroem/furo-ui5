import { setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";
import { afterAll, assert, beforeEach, describe, it } from "vitest";

import { LOCALE_STORAGE_KEY, clearLocale, getLocale, setLocale } from "./locale";

import { formatRelativeTime } from "@/util/formatRelativeTime";

describe("settings/locale", () => {
  beforeEach(() => {
    // Both the module state and localStorage are global; start every case from "follow UI5".
    clearLocale();
  });

  afterAll(async () => {
    // formatRelativeTime and the type renderers read through getLocale(), so leave no locale
    // behind for the other spec files sharing this origin.
    clearLocale();
    await setLanguage("");
  });

  it("should always return a string, so the [locale, fallback] array form of Intl cannot throw", () => {
    const locale = getLocale();
    assert.typeOf(locale, "string");
    assert.isNotEmpty(locale);
    // The four date renderers use exactly this shape; a non-string element would be a TypeError.
    assert.doesNotThrow(() => new Intl.DateTimeFormat([getLocale(), "de-CH"], { year: "numeric" }));
  });

  it("should follow the UI5 locale while no explicit locale is set", async () => {
    await setLanguage("de-CH");
    assert.equal(getLocale(), "de-CH");
    // Compare against the locale itself rather than a literal — the grouping glyph is ICU's call.
    assert.equal(
      new Intl.NumberFormat(getLocale(), {}).format(1234.5),
      new Intl.NumberFormat("de-CH", {}).format(1234.5)
    );
  });

  it("should let setLocale override the UI5 locale without touching the UI5 language", async () => {
    await setLanguage("de-CH");
    setLocale("en-US");
    assert.equal(getLocale(), "en-US");
    assert.equal(new Intl.NumberFormat(getLocale(), {}).format(1234.5), "1,234.5");
    // The UI language is a separate axis — message bundles must stay on de-CH.
    const { getLanguage } = await import("@ui5/webcomponents-base/dist/config/Language.js");
    assert.equal(getLanguage(), "de-CH");
  });

  it("should persist the locale under FuroLocale and drop it again on clearLocale", async () => {
    await setLanguage("de-CH");

    setLocale("en-US");
    assert.equal(localStorage.getItem(LOCALE_STORAGE_KEY), "en-US");

    clearLocale();
    assert.isNull(localStorage.getItem(LOCALE_STORAGE_KEY));
    assert.equal(getLocale(), "de-CH");
  });

  it("should prefer a persisted locale over the UI5 locale", async () => {
    await setLanguage("de-CH");
    localStorage.setItem(LOCALE_STORAGE_KEY, "en-US");

    // Nothing was set this session, so this is the page-load path: storage beats the UI5 locale.
    assert.equal(getLocale(), "en-US");

    localStorage.removeItem(LOCALE_STORAGE_KEY);
    assert.equal(getLocale(), "de-CH");
  });

  it("should drive formatRelativeTime, which reads the locale through getLocale()", () => {
    const fiveDaysAgo = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString();

    setLocale("en-GB");
    assert.include(formatRelativeTime(fiveDaysAgo)!.text, "day");

    setLocale("de-DE");
    assert.include(formatRelativeTime(fiveDaysAgo)!.text, "Tag");
  });

  it("should notify subscribers and fire furo-locale-changed on setLocale", () => {
    const seen: string[] = [];
    getLocale(locale => seen.push(locale));

    let eventDetail = "";
    window.addEventListener("furo-locale-changed", (e: Event) => {
      eventDetail = (e as CustomEvent<string>).detail;
    }, { once: true });

    setLocale("fr-FR");

    assert.deepEqual(seen, ["fr-FR"]);
    assert.equal(eventDetail, "fr-FR");
  });
});

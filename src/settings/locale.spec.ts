import { setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";
import { afterAll, assert, describe, it } from "vitest";

import { getLocale, setLocale } from "./locale";

import { formatRelativeTime } from "@/util/formatRelativeTime";

describe("settings/locale", () => {
  afterAll(async () => {
    // Both the UI5 language and the module-level override are global state, and formatRelativeTime
    // now reads through getLocale() — leave them as the suite found them.
    await setLanguage("");
    setLocale(navigator.language);
  });

  it("should always return a string, so the [locale, fallback] array form of Intl cannot throw", () => {
    const locale = getLocale();
    assert.typeOf(locale, "string");
    assert.isNotEmpty(locale);
    // The four date renderers use exactly this shape; a non-string element would be a TypeError.
    assert.doesNotThrow(() => new Intl.DateTimeFormat([getLocale(), "de-CH"], { year: "numeric" }));
  });

  it("should follow the UI5 language while no explicit locale is set", async () => {
    await setLanguage("de-CH");
    assert.equal(getLocale(), "de-CH");
    // Compare against the locale itself rather than a literal — the grouping glyph is ICU's call.
    assert.equal(
      new Intl.NumberFormat(getLocale(), {}).format(1234.5),
      new Intl.NumberFormat("de-CH", {}).format(1234.5)
    );
  });

  it("should let setLocale override the UI5 language", async () => {
    await setLanguage("de-CH");
    setLocale("en-US");
    assert.equal(getLocale(), "en-US");
    assert.equal(new Intl.NumberFormat(getLocale(), {}).format(1234.5), "1,234.5");
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

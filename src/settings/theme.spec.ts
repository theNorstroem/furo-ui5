import { getTheme as getUi5Theme, setTheme as setUi5Theme } from "@ui5/webcomponents-base/dist/config/Theme.js";
import { afterAll, afterEach, assert, beforeAll, describe, it } from "vitest";

import { OPERATING_SYSTEM, THEME_STORAGE_KEY, applyTheme, clearTheme, getTheme, getThemeSetting, setTheme } from "./theme";

import "@/Assets";

/**
 * The suite runs under whatever contrast preference the test browser reports — normally "no
 * preference" — so OS mode is asserted against `sap_horizon_auto`. The contrast branch is covered
 * by the resolution assertions rather than by faking a media query.
 *
 * That the theme's CSS actually reaches the page is *not* asserted here. UI5 documents
 * `setTheme()` as resolving only once the assets are fetched and applied, so awaiting it already
 * fails loudly if they do not load. Comparing the applied custom properties across two themes was
 * tried and reverted: the theme stylesheet is document-global and shared with every other spec
 * file, so the comparison only held when this file ran completely alone.
 */
describe("settings/theme", () => {
  // The applied theme is global to the page, not to this file: leaving UI5 on a different theme
  // makes every later spec render under CSS it did not expect, which shows up as unrelated
  // focus/visibility failures elsewhere in the suite.
  let originalTheme: string;

  beforeAll(() => {
    originalTheme = getUi5Theme();
  });

  afterEach(async () => {
    // The UI5 theme and localStorage are global; start every case from "follow the OS".
    await clearTheme();
  });

  afterAll(async () => {
    await clearTheme();
    await setUi5Theme(originalTheme);
  });

  it("should follow the operating system while nothing is stored", () => {
    assert.equal(getThemeSetting(), OPERATING_SYSTEM);
    assert.equal(getTheme(), "sap_horizon_auto");
  });

  it("should apply an auto theme to UI5 in OS mode, so dark/light switches in CSS", async () => {
    await applyTheme();
    assert.equal(getUi5Theme(), "sap_horizon_auto");
  });

  it("should apply a concrete theme and report it as both setting and theme", async () => {
    await setTheme("sap_horizon_dark");

    assert.equal(getThemeSetting(), "sap_horizon_dark");
    assert.equal(getTheme(), "sap_horizon_dark");
    assert.equal(getUi5Theme(), "sap_horizon_dark");
  });

  it("should persist the theme under FuroTheme and drop it again on clearTheme", async () => {
    await setTheme("sap_horizon_dark");
    assert.equal(localStorage.getItem(THEME_STORAGE_KEY), "sap_horizon_dark");

    await clearTheme();
    assert.isNull(localStorage.getItem(THEME_STORAGE_KEY));
    assert.equal(getThemeSetting(), OPERATING_SYSTEM);
    assert.equal(getUi5Theme(), "sap_horizon_auto");
  });

  it("should restore a persisted theme on applyTheme, which is what init does", async () => {
    // clearTheme() in afterEach dropped the memoized read, so this is the page-load path.
    localStorage.setItem(THEME_STORAGE_KEY, "sap_horizon_dark");

    assert.equal(getThemeSetting(), "sap_horizon_dark");
    await applyTheme();
    assert.equal(getUi5Theme(), "sap_horizon_dark");
  });

  it("should read storage only once, so later direct writes are ignored", () => {
    assert.equal(getThemeSetting(), OPERATING_SYSTEM);

    // Bypassing setTheme() after the first resolve is deliberately not picked up.
    localStorage.setItem(THEME_STORAGE_KEY, "sap_horizon_dark");
    assert.equal(getThemeSetting(), OPERATING_SYSTEM);
  });

  it("should notify subscribers and fire furo-theme-changed once UI5 has applied it", async () => {
    const seen: string[] = [];
    getTheme(theme => seen.push(theme));

    let eventDetail = "";
    window.addEventListener(
      "furo-theme-changed",
      (e: Event) => {
        eventDetail = (e as CustomEvent<string>).detail;
      },
      { once: true }
    );

    await setTheme("sap_horizon_dark");

    assert.deepEqual(seen, ["sap_horizon_dark"]);
    assert.equal(eventDetail, "sap_horizon_dark");
    assert.equal(getUi5Theme(), "sap_horizon_dark");
  });
});

import { afterEach, assert, beforeEach, describe, it } from "vitest";

import { buildUi5Config } from "./buildUi5Config";
import { loadCalendarAssets } from "./calendarAssets";
import { initUi5Config } from "./init";

/**
 * `./init` is imported for {@link initUi5Config} only — its import side effect is deliberately not
 * exercised. Vitest shares one document across spec files, so a config tag left in the page changes
 * UI5's configuration for every file that runs afterwards; doing that here produced intermittent,
 * unrelated focus and visibility failures elsewhere in the suite. The side effect is three lines
 * calling the function tested below.
 *
 * Note this file must therefore never assert on the tag *it* caused on import — every tag here is
 * one these cases add and remove themselves.
 */
const removeConfigTags = () => {
  document.head.querySelectorAll("script[data-ui5-config]").forEach(tag => {
    tag.remove();
  });
};

// Runs at file evaluation, immediately after ./init's import side effect, so its tag is out of the
// shared document before anything else can read it.
removeConfigTags();

describe("settings/init", () => {
  beforeEach(removeConfigTags);
  afterEach(removeConfigTags);

  it("should write the persisted settings as a UI5 config tag", () => {
    const tag = initUi5Config();

    assert.isDefined(tag);
    assert.equal(tag.getAttribute("type"), "application/json");

    const config = JSON.parse(tag.textContent) as Record<string, unknown>;
    assert.deepEqual(config, buildUi5Config() as unknown as Record<string, unknown>);
    assert.containsAllKeys(config, [
      "theme",
      "language",
      "animationMode",
      "calendarType",
      "formatSettings",
    ]);
  });

  it("should write the given configuration as JSON", () => {
    const tag = initUi5Config({
      theme: "sap_horizon",
      language: "en",
      animationMode: "none",
      calendarType: "Gregorian",
      formatSettings: { firstDayOfWeek: 0 },
    });

    assert.isDefined(tag);
    assert.deepEqual(JSON.parse(tag.textContent), {
      theme: "sap_horizon",
      language: "en",
      animationMode: "none",
      calendarType: "Gregorian",
      formatSettings: { firstDayOfWeek: 0 },
    });
  });

  it("should keep a configuration the page already ships", () => {
    const existing = document.createElement("script");
    existing.setAttribute("data-ui5-config", "");
    existing.type = "application/json";
    existing.textContent = '{"theme":"sap_fiori_3"}';
    document.head.appendChild(existing);

    const tag = initUi5Config();

    assert.isUndefined(tag, "an app's own configuration must win");
    assert.lengthOf(document.head.querySelectorAll("script[data-ui5-config]"), 1);
    assert.equal(existing.textContent, '{"theme":"sap_fiori_3"}');
  });

  it("should load calendar assets only for the calendars in use", async () => {
    // Gregorian is built in, and undefined stands for "no secondary calendar" — neither may throw.
    await loadCalendarAssets("Gregorian", undefined);
    await loadCalendarAssets("Islamic", "Japanese");
    await loadCalendarAssets("nonsense");
  });
});

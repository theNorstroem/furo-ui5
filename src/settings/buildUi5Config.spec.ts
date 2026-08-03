import { afterEach, assert, beforeEach, describe, it } from "vitest";

import { buildUi5Config } from "./buildUi5Config";
import {
  ANIMATION_MODE_STORAGE_KEY,
  CALENDAR_STORAGE_KEY,
  FIRST_DAY_OF_WEEK_STORAGE_KEY,
  LANGUAGE_STORAGE_KEY,
  SECONDARY_CALENDAR_STORAGE_KEY,
  THEME_STORAGE_KEY,
} from "./keys";

const ALL_KEYS = [
  THEME_STORAGE_KEY,
  LANGUAGE_STORAGE_KEY,
  ANIMATION_MODE_STORAGE_KEY,
  CALENDAR_STORAGE_KEY,
  SECONDARY_CALENDAR_STORAGE_KEY,
  FIRST_DAY_OF_WEEK_STORAGE_KEY,
];

const clearAll = () => {
  ALL_KEYS.forEach(key => {
    localStorage.removeItem(key);
  });
};

describe("settings/buildUi5Config", () => {
  beforeEach(clearAll);
  afterEach(clearAll);

  it("should build the furo defaults when nothing is stored", () => {
    const config = buildUi5Config();

    assert.deepEqual(config, {
      // "OperatingSystem" is not a UI5 theme name, so it is resolved to the auto theme.
      theme: "sap_horizon_auto",
      language: navigator.language,
      animationMode: "none",
      calendarType: "Gregorian",
      formatSettings: { firstDayOfWeek: 0 },
    });
  });

  it("should not emit secondaryCalendarType while none is stored", () => {
    // UI5 shows a second calendar whenever the key is present, so it has to be absent, not empty.
    assert.notProperty(buildUi5Config(), "secondaryCalendarType");
  });

  it("should take every value from storage", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "sap_horizon_dark");
    localStorage.setItem(LANGUAGE_STORAGE_KEY, "de");
    localStorage.setItem(ANIMATION_MODE_STORAGE_KEY, "full");
    localStorage.setItem(CALENDAR_STORAGE_KEY, "Islamic");
    localStorage.setItem(SECONDARY_CALENDAR_STORAGE_KEY, "Japanese");
    localStorage.setItem(FIRST_DAY_OF_WEEK_STORAGE_KEY, "1");

    assert.deepEqual(buildUi5Config(), {
      theme: "sap_horizon_dark",
      language: "de",
      animationMode: "full",
      calendarType: "Islamic",
      secondaryCalendarType: "Japanese",
      formatSettings: { firstDayOfWeek: 1 },
    });
  });

  it("should ignore stored calendars that are not calendar types", () => {
    // Storage is user-writable and outlives the code that wrote it; junk must not reach the tag.
    localStorage.setItem(CALENDAR_STORAGE_KEY, "CALENDAR_TYPE_GREGORIAN");
    localStorage.setItem(SECONDARY_CALENDAR_STORAGE_KEY, "nonsense");

    const config = buildUi5Config();

    assert.equal(config.calendarType, "Gregorian");
    assert.notProperty(config, "secondaryCalendarType");
  });

  it("should emit firstDayOfWeek as a number, not the stored string", () => {
    localStorage.setItem(FIRST_DAY_OF_WEEK_STORAGE_KEY, "3");
    assert.strictEqual(buildUi5Config().formatSettings.firstDayOfWeek, 3);
  });

  it("should serialize to the JSON shape UI5 parses", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "sap_horizon");
    localStorage.setItem(LANGUAGE_STORAGE_KEY, "en");

    const parsed: unknown = JSON.parse(JSON.stringify(buildUi5Config()));

    assert.deepEqual(parsed, {
      theme: "sap_horizon",
      language: "en",
      animationMode: "none",
      calendarType: "Gregorian",
      formatSettings: { firstDayOfWeek: 0 },
    });
  });
});

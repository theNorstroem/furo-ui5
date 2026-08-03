import CalendarType from "@ui5/webcomponents-base/dist/types/CalendarType.js";

import {
  ANIMATION_MODE_STORAGE_KEY,
  CALENDAR_STORAGE_KEY,
  FIRST_DAY_OF_WEEK_STORAGE_KEY,
  LANGUAGE_STORAGE_KEY,
  SECONDARY_CALENDAR_STORAGE_KEY,
  THEME_STORAGE_KEY,
} from "./keys";
import { OPERATING_SYSTEM, resolveTheme } from "./resolveTheme";
import { readSetting } from "./storage";

/**
 * The shape UI5 reads from a `data-ui5-config` script tag.
 */
export interface Ui5Config {
  theme: string;
  language: string;
  animationMode: string;
  calendarType: string;
  secondaryCalendarType?: string;
  formatSettings: { firstDayOfWeek: number };
}

// Duplicated from the setting modules rather than imported: every one of them reads UI5's
// configuration as its fallback, and doing that here would make UI5 parse the config tag this
// function exists to produce. See ./init for the ordering constraint.
const DEFAULT_ANIMATION_MODE = "none";
const DEFAULT_FIRST_DAY_OF_WEEK = 0;

const _storedCalendar = (key: string): string | undefined => {
  const stored = readSetting(key);
  return stored !== undefined && stored in CalendarType ? stored : undefined;
};

/**
 * Builds the UI5 page configuration from the persisted furo settings, filling in the furo defaults
 * for anything the user has not chosen.
 *
 * Pure: it only reads `localStorage` and the OS contrast preference, and touches neither the DOM nor
 * UI5. {@link initUi5Config} is what puts the result in the page.
 */
export const buildUi5Config = (): Ui5Config => {
  const secondaryCalendarType = _storedCalendar(SECONDARY_CALENDAR_STORAGE_KEY);

  return {
    // A stored "OperatingSystem" is not a UI5 theme name; resolve it to the auto theme.
    theme: resolveTheme(readSetting(THEME_STORAGE_KEY) ?? OPERATING_SYSTEM),
    language: readSetting(LANGUAGE_STORAGE_KEY) ?? navigator.language,
    animationMode: readSetting(ANIMATION_MODE_STORAGE_KEY) ?? DEFAULT_ANIMATION_MODE,
    calendarType: _storedCalendar(CALENDAR_STORAGE_KEY) ?? CalendarType.Gregorian,
    // Omitted rather than emitted empty: UI5 shows a second calendar whenever the key is present.
    ...(secondaryCalendarType === undefined ? {} : { secondaryCalendarType }),
    formatSettings: {
      firstDayOfWeek: Number(readSetting(FIRST_DAY_OF_WEEK_STORAGE_KEY) ?? DEFAULT_FIRST_DAY_OF_WEEK),
    },
  };
};

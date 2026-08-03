/**
 * The `localStorage` keys every setting persists under.
 *
 * Collected here, and deliberately free of UI5 imports, so `./init` can read the stored settings
 * before UI5's configuration is touched. Each setting module re-exports its own key, so consumers
 * keep importing it from there.
 */

export const LOCALE_STORAGE_KEY = "FuroLocale";
export const LANGUAGE_STORAGE_KEY = "FuroLanguage";
export const THEME_STORAGE_KEY = "FuroTheme";
export const CALENDAR_STORAGE_KEY = "FuroCalendar";
export const SECONDARY_CALENDAR_STORAGE_KEY = "FuroSecondaryCalendar";
export const ANIMATION_MODE_STORAGE_KEY = "FuroAnimationMode";
export const FIRST_DAY_OF_WEEK_STORAGE_KEY = "FuroFirstDayOfWeek";

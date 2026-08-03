/**
 * Barrel for the app-level settings shipped under `@furo/ui5/settings`.
 *
 * These configure how furo components present data — as opposed to `@furo/ui5/types`, which spells
 * property *values*. Settings are process-wide: an app sets them once at startup, and components
 * read them at format/render time. Every one persists to `localStorage` and is read back by
 * `@furo/ui5/settings/init`.
 *
 * `./init` is deliberately **not** re-exported here: it applies the page configuration as an import
 * side effect, which must happen before anything reads UI5's configuration, and importing this
 * barrel is far too late for that. Import it directly, first thing in the app entry point.
 *
 * Exported as a barrel only, for the same reason as `./models` and `./types`: a `./settings/*`
 * wildcard would freeze every filename as public API, and would additionally advertise the
 * co-located `*.spec` files, which are excluded from the published tarball.
 */
export { getLocale, setLocale, clearLocale, LOCALE_STORAGE_KEY } from "./locale";
export { getLanguage, setLanguage, clearLanguage, LANGUAGE_STORAGE_KEY } from "./language";
export {
  getTheme,
  getThemeSetting,
  setTheme,
  applyTheme,
  clearTheme,
  THEME_STORAGE_KEY,
  OPERATING_SYSTEM,
} from "./theme";
export {
  getCalendar,
  setCalendar,
  clearCalendar,
  getSecondaryCalendar,
  setSecondaryCalendar,
  clearSecondaryCalendar,
  CALENDAR_STORAGE_KEY,
  SECONDARY_CALENDAR_STORAGE_KEY,
} from "./calendar";
export {
  getAnimationMode,
  setAnimationMode,
  clearAnimationMode,
  ANIMATION_MODE_STORAGE_KEY,
  DEFAULT_ANIMATION_MODE,
} from "./animationMode";
export {
  getFirstDayOfWeek,
  setFirstDayOfWeek,
  clearFirstDayOfWeek,
  FIRST_DAY_OF_WEEK_STORAGE_KEY,
  DEFAULT_FIRST_DAY_OF_WEEK,
} from "./firstDayOfWeek";

// Side-effect free, so they can live on the barrel: the bootstrap pieces `./init` is built from,
// for apps assembling their own.
export { type Ui5Config, buildUi5Config } from "./buildUi5Config";
export { loadCalendarAssets } from "./calendarAssets";

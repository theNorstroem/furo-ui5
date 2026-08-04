import CalendarType from "@/types/CalendarType";

/**
 * Calendars whose data UI5 only ships on demand. `Gregorian` is built in and has no entry.
 */
const CALENDAR_ASSETS: Partial<Record<CalendarType, () => Promise<unknown>>> = {
  [CalendarType.Islamic]: () => import("@ui5/webcomponents-localization/dist/features/calendar/Islamic.js"),
  [CalendarType.Buddhist]: () => import("@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js"),
  [CalendarType.Persian]: () => import("@ui5/webcomponents-localization/dist/features/calendar/Persian.js"),
  [CalendarType.Japanese]: () => import("@ui5/webcomponents-localization/dist/features/calendar/Japanese.js"),
};

/**
 * Loads the calendar data for the given calendar types.
 *
 * A non-Gregorian calendar renders nothing without it. The imports are dynamic on purpose, so an
 * app that only uses Gregorian never downloads the others.
 *
 * @param calendars - the calendar types in use; `Gregorian`, unknown and duplicate values are
 * ignored, as is `undefined`, so the result of {@link buildUi5Config} can be spread in directly.
 * @returns a promise resolving once every calendar that needed loading has loaded.
 */
export const loadCalendarAssets = async (...calendars: (string | undefined)[]): Promise<void> => {
  const needed = [...new Set(calendars)]
    .map(calendar => (calendar === undefined ? undefined : CALENDAR_ASSETS[calendar as CalendarType]))
    .filter((load): load is () => Promise<unknown> => load !== undefined);

  await Promise.all(needed.map(load => load()));
};

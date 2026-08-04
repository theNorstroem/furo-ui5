import {
  getCalendarType as getUi5CalendarType,
  getSecondaryCalendarType as getUi5SecondaryCalendarType,
} from "@ui5/webcomponents-base/dist/config/CalendarType.js";

import { CALENDAR_STORAGE_KEY, SECONDARY_CALENDAR_STORAGE_KEY } from "./keys";
import { readSetting, removeSetting, writeSetting } from "./storage";

import CalendarType from "@/types/CalendarType";

export { CALENDAR_STORAGE_KEY, SECONDARY_CALENDAR_STORAGE_KEY };

/**
 * Callback interface for receiving calendar changes.
 */
type CalendarUpdateFunc = (calendar: CalendarType | undefined) => void;

let _calendar: CalendarType | undefined;
let _secondaryCalendar: CalendarType | undefined;

/** Guard the one-time storage read, so resolving is not a storage lookup per call. */
let _calendarRestored = false;
let _secondaryCalendarRestored = false;

const _calendarCallbacks: CalendarUpdateFunc[] = [];
const _secondaryCalendarCallbacks: CalendarUpdateFunc[] = [];

// Storage is user-writable and outlives the code that wrote it, so a value that is no longer a
// calendar type is dropped rather than handed to a component as an invalid attribute.
const _readCalendar = (key: string): CalendarType | undefined => {
  const stored = readSetting(key);
  return stored !== undefined && stored in CalendarType ? (stored as CalendarType) : undefined;
};

const _announce = (eventName: string, callbacks: CalendarUpdateFunc[], calendar: CalendarType | undefined): void => {
  callbacks.forEach(f => {
    f(calendar);
  });
  window.dispatchEvent(new CustomEvent(eventName, { detail: calendar }));
};

// The persisted value is read once and then kept in memory: the app applies its stored settings
// during startup, before anything resolves a calendar, so re-reading per call would buy nothing.
// A value written to localStorage afterwards is therefore only picked up via the setters.
const _currentCalendar = (): CalendarType => {
  if (!_calendarRestored) {
    _calendarRestored = true;
    _calendar = _readCalendar(CALENDAR_STORAGE_KEY);
  }
  // UI5 falls back to Gregorian itself, so this is always a valid type.
  return _calendar ?? getUi5CalendarType();
};

const _currentSecondaryCalendar = (): CalendarType | undefined => {
  if (!_secondaryCalendarRestored) {
    _secondaryCalendarRestored = true;
    _secondaryCalendar = _readCalendar(SECONDARY_CALENDAR_STORAGE_KEY);
  }
  return _secondaryCalendar ?? getUi5SecondaryCalendarType();
};

/**
 * Returns the primary calendar type, for binding to a component's `primary-calendar-type`.
 *
 * Resolution order: the value last passed to {@link setCalendar}, then the one persisted under
 * `FuroCalendar` in `localStorage`, then the calendar UI5 was configured with — which is
 * `Gregorian` unless the page set one.
 *
 * Unlike the theme and the language, this is *not* pushed to UI5: its calendar type is fixed at
 * startup by the page configuration and has no runtime setter, so components have to be given the
 * value. Anything other than `Gregorian` also needs its calendar asset imported, e.g.
 * `import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js"`.
 *
 * The persisted value is read once and cached, on the assumption that the app applies its stored
 * settings during startup. Write it through {@link setCalendar} rather than to `localStorage`
 * directly; a direct write after the first resolve is not picked up (and notifies nobody).
 *
 * @param updateCallback - optional listener invoked with the new calendar on every change.
 */
export const getCalendar = (updateCallback?: CalendarUpdateFunc): CalendarType => {
  if (updateCallback) {
    _calendarCallbacks.push(updateCallback);
  }

  return _currentCalendar();
};

/**
 * Sets the primary calendar type and persists it under `FuroCalendar`.
 *
 * @event {CustomEvent<CalendarType>} furo-calendar-changed - Fired on `window` when it changed.
 */
export const setCalendar = (calendar: CalendarType): void => {
  _calendar = calendar;
  _calendarRestored = true;
  writeSetting(CALENDAR_STORAGE_KEY, calendar);
  _announce("furo-calendar-changed", _calendarCallbacks, calendar);
};

/**
 * Clears the session and persisted primary calendar, falling back to UI5's configured one.
 *
 * This also drops the memoized storage read, so the next resolve starts from scratch.
 *
 * @event {CustomEvent<CalendarType>} furo-calendar-changed - Fired on `window` with the calendar
 * now in effect.
 */
export const clearCalendar = (): void => {
  _calendar = undefined;
  _calendarRestored = false;
  removeSetting(CALENDAR_STORAGE_KEY);
  // Nothing is left to override it — read straight from UI5 rather than through the resolver,
  // which would re-arm the memo this is meant to release.
  _announce("furo-calendar-changed", _calendarCallbacks, getUi5CalendarType());
};

/**
 * Returns the secondary calendar type, for binding to a component's `secondary-calendar-type`, or
 * `undefined` when no secondary calendar should be shown — which is the default.
 *
 * Resolves like {@link getCalendar}, via `FuroSecondaryCalendar`.
 *
 * @param updateCallback - optional listener invoked with the new calendar on every change.
 */
export const getSecondaryCalendar = (updateCallback?: CalendarUpdateFunc): CalendarType | undefined => {
  if (updateCallback) {
    _secondaryCalendarCallbacks.push(updateCallback);
  }

  return _currentSecondaryCalendar();
};

/**
 * Sets the secondary calendar type and persists it under `FuroSecondaryCalendar`.
 *
 * @event {CustomEvent<CalendarType>} furo-secondary-calendar-changed - Fired on `window` when it
 * changed.
 */
export const setSecondaryCalendar = (calendar: CalendarType): void => {
  _secondaryCalendar = calendar;
  _secondaryCalendarRestored = true;
  writeSetting(SECONDARY_CALENDAR_STORAGE_KEY, calendar);
  _announce("furo-secondary-calendar-changed", _secondaryCalendarCallbacks, calendar);
};

/**
 * Clears the session and persisted secondary calendar, falling back to UI5's configured one —
 * normally none at all.
 *
 * @event {CustomEvent<CalendarType>} furo-secondary-calendar-changed - Fired on `window` with the
 * calendar now in effect.
 */
export const clearSecondaryCalendar = (): void => {
  _secondaryCalendar = undefined;
  _secondaryCalendarRestored = false;
  removeSetting(SECONDARY_CALENDAR_STORAGE_KEY);
  _announce("furo-secondary-calendar-changed", _secondaryCalendarCallbacks, getUi5SecondaryCalendarType());
};

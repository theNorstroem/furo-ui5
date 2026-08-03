import { getFirstDayOfWeek as getUi5FirstDayOfWeek } from "@ui5/webcomponents-base/dist/config/FormatSettings.js";

import { FIRST_DAY_OF_WEEK_STORAGE_KEY } from "./keys";
import { readSetting, removeSetting, writeSetting } from "./storage";

export { FIRST_DAY_OF_WEEK_STORAGE_KEY };

/**
 * Callback interface for receiving first-day-of-week changes.
 */
type FirstDayOfWeekUpdateFunc = (firstDayOfWeek: number) => void;

/** The furo default: Sunday, matching the config `./init` writes. */
export const DEFAULT_FIRST_DAY_OF_WEEK = 0;

let _firstDayOfWeek: number | undefined;

/** Guards the one-time storage read. */
let _restored = false;

const _callbacks: FirstDayOfWeekUpdateFunc[] = [];

// Storage is user-writable and outlives the code that wrote it, so anything that is not a weekday
// index is dropped rather than handed to a calendar.
const _readStored = (): number | undefined => {
  const stored = readSetting(FIRST_DAY_OF_WEEK_STORAGE_KEY);
  if (stored === undefined) {
    return undefined;
  }
  const day = Number(stored);
  return Number.isInteger(day) && day >= 0 && day <= 6 ? day : undefined;
};

const _current = (): number => {
  if (!_restored) {
    _restored = true;
    _firstDayOfWeek = _readStored();
  }
  return _firstDayOfWeek ?? getUi5FirstDayOfWeek() ?? DEFAULT_FIRST_DAY_OF_WEEK;
};

const _announce = (firstDayOfWeek: number): void => {
  _callbacks.forEach(f => {
    f(firstDayOfWeek);
  });
  window.dispatchEvent(new CustomEvent("furo-first-day-of-week-changed", { detail: firstDayOfWeek }));
};

/**
 * Returns the first day of the week, 0 (Sunday) through 6 (Saturday).
 *
 * Resolution order: the value last passed to {@link setFirstDayOfWeek}, then the one persisted under
 * `FuroFirstDayOfWeek` in `localStorage`, then UI5's configured format settings — which is what
 * `./init` wrote into the page configuration.
 *
 * Like the calendar type, this is *not* pushed to UI5: its format settings are fixed at startup by
 * the page configuration and have no runtime setter. A change therefore only reaches UI5's own
 * calendars after a reload, once `./init` has written the new value into the config tag.
 *
 * @param updateCallback - optional listener invoked with the new day on every change.
 */
export const getFirstDayOfWeek = (updateCallback?: FirstDayOfWeekUpdateFunc): number => {
  if (updateCallback) {
    _callbacks.push(updateCallback);
  }

  return _current();
};

/**
 * Sets the first day of the week and persists it under `FuroFirstDayOfWeek`.
 *
 * @event {CustomEvent<number>} furo-first-day-of-week-changed - Fired on `window` when it changed.
 * @param firstDayOfWeek - 0 (Sunday) through 6 (Saturday).
 * @throws {RangeError} when the value is not a weekday index.
 */
export const setFirstDayOfWeek = (firstDayOfWeek: number): void => {
  if (!Number.isInteger(firstDayOfWeek) || firstDayOfWeek < 0 || firstDayOfWeek > 6) {
    throw new RangeError(`first day of week must be an integer 0-6, got ${String(firstDayOfWeek)}`);
  }
  _firstDayOfWeek = firstDayOfWeek;
  _restored = true;
  writeSetting(FIRST_DAY_OF_WEEK_STORAGE_KEY, String(firstDayOfWeek));
  _announce(firstDayOfWeek);
};

/**
 * Clears the session and persisted first day of the week, falling back to UI5's configured one.
 *
 * This also drops the memoized storage read, so the next resolve starts from scratch.
 *
 * @event {CustomEvent<number>} furo-first-day-of-week-changed - Fired on `window` with the day now
 * in effect.
 */
export const clearFirstDayOfWeek = (): void => {
  _firstDayOfWeek = undefined;
  _restored = false;
  removeSetting(FIRST_DAY_OF_WEEK_STORAGE_KEY);
  _announce(getUi5FirstDayOfWeek() ?? DEFAULT_FIRST_DAY_OF_WEEK);
};

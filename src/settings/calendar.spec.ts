import { afterAll, afterEach, assert, describe, it } from "vitest";

import {
  CALENDAR_STORAGE_KEY,
  SECONDARY_CALENDAR_STORAGE_KEY,
  clearCalendar,
  clearSecondaryCalendar,
  getCalendar,
  getSecondaryCalendar,
  setCalendar,
  setSecondaryCalendar,
} from "./calendar";

import CalendarType from "@/types/CalendarType";

describe("settings/calendar", () => {
  afterEach(() => {
    // localStorage is global; start every case from "not configured".
    clearCalendar();
    clearSecondaryCalendar();
  });

  afterAll(() => {
    clearCalendar();
    clearSecondaryCalendar();
  });

  it("should default to UI5's calendar, which is Gregorian unless the page configured one", () => {
    assert.equal(getCalendar(), CalendarType.Gregorian);
  });

  it("should default to no secondary calendar", () => {
    assert.isUndefined(getSecondaryCalendar());
  });

  it("should set and persist the calendar under FuroCalendar", () => {
    setCalendar(CalendarType.Islamic);

    assert.equal(getCalendar(), CalendarType.Islamic);
    assert.equal(localStorage.getItem(CALENDAR_STORAGE_KEY), "Islamic");
  });

  it("should set and persist the secondary calendar under FuroSecondaryCalendar", () => {
    setSecondaryCalendar(CalendarType.Japanese);

    assert.equal(getSecondaryCalendar(), CalendarType.Japanese);
    assert.equal(localStorage.getItem(SECONDARY_CALENDAR_STORAGE_KEY), "Japanese");
  });

  it("should keep the two calendars independent", () => {
    setCalendar(CalendarType.Buddhist);
    setSecondaryCalendar(CalendarType.Persian);

    assert.equal(getCalendar(), CalendarType.Buddhist);
    assert.equal(getSecondaryCalendar(), CalendarType.Persian);

    clearSecondaryCalendar();
    assert.equal(getCalendar(), CalendarType.Buddhist, "clearing one must not clear the other");
    assert.isUndefined(getSecondaryCalendar());
  });

  it("should drop the persisted values on clear", () => {
    setCalendar(CalendarType.Islamic);
    setSecondaryCalendar(CalendarType.Japanese);

    clearCalendar();
    clearSecondaryCalendar();

    assert.isNull(localStorage.getItem(CALENDAR_STORAGE_KEY));
    assert.isNull(localStorage.getItem(SECONDARY_CALENDAR_STORAGE_KEY));
    assert.equal(getCalendar(), CalendarType.Gregorian);
    assert.isUndefined(getSecondaryCalendar());
  });

  it("should prefer a persisted calendar over UI5's", () => {
    // clearCalendar() in afterEach dropped the memoized read, so this is the page-load path.
    localStorage.setItem(CALENDAR_STORAGE_KEY, "Persian");
    assert.equal(getCalendar(), CalendarType.Persian);
  });

  it("should ignore a stored value that is not a calendar type", () => {
    // Storage is user-writable and outlives the code that wrote it; junk must not reach a component.
    localStorage.setItem(CALENDAR_STORAGE_KEY, "CALENDAR_TYPE_GREGORIAN");
    assert.equal(getCalendar(), CalendarType.Gregorian);

    localStorage.setItem(SECONDARY_CALENDAR_STORAGE_KEY, "nonsense");
    assert.isUndefined(getSecondaryCalendar());
  });

  it("should read storage only once, so later direct writes are ignored", () => {
    assert.equal(getCalendar(), CalendarType.Gregorian);

    // Bypassing setCalendar() after the first resolve is deliberately not picked up.
    localStorage.setItem(CALENDAR_STORAGE_KEY, "Islamic");
    assert.equal(getCalendar(), CalendarType.Gregorian);
  });

  it("should notify subscribers and fire the change events", () => {
    const seen: (CalendarType | undefined)[] = [];
    getCalendar(calendar => seen.push(calendar));

    const seenSecondary: (CalendarType | undefined)[] = [];
    getSecondaryCalendar(calendar => seenSecondary.push(calendar));

    let eventDetail: CalendarType | undefined;
    window.addEventListener(
      "furo-calendar-changed",
      (e: Event) => {
        eventDetail = (e as CustomEvent<CalendarType>).detail;
      },
      { once: true }
    );

    let secondaryEventDetail: CalendarType | undefined;
    window.addEventListener(
      "furo-secondary-calendar-changed",
      (e: Event) => {
        secondaryEventDetail = (e as CustomEvent<CalendarType>).detail;
      },
      { once: true }
    );

    setCalendar(CalendarType.Islamic);
    setSecondaryCalendar(CalendarType.Japanese);

    assert.deepEqual(seen, [CalendarType.Islamic]);
    assert.deepEqual(seenSecondary, [CalendarType.Japanese]);
    assert.equal(eventDetail, CalendarType.Islamic);
    assert.equal(secondaryEventDetail, CalendarType.Japanese);
  });
});

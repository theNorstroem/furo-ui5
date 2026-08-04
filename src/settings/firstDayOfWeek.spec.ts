import { afterAll, afterEach, assert, describe, it } from "vitest";

import { DEFAULT_FIRST_DAY_OF_WEEK, FIRST_DAY_OF_WEEK_STORAGE_KEY, clearFirstDayOfWeek, getFirstDayOfWeek, setFirstDayOfWeek } from "./firstDayOfWeek";

describe("settings/firstDayOfWeek", () => {
  afterEach(() => {
    clearFirstDayOfWeek();
  });

  afterAll(() => {
    clearFirstDayOfWeek();
    localStorage.removeItem(FIRST_DAY_OF_WEEK_STORAGE_KEY);
  });

  it("should default to Sunday while nothing is stored or configured", () => {
    assert.equal(getFirstDayOfWeek(), DEFAULT_FIRST_DAY_OF_WEEK);
    assert.equal(DEFAULT_FIRST_DAY_OF_WEEK, 0);
  });

  it("should set and persist the day", () => {
    setFirstDayOfWeek(1);

    assert.equal(getFirstDayOfWeek(), 1);
    assert.equal(localStorage.getItem(FIRST_DAY_OF_WEEK_STORAGE_KEY), "1");
  });

  it("should accept the whole week and nothing outside it", () => {
    for (let day = 0; day <= 6; day += 1) {
      setFirstDayOfWeek(day);
      assert.equal(getFirstDayOfWeek(), day);
    }

    assert.throws(() => {
      setFirstDayOfWeek(7);
    }, RangeError);
    assert.throws(() => {
      setFirstDayOfWeek(-1);
    }, RangeError);
    assert.throws(() => {
      setFirstDayOfWeek(1.5);
    }, RangeError);
  });

  it("should drop the persisted value on clear", () => {
    setFirstDayOfWeek(3);
    clearFirstDayOfWeek();

    assert.isNull(localStorage.getItem(FIRST_DAY_OF_WEEK_STORAGE_KEY));
    assert.equal(getFirstDayOfWeek(), DEFAULT_FIRST_DAY_OF_WEEK);
  });

  it("should read a persisted value back as a number", () => {
    // clearFirstDayOfWeek() in afterEach dropped the memoized read, so this is the page-load path.
    localStorage.setItem(FIRST_DAY_OF_WEEK_STORAGE_KEY, "2");
    assert.strictEqual(getFirstDayOfWeek(), 2);
  });

  it("should ignore a stored value that is not a weekday index", () => {
    localStorage.setItem(FIRST_DAY_OF_WEEK_STORAGE_KEY, "Monday");
    assert.equal(getFirstDayOfWeek(), DEFAULT_FIRST_DAY_OF_WEEK);
  });

  it("should notify subscribers and fire furo-first-day-of-week-changed", () => {
    const seen: number[] = [];
    getFirstDayOfWeek(day => seen.push(day));

    let eventDetail: number | undefined;
    window.addEventListener(
      "furo-first-day-of-week-changed",
      (e: Event) => {
        eventDetail = (e as CustomEvent<number>).detail;
      },
      { once: true }
    );

    setFirstDayOfWeek(4);

    assert.deepEqual(seen, [4]);
    assert.equal(eventDetail, 4);
  });
});

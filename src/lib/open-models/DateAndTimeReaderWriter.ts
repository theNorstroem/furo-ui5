import { INT32, INT64, STRING, Timestamp } from "@furo/open-models";

import { XDate as FuroXDate } from "@/models/furo/type/Date";
import { XDate } from "@/models/google/type/Date";
import { TimeOfDay } from "@/models/google/type/TimeOfDay";

/**
 * Generic readers and writers for date/time like models.
 *
 * Supported model types (matched against `fieldNode.__meta.typeName`):
 *  - `primitives.STRING`             — pass-through ISO 8601 string
 *  - `google.protobuf.Timestamp`     — RFC 3339 string in `value`
 *  - `primitives.INT32`              — unix seconds (number); empty UI writes `0`
 *  - `primitives.INT64`              — unix seconds (bigint); empty UI writes `0n`
 *  - `google.type.Date` (`XDate`)    — `{year, month, day}` as INT32 children
 *  - `furo.type.Date` (`FuroXDate`)  — `{year, month, day}` as INT32 children (+ `displayName`)
 *  - `google.type.TimeOfDay`         — `{hours, minutes, seconds, nanos}` as INT32 children
 *
 * The element-side `valueField` is a `string` carrying canonical ISO 8601:
 * full RFC 3339 (`YYYY-MM-DDTHH:mm:ss.sssZ`) for Timestamp/INT32/INT64/STRING,
 * calendar-only (`YYYY-MM-DD`) for XDate/FuroXDate, time-only (`HH:mm:ss`) for TimeOfDay.
 */
type StringKeys<T> = { [k in keyof T]: T[k] extends string ? k : never }[keyof T];

export class DateAndTimeReaderWriters<T> {
  private clazz: T;

  private modelField: STRING | Timestamp | INT32 | INT64 | XDate | FuroXDate | TimeOfDay;

  private valueField: StringKeys<T>;

  constructor(clazz: T, valueField: StringKeys<T>, modelField: STRING | Timestamp | INT32 | INT64 | XDate | FuroXDate | TimeOfDay) {
    this.clazz = clazz;
    this.modelField = modelField;
    this.valueField = valueField;
  }

  getReaders(): Map<string, () => void> {
    const readers = new Map<string, () => void>();

    readers.set("primitives.STRING", () => {
      const v = (this.modelField as STRING).value;
      if (v !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as string) = v;
      }
    });

    readers.set("google.protobuf.Timestamp", () => {
      const v = (this.modelField as Timestamp).value;
      if (v !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as string) = v;
      }
    });

    readers.set("primitives.INT32", () => {
      const seconds = (this.modelField as INT32).value;
      const v = new Date(seconds * 1000).toISOString();
      if (v !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as string) = v;
      }
    });

    readers.set("primitives.INT64", () => {
      const seconds = Number((this.modelField as INT64).value);
      const v = new Date(seconds * 1000).toISOString();
      if (v !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as string) = v;
      }
    });

    readers.set("google.type.Date", () => {
      const xd = this.modelField as XDate;
      const y = xd.year.value;
      const m = xd.month.value;
      const d = xd.day.value;
      const v =
        y === 0 && m === 0 && d === 0
          ? ""
          : `${y.toString().padStart(4, "0")}-${m.toString().padStart(2, "0")}-${d.toString().padStart(2, "0")}`;
      if (v !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as string) = v;
      }
    });

    readers.set("furo.type.Date", () => {
      const xd = this.modelField as FuroXDate;
      const y = xd.year.value;
      const m = xd.month.value;
      const d = xd.day.value;
      const v =
        y === 0 && m === 0 && d === 0
          ? ""
          : `${y.toString().padStart(4, "0")}-${m.toString().padStart(2, "0")}-${d.toString().padStart(2, "0")}`;
      if (v !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as string) = v;
      }
    });

    readers.set("google.type.TimeOfDay", () => {
      const t = this.modelField as TimeOfDay;
      const h = t.hours.value;
      const m = t.minutes.value;
      const s = t.seconds.value;
      const v =
        h === 0 && m === 0 && s === 0
          ? ""
          : `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
      if (v !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as string) = v;
      }
    });

    return readers;
  }

  getWriters(): Map<string, () => void> {
    const writers = new Map<string, () => void>();

    writers.set("primitives.STRING", () => {
      (this.modelField as STRING).value = this.clazz[this.valueField] as string;
    });

    writers.set("google.protobuf.Timestamp", () => {
      const ui = this.clazz[this.valueField] as string;
      if (ui === "") {
        (this.modelField as Timestamp).value = "";
        return;
      }
      const date = new Date(ui);
      if (Number.isNaN(date.getTime())) {
        (this.modelField as Timestamp).value = "";
      } else {
        (this.modelField as Timestamp).value = date.toISOString();
      }
    });

    writers.set("primitives.INT32", () => {
      const ui = this.clazz[this.valueField] as string;
      if (ui === "") {
        (this.modelField as INT32).value = 0;
        return;
      }
      const date = new Date(ui);
      if (Number.isNaN(date.getTime())) {
        (this.modelField as INT32).value = 0;
      } else {
        (this.modelField as INT32).value = Math.floor(date.getTime() / 1000);
      }
    });

    writers.set("primitives.INT64", () => {
      const ui = this.clazz[this.valueField] as string;
      if (ui === "") {
        (this.modelField as INT64).value = 0n;
        return;
      }
      const date = new Date(ui);
      if (Number.isNaN(date.getTime())) {
        (this.modelField as INT64).value = 0n;
      } else {
        (this.modelField as INT64).value = BigInt(Math.floor(date.getTime() / 1000));
      }
    });

    writers.set("google.type.Date", () => {
      const xd = this.modelField as XDate;
      const ui = this.clazz[this.valueField] as string;
      const parts = /^(\d{4})-(\d{2})-(\d{2})/.exec(ui);
      if (parts === null) {
        xd.year = 0;
        xd.month = 0;
        xd.day = 0;
        return;
      }
      xd.year = parseInt(parts[1], 10);
      xd.month = parseInt(parts[2], 10);
      xd.day = parseInt(parts[3], 10);
    });

    writers.set("furo.type.Date", () => {
      const xd = this.modelField as FuroXDate;
      const ui = this.clazz[this.valueField] as string;
      const parts = /^(\d{4})-(\d{2})-(\d{2})/.exec(ui);
      if (parts === null) {
        xd.year = 0;
        xd.month = 0;
        xd.day = 0;
        return;
      }
      xd.year = parseInt(parts[1], 10);
      xd.month = parseInt(parts[2], 10);
      xd.day = parseInt(parts[3], 10);
    });

    writers.set("google.type.TimeOfDay", () => {
      const t = this.modelField as TimeOfDay;
      const ui = this.clazz[this.valueField] as string;
      const parts = /^(\d{1,2}):(\d{2})(?::(\d{2}))?/.exec(ui);
      if (parts === null) {
        t.hours = 0;
        t.minutes = 0;
        t.seconds = 0;
        t.nanos = 0;
        return;
      }
      t.hours = parseInt(parts[1], 10);
      t.minutes = parseInt(parts[2], 10);
      t.seconds = parts[3] ? parseInt(parts[3], 10) : 0;
      t.nanos = 0;
    });

    return writers;
  }
}

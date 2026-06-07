import { Money as FuroMoney } from "@/models/furo/type/Money";
import { Money as GoogleMoney } from "@/models/google/type/Money";

/**
 * Generic readers and writers for the **amount** of money-like models.
 *
 * Supported model types (matched against `fieldNode.__meta.typeName`):
 *  - `google.type.Money` — `{units: INT64, nanos: INT32, currencyCode: STRING}`
 *  - `furo.type.Money`   — same, plus a `displayName` field
 *
 * Only the amount (`units` + `nanos`) is handled here; the `currencyCode` field is
 * bound separately (the money input reuses `furo-ui5-combobox` for the currency).
 *
 * The element-side `valueField` is a `string` carrying the decimal amount, using the
 * same conversion as the money renderers: `Number(units) + nanos / 1e9`. An amount of
 * `units === 0 && nanos === 0` reads back as the empty string.
 */
type StringKeys<T> = { [k in keyof T]: T[k] extends string ? k : never }[keyof T];

export class MoneyReaderWriters<T> {
  private clazz: T;

  private modelField: GoogleMoney | FuroMoney;

  private valueField: StringKeys<T>;

  constructor(clazz: T, valueField: StringKeys<T>, modelField: GoogleMoney | FuroMoney) {
    this.clazz = clazz;
    this.modelField = modelField;
    this.valueField = valueField;
  }

  private read(): void {
    const units = Number(this.modelField.units.value);
    const nanos = this.modelField.nanos.value;
    const v = units === 0 && nanos === 0 ? "" : String(units + nanos / 1e9);
    if (v !== this.clazz[this.valueField]) {
      (this.clazz[this.valueField] as string) = v;
    }
  }

  private write(): void {
    const ui = (this.clazz[this.valueField] as string).trim();
    const num = Number(ui);
    if (ui === "" || Number.isNaN(num)) {
      this.modelField.units = 0n;
      this.modelField.nanos = 0;
      return;
    }
    // truncate toward zero so the sign carries onto `nanos`, per the proto spec
    // (if `units` is negative, `nanos` must be negative or zero).
    const whole = Math.trunc(num);
    this.modelField.units = BigInt(whole);
    this.modelField.nanos = Math.round((num - whole) * 1e9);
  }

  getReaders(): Map<string, () => void> {
    const readers = new Map<string, () => void>();
    readers.set("google.type.Money", () => {
      this.read();
    });
    readers.set("furo.type.Money", () => {
      this.read();
    });
    return readers;
  }

  getWriters(): Map<string, () => void> {
    const writers = new Map<string, () => void>();
    writers.set("google.type.Money", () => {
      this.write();
    });
    writers.set("furo.type.Money", () => {
      this.write();
    });
    return writers;
  }
}

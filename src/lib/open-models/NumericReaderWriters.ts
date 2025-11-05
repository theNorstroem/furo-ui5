import { DOUBLE, FLOAT, FloatValue, INT32, Int32Value, INT64, Int64Value, UINT32, UInt32Value, UINT64, UInt64Value } from "@furo/open-models";

import type { FatHandler } from "@/lib/open-models/FatHandler";
import { FuroFatFloat, FuroFatInt32, FuroFatInt64, FuroFatUint32, FuroFatUint64 } from "@/models";

/**
 * Generic readeer and writers for string like models
 */
type NumericKeys<T> = { [k in keyof T]: T[k] extends number ? k : never }[keyof T];
// type ModelKeys<T> = { [k in keyof T]: T[k] extends STRING | FuroFatString | StringValue ? k : never }[keyof T];
// type OnlyBooleanValuesOfT<T> = { [k in BooleanKeys<T>]: boolean };
// type OnlyBooleanModels<T> = { [k in ModelKeys<T>]: STRING | FuroFatString | StringValue };

export class NumericReaderWriters<T> {
  private clazz: T;

  private modelField:
    | INT32
    | INT64
    | UINT32
    | UINT64
    | DOUBLE
    | FLOAT
    | FuroFatFloat
    | FuroFatInt32
    | FuroFatInt64
    | FuroFatUint32
    | FuroFatUint64
    | FloatValue
    | Int32Value
    | Int64Value
    | UInt32Value
    | UInt64Value;

  private valueField: NumericKeys<T>;

  private fatHandler: FatHandler<T> | undefined;

  constructor(
    clazz: T,
    valueField: NumericKeys<T>,
    modelField:
      | INT32
      | INT64
      | UINT32
      | UINT64
      | DOUBLE
      | FLOAT
      | FuroFatFloat
      | FuroFatInt32
      | FuroFatInt64
      | FuroFatUint32
      | FuroFatUint64
      | FloatValue
      | Int32Value
      | Int64Value
      | UInt32Value
      | UInt64Value,
    fatHandler?: FatHandler<T>
  ) {
    this.clazz = clazz;
    this.modelField = modelField;
    this.valueField = valueField;
    this.fatHandler = fatHandler;
  }

  getReaders(): Map<string, () => void> {
    const readers = new Map<string, () => void>();

    readers.set("primitives.DOUBLE", () => {
      const intVal = (this.modelField as DOUBLE).value;
      if (intVal !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as number) = intVal;
      }
    });

    readers.set("primitives.FLOAT", () => {
      const intVal = (this.modelField as FLOAT).value;
      if (intVal !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as number) = intVal;
      }
    });

    readers.set("primitives.INT32", () => {
      const intVal = (this.modelField as INT32).value;
      if (intVal !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as number) = intVal;
      }
    });
    readers.set("primitives.INT64", () => {
      const intVal = Number((this.modelField as INT64).value);
      if (intVal !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as number) = intVal;
      }
    });

    readers.set("furo.fat.Int32", () => {
      const intVal = (this.modelField as FuroFatInt32).value.value;
      if (intVal !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as number) = intVal;
      }
      this.fatHandler?.applyReceivedFatAttributesAndLabels(this.modelField as FuroFatInt32);
    });
    readers.set("furo.fat.Int64", () => {
      const intVal = (this.modelField as FuroFatInt64).value.value;
      if (intVal !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as bigint) = intVal;
      }
      this.fatHandler?.applyReceivedFatAttributesAndLabels(this.modelField as FuroFatInt64);
    });

    readers.set("furo.fat.Float", () => {
      const intVal = (this.modelField as FuroFatFloat).value.value;
      if (intVal !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as number) = intVal;
      }
      this.fatHandler?.applyReceivedFatAttributesAndLabels(this.modelField as FuroFatFloat);
    });

    readers.set("furo.fat.Uint32", () => {
      const intVal = (this.modelField as FuroFatUint32).value.value;
      if (intVal !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as number) = intVal;
      }
      this.fatHandler?.applyReceivedFatAttributesAndLabels(this.modelField as FuroFatUint32);
    });
    readers.set("furo.fat.Uint64", () => {
      const intVal = (this.modelField as FuroFatUint64).value.value;
      if (intVal !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as bigint) = intVal;
      }
      this.fatHandler?.applyReceivedFatAttributesAndLabels(this.modelField as FuroFatUint64);
    });

    return readers;
  }

  getWriters(): Map<string, () => void> {
    const writers = new Map<string, () => void>();

    writers.set("primitives.DOUBLE", () => {
      const v = Number(this.clazz[this.valueField]);
      if (Number.isNaN(v)) {
        (this.modelField as DOUBLE).value = 0;
      } else {
        (this.modelField as DOUBLE).value = v;
      }
    });

    writers.set("primitives.FLOAT", () => {
      const v = Number(this.clazz[this.valueField]);
      if (Number.isNaN(v)) {
        (this.modelField as FLOAT).value = 0;
      } else {
        (this.modelField as FLOAT).value = v;
      }
    });

    /**
     * Updater for primitives.INT32
     */
    writers.set("primitives.INT32", () => {
      const v = parseInt(String(Number(this.clazz[this.valueField])), 10);
      if (Number.isNaN(v)) {
        (this.modelField as INT32).value = 0;
      } else {
        (this.modelField as INT32).value = v;
      }
    });

    /**
     * Updater for primitives.INT64
     */
    writers.set("primitives.INT64", () => {
      const v = parseInt(String(Number(this.clazz[this.valueField])), 10);
      if (Number.isNaN(v)) {
        (this.modelField as INT64).value = 0n;
      } else {
        (this.modelField as INT64).value = BigInt(v);
      }
    });

    writers.set("furo.fat.Float", () => {
      const v = Number(this.clazz[this.valueField]);
      if (Number.isNaN(v)) {
        (this.modelField as FuroFatFloat).value = 0;
      } else {
        (this.modelField as FuroFatFloat).value = v;
      }
    });

    writers.set("furo.fat.Int32", () => {
      const v = parseInt(String(Number(this.clazz[this.valueField])), 10);
      if (Number.isNaN(v)) {
        (this.modelField as FuroFatInt32).value = 0;
      } else {
        (this.modelField as FuroFatInt32).value = v;
      }
    });

    writers.set("furo.fat.Int64", () => {
      const v = BigInt(parseInt(String(Number(this.clazz[this.valueField])), 10));
      if (Number.isNaN(v)) {
        (this.modelField as FuroFatInt64).value = 0n;
      } else {
        (this.modelField as FuroFatInt64).value = v;
      }
    });

    return writers;
  }
}

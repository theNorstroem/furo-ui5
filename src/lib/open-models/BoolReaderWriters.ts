import type { BOOLEAN, BoolValue } from "@furo/open-models";

import type { FatHandler } from "@/lib/open-models/FatHandler";
import type { FuroFatBool } from "@/models";

/**
 * ### Usage
 *
 * ```typescprit
 * private _getModelReaders(): Map<string, () => void> {
 *     const r:BoolReaderWriters<Switch> = new BoolReaderWriters<Switch>(this,"checked",this.modelField, this.fatHandler)
 *     const readers = r.getBoolReaders()
 *
 *     // disable a reader
 *     readers.set("primitives.BOOLEAN", () => {});
 *
 *   // local overrides of the default methods
 *     readers.set("furo.fat.Bool", () => {
 *       const v = (this.modelField as FuroFatBool).value.value;
 *       if (v !== this.clazz[this.valueField]) {
 *         this.clazz[this.valueField] = v;
 *       }
 *       this.fatHandler.applyReceivedFatAttributesAndLabels(this.modelField as FuroFatBool);
 *     });
 *
 *
 *     return readers;
 *
 *
 *   }
 * ```
 */
type BooleanKeys<T> = { [k in keyof T]: T[k] extends boolean ? k : never }[keyof T];
// type ModelKeys<T> = { [k in keyof T]: T[k] extends BOOLEAN | FuroFatBool | BoolValue ? k : never }[keyof T];
// type OnlyBooleanValuesOfT<T> = { [k in BooleanKeys<T>]: boolean };
// type OnlyBooleanModels<T> = { [k in ModelKeys<T>]: BOOLEAN | FuroFatBool | BoolValue };

export class BoolReaderWriters<T> {
  private clazz: T;

  private modelField: BOOLEAN | FuroFatBool | BoolValue;

  private valueField: BooleanKeys<T>;

  private fatHandler: FatHandler<T> | undefined;

  constructor(clazz: T, valueField: BooleanKeys<T>, modelField: BOOLEAN | FuroFatBool | BoolValue, fatHandler?: FatHandler<T>) {
    this.clazz = clazz;
    this.modelField = modelField;
    this.valueField = valueField;
    this.fatHandler = fatHandler;
  }

  getReaders(): Map<string, () => void> {
    const readers = new Map<string, () => void>();

    readers.set("primitives.BOOLEAN", () => {
      const v = (this.modelField as BOOLEAN).value;
      if (v !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as boolean) = v;
      }
    });

    readers.set("furo.fat.Bool", () => {
      const v = (this.modelField as FuroFatBool).value.value;
      if (v !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as boolean) = v;
      }
      this.fatHandler?.applyReceivedFatAttributesAndLabels(this.modelField as FuroFatBool);
    });

    readers.set("google.protobuf.BoolValue", () => {
      const v = (this.modelField as BoolValue).value;
      if (v !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as boolean) = v;
      }
    });
    return readers;
  }

  getWriters(): Map<string, () => void> {
    const writers = new Map<string, () => void>();

    writers.set("primitives.BOOLEAN", () => {
      (this.modelField as BOOLEAN).value = this.clazz[this.valueField] as boolean;
    });
    writers.set("furo.fat.Bool", () => {
      (this.modelField as FuroFatBool).value.value = this.clazz[this.valueField] as boolean;
    });
    writers.set("google.protobuf.BoolValue", () => {
      (this.modelField as BoolValue).value = this.clazz[this.valueField] as boolean;
    });

    return writers;
  }
}

import { STRING, StringValue } from "@furo/open-models";

import type { FatHandler } from "@/lib/open-models/FatHandler";
import { type FuroFatString } from "@/models";

/**
 * Generic readeer and writers for string like models
 */
type StringKeys<T> = { [k in keyof T]: T[k] extends string ? k : never }[keyof T];
// type ModelKeys<T> = { [k in keyof T]: T[k] extends STRING | FuroFatString | StringValue ? k : never }[keyof T];
// type OnlyBooleanValuesOfT<T> = { [k in BooleanKeys<T>]: boolean };
// type OnlyBooleanModels<T> = { [k in ModelKeys<T>]: STRING | FuroFatString | StringValue };

export class StringReaderWriters<T> {
  private clazz: T;

  private modelField: STRING | FuroFatString | StringValue;

  private valueField: StringKeys<T>;

  private fatHandler: FatHandler<T> | undefined;

  constructor(clazz: T, valueField: StringKeys<T>, modelField: STRING | FuroFatString | StringValue, fatHandler?: FatHandler<T>) {
    this.clazz = clazz;
    this.modelField = modelField;
    this.valueField = valueField;
    this.fatHandler = fatHandler;
  }

  getReaders(): Map<string, () => void> {
    const readers = new Map<string, () => void>();

    readers.set("primitives.STRING", () => {
      const v = (this.modelField as STRING).value;
      if (v !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as string) = v;
      }
    });

    readers.set("furo.fat.String", () => {
      const v = (this.modelField as FuroFatString).value.value;
      if (v !== this.clazz[this.valueField]) {
        (this.clazz[this.valueField] as string) = v;
      }
      this.fatHandler?.applyReceivedFatAttributesAndLabels(this.modelField as FuroFatString);
    });

    readers.set("google.protobuf.StringValue", () => {
      const v = (this.modelField as StringValue).value;
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

    writers.set("furo.fat.String", () => {
      (this.modelField as FuroFatString).value.value = this.clazz[this.valueField] as string;
    });
    writers.set("google.protobuf.StringValue", () => {
      (this.modelField as StringValue).value = this.clazz[this.valueField] as string;
    });

    return writers;
  }
}

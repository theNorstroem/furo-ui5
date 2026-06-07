import { BOOLEAN, STRING, ValueState } from "@furo/open-models";

import { type FuroFatBool, FuroFatDouble, FuroFatFloat, FuroFatInt32, FuroFatInt64, type FuroFatString, FuroFatUint32, FuroFatUint64 } from "@/models";

export class FatHandler<T> {
  private target: T;

  private _initialAttributes: string[] = [];

  private _receivedFatAttributes = new Set<string>();

  /**
   * This is the default set of allowed labels to set.
   */
  public allowedLabels = new Set<string>(["hidden", "readonly", "disabled", "required"]);

  // eslint-disable-next-line class-methods-use-this
  private _cutomAttributes: (attributes: Map<string, STRING>) => void = (_) => {
    return;
  };

  private fatAttributesToMap: (keyof T)[];

  constructor(target: T, fatAttributesToMap: (keyof T)[]) {
    this.target = target;
    this.fatAttributesToMap = fatAttributesToMap;
  }

  private applyAttributes(fat: FuroFatBool | FuroFatString | FuroFatInt32 | FuroFatInt64 | FuroFatUint32 | FuroFatUint64 | FuroFatFloat | FuroFatDouble) {
    const valueStateAttr = fat.attributes.get("value-state");
    if (valueStateAttr && !this._initialAttributes.includes("value-state")) {
      const valueStateMessageAttr = fat.attributes.get("value-state-message");
      if (valueStateMessageAttr) {
        const stateMap: Record<string, ValueState> = {
          Information: ValueState.Information,
          Positive: ValueState.Positive,
          Negative: ValueState.Negative,
          Critical: ValueState.Critical,
        };
        const stateKey = valueStateAttr.toString();
        const valueState = stateMap[stateKey] ?? ValueState.None;
        fat.__setValueState(valueState, [valueStateMessageAttr.toString()]);
      } else {
        (this.target as HTMLElement).setAttribute("value-state", valueStateAttr.toString());
      }
    }

    // Map the received attributes to the allowed attributes
    fat.attributes.forEach((val, key) => {
      if (this.fatAttributesToMap.includes(key as keyof T) && !this._initialAttributes.includes(key)) {
        switch (typeof (this.target as unknown as Record<string, string>)[key]) {
          case "number":
            {
              // assign numeric target as number
              const num: unknown = JSON.parse(val.value);
              if (val.value && typeof num === "number") {
                (this.target as unknown as Record<string, number>)[key] = num;
              }
            }
            break;
          case "boolean":
            {
              const bol: unknown = JSON.parse(val.value);
              if (val.value && typeof bol === "boolean") {
                (this.target as unknown as Record<string, boolean>)[key] = bol;
              }
            }
            break;
          case "string":
            (this.target as unknown as Record<string, string>)[key] = val.value;
            break;
          default:
            (this.target as unknown as Record<string, string>)[key] = val.value;
        }
      }
    });

    // apply custom attributes
    this._cutomAttributes(fat.attributes.value);
  }

  /**
   * Set a custom attributes handler.
   * This will be called after the default attributes handler.
   *
   * @param callback
   */
  public setCustomAttributesHandler(callback: (attributes: Map<string, STRING>) => void) {
    this._cutomAttributes = callback;
  }

  private applyLabels(labels: Map<string, BOOLEAN>) {
    labels.forEach((label, key) => {
      // do not touch initial html attributes
      if (this.allowedLabels.has(key) && !this._initialAttributes.includes(key)) {
        if (label.value) {
          // set Attribute
          (this.target as HTMLElement).setAttribute(key, "");
          this._receivedFatAttributes.add(key);
        } else {
          (this.target as HTMLElement).removeAttribute(key);
          this._receivedFatAttributes.delete(key);
        }
      }
    });
    // remove attributes which was set before, but not received anymore
    this._receivedFatAttributes.forEach((attribute) => {
      if (!labels.has(attribute)) {
        (this.target as HTMLElement).removeAttribute(attribute);
      }
    });
  }

  readAttributes() {
    this._initialAttributes = [...(this.target as HTMLElement).attributes].map((item) => item.name);
  }

  applyReceivedFatAttributesAndLabels(
    fat: FuroFatBool | FuroFatString | FuroFatInt32 | FuroFatInt64 | FuroFatUint32 | FuroFatUint64 | FuroFatFloat | FuroFatDouble
  ) {
    this.applyLabels(fat.labels.value);
    this.applyAttributes(fat);
  }
}

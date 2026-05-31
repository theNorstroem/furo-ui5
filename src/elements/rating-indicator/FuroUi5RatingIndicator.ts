import {
  DOUBLE,
  type FieldConstraints,
  FLOAT,
  FloatValue,
  INT32,
  Int32Value,
  INT64,
  Int64Value,
  UINT32,
  UInt32Value,
  UINT64,
  UInt64Value,
} from "@furo/open-models";
import RatingIndicator from "@ui5/webcomponents/dist/RatingIndicator.js";

import { FatHandler } from "@/lib/open-models/FatHandler";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { NumericReaderWriters } from "@/lib/open-models/NumericReaderWriters";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import { FuroFatFloat, FuroFatInt32, FuroFatInt64, FuroFatUint32, FuroFatUint64 } from "@/models";
import ValueState from "@/types/ValueState";

/**
 * The furo-ui5-rating-indicator  is used to display a specific number of icons that are used to rate an item.
 * Additionally, it is also used to display the average and overall ratings.
 * https://sap.github.io/ui5-webcomponents/playground/components/RatingIndicator/
 *
 * You can bind any `number` type, any `furo.fat.xxx` number type, `furo.BigDecimal` or the `google.wrapper.xxx` number types.
 *
 * ```html
 *  <furo-ui5-rating-indicator
 *     fn-bind-data="--dao(FIELDNODE)"
 *  ></furo-ui5-rating-indicator>
 * ```
 *
 * ## supported FAT attributes
 *  - **"readonly":"true"** set the element to readonly
 *  - **"disabled":"true"** set the element to disabled
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 *
 * ## Methods
 * **bind-data(fieldNode)**
 * Bind aa entity field. You can use the entity even when no data was received.
 *
 * When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)
 *
 * @attribute {"Positive" | "Negative" | "Critical" | "Information" | "None"} value-state - Set the value state
 * @fires {`number`} change -  Fired when the values change.
 * @fires {`number`} furo-value-changed - Fires the field value when it changes.
 * @summary data rating input field
 * @tagname furo-ui5-rating-indicator
 */
export class FuroUi5RatingIndicator extends RatingIndicator {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  private modelReaderWriter: ModelReaderWriter | undefined;

  private numericReaderWriters: NumericReaderWriters<FuroUi5RatingIndicator> | undefined;

  private fatHandler: FatHandler<FuroUi5RatingIndicator>;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  // used to set the value from the model to this.value
  set modelValue(v: number) {
    this.value = v;
  }

  get modelValue(): number {
    return this.value;
  }

  constructor() {
    super();
    this.fatHandler = new FatHandler<FuroUi5RatingIndicator>(this, []);
    this.fatHandler.readAttributes();
  }

  private _model:
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
    | UInt64Value = new FLOAT();

  public get model():
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
    | UInt64Value {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref Int32Value - "@furo/open-models/"
   * @typeref UInt32Value - "@furo/open-models/"
   * @typeref Int64Value - "@furo/open-models/"
   * @typeref UInt64Value - "@furo/open-models/"
   * @typeref FloatValue - "@furo/open-models/"
   * @typeref INT32 - "@furo/open-models/"
   * @typeref INT64 - "@furo/open-models/"
   * @typeref UINT32 - "@furo/open-models/"
   * @typeref UINT64 - "@furo/open-models/"
   * @typeref DOUBLE - "@furo/open-models/"
   * @typeref FLOAT - "@furo/open-models/"
   * @typeref FuroFatUint32 - "@/models/index.js"
   * @typeref FuroFatUint64 - "@/models/index.js"
   * @typeref FuroFatInt32 - "@/models/index.js"
   * @typeref FuroFatInt64 - "@/models/index.js"
   * @typeref FuroFatFloat - "@/models/index.js"
   * @public
   */
  public set model(
    value:
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
      | UInt64Value
  ) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - Int32Value - "@furo/open-models/"
   * @paramref fieldNode Int32Value - "@furo/open-models/"
   * @paramref fieldNode UInt32Value - "@furo/open-models/"
   * @paramref fieldNode Int64Value - "@furo/open-models/"
   * @paramref fieldNode UInt64Value - "@furo/open-models/"
   * @paramref fieldNode FloatValue - "@furo/open-models/"
   * @paramref fieldNode INT32 - "@furo/open-models/"
   * @paramref fieldNode INT64 - "@furo/open-models/"
   * @paramref fieldNode UINT32 - "@furo/open-models/"
   * @paramref fieldNode UINT64 - "@furo/open-models/"
   * @paramref fieldNode DOUBLE - "@furo/open-models/"
   * @paramref fieldNode FLOAT - "@furo/open-models/"
   * @paramref fieldNode FuroFatUint32 - "@/models/index.js"
   * @paramref fieldNode FuroFatUint64 - "@/models/index.js"
   * @paramref fieldNode FuroFatInt32 - "@/models/index.js"
   * @paramref fieldNode FuroFatInt64 - "@/models/index.js"
   * @paramref fieldNode FuroFatFloat - "@/models/index.js"
   * @param fieldNode
   * @public
   */
  public bindData(
    fieldNode:
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
      | UInt64Value
      | undefined
  ) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "this-update",listenToStateChanged
     * - from ui: input, change
     */
    this.readonlyState.detach();
    this._model.__removeEventListener("update", this.readFromModel);
    this.removeEventListener("input", this.writeToModel);
    this.removeEventListener("change", this.writeToModel);

    // connect the model
    this._model = fieldNode;

    // init model
    this.numericReaderWriters = new NumericReaderWriters<FuroUi5RatingIndicator>(this, "modelValue", this._model, this.fatHandler);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this.numericReaderWriters.getWriters(), this.numericReaderWriters.getReaders());

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // listen on changes from UI
    this.addEventListener("input", this.writeToModel);
    this.addEventListener("change", this.writeToModel);

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // set the placeholder from model if none was set before
    this.tooltip = (this.tooltip ?? undefined) ? this._model.__placeholder : this.tooltip;

    // a11y
    this.accessibleName ??= this._model.__label;
  }

  private handleConstraints(fieldConstraints: FieldConstraints | undefined) {
    if (fieldConstraints !== undefined) {
      // for a11y
      if (fieldConstraints.required) {
        this.required = true;
      }
      if (fieldConstraints.read_only) {
        this.readonly = true;
      }
      if (fieldConstraints.max_length) {
        this.max = fieldConstraints.max_length;
      }
    }
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
  };

  private writeToModel = (): void => {
    this.modelReaderWriter?.writeModel();
  };

  private _valueState: ValueState = ValueState.None;

  public get valueState(): ValueState {
    return this._valueState;
  }

  /**
   * Set the Value state
   *
   * @typeref ValueState - "@furo/ui5/dist/types/ValueState.js"
   * @public
   */
  public set valueState(value: ValueState) {
    this._valueState = value;
    this.setAttribute("value-state", value);
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-rating-indicator";
    return md;
  }

  static override get styles() {
    return [
      super.styles,
      // language=CSS
      `
        :host([value-state=None]) .ui5-rating-indicator-item [ui5-icon].ui5-rating-indicator-half-icon {
          color: var(--sapContent_RatedColor);
        }

        :host([value-state=None]) .ui5-rating-indicator-item-sel [ui5-icon] {
          fill: var(--sapContent_RatedColor);
        }

        :host([value-state=Negative]) .ui5-rating-indicator-item [ui5-icon].ui5-rating-indicator-half-icon {
          color: var(--sapNegativeColor);
        }

        :host([value-state=Negative]) .ui5-rating-indicator-item-sel [ui5-icon] {
          fill: var(--sapNegativeColor);
        }

        :host([value-state=Critical]) .ui5-rating-indicator-item [ui5-icon].ui5-rating-indicator-half-icon {
          color: var(--sapCriticalColor);
        }

        :host([value-state=Critical]) .ui5-rating-indicator-item-sel [ui5-icon] {
          fill: var(--sapCriticalColor);
        }

        :host([value-state=Positive]) .ui5-rating-indicator-item [ui5-icon].ui5-rating-indicator-half-icon {
          color: var(--sapPositiveColor);
        }

        :host([value-state=Positive]) .ui5-rating-indicator-item-sel [ui5-icon] {
          fill: var(--sapPositiveColor);
        }

        :host([value-state=Information]) .ui5-rating-indicator-item [ui5-icon].ui5-rating-indicator-half-icon {
          color: var(--sapInformativeColor);
        }

        :host([value-state=Information]) .ui5-rating-indicator-item-sel [ui5-icon] {
          fill: var(--sapInformativeColor);
        }


      `,
    ];
  }
}

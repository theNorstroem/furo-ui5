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
} from "@furo/open-models/dist";
import Slider from "@ui5/webcomponents/dist/Slider.js";

import { FatHandler } from "@/lib/open-models/FatHandler";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { NumericReaderWriters } from "@/lib/open-models/NumericReaderWriters";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import { FuroFatFloat, FuroFatInt32, FuroFatInt64, FuroFatUint32, FuroFatUint64 } from "@/models";

/**
 * The furo-ui5-slider component allows the user to enter and edit numbers with data binding.
 *
 * You can bind any `number` type, any `furo.fat.xxx` number type, `furo.BigDecimal` or the `google.wrapper.xxx` number types.
 *
 * ## supported FAT attributes
 *  - **"placeholder":"string"** set the placeholder for the element
 *
 * ## supported FAT labels
 *  - **"readonly":"true"** set the element to readonly
 *  - **"required":"true"** set the element to required
 *  - **"disabled":"true"** set the element to disabled
 *  - **"hidden":"true"** hides the element
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 * - **placeholder:"some string"** set the placeholder for the element
 *
 *
 * @summary data number input field
 * @tagname furo-ui5-slider
 */
export class FuroUi5Slider extends Slider {
  private modelReaderWriter: ModelReaderWriter | undefined;

  // eslint-disable-next-line no-use-before-define
  private fatHandler: FatHandler<FuroUi5Slider>;

  // eslint-disable-next-line no-use-before-define
  private numericReaderWriters: NumericReaderWriters<FuroUi5Slider> | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();
    this.fatHandler = new FatHandler(this as FuroUi5Slider, ["min", "max", "step", "labelInterval", "showTickmarks", "showTooltip"]);
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

  get model():
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
   * @typeref Int32Value - "@furo/open-models/dist/index.js"
   * @typeref UInt32Value - "@furo/open-models/dist/index.js"
   * @typeref Int64Value - "@furo/open-models/dist/index.js"
   * @typeref UInt64Value - "@furo/open-models/dist/index.js"
   * @typeref FloatValue - "@furo/open-models/dist/index.js"
   * @typeref INT32 - "@furo/open-models/dist/index.js"
   * @typeref INT64 - "@furo/open-models/dist/index.js"
   * @typeref UINT32 - "@furo/open-models/dist/index.js"
   * @typeref UINT64 - "@furo/open-models/dist/index.js"
   * @typeref DOUBLE - "@furo/open-models/dist/index.js"
   * @typeref FLOAT - "@furo/open-models/dist/index.js"
   * @typeref FuroFatUint32 - "@/models/index.js"
   * @typeref FuroFatUint64 - "@/models/index.js"
   * @typeref FuroFatInt32 - "@/models/index.js"
   * @typeref FuroFatInt64 - "@/models/index.js"
   * @typeref FuroFatFloat - "@/models/index.js"
   * @public
   */
  set model(
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
   * @paramref fieldNode - Int32Value - "@furo/open-models/dist/index.js"
   * @paramref fieldNode Int32Value - "@furo/open-models/dist/index.js"
   * @paramref fieldNode UInt32Value - "@furo/open-models/dist/index.js"
   * @paramref fieldNode Int64Value - "@furo/open-models/dist/index.js"
   * @paramref fieldNode UInt64Value - "@furo/open-models/dist/index.js"
   * @paramref fieldNode FloatValue - "@furo/open-models/dist/index.js"
   * @paramref fieldNode INT32 - "@furo/open-models/dist/index.js"
   * @paramref fieldNode INT64 - "@furo/open-models/dist/index.js"
   * @paramref fieldNode UINT32 - "@furo/open-models/dist/index.js"
   * @paramref fieldNode UINT64 - "@furo/open-models/dist/index.js"
   * @paramref fieldNode DOUBLE - "@furo/open-models/dist/index.js"
   * @paramref fieldNode FLOAT - "@furo/open-models/dist/index.js"
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
  ) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "this-field-value-changed",listenToStateChanged
     * - from ui: input, change
     */
    this.readonlyState.detach();
    this._model.__addEventListener("field-value-changed", this.readFromModel.bind(this));
    this.addEventListener("input", this.writeToModel.bind(this));
    this.addEventListener("change", this.writeToModel.bind(this));

    // connect the model
    this._model = fieldNode;

    // init model
    this.numericReaderWriters = new NumericReaderWriters<FuroUi5Slider>(this, "value", this._model, this.fatHandler);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this._getModelWriters(), this._getModelReaders());

    // listen on state changes on the model
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", this.readFromModel.bind(this));

    // listen on changes from UI
    this.addEventListener("input", this.writeToModel.bind(this));
    this.addEventListener("change", this.writeToModel.bind(this));

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // a11y
    this.accessibleName = this._model.__label;
  }

  private handleConstraints(fieldConstraints: FieldConstraints | undefined) {
    if (fieldConstraints !== undefined) {
      if (fieldConstraints.read_only) {
        this.disabled = true;
      }
      if (fieldConstraints.maximum) {
        this.max = fieldConstraints.maximum;
      }
      if (fieldConstraints.minimum) {
        this.min = fieldConstraints.minimum;
      }
    }
  }

  private readFromModel(): void {
    this.modelReaderWriter?.readModel();
  }

  private writeToModel(): void {
    this.modelReaderWriter!.writeModel();
  }

  private _getModelReaders(): Map<string, () => void> {
    return this.numericReaderWriters!.getReaders();
  }

  private _getModelWriters(): Map<string, () => void> {
    return this.numericReaderWriters!.getWriters();
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-slider";
    return md;
  }
}

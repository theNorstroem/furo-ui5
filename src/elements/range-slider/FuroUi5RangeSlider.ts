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
import RangeSlider from "@ui5/webcomponents/dist/RangeSlider.js";

import { FatHandler } from "@/lib/open-models/FatHandler";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { NumericReaderWriters } from "@/lib/open-models/NumericReaderWriters";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import { FuroFatFloat, FuroFatInt32, FuroFatInt64, FuroFatUint32, FuroFatUint64 } from "@/models";

/**
 * The furo-ui5-range-slider component lets the user select a numeric range (a lower and an upper
 * bound), with data binding.
 *
 * It supports all features from the [SAP ui5 RangeSlider element](https://ui5.github.io/webcomponents/components/RangeSlider/).
 *
 * A range has two ends, so it binds two separate numeric field nodes:
 *  - `model` (or `bindData`) binds the **start** value (`startValue`).
 *  - `modelTo` (or `bindDataTo`) binds the **end** value (`endValue`).
 *
 * You can bind any `number` type, any `furo.fat.xxx` number type or the `google.wrapper.xxx` number
 * types to either end.
 *
 * ## supported FAT attributes
 *  - **"min" / "max" / "step" / "labelInterval" / "showTickmarks" / "showTooltip"**
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to disabled
 * - **minimum / maximum** set the slider min / max
 *
 * @summary Horizontal slider for selecting a numeric range (lower/upper bound).
 * @keywords slider, range, numeric, lower, upper, bound
 * @category Form
 * @usecase Use for selecting a numeric range between two values.
 * @related furo-ui5-slider, furo-ui5-step-input
 * @tagname furo-ui5-range-slider
 */
export class FuroUi5RangeSlider extends RangeSlider {
  private startModelReaderWriter: ModelReaderWriter | undefined;

  private endModelReaderWriter: ModelReaderWriter | undefined;

  private fatHandler: FatHandler<FuroUi5RangeSlider>;

  private startReaderWriters: NumericReaderWriters<FuroUi5RangeSlider> | undefined;

  private endReaderWriters: NumericReaderWriters<FuroUi5RangeSlider> | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();
    this.fatHandler = new FatHandler<FuroUi5RangeSlider>(this, ["min", "max", "step", "labelInterval", "showTickmarks", "showTooltip"]);
    this.fatHandler.readAttributes();
  }

  // ── start (lower bound) ────────────────────────────────────────────────
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
   * Use this to bind the **start** (lower bound) model field by attribute.
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

  // ── end (upper bound) ──────────────────────────────────────────────────
  private _modelTo:
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

  get modelTo():
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
    return this._modelTo;
  }

  /**
   * Use this to bind the **end** (upper bound) model field by attribute.
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
  set modelTo(
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
    this.bindDataTo(value);
  }

  /**
   * Connects the **start** (lower bound) data model to this component.
   *
   * @paramref fieldNode - FLOAT - "@furo/open-models/"
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

    this.readonlyState.detach();
    this._model.__removeEventListener("update", this.readStartFromModel);

    // connect the model
    this._model = fieldNode;
    this.startReaderWriters = new NumericReaderWriters<FuroUi5RangeSlider>(this, "startValue", this._model, this.fatHandler);
    this.startModelReaderWriter = new ModelReaderWriter(this._model, this.startReaderWriters.getWriters(), this.startReaderWriters.getReaders());

    // listen on state changes on the model
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("update", this.readStartFromModel);

    // (re)wire UI listeners once — both ends share the same input/change events
    this.removeEventListener("input", this.writeToModel);
    this.removeEventListener("change", this.writeToModel);
    this.addEventListener("input", this.writeToModel);
    this.addEventListener("change", this.writeToModel);

    // initial read
    this.readStartFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // a11y
    this.accessibleName ??= this._model.__label;
  }

  /**
   * Connects the **end** (upper bound) data model to this component.
   *
   * @paramref fieldNode - FLOAT - "@furo/open-models/"
   * @public
   */
  public bindDataTo(
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
    if (fieldNode === undefined || fieldNode === this._modelTo) {
      return;
    }

    this._modelTo.__removeEventListener("update", this.readEndFromModel);

    // connect the model
    this._modelTo = fieldNode;
    this.endReaderWriters = new NumericReaderWriters<FuroUi5RangeSlider>(this, "endValue", this._modelTo, this.fatHandler);
    this.endModelReaderWriter = new ModelReaderWriter(this._modelTo, this.endReaderWriters.getWriters(), this.endReaderWriters.getReaders());

    // listen on changes from the model
    this._modelTo.__addEventListener("update", this.readEndFromModel);

    // make sure UI listeners are wired (no-op if bindData already added them)
    this.removeEventListener("input", this.writeToModel);
    this.removeEventListener("change", this.writeToModel);
    this.addEventListener("input", this.writeToModel);
    this.addEventListener("change", this.writeToModel);

    // initial read
    this.readEndFromModel();
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

  private readStartFromModel = (): void => {
    this.startModelReaderWriter?.readModel();
  };

  private readEndFromModel = (): void => {
    this.endModelReaderWriter?.readModel();
  };

  // A UI change can move either handle, so both ends are written back.
  private writeToModel = (): void => {
    this.startModelReaderWriter?.writeModel();
    this.endModelReaderWriter?.writeModel();
  };

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-range-slider";
    return md;
  }
}

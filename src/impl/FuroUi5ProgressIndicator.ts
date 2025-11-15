import { DOUBLE, FLOAT, FloatValue, INT32, Int32Value, INT64, Int64Value, UINT32, UInt32Value, UINT64, UInt64Value } from "@furo/open-models/dist";
import ProgressIndicator from "@ui5/webcomponents/dist/ProgressIndicator.js";

import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { NumericReaderWriters } from "@/lib/open-models/NumericReaderWriters";
import { FuroFatFloat, FuroFatInt32, FuroFatInt64, FuroFatUint32, FuroFatUint64 } from "@/models";

/**
 * A furo-ui5-progress-indicator shows the progress of a process in a graphical way. To indicate the progress, the inside of the component is filled with a color..
 * https://sap.github.io/ui5-webcomponents/playground/components/ProgressIndicator/
 *
 * Supported type: You can bind any `number` type, any `furo.fat.xxx` number type, `furo.BigDecimal` or the `google.wrapper.xxx` number types
 *
 * ```html
 * <furo-ui5-progress-indicator fn-bind-data="--dao(FIELDNODE)"></furo-ui5-progress-indicator>
 * ```
 *
 * @summary repeated strings
 * @tagname furo-ui5-progress-indicator
 * @appliesMixin FieldNodeAdapter
 */
export class FuroUi5ProgressIndicator extends ProgressIndicator {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  private modelReaderWriter: ModelReaderWriter | undefined;

  // eslint-disable-next-line no-use-before-define
  private numericReaderWriters: NumericReaderWriters<FuroUi5ProgressIndicator> | undefined;

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
    this._model.__addEventListener("field-value-changed", this.readFromModel.bind(this));

    // connect the model
    this._model = fieldNode;

    // init model
    this.numericReaderWriters = new NumericReaderWriters<FuroUi5ProgressIndicator>(this, "value", this._model);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this._getModelWriters(), this._getModelReaders());

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", this.readFromModel.bind(this));

    // listen on changes from UI

    // initial read
    this.readFromModel();

    // a11y
    if (this.accessibleName === undefined) {
      this.accessibleName = this._model.__label;
    }
  }

  private readFromModel(): void {
    this.modelReaderWriter?.readModel();
  }

  private _getModelReaders(): Map<string, () => void> {
    return this.numericReaderWriters!.getReaders();
  }

  // eslint-disable-next-line class-methods-use-this
  private _getModelWriters(): Map<string, () => void> {
    return new Map<string, () => void>();
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-progress-indicator";
    return md;
  }
}

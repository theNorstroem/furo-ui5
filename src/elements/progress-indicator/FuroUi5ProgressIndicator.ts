import type { DOUBLE, FloatValue, INT32, Int32Value, INT64, Int64Value, UINT32, UInt32Value, UINT64, UInt64Value } from "@furo/open-models";
import { FLOAT } from "@furo/open-models";
import ProgressIndicator from "@ui5/webcomponents/dist/ProgressIndicator.js";

import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { NumericReaderWriters } from "@/lib/open-models/NumericReaderWriters";
import type { FuroFatFloat, FuroFatInt32, FuroFatInt64, FuroFatUint32, FuroFatUint64 } from "@/models";

/**
 *
 * A furo-ui5-progress-indicator shows the progress of a process in a graphical way. To indicate the progress, the inside of the component is filled with a color..
 * https://ui5.github.io/webcomponents/components/ProgressIndicator/
 *
 * Supported type: You can bind any `number` type, any `furo.fat.xxx` number type, `furo.BigDecimal` or the `google.wrapper.xxx` number types
 *
 * ```html
 * <furo-ui5-progress-indicator fn-bind-data="--dao(FIELDNODE)"></furo-ui5-progress-indicator>
 * ```
 *
 * Set the `sparkline` attribute to render a very small bar, e.g. inside table cells or status bars.
 *
 * ```html
 * <furo-ui5-progress-indicator sparkline></furo-ui5-progress-indicator>
 * ```
 *
 * @attribute {Boolean} sparkline - Set this to render a very small progress indicator. This is useful for showing progress indicators in tables or status bars. The value text and the value-state icon are not shown in this mode.
 * @cssprop {N/A} [--progressIndicatorSparklineHeight=6px] - height of the bar in sparkline mode
 *
 * @summary Linear progress bar showing completion percentage.
 * @keywords progress, bar, percentage, loading, completion, indicator, sparkline, mini
 * @category Feedback
 * @usecase Use to show determinate progress of an operation.
 * @related furo-ui5-busy-indicator
 * @tagname furo-ui5-progress-indicator
 * @appliesMixin FieldNodeAdapter
 */
export class FuroUi5ProgressIndicator extends ProgressIndicator {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  private modelReaderWriter: ModelReaderWriter | undefined;

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

    // remove existing listeners — display-only, no UI listeners to clean up
    this._model.__removeEventListener("update", this.readFromModel);

    // connect the model
    this._model = fieldNode;

    // init model — display-only, empty writers map
    this.numericReaderWriters = new NumericReaderWriters<FuroUi5ProgressIndicator>(this, "value", this._model);
    this.modelReaderWriter = new ModelReaderWriter(this._model, new Map<string, () => void>(), this.numericReaderWriters.getReaders());

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // initial read
    this.readFromModel();

    // a11y
    this.accessibleName ??= this._model.__label;
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
  };

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-progress-indicator" };
  }

  /**
   * @private
   */
  static override get styles() {
    return [
      super.styles,
      // language=CSS
      `
        /* removes the space reserved for the value text and the value-state icon */
        :host(:not([hidden])[sparkline]) {
          padding: 0;
          min-height: 0;
        }

        :host([sparkline]) .ui5-progress-indicator-value,
        :host([sparkline]) .ui5-progress-indicator-icon {
          display: none;
        }

        /* removes the dots at the beginning and the end. */
        :host([sparkline]) .ui5-progress-indicator-remaining-bar:before,
        :host([sparkline]) .ui5-progress-indicator-remaining-bar:after {
          display: none;
        }

        :host([sparkline]) .ui5-progress-indicator-root {
          height: var(--progressIndicatorSparklineHeight, 6px);
          min-height: var(--progressIndicatorSparklineHeight, 6px);
        }

        :host([sparkline]) .ui5-progress-indicator-bar {
          /* UI5 does not have a style var for this value */
          height: 100%;
        }
      `,
    ];
  }
}

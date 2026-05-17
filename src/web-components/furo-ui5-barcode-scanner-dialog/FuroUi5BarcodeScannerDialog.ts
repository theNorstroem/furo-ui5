import { STRING, StringValue } from "@furo/open-models";
import BarcodeScannerDialog, { type BarcodeScannerDialogScanSuccessEventDetail } from "@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js";

import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { StringReaderWriters } from "@/lib/open-models/StringReaderWriters";
import { FuroFatString } from "@/models";

/**
 * The 'furo-ui5-barcode-scanner-dialog' component  provides barcode scanning functionality for all devices that
 * support the MediaDevices.getUserMedia() native API. Opening the dialog launches the device camera and scans for known barcode formats.
 * Internally, the component uses the zxing-js/library third party OSS. For a list of supported barcode formats, see the
 * zxing-js/library documentation. https://github.com/zxing-js/library
 *
 * It supports all features from the [SAP ui5 Barcode Scanner Dialog element](https://sap.github.io/ui5-webcomponents/playground/components/BarcodeScannerDialog/).
 *
 * You can bind any `string` type, like `furo.fat.String` type or the `google.protobuf.StringValue` type.
 *
 * ```html
 *  <furo-ui5-button at-click=--openClicked>Open Scanner</furo-ui5-button>
 *  <furo-ui5-barcode-scanner-dialog fn-show="--openClicked"
 *                                   fn-bind-data="--dao(*.field)"></furo-ui5-barcode-scanner-dialog>
 *
 * ```
 *
 * ## Methods
 * **bindData(fieldNode)**
 * Bind an entity field. You can use the entity even when no data was received.
 *
 * When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)
 *
 * @fires {String} scan-success -  Fires when the scan is completed successfuuly.
 * @fires {String} scan-error -  Fires when the scan fails with error.
 * @fires {String} furo-value-changed - Fires the field value when it changes.
 *
 * @summary data barcode scanner dialog
 * @tagname furo-ui5-barcode-scanner-dialog
 */
export class FuroUi5BarcodeScannerDialog extends BarcodeScannerDialog {
  private modelReaderWriter: ModelReaderWriter | undefined;

  private stringReaderWriters: StringReaderWriters<FuroUi5BarcodeScannerDialog> | undefined;

  private _model: STRING | FuroFatString | StringValue = new STRING();

  public get model(): STRING | FuroFatString | StringValue {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref FuroFatString - "@/models/index.js"
   * @typeref STRING - "@furo/open-models/"
   * @typeref StringValue - "@furo/open-models/"
   * @public
   */
  public set model(value: STRING | FuroFatString | StringValue) {
    this.bindData(value);
  }

  public code = "";

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - STRING - "@furo/open-models/"
   * @public
   */
  public bindData(fieldNode: STRING | FuroFatString | StringValue | undefined) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "this-field-value-changed",listenToStateChanged
     * - from ui: input, change
     */

    // connect the model
    this._model = fieldNode;
    // init model
    this.stringReaderWriters = new StringReaderWriters<FuroUi5BarcodeScannerDialog>(this, "code", this._model);
    this.modelReaderWriter = new ModelReaderWriter(
      this._model,
      this.stringReaderWriters.getWriters(),
      new Map<string, () => void>(),
    );

    // listen on state changes on the model

    // listen on changes from the model

    // listen on changes from UI
    this.addEventListener("scan-success", this.writeToModel.bind(this) as EventListener);

    // initial read

    // constraints
  }

  private writeToModel(e: CustomEvent<BarcodeScannerDialogScanSuccessEventDetail>): void {
    this.code = e.detail.text;
    this.modelReaderWriter?.writeModel();
    this.close();
  }

  /**
   * Shows the popover at the opener position defined with attribute opener.
   * @public
   */
  show() {
    this.open = true;
  }

  /**
   * Closes the popup.
   * @public
   */
  close(): void {
    this.open = false;
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-barcode-scanner-dialog";
    return md;
  }
}

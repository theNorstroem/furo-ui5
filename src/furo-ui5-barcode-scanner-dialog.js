import * as BarCodeScanner from '@ui5/webcomponents-fiori/dist/BarcodeScannerDialog.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { Events } from './lib/Events.js';

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
 * @element furo-ui5-barcode-scanner-dialog
 */
export class FuroUi5BarcodeScannerDialog extends FieldNodeAdapter(
  BarCodeScanner.default
) {
  constructor() {
    super();

    this.addEventListener('scan-success', this._updateFNA);
  }

  /**
   * Input change handler
   * This is done to be able to remove the event-listeners as a protection for multiple calls
   * @return {(function(): void)|*}
   * @private
   */
  _updateFNA(e) {
    const { text } = e.detail;
    if (this.isFat()) {
      this._tmpFAT = { value: null, labels: {}, attributes: {} };
      if (text === '') {
        this._tmpFAT.value = null;
        // add empty state
        if (this._tmpFAT.labels === null) {
          this._tmpFAT.labels = {};
        }
        this._tmpFAT.labels.empty = true;
      } else {
        this._tmpFAT.value = text;
        // remove empty state
        if (this._tmpFAT.labels && this._tmpFAT.labels.empty) {
          delete this._tmpFAT.labels.empty;
        }
        // init labels in_tmpFAT
        if (this._tmpFAT.labels === null) {
          this._tmpFAT.labels = {};
        }
        // set modified on changes
        this._tmpFAT.labels.modified = true;
      }
      this.setFnaFieldValue(this._tmpFAT);
    } else if (this.isWrapper()) {
      this.setFnaFieldValue(text === '' ? null : text);
    } else {
      this.setFnaFieldValue(text === '' ? '' : text);
    }

    this.dispatchEvent(Events.buildChangeEvent(text));
    this.close();
  }

  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'furo-ui5-barcode-scanner-dialog';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

FuroUi5BarcodeScannerDialog.define();

import { BOOLEAN, BoolValue } from "@furo/open-models";
import BusyIndicator from "@ui5/webcomponents/dist/BusyIndicator.js";

import { BoolReaderWriters } from "@/lib/open-models/BoolReaderWriters";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import type { FuroFatBool } from "@/models";

/**
 * The furo-ui5-busy-indicator signals that some operation is going on and that the user must wait.
 *
 * ```html
 * <furo-ui5-busy-indicator></furo-ui5-busy-indicator>
 * ```
 *
 * https://sap.github.io/ui5-webcomponents/playground/components/BusyIndicator/
 *
 * @summary ui5 busy indicator with methods
 * @tagname furo-ui5-busy-indicator
 */
export class FuroUiBusyIndicator extends BusyIndicator {
  private modelReaderWriter: ModelReaderWriter | undefined;

  // eslint-disable-next-line no-use-before-define
  private boolReaderWriters: BoolReaderWriters<FuroUiBusyIndicator> | undefined;

  private _model: BOOLEAN | FuroFatBool | BoolValue = new BOOLEAN();

  public get model(): BOOLEAN | FuroFatBool | BoolValue {
    return this._model;
  }

  /**
   * FieldNode setter
   *
   * @typeref BOOLEAN - "@furo/open-models/dist/index.js"
   * @typeref BoolValue - "@furo/open-models/dist/index.js"
   * @typeref FuroFatBool - "@/models/index.js"
   * @public
   */
  public set model(value: BOOLEAN | FuroFatBool | BoolValue) {
    this.bindData(value);
  }

  /**
   *
   * @paramref fieldNode - BOOLEAN - "@furo/open-models/dist/index.js"
   * @public
   */
  public bindData(fieldNode: BOOLEAN | FuroFatBool | BoolValue) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    // remove existing listeners
    // from ui: input, change
    // from model: "this-field-value-changed",listenToStateChanged

    // init model
    this._model = fieldNode;
    this.boolReaderWriters = new BoolReaderWriters<FuroUiBusyIndicator>(this, "active", this._model);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this._getModelWriters(), this._getModelReaders());

    // listen on state changes on the model

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", () => {
      this.readFromModel();
    });

    // listen on changes from UI

    // initial read
    this.readFromModel();

    // constraints

    // set the text placeholdr from model if none was set
    this.text = this.text === undefined ? this._model.__placeholder : this.text;

    // a11y
  }

  private readFromModel(): void {
    this.modelReaderWriter?.readModel();
  }

  private _getModelReaders(): Map<string, () => void> {
    return this.boolReaderWriters!.getReaders();
  }

  // eslint-disable-next-line class-methods-use-this
  private _getModelWriters(): Map<string, () => void> {
    return new Map<string, () => void>();
  }

  /**
   * Sets the busy indicator state to active
   */
  activate() {
    this.setAttribute("active", "");
    this._render();
  }

  /**
   * Sets the busy indicator state to inactive
   */
  deactivate() {
    this.removeAttribute("active");
    this._render();
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-busy-indicator";
    return md;
  }

  static override get styles() {
    return [
      super.styles,
      `:host(:not([hidden])) {display: block; position:relative}  .ui5-busy-indicator-root {height:100%; display:block; align-items: unset; justify-content:unset; position: unset;} .ui5-busy-indicator-busy-area {background-color: rgb(255 255 255 / 26%);}',`,
    ];
  }
}

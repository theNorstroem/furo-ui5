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
export class FuroUi5BusyIndicator extends BusyIndicator {
  private modelReaderWriter: ModelReaderWriter | undefined;

  private boolReaderWriters: BoolReaderWriters<FuroUi5BusyIndicator> | undefined;

  private _model: BOOLEAN | FuroFatBool | BoolValue = new BOOLEAN();

  public get model(): BOOLEAN | FuroFatBool | BoolValue {
    return this._model;
  }

  /**
   * FieldNode setter
   *
   * @typeref BOOLEAN - "@furo/open-models/"
   * @typeref BoolValue - "@furo/open-models/"
   * @typeref FuroFatBool - "@/models/index.js"
   * @public
   */
  public set model(value: BOOLEAN | FuroFatBool | BoolValue) {
    this.bindData(value);
  }

  /**
   *
   * @paramref fieldNode - BOOLEAN - "@furo/open-models/"
   * @public
   */
  public bindData(fieldNode: BOOLEAN | FuroFatBool | BoolValue | undefined) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    // remove existing listeners — display-only, no UI listeners to clean up
    this._model.__removeEventListener("update", this.readFromModel);

    // connect the model
    this._model = fieldNode;
    // init model — display-only, empty writers map
    this.boolReaderWriters = new BoolReaderWriters<FuroUi5BusyIndicator>(this, "active", this._model);
    this.modelReaderWriter = new ModelReaderWriter(this._model, new Map<string, () => void>(), this.boolReaderWriters.getReaders());

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // initial read
    this.readFromModel();

    // set the text placeholder from model if none was set
    this.text ??= this._model.__placeholder;
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
  };

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

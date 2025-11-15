import { BOOLEAN, BoolValue, type FieldConstraints } from "@furo/open-models";
import Switch from "@ui5/webcomponents/dist/Switch.js";

import { BoolReaderWriters } from "@/lib/open-models/BoolReaderWriters";
import { FatHandler } from "@/lib/open-models/FatHandler";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import type { FuroFatBool } from "@/models";

/**
 * The 'furo-ui5-switch' component allows the user to switch true and false for type Bool with data binding.
 *
 *
 * Bindable FieldNodes: `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.
 *
 *
 * ## supported FAT attributes
 *  - **"disabled":"true"** set the element to disabled
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 *
 *
 * @fires {Boolean} change -  Fired when the switch checked state changes.
 *
 * @summary data switch input field
 * @tagname furo-ui5-switch
 */
export class FuroUi5Switch extends Switch {
  private modelReaderWriter: ModelReaderWriter | undefined;

  // eslint-disable-next-line no-use-before-define
  private fatHandler: FatHandler<FuroUi5Switch>;

  // eslint-disable-next-line no-use-before-define
  private boolReaderWriters: BoolReaderWriters<FuroUi5Switch> | undefined;

  constructor() {
    super();
    this.fatHandler = new FatHandler(this as FuroUi5Switch, ["disabled"]);
    this.fatHandler.readAttributes();
  }

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
    this.boolReaderWriters = new BoolReaderWriters<FuroUi5Switch>(this, "checked", this._model, this.fatHandler);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this._getModelWriters(), this._getModelReaders());

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", () => {
      this.readFromModel();
    });

    // listen on changes from UI
    this.addEventListener("input", () => {
      this.writeToModel();
    });
    this.addEventListener("change", () => {
      this.writeToModel();
    });

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // set the text placeholdr from model if none was set
    this.tooltip = this.tooltip === undefined ? this._model.__placeholder : this.tooltip;

    // a11y
    if (this.accessibleName === undefined) {
      this.accessibleName = this._model.__label;
    }
  }

  private handleConstraints(fieldConstraints: FieldConstraints | undefined) {
    if (fieldConstraints !== undefined) {
      // for a11y
      if (fieldConstraints.required) {
        this.required = true;
      }
      if (fieldConstraints.read_only) {
        this.disabled = true;
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
    return this.boolReaderWriters!.getReaders();
  }

  private _getModelWriters(): Map<string, () => void> {
    return this.boolReaderWriters!.getWriters();
  }

  /**
   * Checks the switch and updates the value
   */
  public check() {
    this.checked = true;
    this.writeToModel();
  }

  /**
   * Unhecks the switch and updates the value
   */
  public uncheck() {
    this.checked = false;
    this.writeToModel();
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-switch";
    return md;
  }
}

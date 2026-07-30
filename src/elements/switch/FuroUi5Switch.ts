import { BOOLEAN, BoolValue, type FieldConstraints } from "@furo/open-models";
import Switch from "@ui5/webcomponents/dist/Switch.js";

import { BoolReaderWriters } from "@/lib/open-models/BoolReaderWriters";
import { FatHandler } from "@/lib/open-models/FatHandler";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
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
 * @summary Toggle control for immediate on/off state changes.
 * @keywords switch, toggle, on-off, boolean, slider, form
 * @category Form
 * @usecase Use when the state change should take effect immediately without form submission.
 * @related furo-ui5-checkbox, furo-ui5-toggle-button
 * @tagname furo-ui5-switch
 */
export class FuroUi5Switch extends Switch {
  private modelReaderWriter: ModelReaderWriter | undefined;

  private fatHandler: FatHandler<FuroUi5Switch>;

  private boolReaderWriters: BoolReaderWriters<FuroUi5Switch> | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();
    this.fatHandler = new FatHandler<FuroUi5Switch>(this, ["disabled"]);
    this.fatHandler.readAttributes();
  }

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

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "update", listenToStateChanged
     * - from ui: input, change
     */
    this.readonlyState.detach();
    this._model.__removeEventListener("update", this.readFromModel);
    this.removeEventListener("input", this.writeToModel);
    this.removeEventListener("change", this.writeToModel);

    // connect the model
    this._model = fieldNode;
    // init model
    this.boolReaderWriters = new BoolReaderWriters<FuroUi5Switch>(this, "checked", this._model, this.fatHandler);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this.boolReaderWriters.getWriters(), this.boolReaderWriters.getReaders());

    // listen on state changes on the model
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

    // set the text placeholdr from model if none was set
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
        this.disabled = true;
      }
    }
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
  };

  private writeToModel = (): void => {
    this.modelReaderWriter?.writeModel();
  };

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
    return { ...super.metadata, tag: "furo-ui5-switch" };
  }
}

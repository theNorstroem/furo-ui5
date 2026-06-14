import { BOOLEAN, BoolValue, type FieldConstraints } from "@furo/open-models";
import CheckBox from "@ui5/webcomponents/dist/CheckBox.js";

import { BoolReaderWriters } from "@/lib/open-models/BoolReaderWriters";
import { FatHandler } from "@/lib/open-models/FatHandler";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import type { FuroFatBool } from "@/models";

/**
 * The 'furo-ui5-checkbox' component allows the user to switch true and false for type Bool with data binding.
 *
 * It supports all features from the [SAP ui5 checkbox element](https://sap.github.io/ui5-webcomponents/playground/components/CheckBox/).
 *
 * Bindable FieldNodes: `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.
 *
 *
 * ## supported FAT attributes
 *  - **"readonly":"true"** set the element to readonly
 *  - **"disabled":"true"** set the element to disabled
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 *
 *
 * @fires {Boolean} change -  Fired when the checkbox checked state changes.
 *
 * @summary Binary selection control for enabling or disabling options.
 * @keywords checkbox, check, toggle, boolean, selection, tick, form
 * @category Form
 * @usecase Use for independent on/off choices or multiple selections from a group.
 * @related furo-ui5-switch, furo-ui5-radio-button
 * @tagname furo-ui5-checkbox
 */
export class FuroUi5Checkbox extends CheckBox {
  private readonly valueStateManager: FieldNodeValueState;

  private modelReaderWriter: ModelReaderWriter | undefined;

  private fatHandler: FatHandler<FuroUi5Checkbox>;

  private boolReaderWriters: BoolReaderWriters<FuroUi5Checkbox> | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();
    this.valueStateManager = new FieldNodeValueState(this);
    this.fatHandler = new FatHandler<FuroUi5Checkbox>(this, ["readonly", "disabled", "required"]);
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
    this.boolReaderWriters = new BoolReaderWriters<FuroUi5Checkbox>(this, "checked", this._model, this.fatHandler);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this.boolReaderWriters.getWriters(), this.boolReaderWriters.getReaders());

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);
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
    this.text ??= this._model.__placeholder;

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
        this.readonly = true;
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
   * Checks the checkbox and updates the value
   */
  public check() {
    this.checked = true;
    this.writeToModel();
  }

  /**
   * Unhecks the checkbox and updates the value
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
    md.tag = "furo-ui5-checkbox";
    return md;
  }
}

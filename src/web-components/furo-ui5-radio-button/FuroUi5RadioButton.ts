import { BOOLEAN, BoolValue, type FieldConstraints } from "@furo/open-models";
import RadioButton from "@ui5/webcomponents/dist/RadioButton.js";

import { BoolReaderWriters } from "@/lib/open-models/BoolReaderWriters";
import { FatHandler } from "@/lib/open-models/FatHandler";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import type { FuroFatBool } from "@/models";

/**
 * The 'furo-ui5-radio-button' component allows the user to switch true and false for Bool with data binding.
 *
 * It supports all features from the [SAP ui5 toggleButton element](https://sap.github.io/ui5-webcomponents/playground/components/ToggleButton/).

 * You can bind  `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.
 *
 * ```html
 *  <furo-ui5-radio-button
 *     name="groupA"
 *     .model=${this.BoolFieldNode}
 *  ></furo-ui5-radio-button>
 *  <furo-ui5-radio-button
 *     name="groupA"
 *     fn-bind-data="--dao(OTHERFIELDNODE)"
 *  ></furo-ui5-radio-button>
 * ```
 *
 * ## supported FAT attributes
 *  - **"readonly":"true"** set the element to readonly
 *  - **"disabled":"true"** set the element to disabled
 *  - **"value-state":""** set the value-state
 *
 * ## supported  constraints
 * - **readonly: true** , set the element to readonly
 *
 * The constraint **required** will mark the element as required
 *
 * When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)
 *
 * @fires {Boolean} change -  Fired when the component checked state changes.
 *
 * @summary boolean toggle button
 * @tagname furo-ui5-radio-button
 */
export class FuroUi5RadioButton extends RadioButton {
  private readonly valueStateManager: FieldNodeValueState;

  private modelReaderWriter: ModelReaderWriter | undefined;

  private fatHandler: FatHandler<FuroUi5RadioButton>;

  private boolReaderWriters: BoolReaderWriters<FuroUi5RadioButton> | undefined;

  constructor() {
    super();
    this.valueStateManager = new FieldNodeValueState(this);
    this.fatHandler = new FatHandler<FuroUi5RadioButton>(this, ["readonly", "disabled", "required"]);
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

    // remove existing listeners
    // from ui: input, change
    // from model: "this-field-value-changed",listenToStateChanged

    // init model
    this._model = fieldNode;
    this.boolReaderWriters = new BoolReaderWriters<FuroUi5RadioButton>(this, "checked", this._model, this.fatHandler);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this._getModelWriters(), this._getModelReaders());

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);
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
    this.text = this.text === undefined ? this._model.__placeholder : this.text;

    // a11y
    if (this.accessibleName ??= undefined) {
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
        this.readonly = true;
      }
    }
  }

  /**
   * @private
   */
  override syncGroup() {
    super.syncGroup();
    this.writeToModel();
  }

  private readFromModel(): void {
    this.modelReaderWriter?.readModel();
  }

  private writeToModel(): void {
    this.modelReaderWriter?.writeModel();
  }

  private _getModelReaders(): Map<string, () => void> {
    return this.boolReaderWriters!.getReaders();
  }

  private _getModelWriters(): Map<string, () => void> {
    return this.boolReaderWriters!.getWriters();
  }

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
    md.tag = "furo-ui5-radio-button";
    return md;
  }
}

import type { BoolValue} from "@furo/open-models";
import { BOOLEAN, type FieldConstraints } from "@furo/open-models";
import ToggleButton from "@ui5/webcomponents/dist/ToggleButton.js";

import { BoolReaderWriters } from "@/lib/open-models/BoolReaderWriters";
import { FatHandler } from "@/lib/open-models/FatHandler";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import type { FuroFatBool } from "@/models";

/**
 * The 'furo-ui5-toggle-button' component allows the user to switch true and false for Bool with data binding.
 *
 * You can bind  `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.
 *
 *
 * ## supported FAT labels
 *  - **"disabled":"true"** set the element to disabled
 *
 * ## supported FAT attributes
 *  - **"icon":""** set the icon
 *  - **"iconEnd":""** set the icon
 *  - **"design":""** set the design
 *
 *
 *
 * @summary Button that maintains an on/off pressed state.
 * @keywords toggle, switch, on-off, pressed, state, button
 * @category Button
 * @usecase Use when action has two states (active/inactive) that persist after click.
 * @related furo-ui5-button, furo-ui5-switch, furo-ui5-segmented-button
 * @tagname furo-ui5-toggle-button
 */
export class FuroUi5ToggleButton extends ToggleButton {
  // used to restore the state after a invalidation -> validation change
  private _previousDesign: "Default" | "Positive" | "Negative" | "Transparent" | "Emphasized" | "Attention" = "Default";

  private modelReaderWriter: ModelReaderWriter | undefined;

  private fatHandler: FatHandler<FuroUi5ToggleButton>;

  private boolReaderWriters: BoolReaderWriters<FuroUi5ToggleButton> | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();

    this.fatHandler = new FatHandler<FuroUi5ToggleButton>(this, ["icon", "endIcon", "design"]);
    this.fatHandler.readAttributes();
    this.fatHandler.setCustomAttributesHandler(attributes => {
      // reset the design to the initial design if none was received
      if (attributes.has("design")) {
        return;
      }
      this.design = this._previousDesign;
    });
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
     * - from ui: click, change
     */
    this.readonlyState.detach();
    this._model.__removeEventListener("update", this.readFromModel);
    this.removeEventListener("click", this.writeToModel);
    this.removeEventListener("change", this.writeToModel);

    // connect the model
    this._model = fieldNode;
    // init model
    this.boolReaderWriters = new BoolReaderWriters<FuroUi5ToggleButton>(this, "pressed", this._model, this.fatHandler);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this.boolReaderWriters.getWriters(), this.boolReaderWriters.getReaders());

    // listen on state changes on the model
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // listen on changes from UI
    this.addEventListener("click", this.writeToModel);
    this.addEventListener("change", this.writeToModel);

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // set the text placeholder from model if none was set
    this.innerText = this.innerText === "" ? this._model.__placeholder : this.innerText;

    // a11y
    this.accessibleName ??= this._model.__label;
  }

  private handleConstraints(fieldConstraints: FieldConstraints | undefined) {
    if (fieldConstraints !== undefined) {
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
   * Checks the checkbox and updates the value
   */
  public check() {
    this.pressed = true;
    this.writeToModel();
  }

  /**
   * Unhecks the checkbox and updates the value
   */
  public uncheck() {
    this.pressed = false;
    this.writeToModel();
  }

  /**
   * Updates the design
   *
   * @private
   */
  _setDesign(design: "Default" | "Positive" | "Negative" | "Transparent" | "Emphasized" | "Attention") {
    this.design = design;
  }

  /**
   * reset to previous value state
   * @private
   */
  _resetDesign() {
    this._setDesign(this._previousDesign);
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-toggle-button" };
  }
}
// 300

import { BOOLEAN, type FieldConstraints } from "@furo/open-models";
import CheckBox from "@ui5/webcomponents/dist/CheckBox.js";

import { BoolReaderWriters } from "@/lib/open-models/BoolReaderWriters";
import { FatHandler } from "@/lib/open-models/FatHandler";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";

/**
 * `celledit-bool` is a `celledit` context renderer for type `bool`.
 *
 * It uses a UI5 checkbox as the editable renderer and binds a `bool` FieldNode
 * via the standard `bindData(fieldNode)` interface. The element is styled to sit
 * compactly inside a table cell.
 *
 * @fires {Boolean} change - Fired when the checkbox checked state changes.
 *
 * @summary celledit renderer for `bool`
 * @element celledit-bool
 */
export class CelleditBool extends CheckBox {
  private readonly valueStateManager: FieldNodeValueState;

  private modelReaderWriter: ModelReaderWriter | undefined;

  private fatHandler: FatHandler<CelleditBool>;

  private boolReaderWriters: BoolReaderWriters<CelleditBool> | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();
    this.valueStateManager = new FieldNodeValueState(this);
    this.fatHandler = new FatHandler<CelleditBool>(this, ["readonly", "disabled", "required"]);
    this.fatHandler.readAttributes();
  }

  private _model: BOOLEAN = new BOOLEAN();

  public get model(): BOOLEAN {
    return this._model;
  }

  /**
   * FieldNode setter
   *
   * @typeref BOOLEAN - "@furo/open-models/"
   * @public
   */
  public set model(value: BOOLEAN) {
    this.bindData(value);
  }

  static override get styles() {
    return [
      super.styles,
      // language=CSS
      ` :host(:not([hidden])){
        display:block;
        padding: 2px 0;
        /** --_ui5_checkbox_width_height:0; **/
      }
      `,
    ];
  }

  /**
   *
   * @paramref fieldNode - BOOLEAN - "@furo/open-models/"
   * @public
   */
  public bindData(fieldNode: BOOLEAN | undefined): void {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    // remove existing listeners
    this.readonlyState.detach();
    this._model.__removeEventListener("update", this.readFromModel);
    this.removeEventListener("input", this.writeToModel);
    this.removeEventListener("change", this.writeToModel);

    // connect the model
    this._model = fieldNode;
    this.boolReaderWriters = new BoolReaderWriters<CelleditBool>(this, "checked", this._model, this.fatHandler);
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

    // set the text placeholder from model if none was set
    this.text ??= this._model.__placeholder;

    // a11y
    this.accessibleName ??= this._model.__label;
  }

  private handleConstraints(fieldConstraints: FieldConstraints | undefined): void {
    if (fieldConstraints !== undefined) {
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
   * @private
   */
  static override get metadata() {
    return { tag: "celledit-bool" };
  }
}

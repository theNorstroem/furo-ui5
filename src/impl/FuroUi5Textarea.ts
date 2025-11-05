import { type FieldConstraints, STRING, StringValue } from "@furo/open-models/dist";
import Textarea from "@ui5/webcomponents/dist/TextArea.js";

import { FatHandler } from "@/lib/open-models/FatHandler";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import { StringReaderWriters } from "@/lib/open-models/StringReaderWriters";
import { FuroFatString } from "@/models";

/**
 * The 'furo-ui5-textarea' component allows the user to enter and edit texts with data binding.
 *
 * It supports all features from the [SAP ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/Input/).
 *
 * You can bind any `string` type, like `furo.fat.String` type or the `google.protobuf.StringValue` type.
 * ## supported FAT attributes
 *  - **"readonly":"true"** set the element to readonly
 *  - **"required":"true"** set the element to required
 *  - **"disabled":"true"** set the element to disabled
 *  - **"icon":"home"** set the icon
 *  - **"placeholder":"string"** set the placeholder for the element
 *  - **"max":"number"** set the maximum number of characters available in the input field.
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 * - **placeholder:"some string"** set the placeholder for the element
 * - **max:"number"** set the maximum number of characters available in the input field.
 *
 * @tagname furo-ui5-textarea
 */
export class FuroUi5Textarea extends Textarea {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  private modelReaderWriter: ModelReaderWriter | undefined;

  // eslint-disable-next-line no-use-before-define
  private fatHandler: FatHandler<FuroUi5Textarea>;

  // eslint-disable-next-line no-use-before-define
  private stringReaderWriters: StringReaderWriters<FuroUi5Textarea> | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();

    this.fatHandler = new FatHandler(this as FuroUi5Textarea, ["placeholder", "maxlength", "rows"]);
    this.fatHandler.readAttributes();
  }

  private _model: STRING | FuroFatString | StringValue = new STRING();

  public get model(): STRING | FuroFatString | StringValue {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref STRING - "@furo/open-models/dist/index.js"
   * @typeref StringValue - "@furo/open-models/dist/index.js"
   * @typeref FuroFatString - "@/models/index.js"
   * @public
   */
  public set model(value: STRING | FuroFatString | StringValue) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - STRING - "@furo/open-models/dist/index.js"
   * @public
   */
  public bindData(fieldNode: STRING | FuroFatString | StringValue) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "this-field-value-changed",listenToStateChanged
     * - from ui: input, change
     */
    this.readonlyState.detach();
    this._model.__addEventListener("field-value-changed", this.readFromModel.bind(this));
    this.addEventListener("input", this.writeToModel.bind(this));
    this.addEventListener("change", this.writeToModel.bind(this));

    // connect the model
    this._model = fieldNode;
    // init model
    this.stringReaderWriters = new StringReaderWriters<FuroUi5Textarea>(this, "value", this._model, this.fatHandler);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this._getModelWriters(), this._getModelReaders());

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", this.readFromModel.bind(this));

    // listen on changes from UI
    this.addEventListener("input", this.writeToModel.bind(this));
    this.addEventListener("change", this.writeToModel.bind(this));

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // set the placeholder from model if none was set before
    this.placeholder = this.placeholder === undefined ? this._model.__placeholder : this.placeholder;

    // a11y
    this.accessibleName = this._model.__label;
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
      if (fieldConstraints.max_length) {
        this.maxlength = fieldConstraints.max_length;
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
    return this.stringReaderWriters!.getReaders();
  }

  private _getModelWriters(): Map<string, () => void> {
    return this.stringReaderWriters!.getWriters();
  }

  /**
   * Clears the value of the input field.
   * @public
   */
  clear() {
    this.value = "";
    this.writeToModel();
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-textarea";
    return md;
  }
}

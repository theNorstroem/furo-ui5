import { type FieldConstraints, STRING, StringValue } from "@furo/open-models";
import TextArea from "@ui5/webcomponents/dist/TextArea.js";

import { FatHandler } from "@/lib/open-models/FatHandler";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import { StringReaderWriters } from "@/lib/open-models/StringReaderWriters";
import { FuroFatString } from "@/models";

/**
 * The 'furo-ui5-textarea' component allows the user to enter and edit texts with data binding.
 *
 * It supports all features from the [SAP ui5 Input element](https://ui5.github.io/webcomponents/components/Input/).
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
 * @summary Multi-line text input for longer content entry.
 * @keywords textarea, multiline, text, input, form, description, notes
 * @category Form
 * @usecase Use when users need to enter multiple lines of text like descriptions or comments.
 * @related furo-ui5-input, furo-ui5-expandable-text
 * @tagname furo-ui5-textarea
 */
export class FuroUi5Textarea extends TextArea {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  private modelReaderWriter: ModelReaderWriter | undefined;

  private fatHandler: FatHandler<FuroUi5Textarea>;

  private stringReaderWriters: StringReaderWriters<FuroUi5Textarea> | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();

    this.fatHandler = new FatHandler<FuroUi5Textarea>(this, ["placeholder", "maxlength", "rows"]);
    this.fatHandler.readAttributes();
  }

  private _model: STRING | FuroFatString | StringValue = new STRING();

  public get model(): STRING | FuroFatString | StringValue {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref STRING - "@furo/open-models/"
   * @typeref StringValue - "@furo/open-models/"
   * @typeref FuroFatString - "@/models/index.js"
   * @public
   */
  public set model(value: STRING | FuroFatString | StringValue) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - STRING - "@furo/open-models/"
   * @public
   */
  public bindData(fieldNode: STRING | FuroFatString | StringValue | undefined) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "this-update",listenToStateChanged
     * - from ui: input, change
     */
    this.readonlyState.detach();
    this._model.__removeEventListener("update", this.readFromModel);
    this.removeEventListener("input", this.writeToModel);
    this.removeEventListener("change", this.writeToModel);

    // connect the model
    this._model = fieldNode;
    // init model
    this.stringReaderWriters = new StringReaderWriters<FuroUi5Textarea>(this, "value", this._model, this.fatHandler);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this.stringReaderWriters.getWriters(), this.stringReaderWriters.getReaders());

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

    // set the placeholder from model if none was set before
    this.placeholder ??= this._model.__placeholder;

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
      if (fieldConstraints.max_length) {
        this.maxlength = fieldConstraints.max_length;
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

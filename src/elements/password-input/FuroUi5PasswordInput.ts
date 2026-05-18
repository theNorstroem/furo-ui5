import "@ui5/webcomponents/dist/features/InputSuggestions.js";

import { type FieldConstraints, STRING, StringValue } from "@furo/open-models";
import Input from "@ui5/webcomponents/dist/Input.js";

import { FatHandler } from "@/lib/open-models/FatHandler";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import { StringReaderWriters } from "@/lib/open-models/StringReaderWriters";
import { FuroFatString } from "@/models";
import DebounceBuilder from "@/util/Debounce";

/**
 * The 'furo-ui5-password-input' component allows the user to enter and edit password with data binding.
 * It supports all features from the [SAP ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/Input/).
 *
 * You can bind any `string` type, like `furo.fat.String` type or the `google.protobuf.StringValue` type.
 *
 * ```html
 *  <furo-ui5-password-input
 *     fn-bind-data="--dao(FIELDNODE)"
 *  ></furo-ui5-password-input>
 * ```
 *
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
 * - **maxlength:"number"** set the maximum number of characters available in the input field.
 *
 * The constraint **required** will mark the element as required
 *
 * ## Methods
 * **bind-data(fieldNode)**
 * Bind a entity field. You can use the entity even when no data was received.
 *
 * When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)
 *
 * @fires {CustomEvent<undefined>} password-showed - Fired when the password is shown, after calling the show method.
 * @fires {CustomEvent<undefined>} password-hidden - Fired when the password is hidden, after calling the hide() method.
 *
 * @summary data password input field
 * @tagname furo-ui5-password-input
 */
export class FuroUi5PasswordInput extends Input {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  private modelReaderWriter: ModelReaderWriter | undefined;

  private fatHandler: FatHandler<FuroUi5PasswordInput>;

  private stringReaderWriters: StringReaderWriters<FuroUi5PasswordInput> | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();
    this.type = "Password";

    this.fatHandler = new FatHandler<FuroUi5PasswordInput>(this, ["placeholder", "maxlength"]);
    this.fatHandler.readAttributes();
  }

  private debouncedSearch = DebounceBuilder(() => {
    this.dispatchEvent(
      new CustomEvent<string>("search-requested", {
        detail: this.value,
        bubbles: true,
        composed: true,
      })
    );
  }, 500);

  /**
   * Listen on input event to trigger the search event.
   */
  override connectedCallback() {
    this.addEventListener("input", this.debouncedSearch);

    return super.connectedCallback();
  }

  override disconnectedCallback() {
    this.removeEventListener("input", this.debouncedSearch);
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
     * - from model: "this-field-value-changed",listenToStateChanged
     * - from ui: input, change
     */
    this.readonlyState.detach();
    this._model.__removeEventListener("field-value-changed", this.readFromModel);
    this.removeEventListener("input", this.writeToModel);
    this.removeEventListener("change", this.writeToModel);

    // connect the model
    this._model = fieldNode;
    // init model
    this.stringReaderWriters = new StringReaderWriters<FuroUi5PasswordInput>(this, "value", this._model, this.fatHandler);
    this.modelReaderWriter = new ModelReaderWriter(
      this._model,
      this.stringReaderWriters.getWriters(),
      this.stringReaderWriters.getReaders(),
    );

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", this.readFromModel);

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
  public clear() {
    this.value = "";
    this.writeToModel();
  }

  /**
   * show password
   */
  public show() {
    this.type = "Text";

    const customEvent = new Event("password-showed", {
      composed: true,
      bubbles: true,
    });
    this.dispatchEvent(customEvent);
  }

  /**
   * hide password
   */
  public hide() {
    this.type = "Password";

    const customEvent = new Event("password-hidden", {
      composed: true,
      bubbles: true,
    });
    this.dispatchEvent(customEvent);
  }

  /**
   * toggle visibility of the password. (show/hide) password
   */
  public togglePasswordVisibility() {
    if (this.type === "Text") {
      this.hide();
    } else {
      this.show();
    }
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-password-input";
    return md;
  }
}

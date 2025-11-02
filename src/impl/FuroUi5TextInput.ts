import { type FieldConstraints, STRING, StringValue } from "@furo/open-models/dist";
import Input from "@ui5/webcomponents/dist/Input.js";

import { FatHandler } from "@/lib/open-models/FatHandler";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import { FuroFatString } from "@/models";
import DebounceBuilder from "@/util/Debounce";

/**
 * The 'furo-ui5-text-input' component allows the user to enter and edit texts with data binding.
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
 * @event {CustomEvent<String>} search-requested - Fired when typing in input (debounced, default 500ms)
 * @tagname furo-ui5-text-input
 */
export class FuroUi5TextInput extends Input {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  private modelReaderWriter: ModelReaderWriter | undefined;

  // eslint-disable-next-line no-use-before-define
  private fatHandler: FatHandler<FuroUi5TextInput>;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();
    this.type = "Text";

    this.fatHandler = new FatHandler(this as FuroUi5TextInput, ["placeholder", "maxlength"]);
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
    const readers = new Map<string, () => void>();

    readers.set("primitives.STRING", () => {
      const v = (this._model as STRING).value;
      if (v !== this.value) {
        this.value = v;
      }
    });

    readers.set("furo.fat.String", () => {
      const v = (this._model as FuroFatString).value.value;
      if (v !== this.value) {
        this.value = v;
      }
      this.fatHandler.applyReceivedFatAttributesAndLabels(this._model as FuroFatString);
    });

    readers.set("google.protobuf.StringValue", () => {
      const v = (this._model as StringValue).value;
      if (v !== this.value) {
        this.value = v;
      }
    });

    return readers;
  }

  private _getModelWriters(): Map<string, () => void> {
    const writers = new Map<string, () => void>();

    writers.set("primitives.STRING", () => {
      (this._model as STRING).value = this.value;
    });

    writers.set("furo.fat.String", () => {
      (this._model as FuroFatString).value.value = this.value;
    });
    writers.set("google.protobuf.StringValue", () => {
      (this._model as StringValue).value = this.value;
    });
    return writers;
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
   * Closes the popover from value-state-message or suggestions imperatively.
   */
  public closePopover() {
    this.open = false;
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-text-input";
    return md;
  }
}

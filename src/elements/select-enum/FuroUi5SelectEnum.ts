import "@/elements/option";

import { ENUM, type FieldConstraints } from "@furo/open-models";
import Select from "@ui5/webcomponents/dist/Select.js";

import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";

/**
 * ### FuroUi5SelectEnum
 * With FuroUi5SelectEnum you can bind a ENUM field to the model. It will build up all defined options from the ENUM.
 *
 * It extends the UI5 Select.
 *
 * ---
 *
 * @tagname furo-ui5-select-enum
 *
 */
export class FuroUi5SelectEnum extends Select {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  private modelReaderWriter: ModelReaderWriter | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  /**
   * @attribute {boolean} show-unspecified - Allows you to select the `unspecified` option.
   */
  public showUnspecifiedOption = false;

  private _model: ENUM<unknown> | undefined;

  get model(): ENUM<unknown> | undefined {
    return this._model;
  }

  /**
   * @typeref ENUM - "@furo/open-models/"
   * @public
   * @param value
   */
  set model(value: ENUM<unknown> | undefined) {
    this.bindData(value);
  }

  /**
   * @paramref fieldNode - ENUM - "@furo/open-models/"
   * @param fieldNode
   * @public
   */
  public bindData(fieldNode: ENUM<unknown> | undefined) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }
    if (fieldNode.__meta.typeName !== "primitives.ENUM") {
      console.error(`${fieldNode.__meta.typeName} is not bindable to EditEnum!`);

      console.log(this);
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "field-value-changed"
     * - from ui: change
     */
    this.readonlyState.detach();
    this._model?.__removeEventListener("field-value-changed", this.readFromModel);
    this.removeEventListener("change", this.writeToModel);

    // connect the model
    this._model = fieldNode;
    // remove existing children
    this.querySelectorAll("furo-ui5-option").forEach((el) => {
      el.remove();
    });

    const options: HTMLElement[] = [];
    Object.keys(fieldNode.enumArg).forEach((key: string) => {
      const select = document.createElement("furo-ui5-option");
      select.id = key;
      select.innerText = fieldNode.msg(key);
      const currentValue = this._model?.value;
      if (typeof currentValue === "string" && select.id === currentValue) {
        select.setAttribute("selected", "");
      }
      // hide UNSPECIFIED option unless show-unspecified is requested.
      if (key.includes("_UNSPECIFIED") && !this.showUnspecifiedOption) {
        select.setAttribute("data-unspecified", "");
      }
      options.push(select);
    });
    options.forEach((option) => this.appendChild(option));

    // init model — dispatch-by-typeName via ModelReaderWriter (single entry: primitives.ENUM)
    const readers = new Map<string, () => void>();
    readers.set("primitives.ENUM", this.applyModelValueToSelection);
    const writers = new Map<string, () => void>();
    writers.set("primitives.ENUM", this.captureSelectionIntoModel);
    this.modelReaderWriter = new ModelReaderWriter(this._model, writers, readers);

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", this.readFromModel);

    // listen on changes from UI
    this.addEventListener("change", this.writeToModel);

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // set the placeholder from model if none was set before
    this.tooltip = (this.tooltip ?? undefined) ? this._model.__placeholder : this.tooltip;

    // a11y
    this.accessibleName ??= this._model.__label;
  }

  private handleConstraints(fieldConstraints: FieldConstraints | undefined) {
    if (fieldConstraints?.required) {
      this.required = true;
    }
    if (fieldConstraints?.read_only) {
      this.readonly = true;
    }
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
  };

  private writeToModel = (): void => {
    this.modelReaderWriter?.writeModel();
  };

  private applyModelValueToSelection = (): void => {
    const value = this._model?.value;
    if (typeof value !== "string") return;
    const option = this.querySelector(`furo-ui5-option[id="${CSS.escape(value)}"]`);
    if (option) {
      const index = [...this.children].indexOf(option);
      // do not update same index
      if (this._selectedIndex !== index) {
        this._select(index);
      }
    }
  };

  private captureSelectionIntoModel = (): void => {
    if (!this._model) return;
    const v = this.selectedOption?.id;
    if (v !== undefined) {
      this._model.value = v;
    }
  };

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-select-enum";
    return md;
  }

  /**
   * @private
   */
  static override get styles() {
    return [
      super.styles,
      // language=CSS
      `
        :host(:not([show-unspecified])) ::slotted(furo-ui5-option[data-unspecified=""]) {
          display: none;
        }
      `,
    ];
  }
}

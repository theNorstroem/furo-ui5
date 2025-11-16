import "@/furo-ui5-option";

import { ENUM, type FieldConstraints } from "@furo/open-models";
import Select from "@ui5/webcomponents/dist/Select.js";

import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";

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

  /**
   * @attribute {boolean} show-unspecified - Allows you to select the `unspecified` option.
   */
  public showUnspecifiedOption: boolean = false;

  private _model: ENUM<unknown> | undefined;

  get model(): ENUM<unknown> | undefined {
    return this._model;
  }

  /**
   * @typeref ENUM - "@furo/open-models/dist/index.js"
   * @public
   * @param value
   */
  set model(value: ENUM<unknown>) {
    this.bindData(value);
  }

  /**
   * @paramref fieldNode - ENUM - "@furo/open-models/dist/index.js"
   * @param fieldNode
   * @public
   */
  public bindData(fieldNode: ENUM<unknown>) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }
    if (fieldNode.__meta.typeName !== "primitives.ENUM") {
      // eslint-disable-next-line no-console
      console.error(`${fieldNode.__meta.typeName} is not bindable to EditEnum!`);
      // eslint-disable-next-line no-console
      console.log(this);
      return;
    }

    // remove listeners on old model
    this.removeEventListener("change", this.writeToModel.bind(this));
    this._model?.__removeEventListener("field-value-changed", this.readFromModel.bind(this));

    this._model = fieldNode;
    // remove existing children
    this.querySelectorAll("furo-ui5-option").forEach(el => {
      el.remove();
    });

    const options: HTMLElement[] = [];
    Object.keys(fieldNode.enumArg).forEach((key: string) => {
      const select = document.createElement("furo-ui5-option");
      select.id = key;
      select.innerText = fieldNode.msg(key);
      if (select.id === this._model?.value) {
        select.setAttribute("selected", "");
      }
      // hide UNSPECIFIED option unless show-unspecified is requested.
      if (key.includes("_UNSPECIFIED") && !this.showUnspecifiedOption) {
        select.setAttribute("data-unspecified", "");
      }
      options.push(select);
    });
    options.forEach(option => this.appendChild(option));

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", this.readFromModel.bind(this));

    // listen on changes from UI
    this.addEventListener("change", this.writeToModel.bind(this));

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // set the placeholder from model if none was set before
    this.tooltip = this.tooltip === undefined ? this._model.__placeholder : this.tooltip;

    // a11y
    if (this.accessibleName === undefined) {
      this.accessibleName = this._model.__label;
    }
  }

  private handleConstraints(fieldConstraints: FieldConstraints | undefined) {
    if (fieldConstraints?.required) {
      this.required = true;
    }
    if (fieldConstraints?.read_only) {
      this.readonly = true;
    }
  }

  private readFromModel(): void {
    const option = this.querySelector(`furo-ui5-option[id=${(this._model as ENUM<unknown>).value}]`);
    if (option) {
      const index = [...this.children].indexOf(option);
      // do not update same index
      if (this._selectedIndex !== index) {
        this._select(index);
      }
    }
  }

  private writeToModel(): void {
    const v = this.selectedOption?.id;
    if (v !== undefined) {
      (this._model as ENUM<unknown>).value = v;
    }
  }

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

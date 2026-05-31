import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";

import { StringOptionProperty } from "@/models/furo/StringOptionProperty";

/**
 * `cell-furo-stringoptionproperty`
 * The cell-furo-stringoptionproperty component displays a FieldNode of type
 * `furo.StringOptionProperty` in read only mode. It shows the option's `display_name`.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `furo.StringOptionProperty`
 * @element cell-furo-stringoptionproperty
 */
export class CellFuroStringoptionproperty extends LitElement {

  @state()
  private displayValue = "";

  private _model: StringOptionProperty = new StringOptionProperty();

  get model(): StringOptionProperty {
    return this._model;
  }

  set model(value: StringOptionProperty) {
    this.bindData(value);
  }

  static override get styles() {
    // language=CSS
    return css`
      :host {
        display: inline;
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        opacity: var(--_ui5_input_disabled_opacity, 0.4);
      }

      :host([data-size*="size-l"]),
      :host([data-size*="size-xl"]) {
        padding-top: 0.5rem;
      }

      :host([value-state="Positive"]),
      :host([value-state="Success"]) {
        color: var(--sapPositiveColor, #107e3e);
      }

      :host([value-state="Informative"]),
      :host([value-state="Information"]) {
        color: var(--sapInformativeColor, #0a6ed1);
      }

      :host([value-state="Negative"]),
      :host([value-state="Error"]) {
        color: var(--sapNegativeColor, #b00);
      }

      :host([value-state="Critical"]),
      :host([value-state="Warning"]) {
        color: var(--sapCrticalColor, #e9730c);
      }
    `;
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._model.__removeEventListener("update", this._readValue);
  }

  /**
   * Binds a field node to the component
   * @param fieldNode
   * @public
   */
  bindData(fieldNode: StringOptionProperty | undefined): void {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    // swap listeners from the old field node to the new one
    this._model.__removeEventListener("update", this._readValue);
    this._model = fieldNode;
    this._model.__addEventListener("update", this._readValue);

    // initial read
    this._readValue();
  }

  /**
   * @private
   */
  private _readValue = (): void => {
    this.displayValue = this._model.displayName.value;
  };

  /**
   * render function
   * @private
   */
  override render() {
    // language=HTML
    return html` ${this.displayValue} `;
  }
}

import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";

import { nl2br } from "@/directives/nl2br";
import { StringProperty } from "@/models/furo/StringProperty";

/**
 * `cell-furo-stringproperty`
 * The cell-furo-stringproperty component displays a FieldNode of type `furo.StringProperty` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `furo.StringProperty`
 * @element cell-furo-stringproperty
 */
export class CellFuroStringproperty extends LitElement {

  @state()
  private displayValue = "";

  private _model: StringProperty = new StringProperty();

  get model(): StringProperty {
    return this._model;
  }

  set model(value: StringProperty) {
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
  bindData(fieldNode: StringProperty | undefined): void {
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
    this.displayValue = this._model.data.value;
  };

  /**
   * render function
   * @private
   */
  override render() {
    // language=HTML
    return html`${nl2br(this.displayValue)}`;
  }
}

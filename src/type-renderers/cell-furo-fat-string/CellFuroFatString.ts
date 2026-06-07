import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";

import { nl2br } from "@/directives/nl2br";
import { FuroFatString } from "@/models";

/**
 * `cell-furo-fat-string`
 * The cell-furo-fat-string component displays a FieldNode of type `furo.fat.String` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `furo.fat.String`
 * @element cell-furo-fat-string
 */
export class CellFuroFatString extends LitElement {
  @state()
  private displayValue = "";

  private _model: FuroFatString = new FuroFatString();

  get model(): FuroFatString {
    return this._model;
  }

  set model(value: FuroFatString) {
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
  bindData(fieldNode: FuroFatString | undefined): void {
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
    // apply the value-state attribute (and its message as title) from the fat attributes
    const valueState = this._model.attributes.get("value-state");
    if (valueState) {
      const valueStateName = valueState.toString();
      this.setAttribute("value-state", valueStateName);
      const message = this._model.attributes.get("value-state-message");
      if (valueStateName !== "None" && message) {
        this.setAttribute("title", message.toString());
      }
    }

    this.displayValue = this._model.value.value;
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

import { StringValue } from "@furo/open-models";
import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";

import { nl2br } from "@/directives/nl2br";

/**
 * `cell-google-protobuf-stringvalue`
 * The cell-google-protobuf-stringvalue component displays a FieldNode of type
 * `google.protobuf.StringValue` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `google.protobuf.StringValue`
 * @element cell-google-protobuf-stringvalue
 */
export class CellGoogleProtobufStringvalue extends LitElement {
  @state()
  private displayValue = "";

  private _model: StringValue = new StringValue();

  get model(): StringValue {
    return this._model;
  }

  set model(value: StringValue) {
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
  bindData(fieldNode: StringValue | undefined): void {
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
    this.displayValue = this._model.value;
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

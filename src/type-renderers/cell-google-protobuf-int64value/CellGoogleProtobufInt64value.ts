import { Env } from "@furo/framework/src/furo.js";
import { Int64Value } from "@furo/open-models";
import { css, html, LitElement } from "lit";
import { state } from "lit/decorators.js";

/**
 * `cell-google-protobuf-int64value`
 * The cell-google-protobuf-int64value component displays a FieldNode of type
 * `google.protobuf.Int64Value` in read only mode.
 *
 * The component uses locale from the environment to display the value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `google.protobuf.Int64Value`
 * @element cell-google-protobuf-int64value
 */
export class CellGoogleProtobufInt64value extends LitElement {

  @state()
  private displayValue = "";

  private _model: Int64Value = new Int64Value();

  get model(): Int64Value {
    return this._model;
  }

  set model(value: Int64Value) {
    this.bindData(value);
  }

  static override get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
        text-align: right;
        white-space: nowrap;
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
    this._model.__removeEventListener("update", this._formatCell);
  }

  /**
   * Binds a field node to the component
   * @param fieldNode
   * @public
   */
  bindData(fieldNode: Int64Value | undefined): void {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    // swap listeners from the old field node to the new one
    this._model.__removeEventListener("update", this._formatCell);
    this._model = fieldNode;
    this._model.__addEventListener("update", this._formatCell);

    // initial read
    this._formatCell();
  }

  /**
   * @private
   */
  private _formatCell = (): void => {
    if (this._model.value === null) {
      this.displayValue = "";
      return
    }
    const displayValue = new Intl.NumberFormat(Env.locale, {}).format(this._model.value);
    if (displayValue !== "NaN") {
      this.displayValue = displayValue;
    }
  };

  /**
   * render function
   * @private
   */
  override render() {
    // language=HTML
    return html` ${this.displayValue}`;
  }
}

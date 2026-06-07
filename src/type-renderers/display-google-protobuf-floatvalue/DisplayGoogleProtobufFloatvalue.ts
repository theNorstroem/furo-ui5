import { Env } from "@furo/framework/src/furo.js";
import { FloatValue } from "@furo/open-models";
import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";

/**
 * `display-google-protobuf-floatvalue`
 * The display-google-protobuf-floatvalue component displays a FieldNode of type
 * `google.protobuf.FloatValue` in read only mode.
 *
 * The component uses locale from the environment to display the value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `google.protobuf.FloatValue`
 * @element display-google-protobuf-floatvalue
 */
export class DisplayGoogleProtobufFloatvalue extends LitElement {
  @state()
  private displayValue = "";

  private _model: FloatValue = new FloatValue();

  get model(): FloatValue {
    return this._model;
  }

  set model(value: FloatValue) {
    this.bindData(value);
  }

  static override get styles() {
    // language=CSS
    return css`
      :host {
        display: inline;
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
  bindData(fieldNode: FloatValue | undefined): void {
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
      return;
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
    return html` ${this.displayValue} `;
  }
}

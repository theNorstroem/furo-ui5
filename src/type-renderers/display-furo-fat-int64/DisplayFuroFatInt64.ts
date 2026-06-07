import { Env } from "@furo/framework/src/furo.js";
import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";

import { FuroFatInt64 } from "@/models";

/**
 * `display-furo-fat-int64`
 * The display-furo-fat-int64 component displays a FieldNode of type `furo.fat.Int64` in read only mode.
 *
 * The component uses locale from the environment to display the value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `furo.fat.Int64`
 * @element display-furo-fat-int64
 */
export class DisplayFuroFatInt64 extends LitElement {
  @state()
  private displayValue = "";

  private _model: FuroFatInt64 = new FuroFatInt64();

  get model(): FuroFatInt64 {
    return this._model;
  }

  set model(value: FuroFatInt64) {
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
  bindData(fieldNode: FuroFatInt64 | undefined): void {
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

    const displayValue = new Intl.NumberFormat(Env.locale, {}).format(this._model.value.value);
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

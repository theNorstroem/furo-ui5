import { Env } from "@furo/framework/src/furo.js";
import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";

import { Money } from "@/models/furo/type/Money";

/**
 * `display-furo-type-money`
 * The display-furo-type-money component displays a FieldNode of type `furo.type.Money` in read only mode.
 *
 * If the field `display_name` is set, the component uses that value for the display, otherwise it
 * formats the amount as a currency according to the environment locale.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `furo.type.Money`
 * @element display-furo-type-money
 */
export class DisplayFuroTypeMoney extends LitElement {
  @state()
  private displayValue = "";

  private _model: Money = new Money();

  get model(): Money {
    return this._model;
  }

  set model(value: Money) {
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
  bindData(fieldNode: Money | undefined): void {
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
    const displayName = this._model.displayName.value;
    if (displayName.length) {
      this.displayValue = displayName;
      return;
    }

    const currency = this._model.currencyCode.value;
    const amount = Number(this._model.units.value) + this._model.nanos.value / 1e9;
    if (currency.length && !Number.isNaN(amount)) {
      this.displayValue = new Intl.NumberFormat(Env.locale, {
        style: "currency",
        currency,
      }).format(amount);
    } else {
      this.displayValue = "";
    }
  };

  /**
   * render function
   * @private
   */
  override render() {
    // language=HTML
    return html` <span>${this.displayValue}</span> `;
  }
}

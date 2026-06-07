import { Env } from "@furo/framework/src/furo.js";
import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";

import { Money } from "@/models/google/type/Money";

/**
 * `cell-google-type-money`
 * The cell-google-type-money component displays a FieldNode of type `google.type.Money` in read only mode.
 *
 * The component uses locale from the environment to display the amount as a currency.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `google.type.Money`
 * @element cell-google-type-money
 */
export class CellGoogleTypeMoney extends LitElement {
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

  /**
   * Converts a money field node (units + nanos) to a decimal amount.
   * @param money
   * @private
   */
  private static convertToNumber(money: Money): number {
    return Number(money.units.value) + money.nanos.value / 1e9;
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
    const currency = this._model.currencyCode.value;
    const amount = CellGoogleTypeMoney.convertToNumber(this._model);
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

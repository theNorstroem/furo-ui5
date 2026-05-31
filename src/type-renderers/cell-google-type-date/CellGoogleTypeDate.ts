import { Env } from "@furo/framework/src/furo.js";
import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";

import { XDate } from "@/models/google/type/Date";

/**
 * `cell-google-type-date`
 * The cell-google-type-date component displays a FieldNode of type `google.type.Date` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `google.type.Date`
 * @element cell-google-type-date
 */
export class CellGoogleTypeDate extends LitElement {

  @state()
  private displayValue = "";

  private _model: XDate = new XDate();

  get model(): XDate {
    return this._model;
  }

  set model(value: XDate) {
    this.bindData(value);
  }

  static override get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
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
   * Converts a `google.type.Date` field node to a locale-formatted date string,
   * or "N/A" when the date is incomplete.
   * @param date
   * @private
   */
  private static convertDateToString(date: XDate): string {
    const year = date.year.value;
    const month = date.month.value;
    const day = date.day.value;
    if (!year || !month || !day) {
      return "N/A";
    }
    const jsDate = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
    return new Intl.DateTimeFormat([Env.locale, "de-CH"], {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(jsDate);
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
  bindData(fieldNode: XDate | undefined): void {
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
    const displayValue = CellGoogleTypeDate.convertDateToString(this._model);
    if (displayValue !== "N/A") {
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

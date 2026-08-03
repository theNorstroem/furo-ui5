import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";

import { XDate } from "@/models/furo/type/Date";
import { getLocale } from "@/settings/locale";

/**
 * `display-furo-type-date`
 * The display-furo-type-date component displays a FieldNode of type `furo.type.Date` in read only mode.
 *
 * If the field `display_name` is set, the component uses that value for the display, otherwise it
 * formats the date according to the environment locale.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `furo.type.Date`
 * @element display-furo-type-date
 */
export class DisplayFuroTypeDate extends LitElement {
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
    const year = this._model.year.value;
    const month = this._model.month.value;
    const day = this._model.day.value;
    if (!year || !month || !day) {
      // incomplete date: fall back to display_name if the writer provided one
      const displayName = this._model.displayName.value;
      if (displayName.length) {
        this.displayValue = displayName;
      }
      return;
    }
    const jsDate = new Date(Date.UTC(year, month - 1, day, 0, 0, 0, 0));
    this.displayValue = new Intl.DateTimeFormat([getLocale(), "de-CH"], {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(jsDate);
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

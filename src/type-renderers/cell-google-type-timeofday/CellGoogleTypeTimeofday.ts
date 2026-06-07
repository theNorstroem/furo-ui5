import { Env } from "@furo/framework/src/furo.js";
import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";

import { TimeOfDay } from "@/models/google/type/TimeOfDay";

/**
 * `cell-google-type-timeofday`
 * The cell-google-type-timeofday component displays a FieldNode of type `google.type.TimeOfDay` in read only mode.
 *
 * The component uses locale from the environment to display the time value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `google.type.TimeOfDay`
 * @element cell-google-type-timeofday
 */
export class CellGoogleTypeTimeofday extends LitElement {
  @state()
  private displayValue = "";

  private _model: TimeOfDay = new TimeOfDay();

  get model(): TimeOfDay {
    return this._model;
  }

  set model(value: TimeOfDay) {
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
  bindData(fieldNode: TimeOfDay | undefined): void {
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
    const hours = this._model.hours.value;
    const minutes = this._model.minutes.value;
    const seconds = this._model.seconds.value;
    const date = new Date(2000, 0, 1, hours, minutes, seconds);
    if (!Number.isNaN(date.getTime())) {
      this.displayValue = date.toLocaleTimeString([Env.locale, "de-CH"], {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
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

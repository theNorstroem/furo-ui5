import { Timestamp } from "@furo/open-models";
import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";

import { getLocale } from "@/util/locale";

/**
 * `display-google-protobuf-timestamp`
 * The display-google-protobuf-timestamp component displays a FieldNode of type
 * `google.protobuf.Timestamp` in read only mode.
 *
 * The component uses locale from the environment to display the date/time value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `google.protobuf.Timestamp`
 * @element display-google-protobuf-timestamp
 */
export class DisplayGoogleProtobufTimestamp extends LitElement {
  @state()
  private displayValue = "";

  private _model: Timestamp = new Timestamp();

  get model(): Timestamp {
    return this._model;
  }

  set model(value: Timestamp) {
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
  bindData(fieldNode: Timestamp | undefined): void {
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
    const value = this._model.value;
    if (!value) {
      return;
    }
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) {
      this.displayValue = new Intl.DateTimeFormat([getLocale(), "de-CH"], {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(date);
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

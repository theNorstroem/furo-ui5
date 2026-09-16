import { BoolValue } from "@furo/open-models";
import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";

import "@/elements/icon";

import "@ui5/webcomponents-icons/dist/accept.js";
import "@ui5/webcomponents-icons/dist/border.js";
import "@ui5/webcomponents-icons/dist/question-mark.js";

/**
 * `display-google-protobuf-boolvalue`
 * The display-google-protobuf-boolvalue component displays a FieldNode of type
 * `google.protobuf.BoolValue` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `google.protobuf.BoolValue`
 * @element display-google-protobuf-boolvalue
 */
export class DisplayGoogleProtobufBoolvalue extends LitElement {
  @state()
  private checked: boolean | null = null;

  private _model: BoolValue = new BoolValue();

  get model(): BoolValue {
    return this._model;
  }

  set model(value: BoolValue) {
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
  bindData(fieldNode: BoolValue | undefined): void {
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
    this.checked = this._model.value;
  };

  /**
   * render function
   * @private
   */
  override render() {
    // language=HTML
    if (this.checked === null) {
      return html` <furo-ui5-icon name="question-mark" design="Information"></furo-ui5-icon> `;
    }
    return html` ${this.checked ? html` <furo-ui5-icon name="accept" design="Positive"></furo-ui5-icon> ` : html` <furo-ui5-icon name="border"></furo-ui5-icon> `} `;
  }
}

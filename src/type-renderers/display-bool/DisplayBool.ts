import { BOOLEAN } from "@furo/open-models";
import { LitElement, html, css } from "lit";
import { state } from "lit/decorators.js";

import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents-icons/dist/accept.js";
import "@ui5/webcomponents-icons/dist/border.js";

/**
 * `display-bool`
 * The display-bool component displays a FieldNode of type `bool` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `bool`
 * @element display-bool
 */
export class DisplayBool extends LitElement {

  @state()
  private checked = false;

  private _model: BOOLEAN = new BOOLEAN();

  get model(): BOOLEAN {
    return this._model;
  }

  set model(value: BOOLEAN) {
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

      :host([value-state="Positive"]) ui5-icon,
      :host([value-state="Success"]) ui5-icon {
        color: var(--sapPositiveColor, #107e3e);
      }
      :host([value-state="Informative"]) ui5-icon,
      :host([value-state="Information"]) ui5-icon {
        color: var(--sapInformativeColor, #0a6ed1);
      }
      :host([value-state="Negative"]) ui5-icon,
      :host([value-state="Error"]) ui5-icon {
        color: var(--sapNegativeColor, #b00);
      }
      :host([value-state="Critical"]) ui5-icon,
      :host([value-state="Warning"]) ui5-icon {
        color: var(--sapCrticalColor, #e9730c);
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
  bindData(fieldNode: BOOLEAN | undefined): void {
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
    return html`
      ${this.checked
        ? html` <ui5-icon name="accept"></ui5-icon> `
        : html` <ui5-icon name="border"></ui5-icon> `}
    `;
  }
}

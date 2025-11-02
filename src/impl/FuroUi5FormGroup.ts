import { css, CSSResult, html, LitElement } from "lit";
// eslint-disable-next-line import/extensions
import { property } from "lit/decorators.js";

/**
 * ### Description
 *
 *
 *
 * @slot {HTMLElement[]}  - Slot for `FormRows`.
 *
 * @tagname furo-ui5-form-group
 * @public
 */
export default class FuroUi5FormGroup extends LitElement {
  /**
   * The label of the form-group.
   * @public
   */
  @property({ type: String, attribute: "label" })
  label: string = "";

  override render() {
    return html` <fieldset>
      <legend>${this.label}</legend>
      <slot></slot>
    </fieldset>`;
  }

  static override styles: CSSResult | CSSResult[] = css`
    :host {
      display: block;
      container-type: inline-size;
    }

    :host([hidden]) {
      display: none;
    }

    /* Reset */

    legend {
      font-family: var(--sapFontFamily, "72"), "72full", Arial, sans-serif;
      font-size: var(--sapFontSize, 0.875rem);
      font-weight: 700;
      padding-inline: 0;
      margin-bottom: 0.25rem;
    }

    fieldset {
      border: none;
      margin-inline: 0;
      padding-inline: 0;
      display: grid;
      grid-row-gap: 0.625rem;
      grid-column-gap: 0.625rem;
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: 0.375rem;
    }

    ::slotted(*[spacer]) {
      display: none;
    }

    @container (min-width: 501px) {
      --spacerDisplay: none;
      legend {
        margin-bottom: var(--MediaSizeIndentationBottom);
      }

      fieldset {
        grid-row-gap: 1rem;
        grid-column-gap: 1rem;
      }
    }
    @container (min-width: 1296px) {
      fieldset {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 1rem;
        grid-column-gap: 1rem;
      }
      ::slotted(*[spacer]) {
        display: block;
      }
    }
    @container (min-width: 1836px) {
      fieldset {
        grid-template-columns: repeat(3, 1fr);
        grid-row-gap: 1rem;
        grid-column-gap: 1rem;
      }
      ::slotted(*[spacer]) {
        display: block;
        grid-column: span 2 / auto;
      }
    }
  `;
}

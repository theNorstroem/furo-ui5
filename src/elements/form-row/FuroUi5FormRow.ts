import { css, CSSResult, html, LitElement } from "lit";

/**
 * The furo-ui5-form-row gives the user a layout to manage
 * input field and labels according to the design specification of SAP Fiori.
 *
 *
 * @slot {HTMLElement[]} - Slot for form elements.
 * @slot {HTMLElement[]} label - Slot for the label.
 *
 * @author veith
 *
 * @summary Single row within a form containing label and input field.
 * @keywords form-row, field, label, input, row
 * @category FormLayout
 * @usecase Use for each label-field pair in a form.
 * @related furo-ui5-form-group, furo-ui5-form-layout, furo-ui5-label
 * @tagname furo-ui5-form-row
 * @public
 */
export class FuroUi5FormRow extends LitElement {
  override render() {
    return html` <div class="label"><slot name="label"></slot></div>
      <div class="field">
        <slot></slot>
        <slot name="text"></slot>
      </div>
      <div class="space"></div>`;
  }

  static override styles: CSSResult | CSSResult[] = css`
    :host {
      display: grid;
      grid-row-gap: calc(var(--furo-ui5-responsive-layout-row-gap, 1rem) / 4);
      grid-column-gap: var(--furo-ui5-responsive-layout-column-gap, 1rem);
      grid-template-columns: repeat(12, 1fr);
      container-type: inline-size;
      align-items: start;
      font-size: var(--sapFontSize);
    }

    .field ::slotted(*) {
      width: 100%;
    }

    :host([hidden]) {
      display: none;
    }

    .label {
      grid-column: span 12 / auto;
    }

    .field {
      grid-column: span 12 / auto;
    }

    .space {
      display: none;
    }

    /* remove big margin from rating indicator */

    ::slotted(furo-ui5-rating-indicator) {
      margin-block-start: 0.25rem;
      font-size: 1rem;
    }

    ::slotted(furo-ui5-link) {
      margin-block-start: 0.5rem;
    }

    ::slotted(furo-ui5-checkbox[wrapping-type="None"]),
    ::slotted(furo-ui5-radio-button) {
      height: 1.8125rem;
    }

    /* 4:8:0 */
    @container (min-width: 601px) {
      .label {
        grid-column: span 4 / auto;
        text-align: end;
        padding-block-start: var(--FuroUi5FormRowLabelPaddingTop, 0.5rem);
      }

      /* for text content */
      slot[name="text"]::slotted(*) {
        padding-block-start: 0.5rem;
      }

      .field {
        grid-column: span 8 / auto;
      }

      .space {
        display: none;
      }
    }

    /* 4:7:1 */
    @container (min-width: 810px) {
      .label {
        grid-column: span 4 / auto;
        text-align: end;
        padding-block-start: 0.5rem;
      }

      .field {
        grid-column: span 7 / auto;
      }

      .space {
        display: block;
        grid-column: span 1 / auto;
      }
    }

    /* 3:5:4 */
    @container (min-width: 1100px) {
      .label {
        grid-column: span 3 / auto;
        text-align: end;
        padding-block-start: 0.5rem;
      }

      .field {
        grid-column: span 5 / auto;
      }

      .space {
        display: block;
        grid-column: span 4 / auto;
      }
    }
  `;
}

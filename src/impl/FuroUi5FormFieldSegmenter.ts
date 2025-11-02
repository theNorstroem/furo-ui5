import { css, CSSResult, html, LitElement } from "lit";
// eslint-disable-next-line import/extensions
import { property } from "lit/decorators.js";

import FormFieldSegmentationPatterns from "@/types/FormFieldSegmentationPatterns";

/**
 * ### Description
 * If you need to place some units for the fields or want to have a small field followed by a large field, you should use this component.
 *
 * ### ES6 Module Import
 *
 * @slot {HTMLElement[]} slot-name - slot description
 *
 * @tagname furo-ui5-form-field-segmenter
 * @public
 */
export class FuroUi5FormFieldSegmenter extends LitElement {
  /**
   * Optional unit for the form field.
   * @public
   */
  @property({ type: String, attribute: "unit" })
  unit: string = "";

  /**
   * Field patterns, defaults to a single field with optional value.
   * @typeref FormFieldSegmentationPatterns - "@furo/ui5/dist/types/FormFieldSegmentationPatterns.js"
   * @public
   */
  @property({
    type: FormFieldSegmentationPatterns,
    attribute: "pattern",
    reflect: true,
  })
  pattern: FormFieldSegmentationPatterns = FormFieldSegmentationPatterns.Full;

  override render() {
    return html`<slot></slot>
      <div class="unit">${this.unit}</div>`;
  }

  static override styles: CSSResult | CSSResult[] = css`
    :host {
      display: grid;
      grid-row-gap: calc(var(--furo-ui5-responsive-layout-row-gap, 1rem) / 4);
      grid-column-gap: calc(var(--furo-ui5-responsive-layout-column-gap, 1rem) / 2);
      grid-template-columns: repeat(12, 1fr);
      container-type: inline-size;
      align-items: center;
    }

    :host([hidden]) {
      display: none;
    }

    ::slotted(*) {
      grid-column: span 9 / auto;
      width: 100%;
    }

    :host([pattern="SmallBig"][unit]) ::slotted(*:first-child) {
      grid-column: span 3 / auto;
    }
    :host([pattern="SmallBig"][unit]) ::slotted(*:last-child) {
      grid-column: span 6 / auto;
    }

    :host([pattern="BigSmall"][unit]) ::slotted(*:first-child) {
      grid-column: span 6 / auto;
    }
    :host([pattern="BigSmall"][unit]) ::slotted(*:last-child) {
      grid-column: span 3 / auto;
    }

    :host([pattern="SmallBig"]) ::slotted(*:first-child) {
      grid-column: span 4 / auto;
    }
    :host([pattern="SmallBig"]) ::slotted(*:last-child) {
      grid-column: span 8 / auto;
    }

    :host([pattern="BigSmall"]) ::slotted(*:first-child) {
      grid-column: span 8 / auto;
    }
    :host([pattern="BigSmall"]) ::slotted(*:last-child) {
      grid-column: span 4 / auto;
    }

    .unit {
      grid-column: span 3 / auto;
      grid-column-end: -1;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: var(--sapFontSize);
    }

    @container (max-width: 350px) {
      .unit,
      :host([pattern="Full"][unit]) ::slotted(*) {
        grid-column: span 12 / auto;
      }
    }
    @container (max-width: 400px) {
      :host([pattern="SmallBig"][unit]) ::slotted(*:first-child),
      :host([pattern="BigSmall"][unit]) ::slotted(*:first-child),
      :host([pattern="SmallBig"][unit]) ::slotted(*:last-child),
      :host([pattern="BigSmall"][unit]) ::slotted(*:last-child),
      :host([pattern="SmallBig"]) ::slotted(*:first-child),
      :host([pattern="BigSmall"]) ::slotted(*:first-child),
      :host([pattern="SmallBig"]) ::slotted(*:last-child),
      :host([pattern="BigSmall"]) ::slotted(*:last-child),
      :host([pattern="SmallBig"][unit]) .unit,
      :host([pattern="BigSmall"][unit]) .unit {
        grid-column: span 12 / auto;
      }
    }
  `;
}

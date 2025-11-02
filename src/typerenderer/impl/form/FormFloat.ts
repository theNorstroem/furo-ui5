import { FuroUi5NumberInputLabeled } from "@/impl/impl/furo-ui5-number-input-labeled";

/**
 *
 * @summary form renderer for `float`
 * @element form-float
 */
export class FormFloat extends FuroUi5NumberInputLabeled {
  connectedCallback() {
    super.connectedCallback();
    this.style.width = "100%";
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "form-float": FormFloat;
  }
}

// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5NumberInputLabeled } from "@/impl/impl/furo-ui5-number-input-labeled";

/**
 *
 * @summary form renderer for `int32`
 * @element form-int32
 */
export class FormInt32 extends FuroUi5NumberInputLabeled {
  connectedCallback() {
    super.connectedCallback();
    this.style.width = "100%";
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "form-int32": FormInt32;
  }
}

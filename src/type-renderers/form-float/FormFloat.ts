import { FuroUi5NumberInputLabeled } from "@/impl/impl/furo-ui5-number-input-labeled";

/**
 *
 * @summary form renderer for `float`
 * @element form-float
 */
export class FormFloat extends FuroUi5NumberInputLabeled {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-float" };
  }

  connectedCallback() {
    super.connectedCallback();
    this.style.width = "100%";
  }
}

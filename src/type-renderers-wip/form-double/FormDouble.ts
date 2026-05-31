import { FuroUi5NumberInputLabeled } from "@/impl/impl/furo-ui5-number-input-labeled";

/**
 *
 * @summary form renderer for `double`
 * @element form-double
 */
export class FormDouble extends FuroUi5NumberInputLabeled {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-double" };
  }

  connectedCallback() {
    super.connectedCallback();
    this.style.width = "100%";
  }
}

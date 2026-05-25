// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5NumberInputLabeled } from "@/impl/impl/furo-ui5-number-input-labeled";

/**
 *
 * @summary form renderer for `int32`
 * @element form-int32
 */
export class FormInt32 extends FuroUi5NumberInputLabeled {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-int32" };
  }

  connectedCallback() {
    super.connectedCallback();
    this.style.width = "100%";
  }
}

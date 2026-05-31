import { FuroUi5TextInputLabeled } from "@/impl/impl/furo-ui5-text-input-labeled";

/**
 *
 * @summary form renderer for `furo.fat.String`
 * @element form-furo-fat-string
 */
export class FormFuroFatString extends FuroUi5TextInputLabeled {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-furo-fat-string" };
  }

  bindData(fieldNode) {
    super.bindData(fieldNode);
  }
}

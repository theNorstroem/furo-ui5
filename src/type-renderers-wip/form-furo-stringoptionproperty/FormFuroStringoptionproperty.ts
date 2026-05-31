// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5SelectLabeled } from "@/impl/impl/furo-ui5-select-labeled";

/**
 *
 * @summary form renderer for `furo.Stringoptionproperty`
 * @element form-furo-stringoptionproperty
 */
export class FormFuroStringoptionproperty extends FuroUi5SelectLabeled {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-furo-stringoptionproperty" };
  }

  bindData(fieldNode) {
    super.bindData(fieldNode);
  }
}

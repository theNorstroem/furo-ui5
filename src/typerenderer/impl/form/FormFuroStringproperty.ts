// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5TextInputLabeled } from "@/impl/impl/furo-ui5-text-input-labeled";

/**
 *
 * @summary form renderer for `furo.Stringproperty`
 * @element form-furo-stringproperty
 */
export class FormFuroStringproperty extends FuroUi5TextInputLabeled {
  bindData(fieldNode) {
    super.bindData(fieldNode.data);
  }
}

window.customElements.define("form-furo-stringproperty", FormFuroStringproperty);

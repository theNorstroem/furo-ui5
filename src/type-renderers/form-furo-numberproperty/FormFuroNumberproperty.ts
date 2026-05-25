import { FormInt32 } from "@/type-renderers/form-int32/FormInt32";

/**
 * `form-furo-integerproperty` is a `form` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary form renderer for `furo.Integerproperty`
 * @element form-furo-integerproperty
 */
export class FormFuroNumberproperty extends FormInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-furo-numberproperty" };
  }

  bindData(fieldNode) {
    super.bindData(fieldNode.data);
  }
}

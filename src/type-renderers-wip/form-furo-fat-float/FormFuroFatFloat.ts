import { FormInt32 } from "@/type-renderers/form-int32/FormInt32";

/**
 * `form-furo-fat-float` is a `form` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary form renderer for `furo.fat.Float`
 * @element form-furo-fat-float
 */
export class FormFuroFatFloat extends FormInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-furo-fat-float" };
  }
}

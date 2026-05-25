import { FormBool } from "@/type-renderers/form-bool/FormBool";

/**
 * `form-furo-fat-bool` is a `form` context renderer.
 *
 * It uses furo-ui5-checkbox as the renderer
 *
 * @summary form renderer for `furo.fat.Bool`
 * @element form-furo-fat-bool
 */
export class FormFuroFatBool extends FormBool {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-furo-fat-bool" };
  }
}

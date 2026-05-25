import { FormInt32 } from "@/type-renderers/form-int32/FormInt32";

/**
 * `form-furo-fat-int64` is a `form` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary form renderer for `furo.fat.Int64`
 * @element form-furo-fat-int64
 */
export class FormFuroFatInt64 extends FormInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-furo-fat-int64" };
  }
}

import { FormInt32 } from "@/type-renderers/form-int32/FormInt32";
/**
 *
 * @summary form renderer for type `furo.BigDecimal`
 * @element form-furo-bigdecimal
 */
export class FormFuroBigdecimal extends FormInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-furo-bigdecimal" };
  }
}

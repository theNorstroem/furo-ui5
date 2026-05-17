import { FormInt32 } from "./form-int32.js";
/**
 *
 * @summary form renderer for type `furo.BigDecimal`
 * @element form-furo-bigdecimal
 */
export class FormFuroBigdecimal extends FormInt32 {}

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-bigdecimal": FormFuroBigdecimal;
  }
}

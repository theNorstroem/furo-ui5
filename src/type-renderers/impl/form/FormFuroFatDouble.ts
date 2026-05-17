import { FormInt32 } from "./form-int32.js";

/**
 * `form-furo-fat-double` is a `form` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary form renderer for `furo.fat.Double`
 * @element form-furo-fat-double
 */
export class FormFuroFatDouble extends FormInt32 {}

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-double": FormFuroFatDouble;
  }
}

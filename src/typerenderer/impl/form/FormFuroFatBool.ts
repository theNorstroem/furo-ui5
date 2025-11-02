import { FormBool } from "./form-bool.js";

/**
 * `form-furo-fat-bool` is a `form` context renderer.
 *
 * It uses furo-ui5-checkbox as the renderer
 *
 * @summary form renderer for `furo.fat.Bool`
 * @element form-furo-fat-bool
 */
export class FormFuroFatBool extends FormBool {}

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-bool": FormFuroFatBool;
  }
}

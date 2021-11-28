import { FormBool } from './form-bool.js';

/**
 * `form-furo-fat-bool` is a `form` context renderer.
 *
 * It uses furo-ui5-checkbox-input as the renderer
 *
 * @summary form renderer for `furo.fat.Bool`
 * @element form-furo-fat-bool
 */
class FormFuroFatBool extends FormBool {}

window.customElements.define('form-furo-fat-bool', FormFuroFatBool);

import { FormInt32 } from './form-int32.js';

/**
 * `form-furo-fat-float` is a `form` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary form renderer for `furo.fat.Float`
 * @element form-furo-fat-float
 */
class FormFuroFatFloat extends FormInt32 {}

window.customElements.define('form-furo-fat-float', FormFuroFatFloat);

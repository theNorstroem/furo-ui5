import { FormInt32 } from './form-int32.js';

/**
 * `form-furo-fat-uint64` is a `form` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary form renderer for `furo.fat.Uint64`
 * @element form-furo-fat-uint64
 */

export class FormFuroFatUint64 extends FormInt32 {}

window.customElements.define('form-furo-fat-uint64', FormFuroFatUint64);

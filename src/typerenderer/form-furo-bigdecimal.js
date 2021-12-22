import { FormInt32 } from './form-int32.js';
/**
 *
 * @summary form renderer for `uint64`
 * @element form-uint64
 */
export class FormFuroBigdecimal extends FormInt32 {}

window.customElements.define('form-furo-bigdecimal', FormFuroBigdecimal);

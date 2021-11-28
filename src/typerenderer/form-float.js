import { FuroUi5NumberInputLabeled } from '../furo-ui5-number-input-labeled.js';

/**
 *
 * @summary form renderer for `float`
 * @element form-float
 */
export class FormFloat extends FuroUi5NumberInputLabeled {
  connectedCallback() {
    super.connectedCallback();
    this.style.width = '100%';
  }
}

window.customElements.define('form-float', FormFloat);

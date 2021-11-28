import { FuroUi5NumberInputLabeled } from '../furo-ui5-number-input-labeled.js';

/**
 *
 * @summary form renderer for `double`
 * @element form-double
 */
export class FormDouble extends FuroUi5NumberInputLabeled {
  connectedCallback() {
    super.connectedCallback();
    this.style.width = '100%';
  }
}

window.customElements.define('form-double', FormDouble);

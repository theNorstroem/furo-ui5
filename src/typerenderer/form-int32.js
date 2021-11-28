// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5NumberInputLabeled } from '../furo-ui5-number-input-labeled.js';

/**
 *
 * @summary form renderer for `int32`
 * @element form-int32
 */
export class FormInt32 extends FuroUi5NumberInputLabeled {
  connectedCallback() {
    super.connectedCallback();
    this.style.width = '100%';
  }
}

window.customElements.define('form-int32', FormInt32);

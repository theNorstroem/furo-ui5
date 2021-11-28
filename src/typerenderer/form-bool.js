// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5CheckboxInputLabeled } from '../furo-ui5-checkbox-input-labeled.js';

/**
 * `form-bool` is a `form` context renderer.
 *
 * It uses furo-ui5-checkbox-input as the renderer
 *
 * @summary form renderer for `bool`
 * @element form-bool
 */
export class FormBool extends FuroUi5CheckboxInputLabeled {
  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
  }
}
window.customElements.define('form-bool', FormBool);

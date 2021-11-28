import { FuroUi5TextInputLabeled } from '../furo-ui5-text-input-labeled.js';
/**
 *
 * @summary form renderer for `string`
 * @element form-string
 */
export class FormString extends FuroUi5TextInputLabeled {
  bindData(fieldNode) {
    super.bindData(fieldNode.data);
  }
}

window.customElements.define('form-string', FormString);

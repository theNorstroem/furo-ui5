import { FuroUi5TextInputLabeled } from '../furo-ui5-text-input-labeled.js';

/**
 *
 * @summary form renderer for `furo.fat.String`
 * @element form-furo-fat-string
 */
class FormFuroFatString extends FuroUi5TextInputLabeled {
  bindData(fieldNode) {
    super.bindData(fieldNode);
  }
}

window.customElements.define('form-furo-fat-string', FormFuroFatString);

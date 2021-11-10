import { FuroUi5TextInputLabeled } from '../furo-ui5-text-input-labeled.js';

class FormFuroFatString extends FuroUi5TextInputLabeled {
  bindData(fieldNode) {
    super.bindData(fieldNode);
  }
}

window.customElements.define('form-furo-fat-string', FormFuroFatString);

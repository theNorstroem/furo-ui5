import { FuroUi5DataTextInputLabeled } from '../furo-ui5-data-text-input-labeled.js';

class FormFuroFatString extends FuroUi5DataTextInputLabeled {
  bindData(fieldNode) {
    super.bindData(fieldNode);
  }
}

window.customElements.define('form-furo-fat-string', FormFuroFatString);

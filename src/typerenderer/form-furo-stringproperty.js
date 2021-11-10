// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5TextInputLabeled } from '../furo-ui5-text-input-labeled.js';

export class FormFuroStringproperty extends FuroUi5TextInputLabeled {
  bindData(fieldNode) {
    super.bindData(fieldNode.data);
  }
}

window.customElements.define(
  'form-furo-stringproperty',
  FormFuroStringproperty
);

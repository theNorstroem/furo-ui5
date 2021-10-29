// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DataTextInputLabeled } from '../furo-ui5-data-text-input-labeled.js';

export class FormFuroStringproperty extends FuroUi5DataTextInputLabeled {
  bindData(fieldNode) {
    super.bindData(fieldNode.data);
  }
}

window.customElements.define(
  'form-furo-stringproperty',
  FormFuroStringproperty
);

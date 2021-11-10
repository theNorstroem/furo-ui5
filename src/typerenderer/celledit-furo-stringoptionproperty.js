// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5Select } from '../furo-ui5-select.js';

class CelleditFuroStringoptionproperty extends FuroUi5Select {
  bindData(fieldNode) {
    super.bindData(fieldNode);
  }
}

window.customElements.define(
  'celledit-furo-stringoptionproperty',
  CelleditFuroStringoptionproperty
);

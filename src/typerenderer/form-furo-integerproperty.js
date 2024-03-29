import { FormInt32 } from './form-int32.js';

/**
 * `form-furo-integerproperty` is a `form` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary form renderer for `furo.Integerproperty`
 * @element form-furo-integerproperty
 */
export class FormFuroIntegerproperty extends FormInt32 {
  bindData(fieldNode) {
    super.bindData(fieldNode.data);
  }
}

window.customElements.define(
  'form-furo-integerproperty',
  FormFuroIntegerproperty
);

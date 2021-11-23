import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-numberproperty` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for furo.INumberproperty
 * @element celledit-furo-inumberproperty
 */

class CelleditFuroNumberproperty extends CelleditInt32 {
  bindData(fieldNode) {
    super.bindData(fieldNode.data);
  }
}

window.customElements.define(
  'celledit-furo-numberproperty',
  CelleditFuroNumberproperty
);

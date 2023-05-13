import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-numberproperty` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `furo.INumberproperty`
 * @element celledit-furo-inumberproperty
 */

export class CelleditFuroNumberproperty extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-numberproperty' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroNumberproperty.define();

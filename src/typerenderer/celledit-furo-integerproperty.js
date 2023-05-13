import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-integerproperty` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `furo.Integerproperty`
 * @element celledit-furo-integerproperty
 */
export class CelleditFuroIntegerproperty extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-integerproperty' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroIntegerproperty.define();

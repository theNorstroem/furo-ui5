import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-integerproperty` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for furo.Integerproperty
 * @element celledit-furo-integerproperty
 */
class CelleditFuroIntegerproperty extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'celledit-furo-integerproperty';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroIntegerproperty.define();

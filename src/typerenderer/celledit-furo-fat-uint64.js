import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-fat-uint64` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `furo.fat.Uint64`
 * @element celledit-furo-fat-uint64
 */

export class CelleditFuroFatUint64 extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-fat-uint64' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroFatUint64.define();

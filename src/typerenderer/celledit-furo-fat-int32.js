import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-fat-int32` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `furo.fat.Int32`
 * @element celledit-furo-fat-int32
 */

export class CelleditFuroFatInt32 extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-fat-int32' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroFatInt32.define();

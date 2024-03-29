import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-fat-uint32` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `furo.fat.Uint32`
 * @element celledit-furo-fat-uint32
 */
export class CelleditFuroFatUint32 extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-fat-uint32' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroFatUint32.define();

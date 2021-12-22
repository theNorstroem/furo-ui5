import { CelleditInt32 } from './celledit-int32.js';
/**
 *
 *
 * @summary celledit renderer for `uint64`
 * @element celledit-uint64
 */
export class CelleditFuroBigdecimal extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-bigdecimal' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroBigdecimal.define();

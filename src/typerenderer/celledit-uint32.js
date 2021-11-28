import { CelleditInt32 } from './celledit-int32.js';
/**
 *
 *
 * @summary celledit renderer for `uint32`
 * @element celledit-uint32
 */
export class CelleditUint32 extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-uint32' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditUint32.define();

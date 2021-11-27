// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

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

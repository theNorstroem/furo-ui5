// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

export class CelleditUint32 extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'celledit-uint32';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

CelleditUint32.define();

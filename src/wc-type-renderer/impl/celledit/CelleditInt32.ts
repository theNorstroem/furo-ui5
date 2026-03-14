// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5NumberInput } from '@/impl/impl/furo-ui5-number-input';

/**
 *
 *
 * @summary celledit renderer for `int32`
 * @element celledit-int32
 */
export class CelleditInt32 extends FuroUi5NumberInput {
  connectedCallback() {
    super.connectedCallback();
    this.style.width = '100%';
  }

  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-int32' };
  }

  static get styles() {
    return super.styles;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "CelleditInt32": CelleditInt32;
  }
}

import CelleditInt32 from "@/wc-type-renderer/impl/CelleditInt32
CelleditInt32.define()

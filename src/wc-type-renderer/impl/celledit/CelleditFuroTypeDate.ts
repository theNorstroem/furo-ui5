// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DatePicker } from '@/impl/impl/furo-ui5-date-picker';

/**
 *
 * @summary celledit renderer for `furo.type.Date`
 * @element celledit-furo-type-date
 */
export class CelleditFuroTypeDate extends FuroUi5DatePicker {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-type-date' };
  }

  static get styles() {
    return super.styles;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "CelleditFuroTypeDate": CelleditFuroTypeDate;
  }
}

import CelleditFuroTypeDate from "@/wc-type-renderer/impl/CelleditFuroTypeDate
CelleditFuroTypeDate.define()

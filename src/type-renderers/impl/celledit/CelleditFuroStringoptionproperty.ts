// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5Select } from '@/impl/impl/furo-ui5-select';

/**
 *
 * @summary celledit renderer for `furo.Stringoptionproperty`
 * @element celledit-furo-stringoptionproperty
 */
export class CelleditFuroStringoptionproperty extends FuroUi5Select {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-stringoptionproperty' };
  }

  static get styles() {
    return super.styles;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "CelleditFuroStringoptionproperty": CelleditFuroStringoptionproperty;
  }
}

import CelleditFuroStringoptionproperty from "@/type-renderers/impl/CelleditFuroStringoptionproperty
CelleditFuroStringoptionproperty.define()

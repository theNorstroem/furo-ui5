// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5MoneyInput } from '../furo-ui5-money-input.js';

/**
 * `celledit-google-type-money` is a `celledit` context renderer.
 *
 * It uses furo-ui5-money-input as the renderer
 *
 * @summary celledit renderer for `google.type.Money`
 * @element celledit-google-type-money
 */
export class CelleditGoogleTypeMoney extends FuroUi5MoneyInput {
  static get styles() {
    return [
      super.styles,
      {
        content: ':host{width:100%}',
      },
    ];
  }
}

window.customElements.define(
  'celledit-google-type-money',
  CelleditGoogleTypeMoney
);

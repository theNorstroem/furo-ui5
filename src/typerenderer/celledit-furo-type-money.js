// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5MoneyInput } from '../furo-ui5-money-input.js';

/**
 *
 * @summary celledit renderer for `furo.type.Money`
 * @element celledit-furo-type-money
 */
class CelleditFuroTypeMoney extends FuroUi5MoneyInput {}

window.customElements.define('celledit-furo-type-money', CelleditFuroTypeMoney);

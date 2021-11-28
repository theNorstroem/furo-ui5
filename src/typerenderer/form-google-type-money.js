// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5MoneyInputLabeled } from '../furo-ui5-money-input-labeled.js';

/**
 * `form-google-type-money` is a `form` context renderer.
 *
 * It uses furo-ui5-money-input as the renderer
 *
 * @summary form renderer for `google.type.Money`
 * @element form-google-type-money
 */
class FormGoogleTypeMoney extends FuroUi5MoneyInputLabeled {}

window.customElements.define('form-google-type-money', FormGoogleTypeMoney);

// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5MoneyInputLabeled } from "@/impl/impl/furo-ui5-money-input-labeled";

/**
 * `form-google-type-money` is a `form` context renderer.
 *
 * It uses furo-ui5-money-input as the renderer
 *
 * @summary form renderer for `google.type.Money`
 * @element form-google-type-money
 */
export class FormGoogleTypeMoney extends FuroUi5MoneyInputLabeled {}

declare global {
  interface HTMLElementTagNameMap {
    "form-google-type-money": FormGoogleTypeMoney;
  }
}

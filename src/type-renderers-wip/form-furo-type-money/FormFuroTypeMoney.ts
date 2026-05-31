// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5MoneyInputLabeled } from "@/impl/impl/furo-ui5-money-input-labeled";
/**
 *
 * @summary form renderer for `furo.type.Money`
 * @element form-furo-type-money
 */
export class FormFuroTypeMoney extends FuroUi5MoneyInputLabeled {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-furo-type-money" };
  }
}

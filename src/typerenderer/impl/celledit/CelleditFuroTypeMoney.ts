// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5MoneyInput } from "@/impl/impl/furo-ui5-money-input";

/**
 *
 * @summary celledit renderer for `furo.type.Money`
 * @element celledit-furo-type-money
 */
export class CelleditFuroTypeMoney extends FuroUi5MoneyInput {}

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-type-money": CelleditFuroTypeMoney;
  }
}

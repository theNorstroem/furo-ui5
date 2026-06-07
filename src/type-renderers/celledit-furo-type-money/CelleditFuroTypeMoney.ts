import { css, type CSSResult } from "lit";

import { FuroUi5MoneyInput } from "@/elements/money-input/FuroUi5MoneyInput";
/**
 * `celledit-furo-type-money` is a `celledit` context renderer.
 *
 * It uses furo-ui5-money-input as the renderer
 *
 * @summary celledit renderer for `furo.type.Money`
 * @element celledit-furo-type-money
 */
export class CelleditFuroTypeMoney extends FuroUi5MoneyInput {
  static override styles: CSSResult | CSSResult[] = [
    super.styles as CSSResult,
    css`
      :host {
        width: 100%;
      }
    `,
  ];
}

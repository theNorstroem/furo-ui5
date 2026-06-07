import { css, type CSSResult } from "lit";

import { FuroUi5MoneyInput } from "@/elements/money-input/FuroUi5MoneyInput";
/**
 * `celledit-google-type-money` is a `celledit` context renderer.
 *
 * It uses furo-ui5-money-input as the renderer
 *
 * @summary celledit renderer for `google.type.Money`
 * @element celledit-google-type-money
 */
export class CelleditGoogleTypeMoney extends FuroUi5MoneyInput {
  static override styles: CSSResult | CSSResult[] = [
    super.styles as CSSResult,
    css`
      :host {
        width: 100%;
      }
    `,
  ];
}

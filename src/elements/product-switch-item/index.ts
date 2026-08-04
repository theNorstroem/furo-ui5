import { FuroUi5ProductSwitchItem } from "./FuroUi5ProductSwitchItem";

export * from "./FuroUi5ProductSwitchItem";

FuroUi5ProductSwitchItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-product-switch-item": FuroUi5ProductSwitchItem;
  }
}

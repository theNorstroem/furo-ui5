import { FuroUi5MenuItem } from "./FuroUi5MenuItem";

export * from "./FuroUi5MenuItem";

FuroUi5MenuItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-menu-item": FuroUi5MenuItem;
  }
}

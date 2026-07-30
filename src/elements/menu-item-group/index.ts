import { FuroUi5MenuItemGroup } from "./FuroUi5MenuItemGroup";

FuroUi5MenuItemGroup.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-menu-item-group": FuroUi5MenuItemGroup;
  }
}

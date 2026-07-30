import { FuroUi5UserMenuItemGroup } from "./FuroUi5UserMenuItemGroup";

FuroUi5UserMenuItemGroup.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-user-menu-item-group": FuroUi5UserMenuItemGroup;
  }
}

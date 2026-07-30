import { FuroUi5SideNavigationItem } from "./FuroUi5SideNavigationItem";

FuroUi5SideNavigationItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-side-navigation-item": FuroUi5SideNavigationItem;
  }
}

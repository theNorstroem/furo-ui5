import { FuroUi5SideNavigationSubItem } from "./FuroUi5SideNavigationSubItem";

FuroUi5SideNavigationSubItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-side-navigation-sub-item": FuroUi5SideNavigationSubItem;
  }
}

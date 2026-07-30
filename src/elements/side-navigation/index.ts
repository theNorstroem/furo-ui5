import { FuroUi5SideNavigation } from "./FuroUi5SideNavigation";

FuroUi5SideNavigation.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-side-navigation": FuroUi5SideNavigation;
  }
}

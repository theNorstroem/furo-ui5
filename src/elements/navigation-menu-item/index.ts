import { FuroUi5NavigationMenuItem } from "./FuroUi5NavigationMenuItem";

FuroUi5NavigationMenuItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-navigation-menu-item": FuroUi5NavigationMenuItem;
  }
}

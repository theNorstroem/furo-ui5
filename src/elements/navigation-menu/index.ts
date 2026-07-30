import { FuroUi5NavigationMenu } from "./FuroUi5NavigationMenu";

FuroUi5NavigationMenu.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-navigation-menu": FuroUi5NavigationMenu;
  }
}

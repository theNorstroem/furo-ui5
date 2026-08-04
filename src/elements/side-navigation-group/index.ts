import { FuroUi5SideNavigationGroup } from "./FuroUi5SideNavigationGroup";

export * from "./FuroUi5SideNavigationGroup";

FuroUi5SideNavigationGroup.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-side-navigation-group": FuroUi5SideNavigationGroup;
  }
}

import { FuroUi5NavigationLayout } from "./FuroUi5NavigationLayout";

FuroUi5NavigationLayout.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-navigation-layout": FuroUi5NavigationLayout;
  }
}

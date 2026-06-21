import { FuroUi5Tab } from "./FuroUi5Tab";

FuroUi5Tab.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-tab": FuroUi5Tab;
  }
}

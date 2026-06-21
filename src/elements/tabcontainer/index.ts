import { FuroUi5Tabcontainer } from "./FuroUi5Tabcontainer";

FuroUi5Tabcontainer.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-tabcontainer": FuroUi5Tabcontainer;
  }
}

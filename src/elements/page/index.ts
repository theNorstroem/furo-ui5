import { FuroUi5Page } from "./FuroUi5Page";

FuroUi5Page.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-page": FuroUi5Page;
  }
}

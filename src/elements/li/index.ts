import { FuroUi5Li } from "./FuroUi5Li";

FuroUi5Li.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-li": FuroUi5Li;
  }
}

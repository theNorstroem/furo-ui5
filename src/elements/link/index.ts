import { FuroUi5Link } from "./FuroUi5Link";

FuroUi5Link.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-link": FuroUi5Link;
  }
}

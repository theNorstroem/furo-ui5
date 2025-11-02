import { FuroUi5Link } from "@/impl/FuroUi5Link";

FuroUi5Link.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-link": FuroUi5Link;
  }
}

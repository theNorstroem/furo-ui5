import { FuroUi5LiCustom } from "./FuroUi5LiCustom";

FuroUi5LiCustom.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-li-custom": FuroUi5LiCustom;
  }
}

import { FuroUi5CbItemCustom } from "./FuroUi5CbItemCustom";

export * from "./FuroUi5CbItemCustom";

FuroUi5CbItemCustom.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-cb-item-custom": FuroUi5CbItemCustom;
  }
}

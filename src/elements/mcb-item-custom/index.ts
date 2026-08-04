import { FuroUi5McbItemCustom } from "./FuroUi5McbItemCustom";

export * from "./FuroUi5McbItemCustom";

FuroUi5McbItemCustom.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-mcb-item-custom": FuroUi5McbItemCustom;
  }
}

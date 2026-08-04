import { FuroUi5CbItemGroup } from "./FuroUi5CbItemGroup";

export * from "./FuroUi5CbItemGroup";

FuroUi5CbItemGroup.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-cb-item-group": FuroUi5CbItemGroup;
  }
}

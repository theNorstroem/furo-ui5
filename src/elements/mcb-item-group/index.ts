import { FuroUi5McbItemGroup } from "./FuroUi5McbItemGroup";

export * from "./FuroUi5McbItemGroup";

FuroUi5McbItemGroup.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-mcb-item-group": FuroUi5McbItemGroup;
  }
}

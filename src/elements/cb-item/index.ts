import { FuroUi5CbItem } from "./FuroUi5CbItem";

export * from "./FuroUi5CbItem";

FuroUi5CbItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-cb-item": FuroUi5CbItem;
  }
}

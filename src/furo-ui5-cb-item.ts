import { FuroUi5CbItem } from "@/impl/FuroUi5CbItem";

FuroUi5CbItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-cb-item": FuroUi5CbItem;
  }
}

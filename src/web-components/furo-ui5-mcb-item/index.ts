import { FuroUi5McbItem } from "./FuroUi5McbItem";

FuroUi5McbItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-mcb-item": FuroUi5McbItem;
  }
}

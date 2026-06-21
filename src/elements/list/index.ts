import { FuroUi5List } from "./FuroUi5List";

FuroUi5List.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-list": FuroUi5List;
  }
}

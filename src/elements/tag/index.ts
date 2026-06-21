import { FuroUi5Tag } from "./FuroUi5Tag";

FuroUi5Tag.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-tag": FuroUi5Tag;
  }
}

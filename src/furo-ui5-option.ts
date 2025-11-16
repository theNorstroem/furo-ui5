import { FuroUi5Option } from "./impl/FuroUi5Option";

FuroUi5Option.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-option": FuroUi5Option;
  }
}

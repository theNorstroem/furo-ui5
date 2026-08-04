import { FuroUi5Option } from "./FuroUi5Option";

export * from "./FuroUi5Option";

FuroUi5Option.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-option": FuroUi5Option;
  }
}

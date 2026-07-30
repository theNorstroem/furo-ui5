import { FuroUi5Tokenizer } from "./FuroUi5Tokenizer";

FuroUi5Tokenizer.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-tokenizer": FuroUi5Tokenizer;
  }
}

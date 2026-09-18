import { FuroUi5Token } from "./FuroUi5Token";

export * from "./FuroUi5Token";

FuroUi5Token.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-token": FuroUi5Token;
  }
}

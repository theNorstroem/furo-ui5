import { FuroUi5IllustratedMessage } from "./FuroUi5IllustratedMessage";

export * from "./FuroUi5IllustratedMessage";

FuroUi5IllustratedMessage.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-illustrated-message": FuroUi5IllustratedMessage;
  }
}

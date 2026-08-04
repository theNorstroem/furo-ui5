import { FuroUi5MessageStrip } from "./FuroUi5MessageStrip";

export * from "./FuroUi5MessageStrip";

FuroUi5MessageStrip.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-message-strip": FuroUi5MessageStrip;
  }
}

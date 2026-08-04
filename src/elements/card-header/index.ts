import { FuroUi5CardHeader } from "./FuroUi5CardHeader";

export * from "./FuroUi5CardHeader";

FuroUi5CardHeader.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-card-header": FuroUi5CardHeader;
  }
}

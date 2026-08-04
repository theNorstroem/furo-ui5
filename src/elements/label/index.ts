import { FuroUi5Label } from "./FuroUi5Label";

export * from "./FuroUi5Label";

FuroUi5Label.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-label": FuroUi5Label;
  }
}

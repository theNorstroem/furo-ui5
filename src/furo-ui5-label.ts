import { FuroUi5Label } from "./impl/FuroUi5Label";

FuroUi5Label.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-label": FuroUi5Label;
  }
}

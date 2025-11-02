import { FuroUi5Button } from "./impl/FuroUi5Button";

FuroUi5Button.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-button": FuroUi5Button;
  }
}

import { FuroUi5Bar } from "./FuroUi5Bar";

FuroUi5Bar.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-bar": FuroUi5Bar;
  }
}

import { FuroUi5Text } from "./FuroUi5Text";

FuroUi5Text.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-text": FuroUi5Text;
  }
}

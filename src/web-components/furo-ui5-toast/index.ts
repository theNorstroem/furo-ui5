import { FuroUi5Toast } from "./FuroUi5Toast";

FuroUi5Toast.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-toast": FuroUi5Toast;
  }
}

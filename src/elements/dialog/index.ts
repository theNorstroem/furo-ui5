import { FuroUi5Dialog } from "./FuroUi5Dialog";

export * from "./FuroUi5Dialog";

FuroUi5Dialog.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-dialog": FuroUi5Dialog;
  }
}

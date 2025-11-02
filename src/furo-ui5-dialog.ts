import { FuroUi5Dialog } from "@/impl/FuroUi5Dialog";

FuroUi5Dialog.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-dialog": FuroUi5Dialog;
  }
}

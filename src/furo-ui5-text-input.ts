import { FuroUi5TextInput } from "@/impl/FuroUi5TextInput";

FuroUi5TextInput.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-text-input": FuroUi5TextInput;
  }
}

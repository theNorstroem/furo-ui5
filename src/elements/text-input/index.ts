import { FuroUi5TextInput } from "./FuroUi5TextInput";

export * from "./FuroUi5TextInput";

FuroUi5TextInput.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-text-input": FuroUi5TextInput;
  }
}

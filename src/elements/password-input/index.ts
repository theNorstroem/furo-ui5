import { FuroUi5PasswordInput } from "./FuroUi5PasswordInput";

export * from "./FuroUi5PasswordInput";

FuroUi5PasswordInput.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-password-input": FuroUi5PasswordInput;
  }
}

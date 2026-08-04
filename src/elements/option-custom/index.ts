import { FuroUi5OptionCustom } from "./FuroUi5OptionCustom";

export * from "./FuroUi5OptionCustom";

FuroUi5OptionCustom.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-option-custom": FuroUi5OptionCustom;
  }
}

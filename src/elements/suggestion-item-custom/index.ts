import { FuroUi5SuggestionItemCustom } from "./FuroUi5SuggestionItemCustom";

export * from "./FuroUi5SuggestionItemCustom";

FuroUi5SuggestionItemCustom.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-suggestion-item-custom": FuroUi5SuggestionItemCustom;
  }
}

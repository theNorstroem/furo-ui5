import { FuroUi5SuggestionItem } from "./FuroUi5SuggestionItem";

export * from "./FuroUi5SuggestionItem";

FuroUi5SuggestionItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-suggestion-item": FuroUi5SuggestionItem;
  }
}

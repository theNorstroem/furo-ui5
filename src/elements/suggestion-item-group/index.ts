import { FuroUi5SuggestionItemGroup } from "./FuroUi5SuggestionItemGroup";

export * from "./FuroUi5SuggestionItemGroup";

FuroUi5SuggestionItemGroup.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-suggestion-item-group": FuroUi5SuggestionItemGroup;
  }
}

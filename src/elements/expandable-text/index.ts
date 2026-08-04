import { FuroUi5ExpandableText } from "./FuroUi5ExpandableText";

export * from "./FuroUi5ExpandableText";

FuroUi5ExpandableText.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-expandable-text": FuroUi5ExpandableText;
  }
}

import { FuroUi5DynamicSideContent } from "./FuroUi5DynamicSideContent";

FuroUi5DynamicSideContent.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-dynamic-side-content": FuroUi5DynamicSideContent;
  }
}

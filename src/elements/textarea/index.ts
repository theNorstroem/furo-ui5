import { FuroUi5Textarea } from "./FuroUi5Textarea";

export * from "./FuroUi5Textarea";

FuroUi5Textarea.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-textarea": FuroUi5Textarea;
  }
}

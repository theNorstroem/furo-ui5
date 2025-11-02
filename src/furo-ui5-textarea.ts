import { FuroUi5Textarea } from "@/impl/FuroUi5Textarea";

FuroUi5Textarea.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-textarea": FuroUi5Textarea;
  }
}

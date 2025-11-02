import { FuroUi5Title } from "@/impl/FuroUi5Title";

FuroUi5Title.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-title": FuroUi5Title;
  }
}

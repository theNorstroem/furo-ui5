import { FuroUi5Title } from "./FuroUi5Title";

export * from "./FuroUi5Title";

FuroUi5Title.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-title": FuroUi5Title;
  }
}

import { FuroUi5Avatar } from "./FuroUi5Avatar";

export * from "./FuroUi5Avatar";

FuroUi5Avatar.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-avatar": FuroUi5Avatar;
  }
}

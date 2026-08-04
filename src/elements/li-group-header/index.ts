import { FuroUi5LiGroupHeader } from "./FuroUi5LiGroupHeader";

export * from "./FuroUi5LiGroupHeader";

FuroUi5LiGroupHeader.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-li-group-header": FuroUi5LiGroupHeader;
  }
}

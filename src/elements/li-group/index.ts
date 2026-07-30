import { FuroUi5LiGroup } from "./FuroUi5LiGroup";

FuroUi5LiGroup.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-li-group": FuroUi5LiGroup;
  }
}

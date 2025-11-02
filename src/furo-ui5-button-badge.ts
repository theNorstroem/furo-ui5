import { FuroUi5ButtonBadge } from "./impl/FuroUi5ButtonBadge";

FuroUi5ButtonBadge.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-button-badge": FuroUi5ButtonBadge;
  }
}

import { FuroUi5Icon } from "./impl/FuroUi5Icon";

FuroUi5Icon.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-icon": FuroUi5Icon;
  }
}

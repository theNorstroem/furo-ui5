import { FuroUi5Icon } from "./FuroUi5Icon";

export * from "./FuroUi5Icon";

FuroUi5Icon.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-icon": FuroUi5Icon;
  }
}

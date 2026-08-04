import { FuroUi5UserMenuItem } from "./FuroUi5UserMenuItem";

export * from "./FuroUi5UserMenuItem";

FuroUi5UserMenuItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-user-menu-item": FuroUi5UserMenuItem;
  }
}

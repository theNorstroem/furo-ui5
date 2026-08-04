import { FuroUi5UserMenu } from "./FuroUi5UserMenu";

export * from "./FuroUi5UserMenu";

FuroUi5UserMenu.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-user-menu": FuroUi5UserMenu;
  }
}

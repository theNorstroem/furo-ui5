import { FuroUi5UserMenuAccount } from "./FuroUi5UserMenuAccount";

FuroUi5UserMenuAccount.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-user-menu-account": FuroUi5UserMenuAccount;
  }
}

import { FuroUi5Toolbar } from "./FuroUi5Toolbar";

FuroUi5Toolbar.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-toolbar": FuroUi5Toolbar;
  }
}

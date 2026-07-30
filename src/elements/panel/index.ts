import { FuroUi5Panel } from "./FuroUi5Panel";

FuroUi5Panel.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-panel": FuroUi5Panel;
  }
}

import { FuroUi5MenuSeparator } from "./FuroUi5MenuSeparator";

FuroUi5MenuSeparator.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-menu-separator": FuroUi5MenuSeparator;
  }
}

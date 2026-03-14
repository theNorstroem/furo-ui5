import { FuroUi5Switch } from "./FuroUi5Switch";

FuroUi5Switch.define();

declare global {
  interface HTMLElementTagNameMap {
    /**
     * Declare
     */
    "furo-ui5-switch": FuroUi5Switch;
  }
}

import { FuroUi5Popover } from "./impl/FuroUi5Popover";

FuroUi5Popover.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-popover": FuroUi5Popover;
  }
}

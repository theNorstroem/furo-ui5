import { FuroUi5Popover } from "./FuroUi5Popover";

export * from "./FuroUi5Popover";

FuroUi5Popover.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-popover": FuroUi5Popover;
  }
}

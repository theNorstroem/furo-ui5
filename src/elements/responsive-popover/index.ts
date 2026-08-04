import { FuroUi5ResponsivePopover } from "./FuroUi5ResponsivePopover";

export * from "./FuroUi5ResponsivePopover";

FuroUi5ResponsivePopover.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-responsive-popover": FuroUi5ResponsivePopover;
  }
}

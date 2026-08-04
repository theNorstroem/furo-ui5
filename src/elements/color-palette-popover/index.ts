import { FuroUi5ColorPalettePopover } from "./FuroUi5ColorPalettePopover";

export * from "./FuroUi5ColorPalettePopover";

FuroUi5ColorPalettePopover.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-color-palette-popover": FuroUi5ColorPalettePopover;
  }
}

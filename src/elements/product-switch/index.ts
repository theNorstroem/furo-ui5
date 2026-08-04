import { FuroUi5ProductSwitch } from "./FuroUi5ProductSwitch";

export * from "./FuroUi5ProductSwitch";

FuroUi5ProductSwitch.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-product-switch": FuroUi5ProductSwitch;
  }
}

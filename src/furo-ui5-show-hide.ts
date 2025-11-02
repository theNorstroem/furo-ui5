import { FuroUi5ShowHide } from "./impl/FuroUi5ShowHide";

window.customElements.define("furo-ui5-show-hide", FuroUi5ShowHide);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-show-hide": FuroUi5ShowHide;
  }
}

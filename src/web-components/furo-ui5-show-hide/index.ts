import { FuroUi5ShowHide } from "./FuroUi5ShowHide";

window.customElements.define("furo-ui5-show-hide", FuroUi5ShowHide);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-show-hide": FuroUi5ShowHide;
  }
}

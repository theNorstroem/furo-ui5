import { FuroUi5SignPad } from "./FuroUi5SignPad";

window.customElements.define("furo-ui5-sign-pad", FuroUi5SignPad);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-sign-pad": FuroUi5SignPad;
  }
}

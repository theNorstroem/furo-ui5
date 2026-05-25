import { DisplayFuroBigdecimal } from "./DisplayFuroBigdecimal";

window.customElements.define("display-furo-bigdecimal", DisplayFuroBigdecimal);

declare global {
  interface HTMLElementTagNameMap {
    "display-furo-bigdecimal": DisplayFuroBigdecimal;
  }
}

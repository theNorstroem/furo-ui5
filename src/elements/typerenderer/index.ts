import { FuroUi5Typerenderer } from "./FuroUi5Typerenderer";

if (!customElements.get("furo-ui5-typerenderer")) {
  customElements.define("furo-ui5-typerenderer", FuroUi5Typerenderer);
}

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-typerenderer": FuroUi5Typerenderer;
  }
}

import { FuroUi5BoolIcon } from "./FuroUi5BoolIcon";

export * from "./FuroUi5BoolIcon";

window.customElements.define("furo-ui5-bool-icon", FuroUi5BoolIcon);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-bool-icon": FuroUi5BoolIcon;
  }
}

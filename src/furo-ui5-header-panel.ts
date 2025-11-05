import { FuroUi5HeaderPanel } from "./impl/FuroUi5HeaderPanel";

customElements.define("furo-ui5-header-panel", FuroUi5HeaderPanel);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-header-panel": FuroUi5HeaderPanel;
  }
}

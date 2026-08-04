import { FuroUi5HeaderPanel } from "./FuroUi5HeaderPanel";

export * from "./FuroUi5HeaderPanel";

customElements.define("furo-ui5-header-panel", FuroUi5HeaderPanel);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-header-panel": FuroUi5HeaderPanel;
  }
}

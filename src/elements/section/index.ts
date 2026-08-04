import { FuroUi5Section } from "./FuroUi5Section";

export * from "./FuroUi5Section";

window.customElements.define("furo-ui5-section", FuroUi5Section);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-section": FuroUi5Section;
  }
}

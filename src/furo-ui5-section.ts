import { FuroUi5Section } from "@/impl/FuroUi5Section";

window.customElements.define("furo-ui5-section", FuroUi5Section);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-section": FuroUi5Section;
  }
}

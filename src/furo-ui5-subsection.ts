import { FuroUi5Subsection } from "@/impl/FuroUi5Subsection";

window.customElements.define("furo-ui5-subsection", FuroUi5Subsection);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-subsection": FuroUi5Subsection;
  }
}

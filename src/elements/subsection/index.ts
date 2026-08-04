import { FuroUi5Subsection } from "./FuroUi5Subsection";

export * from "./FuroUi5Subsection";

window.customElements.define("furo-ui5-subsection", FuroUi5Subsection);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-subsection": FuroUi5Subsection;
  }
}

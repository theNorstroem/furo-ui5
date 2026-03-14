import { FuroUi5Markdown } from "./FuroUi5Markdown";

window.customElements.define("furo-ui5-markdown", FuroUi5Markdown);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-markdown": FuroUi5Markdown;
  }
}

import { FuroUi5PrettyJson } from "@/impl/FuroUi5PrettyJson";

window.customElements.define("furo-ui5-pretty-json", FuroUi5PrettyJson);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-pretty-json": FuroUi5PrettyJson;
  }
}

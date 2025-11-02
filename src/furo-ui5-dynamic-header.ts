import { FuroUi5DynamicHeader } from "./impl/FuroUi5DynamicHeader";

customElements.define("furo-ui5-dynamic-header", FuroUi5DynamicHeader);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-dynamic-header": FuroUi5DynamicHeader;
  }
}

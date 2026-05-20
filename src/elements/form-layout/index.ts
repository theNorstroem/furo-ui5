import { FuroUi5FormLayout } from "./FuroUi5FormLayout";

window.customElements.define("furo-ui5-form-layout", FuroUi5FormLayout);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-form-layout": FuroUi5FormLayout;
  }
}

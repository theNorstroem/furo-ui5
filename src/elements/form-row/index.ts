import { FuroUi5FormRow } from "./FuroUi5FormRow";

export * from "./FuroUi5FormRow";

window.customElements.define("furo-ui5-form-row", FuroUi5FormRow);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-form-row": FuroUi5FormRow;
  }
}

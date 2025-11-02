import FuroUi5FormGroup from "@/impl/FuroUi5FormGroup";

window.customElements.define("furo-ui5-form-group", FuroUi5FormGroup);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-form-group": FuroUi5FormGroup;
  }
}

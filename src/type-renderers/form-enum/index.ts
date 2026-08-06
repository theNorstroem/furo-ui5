import { FormEnum } from "./FormEnum";

export * from "./FormEnum";

declare global {
  interface HTMLElementTagNameMap {
    "form-enum": FormEnum;
  }
}

window.customElements.define("form-enum", FormEnum);

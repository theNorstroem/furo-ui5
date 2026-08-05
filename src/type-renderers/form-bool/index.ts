import { FormBool } from "./FormBool";

export * from "./FormBool";

declare global {
  interface HTMLElementTagNameMap {
    "form-bool": FormBool;
  }
}

window.customElements.define("form-bool", FormBool);

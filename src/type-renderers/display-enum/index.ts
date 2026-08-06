import { DisplayEnum } from "./DisplayEnum";

export * from "./DisplayEnum";

window.customElements.define("display-enum", DisplayEnum);

declare global {
  interface HTMLElementTagNameMap {
    "display-enum": DisplayEnum;
  }
}

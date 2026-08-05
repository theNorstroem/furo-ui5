import { DisplayString } from "./DisplayString";

export * from "./DisplayString";

window.customElements.define("display-string", DisplayString);

declare global {
  interface HTMLElementTagNameMap {
    "display-string": DisplayString;
  }
}

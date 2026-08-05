import { DisplayFloat } from "./DisplayFloat";

export * from "./DisplayFloat";

window.customElements.define("display-float", DisplayFloat);

declare global {
  interface HTMLElementTagNameMap {
    "display-float": DisplayFloat;
  }
}

import { DisplayBool } from "./DisplayBool";

export * from "./DisplayBool";

window.customElements.define("display-bool", DisplayBool);

declare global {
  interface HTMLElementTagNameMap {
    "display-bool": DisplayBool;
  }
}

import { DisplayFuroFatBool } from "./DisplayFuroFatBool";

export * from "./DisplayFuroFatBool";

window.customElements.define("display-furo-fat-bool", DisplayFuroFatBool);

declare global {
  interface HTMLElementTagNameMap {
    "display-furo-fat-bool": DisplayFuroFatBool;
  }
}

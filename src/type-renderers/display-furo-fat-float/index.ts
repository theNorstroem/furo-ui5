import { DisplayFuroFatFloat } from "./DisplayFuroFatFloat";

export * from "./DisplayFuroFatFloat";

window.customElements.define("display-furo-fat-float", DisplayFuroFatFloat);

declare global {
  interface HTMLElementTagNameMap {
    "display-furo-fat-float": DisplayFuroFatFloat;
  }
}

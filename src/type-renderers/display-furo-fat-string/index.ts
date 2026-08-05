import { DisplayFuroFatString } from "./DisplayFuroFatString";

export * from "./DisplayFuroFatString";

window.customElements.define("display-furo-fat-string", DisplayFuroFatString);

declare global {
  interface HTMLElementTagNameMap {
    "display-furo-fat-string": DisplayFuroFatString;
  }
}

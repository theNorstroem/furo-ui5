import { DisplayFuroFatInt32 } from "./DisplayFuroFatInt32";

export * from "./DisplayFuroFatInt32";

window.customElements.define("display-furo-fat-int32", DisplayFuroFatInt32);

declare global {
  interface HTMLElementTagNameMap {
    "display-furo-fat-int32": DisplayFuroFatInt32;
  }
}

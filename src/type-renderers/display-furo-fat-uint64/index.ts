import { DisplayFuroFatUint64 } from "./DisplayFuroFatUint64";

export * from "./DisplayFuroFatUint64";

window.customElements.define("display-furo-fat-uint64", DisplayFuroFatUint64);

declare global {
  interface HTMLElementTagNameMap {
    "display-furo-fat-uint64": DisplayFuroFatUint64;
  }
}

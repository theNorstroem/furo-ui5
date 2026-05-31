import { DisplayInt64 } from "./DisplayInt64";

window.customElements.define("display-int64", DisplayInt64);

declare global {
  interface HTMLElementTagNameMap {
    "display-int64": DisplayInt64;
  }
}

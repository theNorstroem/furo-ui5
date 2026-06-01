import { DisplayUint64 } from "./DisplayUint64";

window.customElements.define("display-uint64", DisplayUint64);

declare global {
  interface HTMLElementTagNameMap {
    "display-uint64": DisplayUint64;
  }
}

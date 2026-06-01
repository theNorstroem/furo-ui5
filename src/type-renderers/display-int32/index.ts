import { DisplayInt32 } from "./DisplayInt32";

window.customElements.define("display-int32", DisplayInt32);

declare global {
  interface HTMLElementTagNameMap {
    "display-int32": DisplayInt32;
  }
}

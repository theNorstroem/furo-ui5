import { DisplayUint32 } from "./DisplayUint32";

export * from "./DisplayUint32";

window.customElements.define("display-uint32", DisplayUint32);

declare global {
  interface HTMLElementTagNameMap {
    "display-uint32": DisplayUint32;
  }
}

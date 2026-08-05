import { DisplayGoogleTypeMoney } from "./DisplayGoogleTypeMoney";

export * from "./DisplayGoogleTypeMoney";

window.customElements.define("display-google-type-money", DisplayGoogleTypeMoney);

declare global {
  interface HTMLElementTagNameMap {
    "display-google-type-money": DisplayGoogleTypeMoney;
  }
}

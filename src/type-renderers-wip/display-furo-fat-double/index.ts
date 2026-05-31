import { DisplayFuroFatDouble } from "./DisplayFuroFatDouble";

window.customElements.define("display-furo-fat-double", DisplayFuroFatDouble);

declare global {
  interface HTMLElementTagNameMap {
    "display-furo-fat-double": DisplayFuroFatDouble;
  }
}

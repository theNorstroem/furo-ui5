import { DisplayFuroTypeDate } from "./DisplayFuroTypeDate";

window.customElements.define("display-furo-type-date", DisplayFuroTypeDate);

declare global {
  interface HTMLElementTagNameMap {
    "display-furo-type-date": DisplayFuroTypeDate;
  }
}

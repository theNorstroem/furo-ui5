import { FormFuroTypeDate } from "./FormFuroTypeDate";

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-type-date": FormFuroTypeDate;
  }
}

window.customElements.define("form-furo-type-date", FormFuroTypeDate);

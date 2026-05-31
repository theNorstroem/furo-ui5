import { FormFuroTypeDate } from "./FormFuroTypeDate";

FormFuroTypeDate.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-type-date": FormFuroTypeDate;
  }
}

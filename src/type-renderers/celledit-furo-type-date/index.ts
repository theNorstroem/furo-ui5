import { CelleditFuroTypeDate } from "./CelleditFuroTypeDate";

CelleditFuroTypeDate.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-type-date": CelleditFuroTypeDate;
  }
}

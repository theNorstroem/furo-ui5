import { CelleditFuroTypeDate } from "./CelleditFuroTypeDate";

export * from "./CelleditFuroTypeDate";

CelleditFuroTypeDate.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-type-date": CelleditFuroTypeDate;
  }
}

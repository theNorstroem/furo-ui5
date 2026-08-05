import { CelleditGoogleTypeDate } from "./CelleditGoogleTypeDate";

export * from "./CelleditGoogleTypeDate";

CelleditGoogleTypeDate.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-google-type-date": CelleditGoogleTypeDate;
  }
}

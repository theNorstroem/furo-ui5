import { CelleditGoogleTypeDate } from "./CelleditGoogleTypeDate";

CelleditGoogleTypeDate.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-google-type-date": CelleditGoogleTypeDate;
  }
}

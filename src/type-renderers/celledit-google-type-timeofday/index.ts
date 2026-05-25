import { CelleditGoogleTypeTimeofday } from "./CelleditGoogleTypeTimeofday";

CelleditGoogleTypeTimeofday.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-google-type-timeofday": CelleditGoogleTypeTimeofday;
  }
}

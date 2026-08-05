import { CelleditGoogleTypeTimeofday } from "./CelleditGoogleTypeTimeofday";

export * from "./CelleditGoogleTypeTimeofday";

CelleditGoogleTypeTimeofday.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-google-type-timeofday": CelleditGoogleTypeTimeofday;
  }
}

import { CelleditString } from "./CelleditString";

CelleditString.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-string": CelleditString;
  }
}

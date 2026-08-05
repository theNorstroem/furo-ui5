import { CelleditString } from "./CelleditString";

export * from "./CelleditString";

CelleditString.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-string": CelleditString;
  }
}

import { CelleditDouble } from "./CelleditDouble";

export * from "./CelleditDouble";

CelleditDouble.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-double": CelleditDouble;
  }
}

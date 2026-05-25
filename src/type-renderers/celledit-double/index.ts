import { CelleditDouble } from "./CelleditDouble";

CelleditDouble.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-double": CelleditDouble;
  }
}

import { CelleditFloat } from "./CelleditFloat";

CelleditFloat.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-float": CelleditFloat;
  }
}

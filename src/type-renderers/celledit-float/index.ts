import { CelleditFloat } from "./CelleditFloat";

export * from "./CelleditFloat";

CelleditFloat.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-float": CelleditFloat;
  }
}

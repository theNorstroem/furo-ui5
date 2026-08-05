import { CelleditInt64 } from "./CelleditInt64";

export * from "./CelleditInt64";

CelleditInt64.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-int64": CelleditInt64;
  }
}

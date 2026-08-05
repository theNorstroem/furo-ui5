import { CelleditUint64 } from "./CelleditUint64";

export * from "./CelleditUint64";

CelleditUint64.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-uint64": CelleditUint64;
  }
}

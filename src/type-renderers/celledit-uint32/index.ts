import { CelleditUint32 } from "./CelleditUint32";

export * from "./CelleditUint32";

CelleditUint32.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-uint32": CelleditUint32;
  }
}

import { CelleditInt32 } from "./CelleditInt32";

CelleditInt32.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-int32": CelleditInt32;
  }
}

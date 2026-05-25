import { CelleditBool } from "./CelleditBool";

CelleditBool.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-bool": CelleditBool;
  }
}

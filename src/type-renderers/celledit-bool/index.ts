import { CelleditBool } from "./CelleditBool";

export * from "./CelleditBool";

CelleditBool.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-bool": CelleditBool;
  }
}

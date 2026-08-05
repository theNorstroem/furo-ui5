import { CelleditFuroFatBool } from "./CelleditFuroFatBool";

export * from "./CelleditFuroFatBool";

CelleditFuroFatBool.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-fat-bool": CelleditFuroFatBool;
  }
}

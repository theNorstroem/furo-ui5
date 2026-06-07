import { CelleditFuroFatBool } from "./CelleditFuroFatBool";

CelleditFuroFatBool.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-fat-bool": CelleditFuroFatBool;
  }
}

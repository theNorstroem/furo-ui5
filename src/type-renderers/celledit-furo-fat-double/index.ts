import { CelleditFuroFatDouble } from "./CelleditFuroFatDouble";

export * from "./CelleditFuroFatDouble";

CelleditFuroFatDouble.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-fat-double": CelleditFuroFatDouble;
  }
}

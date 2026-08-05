import { CelleditFuroFatFloat } from "./CelleditFuroFatFloat";

export * from "./CelleditFuroFatFloat";

CelleditFuroFatFloat.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-fat-float": CelleditFuroFatFloat;
  }
}

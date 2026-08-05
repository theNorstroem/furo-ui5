import { CelleditFuroFatString } from "./CelleditFuroFatString";

export * from "./CelleditFuroFatString";

CelleditFuroFatString.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-fat-string": CelleditFuroFatString;
  }
}

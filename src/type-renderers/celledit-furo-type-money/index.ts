import { CelleditFuroTypeMoney } from "./CelleditFuroTypeMoney";

CelleditFuroTypeMoney.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-type-money": CelleditFuroTypeMoney;
  }
}

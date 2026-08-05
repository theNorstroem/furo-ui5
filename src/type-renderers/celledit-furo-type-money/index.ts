import { CelleditFuroTypeMoney } from "./CelleditFuroTypeMoney";

export * from "./CelleditFuroTypeMoney";

if (!customElements.get("celledit-furo-type-money")) {
  customElements.define("celledit-furo-type-money", CelleditFuroTypeMoney);
}

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-type-money": CelleditFuroTypeMoney;
  }
}

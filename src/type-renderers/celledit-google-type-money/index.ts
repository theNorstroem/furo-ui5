import { CelleditGoogleTypeMoney } from "./CelleditGoogleTypeMoney";

export * from "./CelleditGoogleTypeMoney";

if (!customElements.get("celledit-google-type-money")) {
  customElements.define("celledit-google-type-money", CelleditGoogleTypeMoney);
}

declare global {
  interface HTMLElementTagNameMap {
    "celledit-google-type-money": CelleditGoogleTypeMoney;
  }
}

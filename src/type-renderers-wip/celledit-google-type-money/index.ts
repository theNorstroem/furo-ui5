import { CelleditGoogleTypeMoney } from "./CelleditGoogleTypeMoney";

CelleditGoogleTypeMoney.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-google-type-money": CelleditGoogleTypeMoney;
  }
}

import { CelleditEnum } from "./CelleditEnum";

export * from "./CelleditEnum";

CelleditEnum.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-enum": CelleditEnum;
  }
}

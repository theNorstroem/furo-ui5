import { CelleditFuroBigdecimal } from "./CelleditFuroBigdecimal";

CelleditFuroBigdecimal.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-bigdecimal": CelleditFuroBigdecimal;
  }
}

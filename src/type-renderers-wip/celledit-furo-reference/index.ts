import { CelleditFuroReference } from "./CelleditFuroReference";

CelleditFuroReference.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-reference": CelleditFuroReference;
  }
}

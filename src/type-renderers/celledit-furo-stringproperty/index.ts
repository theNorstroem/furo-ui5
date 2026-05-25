import { CelleditFuroStringproperty } from "./CelleditFuroStringproperty";

CelleditFuroStringproperty.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-stringproperty": CelleditFuroStringproperty;
  }
}

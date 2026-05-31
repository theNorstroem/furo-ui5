import { CelleditFuroProperty } from "./CelleditFuroProperty";

window.customElements.define("celledit-furo-property", CelleditFuroProperty);

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-property": CelleditFuroProperty;
  }
}

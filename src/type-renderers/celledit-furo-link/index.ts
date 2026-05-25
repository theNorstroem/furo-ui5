import { CelleditFuroLink } from "./CelleditFuroLink";

window.customElements.define("celledit-furo-link", CelleditFuroLink);

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-link": CelleditFuroLink;
  }
}

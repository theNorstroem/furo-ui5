import { CellFuroLink } from "./CellFuroLink";

window.customElements.define("cell-furo-link", CellFuroLink);

declare global {
  interface HTMLElementTagNameMap {
    "cell-furo-link": CellFuroLink;
  }
}

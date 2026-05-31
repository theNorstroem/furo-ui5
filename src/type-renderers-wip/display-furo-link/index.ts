import { DisplayFuroLink } from "./DisplayFuroLink";

window.customElements.define("display-furo-link", DisplayFuroLink);

declare global {
  interface HTMLElementTagNameMap {
    "display-furo-link": DisplayFuroLink;
  }
}

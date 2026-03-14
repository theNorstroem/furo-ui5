import { PageTyperenderer } from "./PageTyperenderer";

declare global {
  interface HTMLElementTagNameMap {
    "page-typerenderer": PageTyperenderer;
  }
}

window.customElements.define("page-typerenderer", PageTyperenderer);

import { PageEnumTyperenderer } from "./PageEnumTyperenderer";

declare global {
  interface HTMLElementTagNameMap {
    "page-enum-typerenderer": PageEnumTyperenderer;
  }
}

window.customElements.define("page-enum-typerenderer", PageEnumTyperenderer);

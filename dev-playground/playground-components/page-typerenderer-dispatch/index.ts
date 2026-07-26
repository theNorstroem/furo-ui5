import { PageTyperendererDispatch } from "./PageTyperendererDispatch";

declare global {
  interface HTMLElementTagNameMap {
    "page-typerenderer-dispatch": PageTyperendererDispatch;
  }
}

window.customElements.define("page-typerenderer-dispatch", PageTyperendererDispatch);

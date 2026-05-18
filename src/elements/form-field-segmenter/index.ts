import { FuroUi5FormFieldSegmenter } from "./FuroUi5FormFieldSegmenter";

window.customElements.define("furo-ui5-form-field-segmenter", FuroUi5FormFieldSegmenter);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-form-field-segmenter": FuroUi5FormFieldSegmenter;
  }
}

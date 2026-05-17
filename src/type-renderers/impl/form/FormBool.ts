// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5CheckboxInputLabeled } from "@/impl/impl/furo-ui5-checkbox-labeled";

/**
 * `form-bool` is a `form` context renderer.
 *
 * It uses furo-ui5-checkbox as the renderer
 *
 * @summary form renderer for `bool`
 * @element form-bool
 */
export class FormBool extends FuroUi5CheckboxInputLabeled {
  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
  }
}
declare global {
  interface HTMLElementTagNameMap {
    "form-bool": FormBool;
  }
}

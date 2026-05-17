// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5ReferenceSearchLabeled } from "@/impl/impl/furo-ui5-reference-search-labeled";

/**
 *
 * @summary form renderer for `furo.Reference`
 * @element form-furo-reference
 */
export class FormFuroReference extends FuroUi5ReferenceSearchLabeled {}

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-reference": FormFuroReference;
  }
}

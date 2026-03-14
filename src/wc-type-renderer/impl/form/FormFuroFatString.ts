import { FuroUi5TextInputLabeled } from "@/impl/impl/furo-ui5-text-input-labeled";

/**
 *
 * @summary form renderer for `furo.fat.String`
 * @element form-furo-fat-string
 */
export class FormFuroFatString extends FuroUi5TextInputLabeled {
  bindData(fieldNode) {
    super.bindData(fieldNode);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-string": FormFuroFatString;
  }
}

import { FuroUi5ReferenceSearch } from "@/impl/impl/furo-ui5-reference-search";

/**
 *
 * @summary celledit renderer for `furo.Reference`
 * @element celledit-furo-reference
 */
export class CelleditFuroReference extends FuroUi5ReferenceSearch {}

declare global {
  interface HTMLElementTagNameMap {
    "celledit-furo-reference": CelleditFuroReference;
  }
}

// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5ReferenceSearchLabeled } from '../furo-ui5-reference-search-labeled.js';

/**
 *
 * @summary form renderer for `furo.Reference`
 * @element form-furo-reference
 */
export class FormFuroReference extends FuroUi5ReferenceSearchLabeled {}

window.customElements.define('form-furo-reference', FormFuroReference);

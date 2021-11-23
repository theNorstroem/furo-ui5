// eslint-disable-next-line import/named
import { CelleditBool } from './celledit-bool.js';

/**
 * `celledit-furo-fat-bool` is a `celledit` context renderer.
 *
 * It uses furo-ui5-checkbox-input as the renderer
 *
 * @summary celledit renderer for bool
 * @element celledit-furo-fat-bool
 */
class CelleditFuroFatBool extends CelleditBool {}

window.customElements.define('celledit-furo-fat-bool', CelleditFuroFatBool);

// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-float` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for float
 * @element celledit-float
 */
export class CelleditFloat extends CelleditInt32 {}

window.customElements.define('celledit-float', CelleditFloat);

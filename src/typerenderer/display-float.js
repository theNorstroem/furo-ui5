import { DisplayDouble } from './display-double.js';

/**
 * `display-float`
 * The display-float component displays a FieldNode of type `float` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `float`
 * @element display-float
 */
export class DisplayFloat extends DisplayDouble {}

window.customElements.define('display-float', DisplayFloat);

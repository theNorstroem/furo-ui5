import { DisplayFuroFatInt64 } from './display-furo-fat-int64.js';
/**
 * `display-furo-fat-uint64`
 * The display-furo-fat-uint64 component displays a FieldNode of type `furo.fat.uint64` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `furo.fat.Uint64`
 * @element display-furo-fat-uint64
 */
export class DisplayFuroFatUint64 extends DisplayFuroFatInt64 {}

window.customElements.define('display-furo-fat-uint64', DisplayFuroFatUint64);

import { DisplayFuroFatInt32 } from './display-furo-fat-int32.js';

/**
 * `display-furo-fat-int64`
 * The display-furo-fat-int64 component displays a FieldNode of type `furo.fat.int64` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `furo.fat.Int64`
 * @element display-furo-fat-int64
 */
export class DisplayFuroFatInt64 extends DisplayFuroFatInt32 {}

window.customElements.define('display-furo-fat-int64', DisplayFuroFatInt64);

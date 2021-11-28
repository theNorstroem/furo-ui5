import { CellFuroFatInt32 } from './cell-furo-fat-int32.js';

/**
 * `cell-furo-fat-int64`
 * The cell-furo-fat-int64 component displays a FieldNode of type `furo.fat.int64` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `furo.fat.Int64`
 * @element cell-furo-fat-int64
 */
export class CellFuroFatInt64 extends CellFuroFatInt32 {}

window.customElements.define('cell-furo-fat-int64', CellFuroFatInt64);

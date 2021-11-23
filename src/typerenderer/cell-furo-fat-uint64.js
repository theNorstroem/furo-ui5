// eslint-disable-next-line import/named
import { CellFuroFatInt64 } from './cell-furo-fat-int64.js';
/**
 * `cell-furo-fat-uint64`
 * The cell-furo-fat-uint64 component displays a FieldNode of type `furo.fat.uint64` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @element
 * @demo demo cell-furo-fat-uint64 Basic Usage
 */
class CellFuroFatUint64 extends CellFuroFatInt64 {}

window.customElements.define('cell-furo-fat-uint64', CellFuroFatUint64);

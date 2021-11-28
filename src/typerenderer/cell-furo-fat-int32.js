import { Env } from '@furo/framework/src/furo.js';
import { CellInt32 } from './cell-int32.js';

/**
 * `cell-int32`
 * The cell-int32 component displays a FieldNode of type `furo.fat.Int32` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `furo.fat.Int32`
 * @element cell-furo-fat-int32
 */
export class CellFuroFatInt32 extends CellInt32 {
  /**
   *
   * @private
   */
  _formatCell() {
    if (this._field.value._value !== null) {
      const displayValue = new Intl.NumberFormat(Env.locale, {}).format(
        this._field.value._value
      );
      if (displayValue !== 'NaN') {
        this._displayValue = displayValue;
        this.requestUpdate();
      }
    }
  }
}

window.customElements.define('cell-furo-fat-int32', CellFuroFatInt32);

import { Env } from '@furo/framework/src/furo.js';
import { CellFloat } from './cell-float.js';

/**
 * `cell-furo-fat-float`
 * The cell-furo-fat-float component displays a FieldNode of type `furo.fat.Float` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `furo.fat.Float`
 * @element cell-furo-fat-float
 * @demo demo cell-furo-fat-float Basic Usage
 */
class CellFuroBigdecimal extends CellFloat {
  /**
   *
   * @private
   */
  _formatCell() {
    const val = this._field._value;
    let displayValue = '';
    if (!(val.scale === null || val.unscaled_value === null)) {
      const vstr = val.unscaled_value.toString(10);
      if (val.scale < 0) {
        displayValue = parseInt(vstr + ''.padEnd(Math.abs(val.scale), 0), 10);
      } else {
        displayValue = parseFloat(
          `${vstr.substr(0, vstr.length - val.scale)}.${vstr.substr(
            vstr.length - val.scale
          )}`
        );
      }
    }
    if (displayValue !== 'NaN') {
      this._displayValue = new Intl.NumberFormat(Env.locale, {}).format(
        displayValue
      );
      this.requestUpdate();
    }
  }
}

window.customElements.define('cell-furo-bigdecimal', CellFuroBigdecimal);

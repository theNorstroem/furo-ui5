import { Env } from '@furo/framework/src/furo.js';
import { CellFloat } from './cell-float.js';

/**
 * The `cell-furo-bigdecimal`  component displays a FieldNode of type `furo.BigDecimal` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * @summary cell display renderer for type `furo.BigDecimal`
 * @element cell-furo-bigdecimal
 */
class CellFuroBigdecimal extends CellFloat {
  /**
   *
   * @private
   */
  _formatCell() {
    /**
     * Sets the attributes from the field node
     */
    if (this._field.attributes && this._field.attributes['value-state']) {
      const state = this._field.attributes['value-state']._value;
      this.setAttribute('value-state', state);
      if (state !== 'None' && this._field.attributes['value-state-message']) {
        this.setAttribute(
          'title',
          this._field.attributes['value-state-message']._value
        );
      }
    }
    const val = this._field._value;
    let displayValue = '';
    this._displayValue = '';
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
      this._displayValue = new Intl.NumberFormat(Env.locale, {}).format(
        displayValue
      );
    }

    this.requestUpdate();
  }
}

window.customElements.define('cell-furo-bigdecimal', CellFuroBigdecimal);

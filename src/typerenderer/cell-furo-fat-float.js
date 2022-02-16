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
class CellFuroFatFloat extends CellFloat {
  /**
   *
   * @private
   */
  _formatCell() {
    /**
     * Sets the attributes from the field node
     */
    if (this._field.attributes['value-state']) {
      const state = this._field.attributes['value-state']._value;
      this.setAttribute('value-state', state);
      if (state !== 'None' && this._field.attributes['value-state-message']) {
        this.setAttribute(
          'title',
          this._field.attributes['value-state-message']._value
        );
      }
    }
    const displayValue = new Intl.NumberFormat(Env.locale, {}).format(
      this._field.value._value
    );
    if (displayValue !== 'NaN') {
      this._displayValue = displayValue;
      this.requestUpdate();
    }
  }
}

window.customElements.define('cell-furo-fat-float', CellFuroFatFloat);

import { Env } from '@furo/framework/src/furo.js';
import { DisplayFloat } from './display-float.js';
/**
 * `display-furo-fat-float`
 * The display-furo-fat-float component displays a FieldNode of type `furo.fat.Float` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `furo.fat.Float`
 * @element display-furo-fat-float
 */
class DisplayFuroFatFloat extends DisplayFloat {
  _formatDisplay() {
    /**
     * Sets the attributes from the field node
     */
    if (this._fieldValue.attributes['value-state']) {
      const state = this._fieldValue.attributes['value-state']._value;
      this.setAttribute('value-state', state);
      if (
        state !== 'None' &&
        this._fieldValue.attributes['value-state-message']
      ) {
        this.setAttribute(
          'title',
          this._fieldValue.attributes['value-state-message']._value
        );
      }
    }

    if (
      this._fieldValue.value._value !== null &&
      !(this._fieldValue.labels?.empty && this._fieldValue.labels.empty._value)
    ) {
      const displayValue = new Intl.NumberFormat(Env.locale, {}).format(
        this._fieldValue.value._value
      );
      if (displayValue !== 'NaN') {
        this._displayValue = displayValue;
        this.requestUpdate();
      }
    }
  }
}

window.customElements.define('display-furo-fat-float', DisplayFuroFatFloat);

import { Env } from '@furo/framework/src/furo.js';
import { DisplayDouble } from './display-double.js';
/**
 * `display-furo-fat-double`
 * The display-furo-fat-double component displays a FieldNode of type `furo.fat.Double` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `furo.fat.Double`
 * @element display-furo-fat-double
 */
class DisplayFuroFatDouble extends DisplayDouble {
  _formatDisplay() {
    /**
     * Sets the attributes from the field node
     */
    if (
      this._fieldValue &&
      this._fieldValue.attributes &&
      this._fieldValue.attributes['value-state']
    ) {
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
      this._fieldValue.value &&
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

window.customElements.define('display-furo-fat-double', DisplayFuroFatDouble);

import { Env } from '@furo/framework/src/furo.js';
import { DisplayDouble } from './display-double.js';
/**
 * `display-furo-fat-double`
 * The display-furo-fat-double component displays a FieldNode of type `furo.fat.Double` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary
 * @element
 * @demo demo display-furo-fat-double Basic Usage
 */
class DisplayFuroFatDouble extends DisplayDouble {
  _formatDisplay() {
    if (
      this._field.value._value !== null &&
      !(this._field.labels?.empty && this._field.labels.empty._value)
    ) {
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

window.customElements.define('display-furo-fat-double', DisplayFuroFatDouble);

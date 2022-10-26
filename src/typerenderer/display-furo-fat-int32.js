import { Env } from '@furo/framework/src/furo.js';
import { DisplayInt32 } from './display-int32.js';

/**
 * `display-int32`
 * The display-int32 component displays a FieldNode of type `furo.fat.Int32` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `furo.fat.Int32`
 * @element display-furo-fat-int32
 */
export class DisplayFuroFatInt32 extends DisplayInt32 {
  _formatDisplay() {
    /**
     * Sets the attributes from the field node
     */
    if (
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

window.customElements.define('display-furo-fat-int32', DisplayFuroFatInt32);

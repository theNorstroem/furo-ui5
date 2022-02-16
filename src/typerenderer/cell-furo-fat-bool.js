import { html } from 'lit';
import { CellBool } from './cell-bool.js';

/**
 * `cell-furo-fat-bool`
 * The cell-furo-fat-bool component displays a FieldNode of type `furo.fat.bool` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}

 *
 * @summary cell display renderer for `furo.fat.Bool`
 * @element cell-furo-fat-bool
 */
class CellFuroFatBool extends CellBool {
  /**
   * Template logic
   * @returns {*}
   * @private
   */
  _getTemplate() {
    let tmpl = '';
    if (this._field) {
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

      if (!this._field.value._value || this._field.value._value === 'false') {
        tmpl = html` <ui5-icon name="border"></ui5-icon> `;
      } else {
        tmpl = html`
          <ui5-icon name="accept" value-state="Success"></ui5-icon>
        `;
      }
    }

    return tmpl;
  }

  /**
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html` ${this._getTemplate()} `;
  }
}

window.customElements.define('cell-furo-fat-bool', CellFuroFatBool);

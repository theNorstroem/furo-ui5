import { html } from 'lit';
import { DisplayBool } from './display-bool.js';

/**
 * `display-furo-fat-bool`
 * The display-furo-fat-bool component displays a FieldNode of type `furo.fat.bool` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `furo.fat.Bool`
 * @element display-furo-fat-bool
 */
class DisplayFuroFatBool extends DisplayBool {
  /**
   * Template logic
   * @returns {*}
   * @private
   */
  _getTemplate() {
    let tmpl = '';
    if (this._fieldValue) {
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
        this._fieldValue.labels &&
        this._fieldValue.labels.empty &&
        this._fieldValue.labels.empty._value === true &&
        this._fieldValue.value._value === false
      ) {
        tmpl = html` <ui5-icon name="less"></ui5-icon> `;
      } else if (
        !this._fieldValue.value._value ||
        this._fieldValue.value._value === 'false'
      ) {
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

window.customElements.define('display-furo-fat-bool', DisplayFuroFatBool);

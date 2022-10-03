import { LitElement, html, css } from 'lit';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { Env } from '@furo/framework';

/**
 * `display-google-type-datetime`
 * Component description here!
 *
 * @summary
 * @customElement
 * @appliesMixin FBP
 */
class DisplayGoogleTypeDatetime extends FieldNodeAdapter(LitElement) {
  constructor() {
    super();
    /**
     *
     * @type {string}
     * @private
     */
    this._displayValue = '';
  }

  static get styles() {
    // language=CSS
    return css`
      :host {
        display: inline;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        opacity: var(--_ui5_input_disabled_opacity, 0.4);
      }
    `;
  }

  onFnaFieldValueChanged(value) {
    this._formatDisplay(value);
  }

  /**
   * convert date object to String according to Intl DateTimeFormat
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
   * Example output: locale de-CH 15.01.2017, 02:30:15
   * @param {FieldNode} fieldNode
   * @returns {string}
   * @private
   */
  static _convertDateToString(fieldValue) {
    let strDate = '';
    if (fieldValue) {
      const date = new Date(
        fieldValue.year,
        fieldValue.month - 1,
        fieldValue.day,
        fieldValue.hours || 0,
        fieldValue.minutes || 0,
        fieldValue.seconds || 0,
        fieldValue.nanos || 0
      );

      // eslint-disable-next-line eqeqeq
      if (date != 'Invalid Date') {
        strDate = Intl.DateTimeFormat([Env.locale, 'de-CH'], {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }).format(date);
      }
    }

    return strDate;
  }

  _formatDisplay(fieldValue) {
    this._displayValue =
      DisplayGoogleTypeDatetime._convertDateToString(fieldValue);
    this.requestUpdate();
  }

  /**
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    // prettier-ignore
    return html`${this._displayValue}`;
  }
}

window.customElements.define(
  'display-google-type-datetime',
  DisplayGoogleTypeDatetime
);

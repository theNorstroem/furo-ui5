import { LitElement, html, css } from 'lit';

import { Env } from '@furo/framework/src/furo.js';

/**
 * `display-google-protobuf-timestamp`
 * The display-google-protobuf-timestamp component displays a FieldNode of type `google.prtobuf.Timestamp` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `google.protobuf.Timestamp`
 * @element display-google-protobuf-timestamp
 */
class DisplayGoogleProtobufTimestamp extends LitElement {
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

  /**
   * Binds a field node to the component
   * @param {FieldNode} fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;

    if (this._field) {
      this._field.addEventListener('field-value-changed', () => {
        this._formatDisplay();
      });

      this._formatDisplay();
    }
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
      const date = new Date(fieldValue);

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

  _formatDisplay() {
    this._displayValue = DisplayGoogleProtobufTimestamp._convertDateToString(
      this._field._value
    );
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
  'display-google-protobuf-timestamp',
  DisplayGoogleProtobufTimestamp
);

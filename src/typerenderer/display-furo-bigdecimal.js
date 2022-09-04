import { LitElement, html, css } from 'lit';
import { Env } from '@furo/framework/src/furo.js';

/**
 * `display-furo-bigdecimal`
 * The display-furo-bigdecimal component displays a FieldNode of type `furo.BigDecimal` in read only mode.
 *
 * The component uses locale from the environment to display the date value accordingly.
 * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 *
 * @summary display renderer for `furo.BigDecimal`
 * @element display-furo-bigdecimal
 */
export class DisplayFuroBigdecimal extends LitElement {
  constructor() {
    super();
    /**
     *
     * @type {string}
     * @private
     */
    this._displayValue = '';
    this._options = {};
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Currency definition,
       * The currency to use in currency formatting.
       * Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY"
       * for the Chinese RMB.
       *
       */
      currency: { type: String },
    };
  }

  /**
   * Set currency formating
   * @param c
   */
  set currency(c) {
    if (c) {
      this._options = {
        style: 'currency',
        currency: c,
        currencySign: 'accounting',
      };
      // render if data was already set
      if (this._field) {
        this._formatDisplay();
      }
    }
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

      :host([data-size*='size-l']),
      :host([data-size*='size-xl']) {
        padding-top: 0.5rem;
      }

      :host([value-state='Positive']),
      :host([value-state='Success']) {
        color: var(--sapPositiveColor, #107e3e);
      }

      :host([value-state='Informative']),
      :host([value-state='Information']) {
        color: var(--sapInformativeColor, #0a6ed1);
      }

      :host([value-state='Negative']),
      :host([value-state='Error']) {
        color: var(--sapNegativeColor, #b00);
      }

      :host([value-state='Critical']),
      :host([value-state='Warning']) {
        color: var(--sapCrticalColor, #e9730c);
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

  _formatDisplay() {
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

    if (val !== null && !(val.scale === null || val.unscaled_value === null)) {
      const vstr = val.unscaled_value.toString(10);
      if (val.scale === undefined) {
        val.scale = 0;
      }
      if (val.scale < 0) {
        displayValue = parseInt(vstr + ''.padEnd(Math.abs(val.scale), 0), 10);
      } else {
        displayValue = parseFloat(
          `${vstr.substr(0, vstr.length - val.scale)}.${vstr.substr(
            vstr.length - val.scale
          )}`
        );
      }
      if (val !== null) {
        this._displayValue = new Intl.NumberFormat(
          Env.locale,
          this._options
        ).format(displayValue);
      }
    }

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

window.customElements.define('display-furo-bigdecimal', DisplayFuroBigdecimal);

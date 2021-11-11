import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

/**
 * `furo-ui5-bool-icon`
 * Displays a icon/symbol for a boolean value
 *
 * This component uses utf-8 symbols for true and false at the moment.
 *
 * @summary  Displays a icon/symbol for a boolean value
 * @customElement
 * @demo demo-furo-ui5-bool-icon
 * @appliesMixin FBP
 */
class FuroDataBoolIcon extends FBP(LitElement) {
  constructor() {
    super();

    this.symboltrue = '▼';
    this.symbolfalse = '▶';
    this.field = {};
    /**
     * open close symbol
     * @type {string}
     * @private
     */
    this._ocSymbol = this.symbolfalse;
  }

  /**
   * Binds a field node to the component
   * @param {FieldNode} fieldNode
   */
  bindData(fieldNode) {
    this._field = fieldNode;
    if (this._field) {
      this._field.addEventListener('field-value-changed', () => {
        if (this._field._value === true) {
          this._ocSymbol = this.symboltrue;
        } else {
          this._ocSymbol = this.symbolfalse;
        }
        this.requestUpdate();
      });
      if (this._field._value === true) {
        this._ocSymbol = this.symboltrue;
      } else {
        this._ocSymbol = this.symbolfalse;
      }

      this.requestUpdate();
    }
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Defines the symbol for the true state
       */
      symboltrue: { type: String },
      /**
       * Defines the symbol for the false state
       */
      symbolfalse: { type: String },
    };
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: inline-block;
        width: 16px;
      }

      :host([hidden]) {
        display: none;
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html` ${this._ocSymbol} `;
  }
}

window.customElements.define('furo-ui5-bool-icon', FuroDataBoolIcon);

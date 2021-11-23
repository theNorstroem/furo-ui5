import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import '@ui5/webcomponents-icons/dist/navigation-right-arrow.js';

/**
 * `furo-ui5-bool-icon`
 * Displays a icon/symbol for a boolean value
 *
 * This component uses utf-8 symbols for true and false at the moment.
 *
 * ```html
 * <furo-ui5-bool-icon ƒ-bind-data="--FieldNode"></furo-ui5-bool-icon>
 * ```
 *
 * Only `@ui5/webcomponents-icons/dist/navigation-down-arrow.js` and `@ui5/webcomponents-icons/dist/navigation-right-arrow.js` are imported.
 * If you set other icons, please do not forget to import them.
 *
 * @summary  Displays a icon/symbol for a boolean value
 * @element
 * @demo demo-furo-ui5-bool-icon
 * @appliesMixin FBP
 */
class FuroDataBoolIcon extends FBP(LitElement) {
  constructor() {
    super();

    this.symboltrue = 'navigation-down-arrow';
    this.symbolfalse = 'navigation-right-arrow';
    this.field = {};
    /**
     * open close symbol
     * @type {string}
     * @private
     */
    this._ocSymbol = this.symbolfalse;
    /**
     *
     * @type {boolean}
     * @private
     */
    this._state = false;

    this.addEventListener('click', () => {
      this.toggle();
    });
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
          this._state = true;
        } else {
          this._ocSymbol = this.symbolfalse;
          this._state = false;
        }
        this.requestUpdate();
      });
      if (this._field._value === true) {
        this._ocSymbol = this.symboltrue;
        this._state = true;
      } else {
        this._ocSymbol = this.symbolfalse;
        this._state = false;
      }

      this.requestUpdate();
    }
  }

  /**
   * Toggles the icon.
   */
  toggle() {
    if (this._field) {
      this._field._value = !this._field._value;
    } else {
      this._state = !this._state;
      if (this._state) {
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
       * Defines the icon for the true state.
       *
       */
      symboltrue: { type: String },
      /**
       * Defines the icon for the false state.
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
        height: 16px;
      }

      :host([hidden]) {
        display: none;
      }

      ui5-icon {
        width: var(--_ui5-tree-toggle-icon-size);
        height: var(--_ui5-tree-toggle-icon-size);
        color: var(--sapContent_IconColor);
        cursor: pointer;
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    // language=HTML
    return html`<ui5-icon name="${this._ocSymbol}"></ui5-icon>`;
  }
}

window.customElements.define('furo-ui5-bool-icon', FuroDataBoolIcon);

import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents-icons/dist/navigation-down-arrow.js';
import '@ui5/webcomponents-icons/dist/navigation-right-arrow.js';

/**
 * Displays a icon/symbol for a boolean value
 *
 * This component uses the SAP Ui5 icons.
 * https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html
 *
 * ```html
 * <furo-ui5-bool-icon fn-bind-data="--dao(FIELDNODE)"></furo-ui5-bool-icon>
 * ```
 *
 * Only `@ui5/webcomponents-icons/dist/navigation-down-arrow.js` and `@ui5/webcomponents-icons/dist/navigation-right-arrow.js` are imported.
 * If you set other icons, please do not forget to import them.
 *
 * @summary  Displays a icon for a boolean value
 * @element furo-ui5-bool-icon
 * @appliesMixin FBP
 */
export class FuroDataBoolIcon extends FBP(LitElement) {
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

    this.addEventListener('toggle', () => {
      this.toggle();
    });
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();

    if (!this._field) {
      this._ocSymbol = this.symbolfalse;
      this._state = false;
      this.requestUpdate();
    }
  }

  /**
   * Binds a FieldNode
   *
   * Supported types: `bool`
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
       * @type String
       */
      symboltrue: { type: String },
      /**
       * Defines the icon for the false state.
       *
       * @type String
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
    return html` <ui5-icon
      interactive
      name="${this._ocSymbol}"
      at-click="^^toggle"
    ></ui5-icon>`;
  }
}

window.customElements.define('furo-ui5-bool-icon', FuroDataBoolIcon);

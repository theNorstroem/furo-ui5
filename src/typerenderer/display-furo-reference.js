import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line import/no-unresolved
import '@ui5/webcomponents/dist/Link.js';

/**
 * `display-furo-reference`
 * The display-furo-reference component displays a FieldNode of type `furo.Reference` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @fires selected when item was clicked or selected, because click from ui5 does not bubble
 *
 * @summary display renderer for `furo.Reference`
 * @element display-furo-reference
 */
export class DisplayFuroReference extends FBP(LitElement) {
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
   * Template logic
   * @returns {*}
   * @private
   */
  _formatDisplay() {
    if (this._field.display_name._value) {
      this._displayValue = this._field.display_name._value;
    } else if (this._field.id._value) {
      this._displayValue = this._field.id._value;
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
    return html`<ui5-link wrap at-click="-^selected"
      >${this._displayValue}</ui5-link
    >`;
  }
}

window.customElements.define('display-furo-reference', DisplayFuroReference);

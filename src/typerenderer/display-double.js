import { LitElement, html, css } from 'lit';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { Env } from '@furo/framework/src/furo.js';
/**
 * `display-double`
 * The display-double component displays a FieldNode of type `double` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `double`
 * @element display-double
 */
export class DisplayDouble extends FieldNodeAdapter(LitElement) {
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

  onFnaFieldValueChanged(value) {
    this._fieldValue = value;
    this._formatDisplay(value);
  }

  _formatDisplay(fieldValue) {
    if (fieldValue !== null) {
      const displayValue = new Intl.NumberFormat(Env.locale, {}).format(
        fieldValue
      );
      if (displayValue !== 'NaN') {
        this._displayValue = displayValue;
        this.requestUpdate();
      }
    }
  }

  /**
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html` ${this._displayValue} `;
  }
}

window.customElements.define('display-double', DisplayDouble);

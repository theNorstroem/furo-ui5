import { LitElement, html, css } from 'lit';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { nl2br } from '../directives/nl2br.js';

/**
 * `display-string`
 * The display-string component displays a FieldNode of type `string` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `string`
 * @element display-string
 */
export class DisplayString extends FieldNodeAdapter(LitElement) {
  constructor() {
    super();
    this._text = '';
  }

  static get properties() {
    return {
      _text: { type: 'String' },
    };
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
    this._text = value;
  }

  /**
   * render function
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    // prettier-ignore
    return html`${nl2br(this._text)}`;
  }
}

window.customElements.define('display-string', DisplayString);

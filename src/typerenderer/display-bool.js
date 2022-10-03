import { LitElement, html, css } from 'lit';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';

import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents-icons/dist/accept.js';
import '@ui5/webcomponents-icons/dist/border.js';
import '@ui5/webcomponents-icons/dist/less.js';

/**
 * `display-bool`
 * The display-bool component displays a FieldNode of type `bool` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `bool`
 * @element display-bool
 */
export class DisplayBool extends FieldNodeAdapter(LitElement) {
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

      :host([value-state='Positive']) ui5-icon,
      :host([value-state='Success']) ui5-icon {
        color: var(--sapPositiveColor, #107e3e);
      }

      :host([value-state='Informative']) ui5-icon,
      :host([value-state='Information']) ui5-icon {
        color: var(--sapInformativeColor, #0a6ed1);
      }

      :host([value-state='Negative']) ui5-icon,
      :host([value-state='Error']) ui5-icon {
        color: var(--sapNegativeColor, #b00);
      }

      :host([value-state='Critical']) ui5-icon,
      :host([value-state='Warning']) ui5-icon {
        color: var(--sapCrticalColor, #e9730c);
      }
    `;
  }

  onFnaFieldValueChanged(value) {
    this._fieldValue = value;
    this.requestUpdate();
  }

  /**
   * Template logic
   * @returns {*}
   * @private
   */
  _getTemplate() {
    let tmpl = '';
    if (this._fieldValue === null) {
      tmpl = html` <ui5-icon name="less"></ui5-icon> `;
    } else if (!this._fieldValue || this._fieldValue === 'false') {
      tmpl = html` <ui5-icon name="border"></ui5-icon> `;
    } else {
      tmpl = html` <ui5-icon name="accept"></ui5-icon> `;
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

window.customElements.define('display-bool', DisplayBool);

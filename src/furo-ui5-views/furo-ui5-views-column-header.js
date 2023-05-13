import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';

/**
 * `furo-ui5-views-column-header`
 *
 *  Displays a sort direction icon in the table header.
 *
 *  ```html
 * <ui5-table-column
 *               slot="columns"
 *               field="*.nr"
 *               id="nr"
 *               popin-text="${i18n.t('activity_nr')}"
 *               ><furo-ui5-views-column-header><span>${i18n.t('activity_nr')}</span></furo-ui5-views-column-header>
 *               </ui5-table-column>
 * ```
 *
 *
 * @summary Shows a sort direction icon
 * @customElement
 * @appliesMixin FBP
 */
export class FuroUi5ViewsColumnHeader extends FBP(LitElement) {
  constructor() {
    super();

    this._icon = 'sort-ascending';
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      _hidesort: { type: Boolean },
      _icon: { type: String },
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * set the sort indicator
   * @param descending
   */
  showSort(descending) {
    if (descending) {
      this._icon = 'sort-descending';
    } else {
      this._icon = 'sort-ascending';
    }
    this._hidesort = false;
  }

  /**
   * remove the sorting
   */
  clear() {
    this._hidesort = true;
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
        display: block;
      }

      :host([hidden]) {
        display: none;
      }

      furo-horizontal-flex {
        align-items: center;
      }

      ui5-icon {
        margin-left: 0.5rem;
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-horizontal-flex>
        <div>
          <slot></slot>
        </div>
        <ui5-icon ?hidden="${this._hidesort}" name="${this._icon}"></ui5-icon>
      </furo-horizontal-flex>
    `;
  }
}

window.customElements.define(
  'furo-ui5-views-column-header',
  FuroUi5ViewsColumnHeader
);

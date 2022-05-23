import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';

import '@ui5/webcomponents/dist/Title.js';
import '@ui5/webcomponents/dist/BusyIndicator.js';

/**
 * `furo-ui5-section`
 * The object page content according to the SAP Design System Fiori guidelines consists of sections and subsections
 * arranged in a column layout.
 * The furo-ui5-section is basically a layout manager component to structure object pages. Sections can only
 * contain subsections, not content.
 *
 * ```html
 *  <furo-ui5-section heading="STRING">
 *    <furo-ui5-subsection></furo-ui5-subsection>
 *    <furo-ui5-subsection></furo-ui5-subsection>
 *  </furo-ui5-section>
 * ```
 *
 * ```html
 * <furo-ui5-section
 *    fn-bind-data="--dao(*.field_of_type_string)">
 *    <furo-ui5-subsection></furo-ui5-subsection>
 *    <furo-ui5-subsection></furo-ui5-subsection>
 * </furo-ui5-section>
 * ```
 *
 * ## Methods
 * **bindData(fieldNode)**
 * Binds an entity field to the heading. You can use the entity even when no data was received.
 *
 * @slot {FuroUi5SubSection [0..n]} default - defines the content of the section.
 *
 *
 * @summary
 * @customElement
 * @appliesMixin FBP
 */
export class FuroUi5Section extends FBP(FieldNodeAdapter(LitElement)) {
  constructor() {
    super();
    this.heading = '';
  }

  /**
   * Furo flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  static get properties() {
    return {
      /**
       * Heading title of the section
       */
      heading: { type: String, attribute: 'heading' },

      /**
       * Setting this attribute will hide the bottom border
       */
      noborder: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
      }

      :host([hidden]) {
        display: none;
      }

      .section {
        padding: var(--FuroUi5MediaSizeIndentation, 0.625rem 2rem 0 2rem);
      }

      ui5-title {
        padding-bottom: var(--FuroUi5MediaSizeIndentationBottom, 0.625rem);
      }

      hr {
        border-color: var(--sapToolbar_SeparatorColor, #d9d9d9);
        border-style: solid;
      }

      :host([noborder]) hr {
        display: none;
      }
    `;
  }

  /**
   * Overridden onFnaFieldValueChanged
   * @private
   * @param val
   */
  onFnaFieldValueChanged(val) {
    if (this.isFat()) {
      this._tmpFAT = val;
      this.heading = val.value === null ? '' : val.value;
      // set empty value when label empty was given
      if (this._tmpFAT.labels && this._tmpFAT.labels.empty) {
        this.heading = '';
      }
    } else {
      this.heading = val === null ? '' : val;
    }
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <div class="section">
        ${this.heading.length
          ? html` <ui5-title level="H4">${this.heading}</ui5-title> `
          : html``}

        <slot></slot>
      </div>

      <hr />
    `;
  }
}

window.customElements.define('furo-ui5-section', FuroUi5Section);

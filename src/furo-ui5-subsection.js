import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';
import '@ui5/webcomponents/dist/Link.js';
import '@ui5/webcomponents-fiori/dist/Bar.js';

/**
 * `furo-ui5-subsection`
 * The furo-ui5-subsection component is a containers for actual content. It is envisaged that this component will be
 * used within a furo-ui5-section
 * Subsections have a progressive disclosure mechanism to show and hide content
 *
 * ```html
 *  <furo-ui5-section heading="STRING">
 *    <furo-ui5-subsection heading="Subsection Title">
 *      <furo-horizontal-flex slot="action">...</furo-horizontal-flex>
 *      <my-content></my-content>
 *      <more-content slot="more"></more-content>
 *    </furo-ui5-subsection>
 *  </furo-ui5-section>
 * ```
 *
 *
 *
 * @summary
 * @customElement
 * @appliesMixin FBP
 */
class FuroUi5Subsection extends FBP(LitElement) {
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
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none;
      }

      ui5-bar {
        background-color: transparent;
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <ui5-bar design="Subheader">
        ${this.heading.length
          ? html`
              <ui5-title level="H4" slot="startContent"
                >${this.heading}</ui5-title
              >
            `
          : html``}
        <div slot="endContent"><slot name="action"></slot></div>
      </ui5-bar>

      <slot></slot>
      <furo-horizontal-flex>
        <furo-empty-spacer flex></furo-empty-spacer>
        <ui5-link>Show More</ui5-link>
      </furo-horizontal-flex>
      <slot name="more"></slot>
    `;
  }
}

window.customElements.define('furo-ui5-subsection', FuroUi5Subsection);

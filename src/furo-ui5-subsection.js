import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';
import '@furo/layout/src/furo-horizontal-flex.js';
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
export class FuroUi5Subsection extends FBP(LitElement) {
  constructor() {
    super();
    this.heading = '';
    this.showMoreDataText = 'Show More';
    this.showLessDataText = 'Show Less';
    this.collapsed = false;
    this.hasMoreContent = false;
  }

  /**
   * Furo flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();

    this._FBPAddWireHook('--collapserClicked', () => {
      // toggle the read more content section
      this.collapsed = !this.collapsed;
    });
  }

  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();

    if (this.querySelector('div[slot=more]')) {
      if (this.querySelector('div[slot=more]').childElementCount) {
        this.hasMoreContent = true;
      }
    } else {
      this.hasMoreContent = false;
    }
  }

  static get properties() {
    return {
      /**
       * Heading title of the section
       */
      heading: { type: String, attribute: 'heading' },
      /**
       * Collapsed state of the `read more` section
       */
      collapsed: { type: Boolean, reflect: true },
      /**
       * Defines the text that will be displayed for `show more`
       */
      showMoreDataText: { type: String, attribute: 'show-more-data-text' },
      /**
       * Defines the text that will be displayed for `show less`
       */
      showLessDataText: { type: String, attribute: 'show-less-data-text' },
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

      :host slot[name='more'] {
        display: none;
        padding-top: 1rem;
      }

      :host([collapsed]) slot[name='more'] {
        display: block;
      }

      :host([collapsed]) .less {
        display: flex;
        padding-top: 1rem;
      }

      .less {
        display: none;
      }

      :host([collapsed]) .more {
        display: none;
      }

      ui5-bar {
        background-color: transparent;
      }

      furo-horizontal-flex.more {
        padding-top: var(--spacing-s, 1rem);
      }
    `;
  }

  /**
   * toggles the collapse state
   */
  toggleCollapse() {
    this._FBPTriggerWire('--collapserClicked', null);
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
      <furo-horizontal-flex class="more">
        <furo-empty-spacer flex></furo-empty-spacer>
        <ui5-link @-click="--collapserClicked" ?disabled=${!this.hasMoreContent}
          >${this.showMoreDataText}</ui5-link
        >
      </furo-horizontal-flex>

      <slot name="more"></slot>

      <furo-horizontal-flex class="less">
        <furo-empty-spacer flex></furo-empty-spacer>
        <ui5-link @-click="--collapserClicked"
          >${this.showLessDataText}</ui5-link
        >
      </furo-horizontal-flex>
    `;
  }
}

window.customElements.define('furo-ui5-subsection', FuroUi5Subsection);

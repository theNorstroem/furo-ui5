import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter';
import '@furo/layout/src/furo-horizontal-flex.js';
import '@ui5/webcomponents/dist/Link.js';

/**
 * `furo-ui5-subsection`
 * The furo-ui5-subsection component is a containers for actual content. It is envisaged that this component will be
 * used within a furo-ui5-section
 * Subsections have a progressive disclosure mechanism to show and hide content
 *
 * https://experience.sap.com/fiori-design-web/object-page/#content-area
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
 * ## Methods
 * **bindData(fieldNode)**
 * Binds an entity field to the heading. You can use the entity even when no data was received.
 *
 * @slot {HTMLElement [0..n]} default - defines the content of the subsection.
 * @slot {HTMLElement [0..n]} action - defines the heading bar of the subsection.
 * @slot {HTMLElement [0..n]} more - defines the additional content in the `show more` section.
 *
 * @summary
 * @customElement
 * @appliesMixin FBP
 */
export class FuroUi5Subsection extends FBP(FieldNodeAdapter(LitElement)) {
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

    if (this.querySelector('*[slot=more]')) {
      if (this.querySelector('*[slot=more]').childElementCount) {
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

      furo-horizontal-flex.heading {
        padding-bottom: var(--spacing-s, 0.625rem);
      }

      furo-horizontal-flex.more {
        padding-top: var(--spacing-s, 0.625rem);
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
      <furo-horizontal-flex class="heading" space>
        ${this.heading.length
          ? html` <ui5-title flex level="H4">${this.heading}</ui5-title> `
          : html``}
        <furo-empty-spacer flex></furo-empty-spacer>
        <div><slot name="action"></slot></div>
      </furo-horizontal-flex>

      <slot></slot>
      <furo-horizontal-flex class="more">
        <furo-empty-spacer flex></furo-empty-spacer>
        <ui5-link at-click="--collapserClicked" ?hidden=${!this.hasMoreContent}
          >${this.showMoreDataText}</ui5-link
        >
      </furo-horizontal-flex>

      <slot name="more"></slot>

      <furo-horizontal-flex class="less">
        <furo-empty-spacer flex></furo-empty-spacer>
        <ui5-link at-click="--collapserClicked"
          >${this.showLessDataText}</ui5-link
        >
      </furo-horizontal-flex>
    `;
  }
}

window.customElements.define('furo-ui5-subsection', FuroUi5Subsection);

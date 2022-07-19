import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import '@ui5/webcomponents-icons/dist/message-warning.js';
import '@ui5/webcomponents-icons/dist/message-success.js';
import '@ui5/webcomponents-icons/dist/message-information.js';
import '@ui5/webcomponents-icons/dist/message-error.js';
import '@ui5/webcomponents-icons/dist/navigation-left-arrow.js';
import '@ui5/webcomponents-icons/dist/navigation-right-arrow.js';
import '@ui5/webcomponents-icons/dist/approvals.js';

import '@ui5/webcomponents/dist/Link.js';
import '@ui5/webcomponents/dist/SegmentedButton.js';
import '@ui5/webcomponents/dist/Badge.js';
import '@furo/layout/src/furo-horizontal-flex.js';
import './furo-ui5-checkbox-input.js';
import './furo-ui5-markdown.js';
import './subcomponents/furo-ui5-message-container-item.js';
import { NodeEvent } from '@furo/framework/src/EventTreeNode';

/**
 * `furo-ui5-message-container-display`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroUi5MessageContainerDisplay extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      hidden: { type: Boolean, reflect: true },
    };
  }

  /**
   * bindData bind a furo.messagecontainer field node
   * @public
   * @param mcfieldnode
   */
  bindData(mcfieldnode) {
    this.rootNode = mcfieldnode.__parentNode;
    // eslint-disable-next-line
    mcfieldnode.details.clearListOnNewData = true;
    mcfieldnode.addEventListener('data-injected', () => {
      this._updateDisplay(mcfieldnode.details);
    });
    this._FBPTriggerWire('|--bindData', mcfieldnode);
  }

  /**
   *
   * @param details
   * @private
   */
  _updateDisplay(details) {
    if (details.repeats.length > 0) {
      this.hidden = false;
      this.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    if (details.repeats.length === 0) {
      this.hidden = true;
    }
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()

    // dispatch a focus event for the field
    this.addEventListener('field-focus-requested', e => {
      const field = e.detail.field._value;

      const target = this.rootNode._getPath(field);
      target.dispatchNodeEvent(
        new NodeEvent('this-focus-requested', e.detail, false)
      );
    });
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
        --furo-form-layouter-row-gap: 0.25rem;
        font-family: '72override', var(--sapFontFamily);
        font-size: var(--sapFontSize);
        margin-bottom: 1rem;
      }

      :host([hidden]) {
        display: none;
      }

      ui5-segmented-button-item {
        height: 2rem;
      }

      *:not([pressed]).Negative {
        color: var(--sapButton_Reject_TextColor);
      }

      *:not([pressed]).Attention {
        color: var(--sapButton_Attention_BorderColor);
      }

      *:not([pressed]).Positive {
        color: var(--sapButton_Accept_TextColor);
      }

      .head {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        box-sizing: border-box;
        font-size: var(--sapFontHeader4Size);
        font-family: '72override', var(--sapFontFamily);
        color: var(--sapGroup_TitleTextColor);
        height: 3rem;
        line-height: 3rem;
        padding: 0px 1rem;
        background-color: var(--sapGroup_TitleBackground);
        border-bottom: 1px solid var(--sapGroup_TitleBorderColor);
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
      <div class="head">
        <ui5-segmented-button>
          <ui5-segmented-button-item pressed>All</ui5-segmented-button-item>
          <ui5-segmented-button-item icon="message-error" class="Negative"
            >0</ui5-segmented-button-item
          >
          <ui5-segmented-button-item icon="message-warning" class="Attention"
            >2</ui5-segmented-button-item
          >
          <ui5-segmented-button-item icon="message-success" class="Positive"
            >0</ui5-segmented-button-item
          >
          <ui5-segmented-button-item icon="message-information"
            >1</ui5-segmented-button-item
          >
        </ui5-segmented-button>
      </div>

      <furo-data-flow-repeat
        fn-bind-data="|--bindData(*.details)"
        indentity-path="id"
      >
        <template>
          <furo-ui5-message-container-item
            fn-bind-data="--init"
          ></furo-ui5-message-container-item>
        </template>
      </furo-data-flow-repeat>
    `;
  }
}

window.customElements.define(
  'furo-ui5-message-container-display',
  FuroUi5MessageContainerDisplay
);

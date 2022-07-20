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
    this._FBPTriggerWire('|--newData', null);

    if (details.repeats.length > 0) {
      this.hidden = false;

      // resolve the target fields
      details.repeats.forEach(message => {
        if (message.fields) {
          message.fields.repeats.forEach(item => {
            const target = this.rootNode._getPath(item.field._value);
            // eslint-disable-next-line
            item._targetlabel = target._meta.label;
          });
        }
      });

      // count items of each type
      let errs = 0;
      let warn = 0;
      let success = 0;
      let info = 0;
      let confirm = 0;
      details.repeats.forEach(item => {
        const type = item['@type']._value.replace(/.*\//, '');
        switch (type) {
          case 'furo.ErrorMessage':
            errs += item.fields.repeats.length;
            break;

          case 'furo.WarningMessage':
            warn += item.fields.repeats.length;
            break;

          case 'furo.SuccessMessage':
            success += item.fields.repeats.length;
            break;

          case 'furo.InformationMessage':
            info += item.fields.repeats.length;
            break;

          case 'furo.ConfirmationMessage':
            confirm += 1;
            break;
          default:
        }
      });

      this._FBPTriggerWire('|--numOfErrs', errs);
      this._FBPTriggerWire('|--numOfWarnings', warn);
      this._FBPTriggerWire('|--numOfSuccess', success);
      this._FBPTriggerWire('|--numOfInformation', info);
      this._FBPTriggerWire('|--numOfConfirmation', confirm);

      // scroll to top of this element
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
        <ui5-segmented-button at-click="--filterClicked(*.target.id)">
          <ui5-segmented-button-item id="all" pressed fn-click="|--newData"
            >All
          </ui5-segmented-button-item>

          <ui5-segmented-button-item
            id="confirmation"
            icon="approvals"
            set-inner-text="|--numOfConfirmation"
            >0</ui5-segmented-button-item
          >

          <ui5-segmented-button-item
            id="error"
            icon="message-error"
            class="Negative"
            set-inner-text="|--numOfErrs"
            >0</ui5-segmented-button-item
          >

          <ui5-segmented-button-item
            id="warning"
            icon="message-warning"
            class="Attention"
            set-inner-text="|--numOfWarnings"
            >0</ui5-segmented-button-item
          >

          <ui5-segmented-button-item
            id="success"
            icon="message-success"
            class="Positive"
            set-inner-text="|--numOfSuccess"
            >0</ui5-segmented-button-item
          >

          <ui5-segmented-button-item
            id="information"
            icon="message-information"
            set-inner-text="|--numOfInformation"
            >0</ui5-segmented-button-item
          >
        </ui5-segmented-button>
      </div>

      <furo-data-flow-repeat
        fn-bind-data="|--bindData(*.details)"
        fn-trigger-all="--filterClicked"
        indentity-path="id"
      >
        <template>
          <furo-ui5-message-container-item
            fn-bind-data="--init"
            fn-filter="--trigger"
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

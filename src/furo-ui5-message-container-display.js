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
 *  Renders the contenst of a `furo.MessageContainer` or `google.rpc.Status` message.
 *
 * @fires {Object} message-item-clicked - fired when a
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
      /**
       * @private
       */
      hidden: { type: Boolean, reflect: true },
      /**
       * Removes the filter tabs on top.
       * @type Boolean
       */
      noFilter: { type: Boolean, attribute: 'no-filter' },
      /**
       * helper var to hide the filter head section
       * @private
       */
      _hideFilterSection: { type: Boolean },

      /**
       * Disable the scrolling to the element, when the container receives data.
       * @type Boolean
       */
      disableScrolling: { type: Boolean, attribute: 'disable-scrolling' },
    };
  }

  /**
   *  Bind your "root node" for the messages.
   *
   * The state updates from the injected raw messagecontainer are applied to the fields of the root node.
   *
   * @public
   * @param fieldNode {FieldNode} Any custom fieldnode
   */
  bindRootNode(fieldNode) {
    this.rootNode = fieldNode;
  }

  /**
   * bindData bind a furo.messagecontainer field node
   * @public
   * @param mcfieldnode
   */
  bindMessageContainer(mcfieldnode) {
    mcfieldnode.addEventListener('new-mc-data-injected', () => {
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
    this._allButton.pressed = true;

    if (details.repeats.length > 0) {
      // resolve the target fields
      details.repeats.forEach(message => {
        if (message.fields) {
          message.fields.repeats.forEach(item => {
            // eslint-disable-next-line
            item._targetlabel = '';
            if (this.rootNode) {
              const target = this.rootNode._getPath(item.field._value);
              // this is a fallback, if the field was not found
              // eslint-disable-next-line
              item._targetlabel = item.field._value;
              if (target._meta) {
                // eslint-disable-next-line
                item._targetlabel = target._meta.label;
              }
            }
          });
        }
        if (message.field_violations) {
          message.field_violations.repeats.forEach(item => {
            // eslint-disable-next-line
            item._targetlabel = '';
            if (this.rootNode) {
              const target = this.rootNode._getPath(item.field._value);
              // this is a fallback, if the field was not found
              // eslint-disable-next-line
              item._targetlabel = item.field._value;
              if (target._meta) {
                // eslint-disable-next-line
                item._targetlabel = target._meta.label;
              }
            }
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
          case 'google.rpc.BadRequest':
            errs += Math.max(item.field_violations.repeats.length, 1);
            break;

          case 'furo.ErrorMessage':
            if (item.message._value !== '') {
              errs += 1;
            }
            errs += item.fields.repeats.length;
            break;

          case 'furo.WarningMessage':
            if (item.message._value !== '') {
              warn += 1;
            }
            warn += item.fields.repeats.length;
            break;

          case 'furo.SuccessMessage':
            if (item.message._value !== '') {
              success += 1;
            }
            success += item.fields.repeats.length;
            break;

          case 'furo.InformationMessage':
            if (item.message._value !== '') {
              info += 1;
            }
            info += item.fields.repeats.length;
            break;

          case 'google.rpc.LocalizedMessage':
            errs += 1;
            break;

          case 'furo.ConfirmationMessage':
            confirm += 1;
            break;
          default:
        }
      });

      this._FBPTriggerWire('|--numOfConfirmation', confirm);
      this._FBPTriggerWire('|--numOfErrs', errs);
      this._FBPTriggerWire('|--numOfWarnings', warn);
      this._FBPTriggerWire('|--numOfSuccess', success);
      this._FBPTriggerWire('|--numOfInformation', info);
      /**
       * If ther is more than one kind of info, show the filter
       * @type {number}
       */
      let filterOptions = 0;
      if (confirm === 0) {
        this._confirmationButton.remove();
      } else {
        this._segmentedButton.appendChild(this._confirmationButton);
        filterOptions += 1;
      }
      if (errs === 0) {
        this._errorButton.remove();
      } else {
        this._segmentedButton.appendChild(this._errorButton);
        filterOptions += 1;
      }
      if (warn === 0) {
        this._warningButton.remove();
      } else {
        this._segmentedButton.appendChild(this._warningButton);
        filterOptions += 1;
      }

      if (success === 0) {
        this._successButton.remove();
      } else {
        this._segmentedButton.appendChild(this._successButton);
        filterOptions += 1;
      }

      if (info === 0) {
        this._informationButton.remove();
      } else {
        this._segmentedButton.appendChild(this._informationButton);
        filterOptions += 1;
      }

      if (filterOptions > 1 && !this.noFilter) {
        this._hideFilterSection = false;
      } else {
        this._hideFilterSection = true;
      }

      this.hidden = false;
      if (!this.disableScrolling) {
        // scroll to top of this element
        this.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }

    if (details.repeats.length === 0) {
      this.hidden = true;
    }
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    this.hidden = true;
    super._FBPReady();
    // this._FBPTraceWires()

    this._segmentedButton = this.shadowRoot.querySelector(
      'ui5-segmented-button'
    );

    this._allButton = this.shadowRoot.getElementById('all');
    this._confirmationButton = this.shadowRoot.getElementById('confirmation');
    this._warningButton = this.shadowRoot.getElementById('warning');
    this._errorButton = this.shadowRoot.getElementById('error');
    this._successButton = this.shadowRoot.getElementById('success');
    this._informationButton = this.shadowRoot.getElementById('information');

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
        box-sizing: border-box;
        font-size: var(--sapFontHeader4Size);
        font-family: '72override', var(--sapFontFamily);
        color: var(--sapGroup_TitleTextColor);
        height: 3rem;
        line-height: 3rem;
        background-color: var(--sapGroup_TitleBackground);
        border-bottom: 1px solid var(--sapGroup_TitleBorderColor);
      }

      .head[hidden] {
        display: none;
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
      <div class="head" ?hidden="${this._hideFilterSection}">
        <ui5-segmented-button at-click="--filterClicked(*.target.id)">
          <ui5-segmented-button-item id="all" pressed
            >All
          </ui5-segmented-button-item>

          <ui5-segmented-button-item
            id="confirmation"
            icon="approvals"
            set-inner-text="|--numOfConfirmation"
            >0
          </ui5-segmented-button-item>

          <ui5-segmented-button-item
            id="error"
            icon="error"
            class="Negative"
            set-inner-text="|--numOfErrs"
            >0
          </ui5-segmented-button-item>

          <ui5-segmented-button-item
            id="warning"
            icon="alert"
            class="Attention"
            set-inner-text="|--numOfWarnings"
            >0
          </ui5-segmented-button-item>

          <ui5-segmented-button-item
            id="success"
            icon="sys-enter-2"
            class="Positive"
            set-inner-text="|--numOfSuccess"
            >0
          </ui5-segmented-button-item>

          <ui5-segmented-button-item
            id="information"
            icon="information"
            set-inner-text="|--numOfInformation"
            >0
          </ui5-segmented-button-item>
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

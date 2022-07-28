import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';
import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';

import './furo-ui5-form-field-container.js';
import './furo-ui5-multi-input.js';

/**
 * The furo-ui5-multi-input-labeled is a composition to easily use a complete input field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * ```html
 * <furo-ui5-multi-input-labeled fn-bind-data="--dao(FIELDNODE)"></furo-ui5-multi-input-labeled>
 * ```
 *
 * @fires furo-value-changed - Fires the field value when it changes.
 *
 * @summary labeled textarea field
 * @element
 * @demo demo-furo-ui5-multi-input-labeled Basic Usage
 * @appliesMixin FBP
 */
export class FuroUi5MultiInputLabeled extends FBP(LitElement) {
  constructor() {
    super();
    this.label = '';
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  /**
   * Focuses the underlying ui5 input element
   * @param {Object} options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
   */
  focus(options) {
    this._FBPTriggerWire('|--focus', options);
  }

  static get properties() {
    return {
      /**
       * the label for the data-multi-input
       *
       * @type String
       */
      label: { type: String },
      /**
       * A Boolean attribute which, if present, means this field is required and marked with *.
       *
       * @type Boolean
       */
      required: {
        type: Boolean,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       *
       * @type Boolean
       */
      disabled: {
        type: Boolean,
      },
      /**
       * A Boolean attribute which, if present, means this field is readonly.
       *
       * @type Boolean
       */
      readonly: {
        type: Boolean,
      },
      /**
       * Determines whether a value help icon will be should in the end of the input.
       *
       * Pressing the icon will fire `value-help-trigger` event.
       *
       * @type Boolean
       */
      showValueHelpIcon: {
        type: Boolean,
        attribute: 'show-value-help-icon',
      },
    };
  }

  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
      }
      :host([hidden]) {
        display: none;
      }
    `;
  }

  /**
   * Orchestrates the data field connection to the inside
   * Supported types: repeated string
   * @param {FieldNode} fieldNode
   */
  bindData(fieldNode) {
    Ui5LabelDataBinding.bindData(this, fieldNode);
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-ui5-form-field-container>
        <ui5-label
          label
          slot="label"
          for="Input"
          show-colon
          ?required=${this.required}
          >${this.label}</ui5-label
        >
        <furo-ui5-multi-input
          content
          id="Input"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?show-value-help-icon=${this.showValueHelpIcon}
          fn-bind-data="--data"
          fn-focus="|--focus"
        ></furo-ui5-multi-input>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define(
  'furo-ui5-multi-input-labeled',
  FuroUi5MultiInputLabeled
);

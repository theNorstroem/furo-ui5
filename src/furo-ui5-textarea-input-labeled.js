import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';
import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';

import './furo-ui5-form-field-container.js';
import './furo-ui5-textarea-input.js';

/**
 * `furo-ui5-textarea-input-labeled`
 * The furo-ui5-textarea-input-labeled is a composition to easily use a complete input field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * @summary labeled textarea field
 * @element
 * @demo demo-furo-ui5-textarea-input-labeled Basic Usage
 * @appliesMixin FBP
 */
export class FuroUi5TextareaInputLabeled extends FBP(LitElement) {
  /**
   * Fired when the input value changed.
   * the event detail is the value of the input field
   *  * @fires {String} furo-value-changed - Fires the field value when it changes.
   */

  constructor() {
    super();
    this.label = '';
    this.rows = 0;
    this.growingMaxLines = 0;
  }

  /**
   * Focuses the underlying ui5 input element
   * @param {Object} options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
   */
  focus(options) {
    this._FBPTriggerWire('--focus', options);
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  static get properties() {
    return {
      /**
       * the label for the data-textarea-input
       *
       * @type String
       */
      label: { type: String },
      /**
       * This is only used to forward the state to the form-field-container
       */
      full: { type: Boolean },
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
       * Determines whether the characters exceeding the maximum allowed character count are visible in the furo-ui5-textarea-input.
       *
       * If set to false, the user is not allowed to enter more characters than what is set in the maxlength property.
       * If set to true the characters exceeding the maxlength value are selected on paste and the counter below
       * the furo-ui5-textarea-input displays their number.
       *
       * @type Boolean
       */
      showExceededText: {
        type: Boolean,
        attribute: 'show-exceeded-text',
      },
      /**
       * Defines the number of visible text lines for the component.
       *
       * @type Number
       */
      rows: {
        type: Number,
      },
      /**
       * Defines the maximum number of lines that the Web Component can grow.
       *
       * @type Number
       */
      growingMaxLines: {
        type: Number,
        attribute: 'growing-max-lines',
      },
      /**
       * Enables the furo-ui5-textarea to automatically grow and shrink dynamically with its content.
       *
       * @type Boolean
       */
      growing: {
        type: Boolean,
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
      <furo-ui5-form-field-container ?full="${this.full}">
        <ui5-label
          label
          slot="label"
          for="Input"
          show-colon
          ?required=${this.required}
          >${this.label}</ui5-label
        >
        <furo-ui5-textarea-input
          content
          id="Input"
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
          ?show-exceeded-text="${this.showExceededText}"
          ?growing="${this.growing}"
          .rows="${this.rows}"
          .growing-max-lines="${this.growingMaxLines}"
          fn-bind-data="--data"
          fn-focus="--focus"
        ></furo-ui5-textarea-input>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define(
  'furo-ui5-textarea-input-labeled',
  FuroUi5TextareaInputLabeled
);

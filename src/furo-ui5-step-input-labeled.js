import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';
import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';

import './furo-ui5-form-field-container.js';
import './furo-ui5-step-input.js';

/**
 * The furo-ui5-step-input-labeled is a composition to easily use a complete input field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * ```html
 * <furo-ui5-step-input fn-bind-data="--dao(FIELDNODE)"></furo-ui5-step-input>
 * ```
 *
 * @fires {Step} furo-value-changed - Fires the field value when it changes.
 *
 * @summary labeled input field
 * @element furo-ui5-step-input-labeled
 * @demo demo-furo-ui5-step-input-labeled Basic Usage
 * @appliesMixin FBP
 */
export class FuroUi5StepInputLabeled extends FBP(LitElement) {
  constructor() {
    super();
    this.label = '';
    this.icon = '';
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
       * the label for the data-step-input
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
       * A Boolean attribute which, if present, means this field cannot be edited by the user and
       * appears in disabled state.
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
       * icon on the right
       *
       * @type String
       */
      icon: {
        type: String,
      },
      /**
       * Step size
       *
       * @type Number
       */
      step: {
        type: Number,
      },
      /**
       * Minimal value
       *
       * @type Number
       */
      min: {
        type: Number,
      },
      /**
       * Maximal value
       *
       * @type Number
       */
      max: {
        type: Number,
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
   * Supported types:
   * double, float, int32, uint32, sint32, fixed32, sfixed32, int64, uint64, sint64, fixed64, sfixed64
   * google.protobuf.DoubleValue, google.protobuf.FloatValue, google.protobuf.Int32Value, etc.
   * furo.fat.Doube, furo.fat.Float, furo.fat.Int32, etc.
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
        <furo-ui5-step-input
          content
          id="Input"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          icon="${this.icon}"
          step="${this.step}"
          min="${this.min}"
          max="${this.max}"
          fn-bind-data="--data"
          fn-focus="--focus"
        >
        </furo-ui5-step-input>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define(
  'furo-ui5-step-input-labeled',
  FuroUi5StepInputLabeled
);

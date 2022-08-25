import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';
import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';
import '@ui5/webcomponents/dist/Label.js';

import './furo-ui5-date-picker.js';
import './furo-ui5-form-field-container.js';

/**
 * The furo-ui5-date-picker-labeled is a composition to easily use a complete input field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * ```html
 * <furo-ui5-date-picker-labeled fn-bind-data="--dao(FIELDNODE)"></furo-ui5-date-picker-labeled>
 * ```
 *
 * @fires {String} furo-value-changed - Fires the field value when it changes in ISO 8601 format.
 *
 * @summary labeled input field
 * @element furo-ui5-date-picker-labeled
 * @demo demo-furo-ui5-date-picker-labeled Basic Usage
 * @appliesMixin FBP
 */
export class FuroUi5DatePickerLabeled extends FBP(LitElement) {
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

  /**
   *
   * @return {{readonly: {type: BooleanConstructor}, disabled: {reflect: boolean, attribute: string, type: BooleanConstructor}, label: {type: StringConstructor}, required: {type: BooleanConstructor}}}
   */
  static get properties() {
    return {
      /**
       * the label for the data-date-picker
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
      required: { type: Boolean },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       *
       * @type Boolean
       */
      disabled: {
        type: Boolean,
        reflect: true,
        attribute: 'disabled',
      },
      /**
       * A Boolean attribute which, if present, means this field is readonly.
       *
       * @type Boolean
       */
      readonly: {
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
        <furo-ui5-date-picker
          content
          id="Input"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          fn-bind-data="--data"
          fn-focus="|--focus"
        ></furo-ui5-date-picker>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define(
  'furo-ui5-date-picker-labeled',
  FuroUi5DatePickerLabeled
);

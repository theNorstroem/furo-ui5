import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';
import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';
import '@ui5/webcomponents/dist/Label.js';

import './furo-ui5-date-time-picker.js';
import './furo-ui5-form-field-container.js';

/**
 * The furo-ui5-date-time-picker-labeled is a composition to easily use a complete input field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * ```html
 * <furo-ui5-date-time-picker-labeled ƒ-bind-data="--dao(FIELDNODE)"></furo-ui5-date-time-picker-labeled>
 * ```
 *
 * @fires {String} value-changed - Fires the field value when it changes in ISO 8601 format.
 *
 * @summary labeled input field
 * @element furo-ui5-date-time-picker-labeled
 * @demo demo-furo-ui5-date-time-picker-labeled Basic Usage
 * @appliesMixin FBP
 */
export class FuroUi5DateTimePickerLabeled extends FBP(LitElement) {
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

  static get properties() {
    return {
      /**
       * the label for the data-date-picker
       */
      label: { type: String },
      /**
       * A Boolean attribute which, if present, means this field is required and marked with *.
       */
      required: {
        type: Boolean,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user.
       */
      disabled: {
        type: Boolean,
      },
      /**
       * A Boolean attribute which, if present, means this field is readonly.
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
   * Binds a FieldNode to the component.
   *
   * Supported types: `string`, `google.protobuf.Timestamp`, `int32`, `int64`
   * @param {FieldNode} fieldNode of type : `string`, `google.protobuf.Timestamp`, `int32`, `int64`
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
        <furo-ui5-date-time-picker
          content
          id="Input"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ƒ-bind-data="--data"
        ></furo-ui5-date-time-picker>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define(
  'furo-ui5-date-time-picker-labeled',
  FuroUi5DateTimePickerLabeled
);

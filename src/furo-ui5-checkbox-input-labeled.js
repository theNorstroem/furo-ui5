import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';

import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';

import './furo-ui5-form-field-container.js';
import './furo-ui5-checkbox-input.js';

/**
 * The furo-ui5-checkbox-input-labeled is a composition to easily use a complete input field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * ```html
 * <furo-ui5-checkbox-input-labeled fn-bind-data="--dao(FIELDNODE)"></furo-ui5-checkbox-labeled>
 * ```
 *
 * @summary labeled input field
 * @element
 * @demo demo-furo-ui5-checkbox-input-labeled Basic Usage
 * @appliesMixin FBP
 */
export class FuroUi5CheckboxInputLabeled extends FBP(LitElement) {
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
       * the label for the data-checkbox-input
       *
       * @type String
       */
      label: { type: String },
      /**
       * This is only used to forward the state to the form-field-container
       */
      full: { type: Boolean },

      /**
       * the placeholder is the additional information beside the label. it will be showed on the right side of the checkbox.
       *
       * @type String
       */
      placeholder: { type: String },

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
   * Supported types: `bool`, `google.protobuf.BoolValue`, `furo.fat.Bool`
   *
   * @param {FieldNode} fieldNode - Supported types: `bool`, `google.protobuf.BoolValue`, `furo.fat.Bool`
   */
  bindData(fieldNode) {
    Ui5LabelDataBinding.bindData(this, fieldNode);

    fieldNode.addEventListener('this-metas-changed', () => {
      this._FBPTriggerWire('--placeholder', fieldNode._meta.placeholder || '');
    });

    this._FBPTriggerWire(
      '--placeholder',
      this.placeholder || fieldNode._meta.placeholder || ''
    );
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
        <furo-ui5-checkbox-input
          content
          left
          id="Input"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          set-text="--placeholder"
          fn-bind-data="--data"
          fn-focus="|--focus"
        ></furo-ui5-checkbox-input>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define(
  'furo-ui5-checkbox-input-labeled',
  FuroUi5CheckboxInputLabeled
);

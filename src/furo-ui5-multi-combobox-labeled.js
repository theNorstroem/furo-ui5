import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';
import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';

import './furo-ui5-form-field-container.js';
import './furo-ui5-multi-combobox.js';

/**
 * `furo-ui5-multi-combobox-labeled`
 * The furo-ui5-multi-combobox-labeled is a composition to easily use a complete data multi-combobox with label according
 * to the design specification of SAP Fiori Design System.
 *
 * @slot {HTMLElement} valueStateMessage - defines the value state message that will be displayed as pop up under the input element.
 *
 * @fires {String} furo-value-changed - Fires the field value when it changes.
 *
 * @summary labeled multi-combobox
 * @element furo-ui5-multi-combobox-labeled
 * @appliesMixin FBP
 */
export class FuroUi5MultiComboboxLabeled extends FBP(LitElement) {
  constructor() {
    super();
    this.label = '';
    this.idFieldPath = 'id';
    this.valueFieldPath = 'id';
    this.displayFieldPath = 'display_name';
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
       * the label for the data-number-input
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
       * Defines the field path that is used from the injected RepeaterNode to identify the option items.
       * Point-separated path to the field
       * E.g. data.partner.ulid
       *
       * @type String
       */
      idFieldPath: {
        type: String,
        attribute: 'id-field-path',
      },
      /**
       * Defines the field path that is used from the injected RepeaterNode to display the option items.
       * Point-separated path to the field
       * E.g. data.partner.display_name
       *
       * @type String
       */
      displayFieldPath: {
        type: String,
        attribute: 'display-field-path',
      },
      /**
       * Defines the field path that is used to update the bound component if the user has selected an option.
       * Point-separated path to the field
       * Must be set if a data binding is specified.
       *
       * @type String
       */
      valueFieldPath: {
        type: String,
        attribute: 'value-field-path',
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

      .hidden {
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
   * Binds a repeaterNode to the furo-ui5-multi-combobox component
   * @param repeaterNode
   */
  bindOptions(repeaterNode) {
    this._FBPTriggerWire('--options', repeaterNode);
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
        <furo-ui5-multi-combobox
          content
          id="Input"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          id-field-path=${this.idFieldPath}
          display-field-path=${this.displayFieldPath}
          value-field-path=${this.valueFieldPath}
          fn-bind-data="--data"
          fn-bind-options="--options"
          fn-focus="--focus"
        >
        </furo-ui5-multi-combobox>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define(
  'furo-ui5-multi-combobox-labeled',
  FuroUi5MultiComboboxLabeled
);

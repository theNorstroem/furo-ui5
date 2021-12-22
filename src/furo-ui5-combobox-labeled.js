import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';
import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';

import './furo-ui5-form-field-container.js';
import './furo-ui5-combobox.js';

/**
 * `furo-ui5-combobox-labeled`
 * The furo-ui5-combobox-labeled is a composition to easily use a complete data combobox with label according
 * to the design specification of SAP Fiori Design System.
 *
 * @slot {HTMLElement} valueStateMessage - defines the value state message that will be displayed as pop up under the input element.
 *
 * @fires {String} value-changed - Fires the field value when it changes.
 *
 * @summary labeled combobox
 * @element furo-ui5-combobox-labeled
 * @demo demo-furo-ui5-combobox-labeled Basic Usage
 * @appliesMixin FBP
 */
export class FuroUi5ComboboxLabeled extends FBP(LitElement) {
  constructor() {
    super();
    this.label = '';
    this.descFieldPath = 'id';
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
       */
      label: { type: String },

      /**
       * A Boolean attribute which, if present, means this field is required and marked with *.
       */
      required: {
        type: Boolean,
      },
      /**
       * A Boolean attribute which, if present, means this field cannot be edited by the user and
       * appears in disabled state.
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
      /**
       * Defines the field path that is used from the injected RepeaterNode to display the option items.
       * Point-separated path to the field
       * E.g. data.partner.display_name
       */
      displayFieldPath: {
        type: String,
        attribute: 'display-field-path',
      },
      /**
       * Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the additional
       * description of the option items.
       * Point-separated path to the field
       * E.g. data.partner.id
       * default: id
       * This attribute is related to the option list
       * @type {string}
       */
      descFieldPath: {
        type: String,
        attribute: 'desc-field-path',
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
   * Binds a repeaterNode to the furo-ui5-combobox component
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
      <furo-ui5-form-field-container>
        <ui5-label
          label
          slot="label"
          for="Input"
          show-colon
          ?required=${this.required}
          >${this.label}</ui5-label
        >
        <furo-ui5-combobox
          content
          id="Input"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          display-field-path=${this.displayFieldPath}
          desc-field-path=${this.descFieldPath}
          ƒ-bind-data="--data"
          ƒ-bind-options="--options"
          ƒ-focus="--focus"
        >
        </furo-ui5-combobox>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define(
  'furo-ui5-combobox-labeled',
  FuroUi5ComboboxLabeled
);

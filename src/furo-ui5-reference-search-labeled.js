import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp/src/fbp.js';
import { Ui5LabelDataBinding } from './lib/Ui5LabelDataBinding.js';
import '@ui5/webcomponents/dist/Label.js';

import './furo-ui5-reference-search.js';
import './furo-ui5-form-field-container.js';

/**
 * `furo-ui5-reference-search-labeled`
 * The furo-ui5-reference-search-labeled is a composition to easily use a complete input field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * @summary labeled input field
 * @element furo-ui5-reference-search
 * @demo demo-furo-ui5-reference-search Simple use
 * @appliesMixin FBP
 */
export class FuroUi5ReferenceSearchLabeled extends FBP(LitElement) {
  constructor() {
    super();
    this.service = '';
    this.label = '';
    this.method = '';
    this.extendedSearcher = '';
    this.disableSearchList = false;
    this.icon = 'search';
    this.searchResponsePath = 'entities';
    this.valueFieldPath = 'data.id';
    this.displayFieldPath = 'data.display_name';

    this.extendedValueFieldPath = 'data.id';
    this.extendedDisplayFieldPath = 'data.display_name';
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
    this._searcher = this.shadowRoot.getElementById('Input');
  }

  /**
   * clearResultList clears the result list and the value state
   * @public
   */
  clearResultList() {
    this._FBPTriggerWire('|--clearResultList', null);
  }

  static get properties() {
    return {
      /**
       * the service name
       *
       * @type String
       */
      service: { type: String },
      /**
       * Set the method. This is only needed when your service is not named "List".
       * This is not the http method.
       *
       * @type String
       */
      method: { type: String },

      /**
       * the label for the data-reference-search
       *
       * @type String
       */
      label: { type: String },
      /**
       * This is only used to forward the state to the form-field-container
       */
      full: { type: Boolean },
      /**
       * Path to response value item which is used for the id.
       * By default this goes to *data.id*
       *
       * @type String
       */
      valueFieldPath: { type: String, attribute: 'value-field-path' },
      /**
       * Path to selection value node which is used for the display.
       * By default this goes to *data.display_name*
       *
       * @type String
       */
      displayFieldPath: { type: String, attribute: 'display-field-path' },
      /**
       * Path to the node in the response value which contains the array with the selection items.
       * By default this goes to *entitites*
       *
       * @type String
       */
      searchResponsePath: { type: String, attribute: 'search-response-path' },
      /**
       * Path to response value item of the exteded search which is used for the id.
       * By default this goes to *data.id*.
       * Only needed when your extended searcher does not have the id, display_name signature in the response.
       *
       * @type String
       */
      extendedValueFieldPath: {
        type: String,
        attribute: 'extended-value-field-path',
      },
      /**
       * Path to response value item of the exteded search which is used for the display.
       * By default this goes to *data.display_name*.
       * Only needed when your extended searcher does not have the id, display_name signature in the response.
       *
       * @type String
       */
      extendedDisplayFieldPath: {
        type: String,
        attribute: 'extended-display-field-path',
      },
      /**
       * Overrides the hint text from the **specs**.
       * Use with caution, normally the specs defines this value.
       *
       * @type String
       */
      placeholder: { type: String },
      /**
       * Use this attribute to set a custom icon for your searcher
       *
       * @type String
       */
      icon: { type: String },
      /**
       * A Boolean attribute which, if present, means this field can not be searched.
       *
       * This is very useful when you want enforce the usage of the extended search
       *
       * @type Boolean
       */
      disableSearchList: {
        type: Boolean,
        attribute: 'disable-search-list',
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
       * Readonly state
       *
       * @type Boolean
       */
      readonly: {
        type: Boolean,
      },
      /**
       * A Boolean attribute which, if present, means this field is required and marked with *.
       *
       * @type Boolean
       */
      required: {
        type: Boolean,
      },
      /**
       * Define the extended searcher. Do not forget to import the searcher you want to use.
       *
       * @type String
       */
      extendedSearcher: {
        type: String,
        attribute: 'extended-searcher',
      },
      /**
       * hint text when result not found by search
       *
       * @type String
       */
      noDataText: {
        type: String,
        attribute: 'no-data-text',
      },
    };
  }

  /**
   * Binds a FieldNode to the component.
   *
   * Supported types: can be a `scalar` type or any complex type with **{'id','display_name'}** signature.
   * @param {FieldNode} fieldNode
   */
  bindData(fieldNode) {
    Ui5LabelDataBinding.bindData(this, fieldNode);
  }

  /**
   * sets the filter to the inner furo-ui5-reference-search
   * @param filter
   */
  setFilter(filter) {
    this._FBPTriggerWire('--filter', filter);
  }

  set noDataText(v) {
    this.updateComplete.then(() => {
      this._searcher = this.shadowRoot.getElementById('Input');
      this._searcher.setAttribute('no-data-text', v);
    });
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
          >${this.label}
        </ui5-label>
        <furo-ui5-reference-search
          content
          id="Input"
          extended-searcher="${this.extendedSearcher}"
          ?readonly=${this.readonly}
          ?disabled=${this.disabled}
          ?disable-search-list=${this.disableSearchList}
          search-response-path="${this.searchResponsePath}"
          value-field-path="${this.valueFieldPath}"
          icon="${this.icon}"
          service="${this.service}"
          method="${this.method}"
          display-field-path="${this.displayFieldPath}"
          extended-value-field-path="${this.extendedValueFieldPath}"
          extended-display-field-path="${this.extendedDisplayFieldPath}"
          fn-bind-data="--data"
          fn-focus="--focus"
          fn-set-filter="--filter"
          fn-clear-result-list="|--clearResultList"
        ></furo-ui5-reference-search>
      </furo-ui5-form-field-container>
    `;
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
}

window.customElements.define(
  'furo-ui5-reference-search-labeled',
  FuroUi5ReferenceSearchLabeled
);

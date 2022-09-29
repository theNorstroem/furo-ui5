import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';
import { FieldNode } from '@furo/data/src/lib/FieldNode';
import { RepeaterNode } from '@furo/data/src/lib/RepeaterNode';

import '@ui5/webcomponents/dist/Label.js';
import '@furo/data/src/furo-type-renderer.js';

import './furo-ui5-form-field-container.js';

/**
 * `furo-ui5-typerenderer-labeled`
 * The furo-ui5-typerenderer-labeled is a composition to easily use a display field with label according
 * to the design specification of SAP Fiori Design System.
 *
 * @summary labeled input field
 * @element
 * @demo demo-furo-ui5-typerenderer-labeled Simple use
 * @demo demo-furo-ui5-readonly-card Card Sample
 * @demo demo-furo-ui5-typerenderer-labeled-form Read only Form
 * @demo demo-furo-ui5-typerenderer-labeled-context With context
 * @demo demo-furo-ui5-form-field-container Mixed Form
 * @appliesMixin FBP
 */
export class FuroUi5TyperendererLabeled extends FBP(LitElement) {
  constructor() {
    super();
    this.label = '';
    this.valueState = '';
    this.context = 'display';
  }

  /**
   * focus Focuses the field
   * @public
   * @param null
   */
  focus() {
    this._FBPTriggerWire('|--focus', null);
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
   * Component properties
   */
  static get properties() {
    return {
      /**
       * the label for the data-text-input
       * @private
       *
       * @type String
       */
      label: { type: String },
      /**
       * This is only used to forward the state to the form-field-container
       */
      full: { type: Boolean },
      /**
       * Value State
       * @private
       */
      valueState: { type: String, reflect: true, attribute: 'value-state' },
      /**
       * Disabled State
       *
       * @type Boolean
       */
      disabled: { type: Boolean, reflect: true, attribute: 'disabled' },
      /**
       * Set the render context. Default is **display**, the type renderer set of @furo/ui5 supports
       * **cell**, **form**, **celledit**
       *
       * @type String
       */
      context: { type: String },
    };
  }

  /**
   * Component styles
   * @returns {*[]}
   */
  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: block;
          --furo-ui5-form-field-container-grid-row-gap: 0;
        }
        :host([hidden]) {
          display: none;
        }

        ui5-label[data-size='size-s'],
        ui5-label[data-size='size-m'] {
          padding-top: 0;
        }
      `,
    ];
  }

  /**
   * Binds the fieldNode to the component
   * binding set can be customised here otherwise the standard bindData in the ui5-data-input will be used
   * @param {FieldNode} fieldNode
   */
  bindData(fieldNode) {
    this.__fieldMetasChangedHandler = () => {
      const fnMeta = fieldNode._meta;

      if (this.label !== fnMeta.label) {
        this.label = fnMeta.label;
      }
    };

    if (
      !(fieldNode instanceof FieldNode || fieldNode instanceof RepeaterNode)
    ) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }

    if (fieldNode._meta && fieldNode._meta.label) {
      this.label = fieldNode._meta.label;
    }
    fieldNode.addEventListener(
      'this-metas-changed',
      this.__fieldMetasChangedHandler
    );

    this._FBPTriggerWire('--data', fieldNode);
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-ui5-form-field-container ?disabled=${this.disabled}>
        <ui5-label label slot="label" for="Input" show-colon
          >${this.label}</ui5-label
        >
        <furo-type-renderer
          content
          context="${this.context}"
          fn-bind-data="--data"
          value-state=${this.valueState}
        ></furo-type-renderer>
      </furo-ui5-form-field-container>
    `;
  }
}

window.customElements.define(
  'furo-ui5-typerenderer-labeled',
  FuroUi5TyperendererLabeled
);

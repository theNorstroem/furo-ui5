import * as MultiInput from '@ui5/webcomponents/dist/MultiInput.js';

import '@ui5/webcomponents/dist/Token.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { Events } from './lib/Events.js';

/**
 * A furo-ui5-multi-input field allows the user to enter multiple values, which are displayed as ui5-token.
 * https://sap.github.io/ui5-webcomponents/playground/components/MultiInput/
 *
 * Supported type: repeated string
 *
 * ```html
 * <furo-ui5-multi-input ƒ-bind-data="--dao(FIELDNODE)"></furo-ui5-multi-input>
 * ```
 *
 * @summary repeated strings
 * @element furo-ui5-multi-input
 * @appliesMixin FieldNodeAdapter
 */
export class FuroUi5MultiInput extends FieldNodeAdapter(MultiInput.default) {
  constructor() {
    super();

    /**
     * @private
     */
    this.tmpValue = [];

    /**
     * used to restore the state after a invalidation -> validation change
     * @type {{state: string, message: string}}
     * @private
     */
    this._previousValueState = { state: 'None', message: '' };

    /**
     *
     * @type {{readonly: undefined, placeholder: undefined}}
     * @private
     */
    this._attributesFromFNA = {
      readonly: undefined,
      placeholder: undefined,
    };

    /**
     *
     * @private
     */
    this._constraintsFromFNA = {
      required: undefined,
      max: undefined, // maps to maxlength
    };

    /**
     *
     * @private
     */
    this._labelsFromFAT = {
      readonly: undefined,
      disabled: undefined,
      required: undefined,
    };

    /**
     *
     * @private
     */
    this._attributesFromFAT = {
      placeholder: undefined,
      max: undefined, // maps to maxlength
    };

    /**
     * a list of privileged attributes. when those attributes are set in textarea-input components initially.
     * they can not be modified later via response or spec
     * null is used because getAttribute returns null or value
     * @private
     */
    this._privilegedAttributes = {
      readonly: null,
      placeholder: null,
      required: null,
      disabled: null,
    };

    this.addEventListener('change', event => {
      this.valueState = 'Normal';

      if (!event.target.value) {
        return;
      }

      // eslint-disable-next-line wc/no-constructor-attributes
      this.appendChild(this._createUi5Token(event.target.value));
      this.tmpValue.push(event.target.value);
      this.setFnaFieldValue(this.tmpValue);

      // eslint-disable-next-line no-param-reassign
      event.target.value = '';

      this._triggerValueChangedEvent(this.tmpValue);
      this.focus();
    });

    this.addEventListener('token-delete', event => {
      if (!this.readonly && !this.disabled) {
        this.tmpValue = this.tmpValue.filter(
          item => item !== event.detail.token.text
        );
        this._updateItems(this.tmpValue);
        this.setFnaFieldValue(this.tmpValue);
        this._triggerValueChangedEvent(this.tmpValue);
        this.focus();
      }
    });
  }

  /**
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   * @private
   */
  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
    this.readAttributes();

    // created to avoid the default messages from ui5
    const vse = this.querySelector('div[slot="valueStateMessage"]');
    if (vse === null) {
      this._valueStateElement = document.createElement('div');
      this._valueStateElement.setAttribute('slot', 'valueStateMessage');
      // eslint-disable-next-line wc/no-constructor-attributes
      this.appendChild(this._valueStateElement);
    } else {
      this._valueStateElement = vse;
      this._previousValueState.message = vse.innerText;
    }
  }

  /**
   * Overrides bindData() of FieldNodeAdapter
   * Binds a FieldNode to the component
   * Supported types: repeated string
   * @param fieldNode
   */
  bindData(fieldNode) {
    return super.bindData(fieldNode);
  }

  /**
   * Reads the attributes which are set on the component dom.
   * those attributes can be set. `value-state`, `value-state-message`,  `placeholder`, `required`,`readonly`,`disabled`
   * Use this after manual or scripted update of the attributes.
   * @private
   */
  readAttributes() {
    this._previousValueState.state = this.getAttribute('value-state')
      ? this.getAttribute('value-state')
      : 'None';

    // save the original attribute for later usages, we do this, because some components reflect
    Object.keys(this._privilegedAttributes).forEach(attr => {
      this._privilegedAttributes[attr] = this.getAttribute(attr);
    });
  }

  /**
   * overwrite onFnaReadonlyChanged function
   * @private
   * @param readonly
   */
  onFnaReadonlyChanged(readonly) {
    this._attributesFromFNA.readonly = readonly;
    if (
      this._privilegedAttributes.readonly === null &&
      this._labelsFromFAT.readonly === undefined
    ) {
      this.readonly = readonly;
    }
  }

  /**
   * overwrite onFnaConstraintsChanged function
   * @private
   * @param constraints
   */
  onFnaConstraintsChanged(constraints) {
    // required
    if (constraints.required !== undefined) {
      this._constraintsFromFNA.required = constraints.required;
      if (
        this._privilegedAttributes.required === null &&
        this._labelsFromFAT.required === undefined
      ) {
        this.required = constraints.required.is === 'true';
      }
    }

    if (constraints.max !== undefined) {
      this._constraintsFromFNA.max = constraints.max;
      if (this._privilegedAttributes.maxlength === null) {
        this.maxlength = parseInt(constraints.max.is, 10);
      }
    }
  }

  /**
   * overwrite onFnaFieldNodeBecameInvalid function
   * @private
   * @param validity
   */
  onFnaFieldNodeBecameInvalid(validity) {
    if (validity.description) {
      // this value state should not be saved as a previous value state
      this._setValueStateMessage('Error', validity.description);
    }
  }

  /**
   * overwrite onFnaFieldNodeBecameValid function
   * @private
   */
  onFnaFieldNodeBecameValid() {
    this._resetValueStateMessage();
  }

  /**
   * update the value state and the value state message on demand
   *
   * @param valueState
   * @param message
   * @private
   */
  _setValueStateMessage(valueState, message) {
    this.valueState = valueState;
    // element was created in constructor
    this._valueStateElement.innerText = message;
  }

  /**
   * reset to previous value state
   * @private
   */
  _resetValueStateMessage() {
    this._setValueStateMessage(
      this._previousValueState.state,
      this._previousValueState.message
    );
  }

  /**
   * overwrite onFnaFieldNewDataInjected
   * @private
   * @param val
   */
  onFnaFieldNewDataInjected(val) {
    this.tmpValue = val;
    this._updateItems(val);
    this._triggerValueChangedEvent(val);
  }

  /**
   * overwrite onFnaRepeatedFieldChanged
   * @private
   * @param val
   */
  onFnaRepeatedFieldChanged(val) {
    this.tmpValue = val;
    this._updateItems(val);
  }

  /**
   * overwrite onFnaFieldValueChanged
   * @private
   * @param val
   */
  onFnaFieldValueChanged(val) {
    this.tmpValue = val;
    this._updateItems(val);
  }

  /**
   *
   * @private
   */
  _updateItems(val) {
    this.value = '';
    this._removeAllItems();
    val.forEach(item => {
      this.appendChild(this._createUi5Token(item));
    });
  }

  /**
   *
   * @private
   */
  // eslint-disable-next-line class-methods-use-this
  _createUi5Token(text) {
    const token = document.createElement('ui5-token');

    token.setAttribute('text', text);
    token.setAttribute('slot', 'tokens');

    return token;
  }

  /**
   *
   * @private
   */
  _triggerValueChangedEvent(val) {
    /**
     * Fired when value changed
     * the event detail is the value of the repeated string
     * @type {Event}
     */
    this.dispatchEvent(Events.buildChangeEvent(val));
  }

  /**
   *
   * @private
   */
  _removeAllItems() {
    this.innerHTML = '';
  }

  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'furo-ui5-multi-input';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

FuroUi5MultiInput.define();

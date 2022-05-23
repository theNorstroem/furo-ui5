import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';
import './furo-ui5-form-field-container.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';

import '@ui5/webcomponents/dist/Input.js';
import './furo-ui5-text-input.js';
import { FieldNode } from '@furo/data/src/lib/FieldNode';
import { RepeaterNode } from '@furo/data/src/lib/RepeaterNode';
import { Events } from './lib/Events.js';
/**
 * The furo-ui5-money-input is a input element composition for FieldNodes of type google.type.Money.
 * It consists of
 * - ui5-input of type Number
 * - furo-ui5-text-input
 *
 *  You can set currencies dropdown with options in meta or set options attribute as json in element or set currencies as string in element. the three
 *  ways have priority : currencies > options as attribute > options in meta.
 *
 * ```html
 *  <furo-ui5-money-input fn-bind-data="--dao(google.type.Money)" options='{"list": [ "CHF","EUR","USD" ]}'></furo-ui5-money-input>
 *  <furo-ui5-money-input fn-bind-data="--dao(google.type.Money)" options='{"list": [ {"id":"CHF","label":"Schweiz"},{"id":"EUR","label":"Europa", "selected": true}'></furo-ui5-money-input>
 *  <furo-ui5-money-input fn-bind-data="--dao(google.type.Money)" currencies="CHF,EUR,USD"></furo-ui5-money-input>
 *```
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 * - **required: true** , set the element to required
 *
 * Tags: money input
 * @fires {Money} furo-value-changed -  Fired when the input operation has finished by pressing Enter or on focusout.
 * @summary  Binds a entityObject field google.type.Money to a number-input and currency dropdown fields
 * @element
 * @demo demo-furo-ui5-money-input Basic Usage
 * @mixes FBP
 */
export class FuroUi5MoneyInput extends FBP(FieldNodeAdapter(LitElement)) {
  constructor() {
    super();

    // used to restore the state after a invalidation -> validation change
    this._previousValueState = { state: 'None', message: '' };

    this._attributesFromFNA = {
      readonly: undefined,
    };

    this._constraintsFromFNA = {
      required: undefined,
    };

    // a list of privileged attributes. when those attributes are set in number-input components initially.
    // they can not be modified later via response or spec
    // null is used because getAttribute returns null or value
    this._privilegedAttributes = {
      readonly: null,
      required: null,
      disabled: null,
    };
  }

  /**
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   */
  connectedCallback() {
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
    this.readAttributes();
  }

  /**
   * Adds a div with slot="valueStateMessage" to show
   * field related information if the attribute value-state is set.
   * @returns {HTMLDivElement}
   * @private
   */
  _addValueStateMessage() {
    this._getElements();
    const EXISTING_VSE = this.amount.querySelector(
      'div[slot="valueStateMessage"]'
    );
    if (EXISTING_VSE !== null) {
      return EXISTING_VSE;
    }
    // we only create the ValueStateContainer if none already exists.
    const VALUE_STATE_MESSAGE_ELEMENT = document.createElement('div');
    VALUE_STATE_MESSAGE_ELEMENT.setAttribute('slot', 'valueStateMessage');
    // eslint-disable-next-line wc/no-constructor-attributes
    this.amount.appendChild(VALUE_STATE_MESSAGE_ELEMENT);
    return VALUE_STATE_MESSAGE_ELEMENT;
  }

  /**
   * Removes <div slot="valueStateMessage"></div>
   * @private
   */
  _removeValueStateMessage() {
    this._getElements();
    const VALUE_STATE_MESSAGE_ELEMENT = this.amount.querySelector(
      'div[slot="valueStateMessage"]'
    );
    if (VALUE_STATE_MESSAGE_ELEMENT !== null) {
      VALUE_STATE_MESSAGE_ELEMENT.remove();
    }
  }

  /**
   * Binds a fieldNode.
   *
   * Supported types: `google.type.Money`
   * @param {FieldNode} fieldNode of type  `google.type.Money`
   */
  bindData(fieldNode) {
    // check if we have a FieldNode or RepeaterNode
    if (
      !(fieldNode instanceof FieldNode || fieldNode instanceof RepeaterNode)
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        'Invalid binding ',
        fieldNode,
        'is not a FieldNode',
        this,
        this.parentNode
      );
      return false;
    }

    // initial empty metas
    this.__meta = {
      default: '',
      hint: '',
      label: '',
      options: {},
      readonly: false,
      repeated: false,
      typespecific: null,
    };

    // protection against multiple calls of bindData
    if (this.__fieldNode.removeEventListener) {
      this.__detachEventListeners();
    }

    // add the main event listeners
    fieldNode.addEventListener(
      'field-value-changed',
      this.__fieldValueChangedHandler
    );
    fieldNode.addEventListener(
      'field-became-valid',
      this.__fieldBecamesValidHandler
    );
    fieldNode.addEventListener(
      'field-became-invalid',
      this.__fieldBecamesInvalidHandler
    );
    fieldNode.addEventListener(
      'this-metas-changed',
      this.__fieldMetasChangedHandler
    );

    // this is for easier debugging with the inspector
    this.__fieldNode = fieldNode;

    // notify for initial data
    this.__fieldValueChangedHandler();

    // run meta checks on initial bind
    this.__fieldMetasChangedHandler();

    this._FBPTriggerWire('--data', fieldNode);

    return true;
  }

  /**
   * Reads the attributes which are set on the component dom.
   * Attributes that can be se are   `required`,`readonly`,`disabled` ,
   * Use this after manual or scripted update of the attributes.
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
    if (this._privilegedAttributes.readonly === null) {
      this.readonly = readonly;
    }
  }

  /**
   * Checks if options.flags has an entry `currency_list`
   * In this case the option list is applied to the currency field as suggestion items.
   *
   * If you use a static option definition in the type specification (furo), you can
   * define the list as follows:
   *
   * ```
   * options:
   *   flags:
   *       - currency_list
   *   list:
   *       - '@type': type.googleapis.com/furo.Optionitem
   *         display_name: Swiss francs (CHF)
   *         id: CHF
   *         selected: false
   *       - '@type': type.googleapis.com/furo.Optionitem
   *         display_name: Euro (EUR)
   *         id: EUR
   *         selected: false
   *       - '@type': type.googleapis.com/furo.Optionitem
   *         display_name: US Dollar (USD)
   *         id: USD
   *         selected: false
   * ```
   *
   * @param options
   */
  onFnaOptionsChanged(options) {
    if (options.flags && options.flags.includes('currency_list')) {
      this.__fieldNode.currency_code._meta.options = options;
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
      if (this._privilegedAttributes.required === null) {
        this.required = constraints.required.is === 'true';
      }
    }
  }

  /**
   *
   * @private
   */
  _FBPReady() {
    super._FBPReady();

    this._tmpValue = {};

    // update value when the amount changed
    this._FBPAddWireHook('--inputInput', e => {
      let value = {};
      if (e.composedPath()[0].nodeName === 'UI5-INPUT') {
        value = this._convertDataToMoneyObj(
          '',
          e.composedPath()[0].value,
          this._tmpValue
        );
        this.setFnaFieldValue(value);
      } else {
        value = this._convertDataToMoneyObj(
          e.composedPath()[0].value,
          '',
          this._tmpValue
        );
        this.setFnaFieldValue(value);
      }

      this.dispatchEvent(Events.buildChangeEvent(value));
    });
  }

  // convert data to google.type.Money format
  // eslint-disable-next-line class-methods-use-this
  _convertDataToMoneyObj(currency, amount, obj) {
    if (obj == null) {
      // eslint-disable-next-line no-param-reassign
      obj = {};
    }

    if (currency) {
      // eslint-disable-next-line no-param-reassign
      obj.currency_code = currency;
    }
    if (amount) {
      const arr = String(amount).split('.');
      // eslint-disable-next-line no-param-reassign
      obj.units = Number(arr[0]);
      if (arr[1]) {
        // eslint-disable-next-line no-param-reassign
        obj.nanos =
          obj.units > 0
            ? Number.parseInt(Number(`0.${arr[1]}`) * 100000000, 10)
            : Number.parseInt(Number(`0.${arr[1]}`) * 100000000, 10) * -1;
      } else {
        // eslint-disable-next-line no-param-reassign
        obj.nanos = 0;
      }
    }
    return obj;
  }

  /**
   * Reactive properties
   * @returns {{readonly: {type: BooleanConstructor}, disabled: {type: BooleanConstructor}}}
   */
  static get properties() {
    return {
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

  /**
   * update amount field
   * One issue with number inputs is that their step size is 1 by default.
   * If you try to enter a number with a decimal (such as "1.0"), it will be considered invalid.
   * If you want to enter a value that requires decimals, you'll need to reflect this in the step value
   * (e.g. step="0.01" to allow decimals to two decimal places).
   * @private
   */
  _updateField(value) {
    let numberStr = '';

    if (value.units && value.units !== 0) {
      numberStr = value.units;
    }
    if (value.nanos && value.nanos !== 0) {
      let nanoValue = value.nanos;
      if (nanoValue < 0) {
        nanoValue *= -1;
      }
      numberStr += `.${nanoValue}`;
    }
    const amount = Number(numberStr);
    this._FBPTriggerWire('--valueAmount', amount);

    this.requestUpdate();
  }

  /**
   * @private
   */
  onFnaFieldValueChanged(value) {
    const type = this.getDataType();
    switch (type) {
      case 'google.type.Money':
        this._tmpValue = value;
        this._updateField(value);
        break;
      default:
        break;
    }
  }

  /**
   * overwrite onFnaFieldNodeBecameInvalid function
   * @private
   * @param validity
   */
  onFnaFieldNodeBecameInvalid(validity) {
    if (validity.description) {
      this._getElements();
      // this value state should not be saved as a previous value state
      this._setValueStateMessage('Error', validity.description);
    } else {
      this.amount.valueState = 'Error';
    }
  }

  /**
   * overwrite onFnaFieldNodeBecameValid function
   * @private
   */
  onFnaFieldNodeBecameValid() {
    this._resetValueStateMessage();
  }

  _getElements() {
    if (!this.amount) {
      this.amount = this.shadowRoot.getElementById('amount');
    }
    if (!this.currency) {
      this.currency = this.shadowRoot.getElementById('currency');
    }
  }

  /**
   * update the value state and the value state message on demand
   *
   * @param valueState
   * @param message
   * @private
   */
  _setValueStateMessage(valueState, message) {
    this._getElements();
    const VSE = this._addValueStateMessage();
    this.amount.valueState = valueState;
    if (VSE !== null) {
      VSE.innerText = message || '';
    }
  }

  /**
   * resets value-state and valueStateMessage to previous value state
   * If no previous message is set, the valueStateMessage container is removed.
   * @private
   */
  _resetValueStateMessage() {
    this._getElements();
    this.amount.valueState = this._previousValueState.state;
    this.currency.valueState = this._previousValueState.state;

    if (this._previousValueState?.message?.length) {
      this._setValueStateMessage(
        this._previousValueState.state,
        this._previousValueState.message
      );
    } else {
      this._removeValueStateMessage();
    }
  }

  /**
   *
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      #currency {
        width: 100px;
        min-width: 100px;
      }

      #amount {
        width: calc(100% - var(--spacing-xs) - 100px);
      }

      :host {
        width: 190px;
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-horizontal-flex>
        <ui5-input
          id="amount"
          type="Number"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          set-value="--valueAmount"
          at-input="--inputInput(*)"
        ></ui5-input>
        <furo-ui5-text-input
          id="currency"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          fn-bind-data="--data(*.currency_code)"
          at-field-value-changed=":STOP, --inputInput(*)"
        ></furo-ui5-text-input>
      </furo-horizontal-flex>
    `;
  }
}

window.customElements.define('furo-ui5-money-input', FuroUi5MoneyInput);

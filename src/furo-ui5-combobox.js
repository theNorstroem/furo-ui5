import * as ComboBox from '@ui5/webcomponents/dist/ComboBox.js';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { RepeaterNode } from '@furo/data/src/lib/RepeaterNode.js';
import { Events } from './lib/Events.js';

import '@ui5/webcomponents/dist/ComboBoxItem.js';
import '@ui5/webcomponents-icons/dist/alert.js';
import '@ui5/webcomponents-icons/dist/error.js';
import '@ui5/webcomponents-icons/dist/information.js';

/**
 * The furo-ui5-combobox component represents a drop-down menu with a list of the available options and a text input field
 * to narrow down the options. It is commonly used to enable users to select an option from a predefined list.
 * Use the function bindOptions to bind a RepeaterNode as an option list.
 *
 * ```html
 * <furo-ui5-combobox
 *    fn-bind-data="--entity(*.data.description)"
 *    fn-bind-options="--collection(*.entities)">
 * </furo-ui5-combobox>
 * ```
 *
 * @fires {optionNodeList} options-updated - Fired after the option list was rebuilt.
 * @fires {value} search-requested - Fired when typing in input (debounced, default 250ms)
 * @fires {selectedOption} selection-change - Fired when selection is changed by user interaction
 * @fires {selectedOption} furo-value-changed - Fired after the field value was changed.
 *
 * @summary data combobox field
 * @element furo-ui5-combobox
 * @demo demo-furo-ui5-combobox Basic usage (scalar , fat, wrapper values)
 */
export class FuroUi5Combobox extends FieldNodeAdapter(ComboBox.default) {
  constructor() {
    super();

    /**
     * Flag to indicate if a field is attached
     * Default: false
     * @type {boolean}
     */
    this.activeFieldBinding = false;

    /**
     * Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the option items.
     * Point-separated path to the field
     * E.g. data.partner.display_name
     * default: display_name
     * This attribute is related to the option list
     * @type {string}
     */
    this.displayFieldPath = 'display_name';

    /**
     * Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the additional
     * description of the option items.
     * Point-separated path to the field
     * E.g. data.partner.id
     * default: id
     * This attribute is related to the option list
     * @type {string}
     */
    this.descFieldPath = 'id';

    /**
     * Internal RepeaterNode
     * Defines the ui5-combobox options.
     * @type {*[]}
     * @private
     */
    this._optionList = [];

    /**
     * Debounce time in milliseconds
     * Default value: 250
     */
    this.wait = 250;

    /**
     * used to restore the state after an invalidation -> validation change
     * @private
     */
    this._previousValueState = { state: 'None', message: '' };

    /**
     * @private
     */
    this._attributesFromFNA = {
      readonly: undefined,
    };

    /**
     * @private
     */

    this._constraintsFromFNA = {
      required: undefined,
    };

    /**
     * @private
     */
    this._labelsFromFAT = {
      readonly: undefined,
      disabled: undefined,
      required: undefined,
    };

    /**
     * @private
     */
    this._attributesFromFAT = {};

    /**
     * A list of privileged attributes. when those attributes are set in furo-ui5-combobox components initially.
     * they can not be modified later via response or spec
     * null is used because getAttribute returns null or value
     *
     * @private
     */
    this._privilegedAttributes = {
      readonly: null,
      required: null,
      disabled: null,
      wait: 250,
      'display-field-path': 'display_name',
      'desc-field-path': 'id',
    };

    // changed is fired when the select operation has finished.
    this.addEventListener('change', this._updateFNA);
    this.addEventListener('input', this._fireDebouncedEvent);

    /**
     * Debounce function, taken from Underscore.js
     * @param func
     * @param wait
     * @param immediate
     * @return {(function(): void)|*}
     * @private
     */
    this._debounce = function debounce(func, wait, immediate) {
      let timeout;
      return function debouncer() {
        const context = this;
        // eslint-disable-next-line prefer-rest-params
        const args = arguments;
        const later = function applyLater() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };
  }

  /**
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   * @private
   */
  connectedCallback() {
    this.readAttributes();
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
  }

  /**
   * Adds a div with slot="valueStateMessage" to show
   * field related information if the attribute value-state is set.
   * @returns {HTMLDivElement}
   * @private
   */
  _addValueStateMessage() {
    const EXISTING_VSE = this.querySelector('div[slot="valueStateMessage"]');
    if (EXISTING_VSE !== null) {
      return EXISTING_VSE;
    }
    // we only create the ValueStateContainer if none already exists.
    const VALUE_STATE_MESSAGE_ELEMENT = document.createElement('div');
    VALUE_STATE_MESSAGE_ELEMENT.setAttribute('slot', 'valueStateMessage');
    // eslint-disable-next-line wc/no-constructor-attributes
    this.appendChild(VALUE_STATE_MESSAGE_ELEMENT);
    return VALUE_STATE_MESSAGE_ELEMENT;
  }

  /**
   * Removes <div slot="valueStateMessage"></div>
   * @private
   */
  _removeValueStateMessage() {
    const VALUE_STATE_MESSAGE_ELEMENT = this.querySelector(
      'div[slot="valueStateMessage"]'
    );
    if (VALUE_STATE_MESSAGE_ELEMENT !== null) {
      VALUE_STATE_MESSAGE_ELEMENT.remove();
    }
  }

  /**
   * Reads the attributes which are set on the component dom.
   * those attributes can be set. `value-state`, `required`,`readonly`,`disabled`, `value-field-path`, `display-field-path`
   * Use this after manual or scripted update of the attributes.
   */
  readAttributes() {
    this._previousValueState.state = this.getAttribute('value-state')
      ? this.getAttribute('value-state')
      : 'None';

    // save the original attribute for later usages, we do this, because some components reflect
    Object.keys(this._privilegedAttributes).forEach(attr => {
      if (this.getAttribute(attr) !== null) {
        this._privilegedAttributes[attr] = this.getAttribute(attr);
      }
    });

    // creates the debounce handler for the search-requested event
    this._createHandler(this._privilegedAttributes.wait, false);
  }

  /**
   * Overridden bindData of FieldNodeAdapter
   * @param {FieldNode} fieldNode
   * @returns {boolean}
   */
  bindData(fieldNode) {
    this.activeFieldBinding = true;
    return super.bindData(fieldNode);
  }

  /**
   * Here a RepeaterNode can be connected to the component as an option list.
   * @param repeaterNode
   */
  bindOptions(repeaterNode) {
    if (!(repeaterNode instanceof RepeaterNode)) {
      // eslint-disable-next-line no-console
      console.warn(
        'Invalid param in function bindOptions. Param is not of type RepeaterNode',
        repeaterNode
      );
      return false;
    }
    this._optionList = repeaterNode;

    /**
     * Subscription for changes in the RepeaterNode
     */
    this._optionList.addEventListener('this-repeated-field-changed', () => {
      const possibleSuggestions = this._mapOptionsToSuggestions(
        this._optionList
      );
      if (possibleSuggestions.length) {
        this._updateOptionList(possibleSuggestions);
      }
    });
    const possibleSuggestions = this._mapOptionsToSuggestions(this._optionList);
    if (possibleSuggestions.length) {
      this._updateOptionList(possibleSuggestions);
    }
    return true;
  }

  /**
   * Overridden onFnaFieldValueChanged
   * @private
   * @param val
   */
  onFnaFieldValueChanged(val) {
    if (this.isFat()) {
      this._fatValue = val;
      this._tmpValue = this._fatValue.value;
      this.value = this._fatValue.value;
      this._updateAttributesFromFat(this._fatValue.attributes);
      this._updateLabelsFromFat(this._fatValue.labels);
    } else {
      this._tmpValue = val;
      this.value = this._tmpValue;
    }
  }

  /**
   * Overridden onFnaReadonlyChanged function
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
   * Overridden onFnaOptionsChanged function
   * @private
   * @param options
   */
  onFnaOptionsChanged(options) {
    if (options && options.list) {
      const mappedOptions = [];

      options.list.forEach(item => {
        const option = {};
        option.text = item.id;
        option.display_name = item.display_name;
        mappedOptions.push(option);
      });
      this._updateOptionList(mappedOptions);
    }
  }

  /**
   * Overridden onFnaConstraintsChanged function
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
  }

  /**
   * Overridden onFnaFieldNodeBecameInvalid function
   * @private
   * @param validity
   */
  onFnaFieldNodeBecameInvalid(validity) {
    if (validity.description) {
      // this value state should not be saved as a previous value state
      this._setValueStateMessage('Error', validity.description);
    } else {
      this.valueState = 'Error';
    }
  }

  /**
   * Overridden onFnaFieldNodeBecameValid function
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
    const VSE = this._addValueStateMessage();
    this.valueState = valueState;
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
    this.valueState = this._previousValueState.state;

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
   * Handler function for the input value changes.
   * This is done to be able to remove the event-listeners as a protection for multiple calls
   * @return {(function(): void)|*}
   * @private
   */
  _updateFNA() {
    const { value } = this;
    if (this.isFat()) {
      if (value === '') {
        this._tmpFAT.value = null;
        // add empty state
        if (this._tmpFAT.labels === null) {
          this._tmpFAT.labels = {};
        }
        this._tmpFAT.labels.empty = true;
      } else {
        this._tmpFAT.value = value;
        // remove empty state
        if (this._tmpFAT.labels && this._tmpFAT.labels.empty) {
          delete this._tmpFAT.labels.empty;
        }
        // init labels in_tmpFAT
        if (this._tmpFAT.labels === null) {
          this._tmpFAT.labels = {};
        }
        // set modified on changes
        this._tmpFAT.labels.modified = true;
      }
      this.setFnaFieldValue(this._tmpFAT);
    } else if (this.isWrapper()) {
      this.setFnaFieldValue(value === '' ? null : value);
    } else {
      this.setFnaFieldValue(value === '' ? '' : value);
    }

    this.dispatchEvent(Events.buildChangeEvent(this.value));
  }

  /**
   * Creates new combobox items
   * @param arr
   * @private
   */
  _updateOptionList(arr) {
    if (!this.readonly && !this.disabled) {
      // remove previous suggestion items.
      this.querySelectorAll('ui5-cb-item').forEach(e => {
        e.remove();
      });

      if (Array.isArray(arr) && arr.length > 0) {
        // add current combobox items
        arr.forEach(e => {
          const element = document.createElement('ui5-cb-item');

          element.text = e.text || '';
          element.additionalText = e.display_name || '';
          this.appendChild(element);
        });
      }
    }
  }

  /**
   * Fires a debounced search event, that can be used to lazy load options.
   * @private
   */
  _fireDebouncedEvent() {
    this.handler(this.value);
  }

  /**
   * Maps a RepeaterNode according the mapping definition to an ui5-cb-item.
   * Supported fields are:
   * - text
   * - description
   *
   * @param repeaterNode
   * @returns {*[]}
   * @private
   */
  _mapOptionsToSuggestions(repeaterNode) {
    const mappedOptions = [];

    repeaterNode.repeats.forEach(item => {
      const option = {};
      option.text = FuroUi5Combobox.getValueByPath(
        item,
        this._privilegedAttributes['display-field-path']
      )._value;
      option.display_name = FuroUi5Combobox.getValueByPath(
        item,
        this._privilegedAttributes['desc-field-path']
      )._value;
      mappedOptions.push(option);
    });
    return mappedOptions;
  }

  /**
   * Internal create of debounce handler function
   * @param wait
   * @param immediate
   * @private
   */
  _createHandler(wait, immediate) {
    this.handler = this._debounce(
      wire => {
        this.dispatchEvent(
          new CustomEvent('search-requested', {
            detail: wire,
            bubbles: true,
            composed: true,
          })
        );
      },
      wait,
      immediate
    );
  }

  /**
   * Let you get an attribute value by path
   * @param obj
   * @param path
   * @returns {}
   * @private
   */
  static getValueByPath(obj, path) {
    if (obj && path) {
      return path.split('.').reduce((res, prop) => res[prop], obj) || obj;
    }
    return {};
  }

  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'furo-ui5-combobox';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

FuroUi5Combobox.define();

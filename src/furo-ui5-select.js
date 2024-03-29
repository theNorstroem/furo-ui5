import * as Select from '@ui5/webcomponents/dist/Select.js';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { RepeaterNode } from '@furo/data/src/lib/RepeaterNode.js';
import { Events } from './lib/Events.js';

import '@ui5/webcomponents/dist/Option.js';
import '@ui5/webcomponents-icons/dist/alert.js';
import '@ui5/webcomponents-icons/dist/error.js';
import '@ui5/webcomponents-icons/dist/information.js';

/**
 * The furo-ui5-select component is used to create a drop-down list. The items inside the furo-ui5-select define
 * the available options by using the ui5-option component. Use the function bindOptions to bind a RepeaterNode as a option list.
 *
 * ```html
 * <furo-ui5-select
 *    fn-bind-data="--entity(*.data.description)"
 *    fn-bind-options="--collection(*.entities)">
 * </furo-ui5-select>
 * ```
 *
 * @fires {optionNodeList} options-updated - Fired  after the option list was rebuilt.
 * @fires {selectedOption} item-selected - Fired when the item of the dropdown list is selected.
 * @fires {selectedOption} furo-value-changed - Fires the field value when it changes.
 *
 * @summary data select field
 * @element furo-ui5-select
 * @demo demo-furo-ui5-select Basic usage (scalar , fat, wrapper values)
 */
export class FuroUi5Select extends FieldNodeAdapter(Select.default) {
  constructor() {
    super();

    /**
     * Flag to indicate if a field is attached
     * Default: false
     * @type {boolean}
     */
    this.activeFieldBinding = false;

    /**
     * Defines the field path that is used from the bound RepeaterNode (bindOptions) to identify the option items.
     * Point-separated path to the field
     * E.g. data.partner.ulid
     * default: id
     * This attribute is related to the option list
     * @type {string}
     */
    this.idFieldPath = 'id';

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
     * Defines the field path that is used to update the bound component if the user has selected an option.
     * Point-separated path to the field
     * Must be set if a data binding is specified.
     * default: id
     * This attribute is related to the option list. optionList[selected].valueFieldPath ==> bound FieldNode
     * @type {string}
     */
    this.valueFieldPath = 'id';

    /**
     * Defines the id field path of the bound FieldNode.
     * Point-separated path to the field
     * Must be set if a data binding is specified with a complex type.
     * default: id
     * This attribute is related to the bound FieldNode.
     * @type {string}
     */
    this.boundFieldIdPath = 'id';

    /**
     * Internal RepeaterNode
     * Defines the ui5-select options.
     * Note: Only one selected option is allowed. If more than one option is defined as selected, the last one would be considered as the selected one.
     * @type {*[]}
     * @private
     */
    this._optionList = [];
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
      hidden: undefined,
    };
    /**
     * @private
     */
    this._attributesFromFAT = {};

    /**
     * a list of privileged attributes. when those attributes are set in furo-ui5-select components initially.
     * they can not be modified later via response or spec
     * null is used because getAttribute returns null or value
     *
     * @private
     */
    this._privilegedAttributes = {
      readonly: null,
      required: null,
      disabled: null,
      'id-field-path': 'id',
      'value-field-path': 'id',
      'display-field-path': 'display_name',
      'bound-field-id-path': 'id',
    };

    // changed is fired when the select operation has finished.
    this.addEventListener('change', this._updateFNA);
  }

  /**
   * connectedCallback() method is called when an element is added to the DOM.
   * webcomponent lifecycle event
   * @private
   */
  connectedCallback() {
    this.readAttributes();

    if (this.options === undefined) {
      const OPTIONS = this.querySelectorAll('ui5-option');
      if (OPTIONS && OPTIONS.length) {
        this.options = [];
        OPTIONS.forEach(item => {
          this.options.push(item);
        });
      } else {
        this.options = [];
      }
    }
    // eslint-disable-next-line wc/guard-super-call
    super.connectedCallback();
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
      this._updateOptions();
    });
    this._updateOptions();
    return true;
  }

  /**
   * inject raw data as options
   * @param [rawJson] raw data array
   * @return {boolean}
   */
  setOptions(arr) {
    this._updateOptions(arr);
    return true;
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
   * Overridden onFnaFieldValueChanged
   * @private
   * @param val
   */
  onFnaFieldValueChanged(val) {
    const type = this.getDataType();
    if (type === 'furo.StringOptionProperty') {
      this._tmpValue = val.id;
      this.selectOptionById(this._tmpValue);
      return;
    }
    if (this.isFat()) {
      this._fatValue = val;
      this._tmpValue = this._fatValue.value;
      this.selectOptionById(this._fatValue.value);
      this._updateAttributesFromFat(this._fatValue.attributes);
      this._updateLabelsFromFat(this._fatValue.labels);
    } else {
      // checks if incoming param is a complex object
      if (
        val !== null &&
        typeof val === 'object' &&
        val[this._privilegedAttributes['bound-field-id-path']] !== undefined
      ) {
        this._tmpValue = val[this._privilegedAttributes['bound-field-id-path']];
      } else {
        // scalar value
        this._tmpValue = val;
      }
      this.selectOptionById(this._tmpValue);
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
      // ui5-select has no proper readonly support
      this.disabled = readonly;
    }
  }

  /**
   * Overridden onFnaOptionsChanged function
   * @private
   * @param options
   */
  onFnaOptionsChanged(options) {
    if (options && options.list) {
      this._updateOptions(options.list);
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
   * set the value state
   * @param state
   */
  onFnaFieldStateChanged(state) {
    this._setValueStateMessage(state.state, state.description);
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
   * Selects an option by id.
   * The id field must be comparable.
   * @param id {*} must match the data
   */
  selectOptionById(id) {
    if (!this.activeFieldBinding) {
      // there is no active field binding. No update needed.
      return false;
    }

    if (this.options && this.options.length) {
      // eslint-disable-next-line
      const result = this.options.filter(elem => elem.dataset.id == id);
      if (result && result.length) {
        if (this.selectedOption) {
          this.selectedOption.removeAttribute('selected');
        }
        result[0].setAttribute('selected', '');
      } else if (this.selectedOption) {
        // no option found
        // if selectedOption is available set this option as selected
        this._updateFNA({ detail: { selectedOption: this.selectedOption } });
      }
    }
    return true;
  }

  /**
   * labels are map <string,bool>, we handle every boolean attribute with the labels
   *
   * @param fatLabels
   * @private
   */
  _updateLabelsFromFat(fatLabels) {
    if (fatLabels === null || fatLabels === undefined) {
      return;
    }
    // this is needed to check the specifity in the onFnaXXXXChanged callback functions
    this._labelsFromFAT.readonly = fatLabels.readonly;
    this._labelsFromFAT.required = fatLabels.required;

    // readonly
    if (this._privilegedAttributes.readonly === null) {
      if (fatLabels.readonly !== undefined) {
        // apply from fat
        this.readonly = fatLabels.readonly;
      } else if (this._attributesFromFNA.readonly !== undefined) {
        // apply from fieldnode (meta)
        this.readonly = this._attributesFromFNA.readonly;
      }
    }

    // CONSTRAINT required
    if (this._privilegedAttributes.required === null) {
      if (fatLabels.required !== undefined) {
        this.required = fatLabels.required;
      } else if (this._constraintsFromFNA.required !== undefined) {
        this.required = this._constraintsFromFNA.required.is === 'true';
      }
    }

    // disabled
    if (this._privilegedAttributes.disabled === null) {
      if (fatLabels.disabled !== undefined) {
        this.disabled = fatLabels.disabled;
      }
    }
  }

  /**
   * sync input attributes according to fat attributes
   * @private
   */
  _updateAttributesFromFat(fatAttributes) {
    if (fatAttributes === null || fatAttributes === undefined) {
      return;
    }

    // this is needed to check the specifity in the onFnaXXXXChanged callback functions
    this._attributesFromFAT.disabled = fatAttributes.disabled;

    // value-state and corresponding message
    if (fatAttributes['value-state'] !== undefined) {
      // save state as previous state
      this._previousValueState = {
        state: fatAttributes['value-state'],
        message: fatAttributes['value-state-message'],
      };
      this._setValueStateMessage(
        fatAttributes['value-state'],
        fatAttributes['value-state-message']
      );
    } else {
      // remove state if fat does not have state, even it is set in the html
      this._previousValueState = {
        state: 'None',
        message: fatAttributes['value-state-message'],
      };
      this._setValueStateMessage('None', fatAttributes['value-state-message']);
    }
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
   * Maps and updates array of option
   * @param list
   * @private
   */
  _updateOptions(list) {
    const optionNodeList = [];

    if (this._optionList && this._optionList.repeats) {
      this._optionList.repeats.forEach(item => {
        const optionItem = document.createElement('ui5-option');
        optionItem.setAttribute(
          'data-id',
          FuroUi5Select.getValueByPath(
            item,
            this._privilegedAttributes['id-field-path']
          )
        );

        if (item.icon && item.icon._value !== undefined) {
          optionItem.setAttribute('icon', item.icon._value);
        }

        optionItem.innerText = FuroUi5Select.getValueByPath(
          item,
          this._privilegedAttributes['display-field-path']
        )._value;
        optionNodeList.push(optionItem);
      });
    } else if (list && list.length) {
      // applies static option list items from spec or
      // option list items from meta
      list.forEach(item => {
        if (item.id === undefined) {
          // eslint-disable-next-line no-param-reassign
          item.id = '';
        }
        const optionItem = document.createElement('ui5-option');
        optionItem.setAttribute(
          'data-id',
          FuroUi5Select.getValueByPath(
            item,
            this._privilegedAttributes['id-field-path']
          )
        );
        if (item.disabled === true) {
          optionItem.setAttribute('disabled', 'true');
        }

        if (item.icon !== undefined) {
          optionItem.setAttribute('icon', item.icon);
        }

        optionItem.innerText = FuroUi5Select.getValueByPath(
          item,
          this._privilegedAttributes['display-field-path']
        );
        optionNodeList.push(optionItem);
      });
    }

    if (optionNodeList.length) {
      const existingOptions = this.querySelectorAll('ui5-option');
      existingOptions.forEach(opt => {
        this.removeChild(opt);
        this.options.pop();
      });

      optionNodeList.forEach(newOpt => {
        this.appendChild(newOpt);
        this.options.push(newOpt);
      });
    }

    /**
     * if there is an active field binding
     * the option should be re-selected
     */
    if (this.activeFieldBinding) {
      setTimeout(() => {
        this.selectOptionById(this._tmpValue);
      }, 16); // workaround for cases where the options are ready long before the bound value is
    }

    this.dispatchEvent(
      new CustomEvent('options-updated', {
        detail: optionNodeList,
        bubbles: true,
        composed: true,
      })
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
      const r = path.split('.').reduce((res, prop) => res[prop], obj);
      if (r !== undefined) {
        return r;
      }
      return obj;
    }
    return {};
  }

  /**
   * Handler function for the select value changes.
   * This is done to be able to remove the event-listeners as a protection for multiple calls
   * @return {(function(): void)|*}
   * @private
   */
  _updateFNA(e) {
    let newValue = '';
    let selectedOption = {};

    if (this._optionList && this._optionList.repeats) {
      selectedOption = this._optionList.repeats.find(
        obj =>
          FuroUi5Select.getValueByPath(
            obj,
            this._privilegedAttributes['id-field-path']
          )._value === e.detail.selectedOption.dataset.id
      );

      if (selectedOption) {
        newValue = FuroUi5Select.getValueByPath(
          selectedOption,
          this._privilegedAttributes['value-field-path']
        )._value;
      }
    } else {
      // if there is no active option binding
      // The id of the attribute data-id will be set available. Fallback is: innerText of the option element.
      newValue =
        e.detail.selectedOption.dataset.id || e.detail.selectedOption.innerText;
      selectedOption = e.detail.selectedOption;
    }

    /**
     * Only if activeFieldBinding is true
     */
    if (this.activeFieldBinding) {
      if (this.isFat()) {
        if (newValue === '') {
          this._tmpValue = null;
          this._fatValue.value = null;
          // add empty state
          if (this._fatValue.labels === null) {
            this._fatValue.labels = {};
          }
          this._fatValue.labels.empty = true;
        } else {
          this._tmpValue = newValue;
          this._fatValue.value = newValue;
          // remove empty state
          if (this._fatValue.labels && this._fatValue.labels.empty) {
            delete this._fatValue.labels.empty;
          }
          // init labels in _fatValue
          if (this._fatValue.labels === null) {
            this._fatValue.labels = {};
          }
          // set modified on changes
          this._fatValue.labels.modified = true;
        }
        this.setFnaFieldValue(this._fatValue);
      } else if (this.getDataType() === 'furo.StringOptionProperty') {
        const strOpt = {
          id: newValue,
          display_name: selectedOption.textContent,
        };
        this.setFnaFieldValue(strOpt);
        return;
      } else if (this.isWrapper()) {
        this._tmpValue = newValue === '' ? null : newValue;
        this.setFnaFieldValue(newValue === '' ? null : newValue);
      } else {
        if (this.getDataType() === 'enum') {
          newValue = parseInt(newValue, 10);
        }
        this._tmpValue = newValue;
        this.setFnaFieldValue(newValue === '' ? '' : newValue);
      }
    }

    this.dispatchEvent(Events.buildChangeEvent(selectedOption));

    const customSelectEvent = new Event('item-selected', {
      composed: true,
      bubbles: true,
    });
    customSelectEvent.detail = selectedOption;
    this.dispatchEvent(customSelectEvent);
  }

  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'furo-ui5-select';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

FuroUi5Select.define();

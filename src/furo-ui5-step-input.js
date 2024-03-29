import * as StepInput from '@ui5/webcomponents/dist/StepInput.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { Events } from './lib/Events.js';

import '@ui5/webcomponents-icons/dist/alert.js';
import '@ui5/webcomponents-icons/dist/information.js';
import '@ui5/webcomponents-icons/dist/error.js';

/**
 * The furo-ui5-step-input component allows the user to enter and edit numbers with data binding. It consists of an
 * input field and buttons with icons to increase/decrease the value with the predefined step.
 * It supports all features from the [SAP ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/StepInput/).
 *
 * You can bind any `number` type, any `furo.fat.xxx` number type, `furo.BigDecimal` or the `google.wrapper.xxx` number types.
 *
 * ```html
 *  <furo-ui5-number-input
 *     fn-bind-data="--dao(FIELDNODE)"
 *  ></furo-ui5-number-input>
 * ```
 *
 * ### Specificity
 * 1. Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat.
 * 2. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat.
 *
 * | meta  | fat  | html  |
 * |------  |-----  |------  |
 * | 1      | 10    | 100    |
 *
 *
 * ## supported FAT attributes
 *  - **"readonly":"true"** set the element to readonly
 *  - **"required":"true"** set the element to required
 *  - **"disabled":"true"** set the element to disabled
 *  - **"placeholder":"string"** set the placeholder for the element
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 * - **placeholder:"some string"** set the placeholder for the element
 *
 * The constraint **required** will mark the element as required
 *
 * ## Methods
 * **bind-data(fieldNode)**
 * Bind an entity field. You can use the entity even when no data was received.
 *
 * When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)
 *
 * @fires {`number`} change -  Fired when the input operation has finished by pressing Enter or on focusout.
 * @fires {} input -  Fired when the value of the ui5-input changes at each keystroke, and when a suggestion item has been selected.
 *
 * @fires {`string`} furo-value-changed - Fires the field value when it changes.
 *
 * @summary data step input field
 * @element furo-ui5-step-input
 * @demo demo-furo-ui5-number-input Basic usage (scalar , fat, wrapper values)
 * @demo demo-furo-ui5-text-input Basic usage (scalar , fat, wrapper values)
 * @demo demo-furo-ui5-text-input-together playground
 */
export class FuroUi5StepInput extends FieldNodeAdapter(StepInput.default) {
  constructor() {
    super();
    // used to restore the state after a invalidation -> validation change
    this.__previousValueState = { state: 'None', message: '' };

    /**
     * @private
     */
    this._attributesFromFNA = {
      readonly: undefined,
      placeholder: undefined,
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
    this._attributesFromFAT = {
      placeholder: undefined,
    };

    /**
     * a list of privileged attributes. when those attributes are set in number-input components initially.
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

    this.addEventListener('change', this._updateFNA);
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

  // overwrite. fix for ui5 input error under rc14
  //
  //  @private
  //
  // eslint-disable-next-line class-methods-use-this
  get nativeInputAttributes() {
    return {};
  }

  /**
   * Binds a FieldNode to the component.
   *
   * Supported types:
   * - `double`, `float`, `int32`, `uint32`, `sint32`, `fixed32`, `sfixed32`, `int64`, `uint64`, `sint64`, `fixed64`, `sfixed64`
   * - `google.protobuf.DoubleValue`, `google.protobuf.FloatValue`, `google.protobuf.Int32Value`, etc.
   * - `furo.fat.Doube`, `furo.fat.Float`, `furo.fat.Int32`, etc.
   * - `furo.BigDecimal`
   * @param fieldNode {FieldNode}
   */
  bindData(fieldNode) {
    return super.bindData(fieldNode);
  }

  /**
   * Reads the attributes which are set on the component dom.
   * those attributes can be set. `value-state`, `value-state-message`,  `icon`, `placeholder`, `required`,`readonly`,`disabled`
   * Use this after manual or scripted update of the attributes.
   */
  readAttributes() {
    this.__previousValueState.state = this.getAttribute('value-state')
      ? this.getAttribute('value-state')
      : 'None';
    // save the original attribute for later usages, we do this, because some components reflect
    Object.keys(this._privilegedAttributes).forEach(attr => {
      this._privilegedAttributes[attr] = this.getAttribute(attr);
    });
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
        this._tmpFAT.value = parseFloat(value);
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
    } else if (this.getDataType() === 'furo.BigDecimal') {
      const v = { unscaled_value: null, scale: null };
      if (value !== '') {
        const matches = `${value}`.match(/(.\d*)\D(\d*)/);
        if (matches !== null) {
          v.scale = matches[2].length;
          v.unscaled_value = parseInt(matches[1] + matches[2], 10);
        } else {
          v.scale = 0;
          v.unscaled_value = parseInt(value, 10);
        }
      }

      this.setFnaFieldValue(v);
    } else if (this.isWrapper()) {
      this.setFnaFieldValue(value === '' ? null : parseFloat(value));
    } else {
      this.setFnaFieldValue(value === '' ? 0 : parseFloat(value));
    }

    this.dispatchEvent(Events.buildChangeEvent(this.value));
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
    this._attributesFromFAT.placeholder = fatAttributes.placeholder;

    // placeholder
    if (this._privilegedAttributes.placeholder === null) {
      if (fatAttributes.placeholder !== undefined) {
        this.placeholder = fatAttributes.placeholder;
      } else if (this._attributesFromFNA.placeholder !== undefined) {
        this.placeholder = this._attributesFromFNA.placeholder;
      }
    }

    // value-state and corresponding message
    if (fatAttributes['value-state'] !== undefined) {
      // save state as previous state
      this.__previousValueState = {
        state: fatAttributes['value-state'],
        message: fatAttributes['value-state-message'],
      };
      this._setValueStateMessage(
        fatAttributes['value-state'],
        fatAttributes['value-state-message']
      );
    } else {
      // remove state if fat does not have state, even it is set in the html
      this.__previousValueState = {
        state: 'None',
        message: fatAttributes['value-state-message'],
      };
      this._setValueStateMessage('None', fatAttributes['value-state-message']);
    }
  }

  /**
   * rewrite get accInfo function
   * initiate _inputAccInfo in order to avoid error
   * @private
   * @returns {*}
   */
  get accInfo() {
    if (this._inputAccInfo === undefined) {
      this._inputAccInfo = [];
    }
    return super.accInfo;
  }

  /**
   * overwrite to fix error
   * @private
   * @returns {*|{}}
   */
  get valueStateMessage() {
    return super.valueStateMessage || {};
  }

  /**
   * overwrite onFnaFieldValueChanged
   * @private
   * @param val
   */
  onFnaFieldValueChanged(val) {
    if (this.isFat()) {
      this._tmpFAT = val;
      if (val.value === null || val.value === undefined) {
        if (val.labels && val.labels.empty) {
          this.value = 0;
        } else {
          this.value = '';
        }
      } else {
        this.value = val.value;
      }

      // set empty value when label empty was given and the default value is set.
      if (this._tmpFAT.labels && this._tmpFAT.labels.empty && val.value === 0) {
        this.value = '';
      }
      this._updateAttributesFromFat(this._tmpFAT.attributes);
      this._updateLabelsFromFat(this._tmpFAT.labels);
    } else if (this.getDataType() === 'furo.BigDecimal') {
      if (val.scale === null && val.unscaled_value === null) {
        this.value = '';
      } else {
        // treat as strings, because
        // this.value = val.unscaled_value * Math.pow(10, -val.scale)
        // will not work
        const vstr = val.unscaled_value.toString(10);
        if (val.scale < 0) {
          this.value = parseInt(vstr + ''.padEnd(Math.abs(val.scale), 0), 10);
        } else {
          this.value = parseFloat(
            `${vstr.substr(0, vstr.length - val.scale)}.${vstr.substr(
              vstr.length - val.scale
            )}`
          );
        }
      }
    } else if (val === null || val === undefined) {
      this.value = '';
    } else {
      this.value = val;
    }
  }

  /**
   * overwrite onFnaPlaceholderChanged function
   * @private
   * @param placeholder
   */
  onFnaPlaceholderChanged(placeholder) {
    this._attributesFromFNA.placeholder = placeholder;
    if (
      this._privilegedAttributes.placeholder === null &&
      this._attributesFromFAT.placeholder === undefined
    ) {
      this.placeholder = placeholder;
    }
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
  }

  /**
   * set the value state
   * @param state
   */
  onFnaFieldStateChanged(state) {
    this._setValueStateMessage(state.state, state.description);
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
    } else {
      this.valueState = 'Error';
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
   * updates the value state and the value state message on demand
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
    this.valueState = this.__previousValueState.state;

    if (this.__previousValueState?.message?.length) {
      this._setValueStateMessage(
        this.__previousValueState.state,
        this.__previousValueState.message
      );
    } else {
      this._removeValueStateMessage();
    }
  }

  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'furo-ui5-step-input';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

FuroUi5StepInput.define();

import * as CheckBox from '@ui5/webcomponents/dist/CheckBox.js';

// eslint-disable-next-line import/no-extraneous-dependencies
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { Events } from './lib/Events.js';

/**
 * The 'furo-ui5-checkbox-input' component allows the user to switch true and false for type Bool with data binding.
 *
 * It supports all features from the [SAP ui5 checkbox element](https://sap.github.io/ui5-webcomponents/playground/components/CheckBox/).
 *
 * Bindable FieldNodes: `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.
 *
 *```html
 *  <furo-ui5-checkbox-input
 *     ƒ-bind-data="--dao(FIELDNODE)"
 *  ></furo-ui5-checkbox-input>
 * ```
 *
 * ### Specificity
 * 1. Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat.
 * 2. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat.
 *
 * | meta 	| fat 	| html 	|
 * |------	|-----	|------	|
 * | 1    	| 10  	| 100  	|
 *
 *
 * ## supported FAT attributes
 *  - **"readonly":"true"** set the element to readonly
 *  - **"disabled":"true"** set the element to disabled
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 *
 * The constraint **required** will mark the element as required.
 *
 * @fires {Boolean} change -  Fired when the checkbox checked state changes.
 * @fires {Boolean} furo-value-changed - Fires the field value when it changes.
 *
 * @summary data checkbox input field
 * @element furo-ui5-checkbox-input
 */
export class FuroUi5CheckboxInput extends FieldNodeAdapter(CheckBox.default) {
  constructor() {
    super();

    /**
     * used to restore the state after a invalidation -> validation change
     * @type {string}
     * @private
     */
    this._previousValueState = 'None';
    /**
     *
     * @private
     */
    this._attributesFromFNA = {
      readonly: undefined,
      disabled: undefined,
      label: undefined,
    };

    /**
     *
     * @type {{}}
     * @private
     */
    this._constraintsFromFNA = {};
    /**
     *
     * @type {{label: undefined}}
     * @private
     */
    this._attributesFromFAT = {
      label: undefined,
    };

    /**
     *
     * @type {{readonly: undefined, disabled: undefined}}
     * @private
     */
    this._labelsFromFAT = {
      readonly: undefined,
      disabled: undefined,
    };

    /**
     * a list of privileged attributes. when those attributes are set in number-input components initially.
     * they can not be modified later via response or spec
     * null is used because getAttribute returns null or value
     *
     * @type {{readonly: null, disabled: null, text: null}}
     * @private
     */
    this._privilegedAttributes = {
      readonly: null,
      disabled: null,
      text: null,
      indeterminate: null,
      checked: null,
    };

    this.addEventListener('change', this._updateFNA);
  }

  /**
   * Checks the checkbox and updates the value
   */
  check() {
    this.checked = true;
    this._updateFNA();
  }

  /**
   * Unhecks the checkbox and updates the value
   */
  uncheck() {
    this.checked = false;
    this._updateFNA();
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
   * Binds a FieldNode to the component.
   *
   * Supported types: `bool`, `google.protobuf.BoolValue`, `furo.fat.Bool`
   * @param fieldNode {FieldNode} of type: `bool`, `google.protobuf.BoolValue`, `furo.fat.Bool`
   */
  bindData(fieldNode) {
    return super.bindData(fieldNode);
  }

  /**
   * Reads the attributes which are set on the component dom.
   * @public
   */
  readAttributes() {
    this._previousValueState = this.getAttribute('value-state')
      ? this.getAttribute('value-state')
      : 'None';
    // save the original attribute for later usages, we do this, because some components reflect
    Object.keys(this._privilegedAttributes).forEach(attr => {
      this._privilegedAttributes[attr] = this.getAttribute(attr);
    });
  }

  /**
   * Handler function for the checkbox changes.
   * @return {(function(): void)|*}
   * @private
   */
  _updateFNA() {
    if (this.isFat()) {
      this._tmpFAT.value = this.checked || this.indeterminate;
      // set modified on changes
      if (this._tmpFAT.labels === null) {
        this._tmpFAT.labels = {};
      }
      this._tmpFAT.labels.modified = true;

      this.setFnaFieldValue(this._tmpFAT);
    } else if (this.isWrapper()) {
      this.setFnaFieldValue(this.checked || this.indeterminate);
    } else {
      this.setFnaFieldValue(this.checked);
    }

    this.dispatchEvent(Events.buildChangeEvent(this.checked));
  }

  /**
   * overwrite onFnaFieldValueChanged
   * @param val
   * @private
   */
  onFnaFieldValueChanged(val) {
    if (this.isFat()) {
      this._tmpFAT = val;
      if (
        val &&
        val.value === false &&
        val.labels &&
        val.labels.empty === true
      ) {
        this.checked = true;
        this.indeterminate = true;
      } else {
        this.checked = !!val.value;
        this.indeterminate = false;
      }
      this._updateAttributesFromFat(this._tmpFAT.attributes);
      this._updateLabelsFromFat(this._tmpFAT.labels);
    } else if (this.isWrapper()) {
      if (val === null) {
        this.checked = true;
        this.indeterminate = true;
      } else {
        this.checked = !!val;
        this.indeterminate = false;
      }
    } else {
      this.checked = !!val;
    }
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
    // this is needed to check the specifity in the onFnaReadonlyChanged callback functions
    this._labelsFromFAT.readonly = fatLabels.readonly;

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
    this._attributesFromFAT.label = fatAttributes.label;

    // text
    if (this._privilegedAttributes.text === null) {
      if (fatAttributes.label !== undefined) {
        this.text = fatAttributes.label;
      } else if (this._attributesFromFNA.label !== undefined) {
        this.text = this._attributesFromFNA.label;
      }
      this._render();
    }

    // value-state and corresponding message
    if (fatAttributes['value-state'] !== undefined) {
      // save state as previous state
      this._previousValueState = fatAttributes['value-state'];
      this._setValueState(fatAttributes['value-state']);
    } else {
      // remove state if fat does not have state, even it is set in the html
      // save state as previous state
      this._previousValueState = 'None';
      this._setValueState('None');
    }
  }

  /**
   * overwrite onFnaFieldNodeBecameInvalid function
   * @private
   */
  onFnaFieldNodeBecameInvalid() {
    this._setValueState('Error');
  }

  /**
   * overwrite onFnaFieldNodeBecameValid function
   * @private
   */
  onFnaFieldNodeBecameValid() {
    this._resetValueState();
  }

  /**
   * Updates the valueState
   * ui5 checkbox has only 3 states: Warning, Error, and None (default) https://sap.github.io/ui5-webcomponents/playground/components/CheckBox/
   * @private
   */
  _setValueState(valueState) {
    this.valueState = valueState;
  }

  /**
   * reset to previous value state
   * @private
   */
  _resetValueState() {
    this._setValueState(this._previousValueState);
  }

  /**
   * overwrite onFnaLabelChanged function
   * label is mapped to text
   * @param {String} placeholder
   * @private
   */
  onFnaLabelChanged(text) {
    this._attributesFromFNA.label = text;
    if (
      this._privilegedAttributes.text === null &&
      this._attributesFromFAT.label === undefined
    ) {
      this.text = text;
    }
  }

  /**
   * overwrite onFnaReadonlyChanged function
   * @private
   * @param {Boolean} readonly
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
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'furo-ui5-checkbox-input';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

FuroUi5CheckboxInput.define();

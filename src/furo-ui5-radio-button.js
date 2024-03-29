import * as RadioButton from '@ui5/webcomponents/dist/RadioButton.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { Events } from './lib/Events.js';

/**
 * The 'furo-ui5-radio-button' component allows the user to switch true and false for Bool with data binding.
 *
 * It supports all features from the [SAP ui5 toggleButton element](https://sap.github.io/ui5-webcomponents/playground/components/ToggleButton/).

 * You can bind  `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.
 *
 * ```html
 *  <furo-ui5-radio-button
 *     name="groupA"
 *     fn-bind-data="--dao(FIELDNODE)"
 *  ></furo-ui5-radio-button>
 *  <furo-ui5-radio-button
 *     name="groupA"
 *     fn-bind-data="--dao(OTHERFIELDNODE)"
 *  ></furo-ui5-radio-button>
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
 *  - **"disabled":"true"** set the element to disabled
 *  - **"icon":""** set the icon
 *  - **"value-state":""** set the value-state
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 *
 * The constraint **required** will mark the element as required
 *
 * When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)
 *
 * @fires {} change -  Fired when the input operation has finished by pressing Enter or on focusout.
 * @fires {Boolean} furo-value-changed - Fired when value changed
 *
 * @summary boolean toggle button
 * @element furo-ui5-radio-button
 * @demo demo-furo-ui5-radio-button Basic usage (scalar , fat, wrapper values)
 */
export class FuroUi5RadioButton extends FieldNodeAdapter(RadioButton.default) {
  constructor() {
    super();

    // used to restore the state after a invalidation -> validation change
    this._previousValueState = 'None';
    this._tmpFAT = { labels: {}, value: false };
    this._attributesFromFNA = {
      readonly: undefined,
      disabled: undefined,
      label: undefined,
    };

    this._constraintsFromFNA = {};

    this._attributesFromFAT = {
      name: undefined, // the group name
      label: undefined,
      icon: undefined,
      'value-state': undefined,
    };

    this._labelsFromFAT = {
      readonly: undefined,
      disabled: undefined,
      hidden: undefined,
    };

    // a list of privileged attributes. when those attributes are set in number-input components initially.
    // they can not be modified later via response or spec
    // null is used because getAttribute returns null or value
    this._privilegedAttributes = {
      name: null,
      readonly: null,
      disabled: null,
      text: null,
      icon: null,
      'value-state': null,
    };

    this.addEventListener('change', this._updateFNA);
  }

  /**
   * @private
   */
  syncGroup() {
    super.syncGroup();
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
   * @param fieldNode {FieldNode}
   */
  bindData(fieldNode) {
    return super.bindData(fieldNode);
  }

  /**
   * Reads the attributes which are set on the component dom.
   */
  readAttributes() {
    // save the original attribute for later usages, we do this, because some components reflect
    Object.keys(this._privilegedAttributes).forEach(attr => {
      this._privilegedAttributes[attr] = this.getAttribute(attr);
    });
  }

  /**
   * Handler function for the toggleButton changes.
   * @return {(function(): void)|*}
   * @private
   */
  _updateFNA() {
    if (this.isFat()) {
      this._tmpFAT.value = this.checked;
      // set modified on changes
      if (this._tmpFAT.labels === null) {
        this._tmpFAT.labels = {};
      }
      this._tmpFAT.labels.modified = true;

      this.setFnaFieldValue(this._tmpFAT);
    } else {
      this.setFnaFieldValue(this.checked);
    }
    this.dispatchEvent(Events.buildChangeEvent(this.checked));
  }

  /**
   * overwrite onFnaFieldValueChanged
   * @param val
   */
  onFnaFieldValueChanged(val) {
    if (this.isFat()) {
      this._tmpFAT = val;
      this.checked = !!val.value;
      this._updateAttributesFromFat(this._tmpFAT.attributes);
      this._updateLabelsFromFat(this._tmpFAT.labels);
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

    // icon
    if (this._privilegedAttributes.icon === null) {
      if (fatAttributes.icon !== undefined) {
        this.icon = fatAttributes.icon;
      } else if (this._attributesFromFNA.icon !== undefined) {
        this.icon = this._attributesFromFNA.icon;
      }
      this._render();
    }

    // group
    if (this._privilegedAttributes.group === null) {
      if (fatAttributes.group !== undefined) {
        this.group = fatAttributes.group;
      } else if (this._attributesFromFNA.group !== undefined) {
        this.group = this._attributesFromFNA.group;
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
      this._previousValueState = 'None';
      this._setValueState(fatAttributes['value-state']);
    }
  }

  /**
   * overwrite onFnaFieldNodeBecameInvalid function
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
   * Updates the state
   *
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
   * @param placeholder
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
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'furo-ui5-radio-button';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

FuroUi5RadioButton.define();

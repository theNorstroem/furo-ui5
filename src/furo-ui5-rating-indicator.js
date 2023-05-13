import * as RatingIndicator from '@ui5/webcomponents/dist/RatingIndicator.js';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { Events } from './lib/Events.js';

/**
 * The furo-ui5-rating-indicator  is used to display a specific number of icons that are used to rate an item.
 * Additionally, it is also used to display the average and overall ratings.
 * https://sap.github.io/ui5-webcomponents/playground/components/RatingIndicator/
 *
 * You can bind any `number` type, any `furo.fat.xxx` number type, `furo.BigDecimal` or the `google.wrapper.xxx` number types.
 *
 * ```html
 *  <furo-ui5-rating-indicator
 *     fn-bind-data="--dao(FIELDNODE)"
 *  ></furo-ui5-rating-indicator>
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
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 *
 * ## Methods
 * **bind-data(fieldNode)**
 * Bind aa entity field. You can use the entity even when no data was received.
 *
 * When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)
 *
 * @fires {`number`} change -  Fired when the values changes.
 * @fires {`number`} furo-value-changed - Fires the field value when it changes.
 *
 * @summary data rating input field
 * @element furo-ui5-rating-indicator
 */
export class FuroUi5RatingIndicator extends FieldNodeAdapter(
  RatingIndicator.default
) {
  constructor() {
    super();

    /**
     * @private
     */
    this._attributesFromFNA = {
      readonly: undefined,
    };

    /**
     * @private
     */
    this._labelsFromFAT = {
      readonly: undefined,
      disabled: undefined,
      hidden: undefined,
    };

    /**
     * a list of privileged attributes. when those attributes are set in number-input components initially.
     * they can not be modified later via response or spec
     * null is used because getAttribute returns null or value
     * @private
     */
    this._privilegedAttributes = {
      readonly: null,
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
   * Reads the attributes which are set on the component dom.
   * those attributes can be set. `readonly`,`disabled`
   * Use this after manual or scripted update of the attributes.
   */
  readAttributes() {
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
        const matches = value.match(/(\d*)\D(\d*)/);
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
   * labels are map <string,bool>, we handle every boolean attribute with the labels
   *
   * @param fatLabels
   * @private
   */
  _updateLabelsFromFat(fatLabels) {
    if (fatLabels === null || fatLabels === undefined) {
      return;
    }
    // this is needed to check the specificity in the onFnaXXXXChanged callback functions
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
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'furo-ui5-rating-indicator';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}
FuroUi5RatingIndicator.define();

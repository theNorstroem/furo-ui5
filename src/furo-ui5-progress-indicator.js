import * as ProgressIndicator from '@ui5/webcomponents/dist/ProgressIndicator.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@ui5/webcomponents/dist/features/InputSuggestions.js';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';

/**
 * A furo-ui5-progress-indicator shows the progress of a process in a graphical way. To indicate the progress, the inside of the component is filled with a color..
 * https://sap.github.io/ui5-webcomponents/playground/components/ProgressIndicator/
 *
 * Supported type: You can bind any `number` type, any `furo.fat.xxx` number type, `furo.BigDecimal` or the `google.wrapper.xxx` number types
 *
 * ```html
 * <furo-ui5-progress-indicator fn-bind-data="--dao(FIELDNODE)"></furo-ui5-progress-indicator>
 * ```
 *
 * @summary repeated strings
 * @element furo-ui5-progress-indicator
 * @appliesMixin FieldNodeAdapter
 */
export class FuroUi5ProgressIndicator extends FieldNodeAdapter(
  ProgressIndicator.default
) {
  constructor() {
    super();

    /**
     * used to restore the state after a invalidation -> validation change
     * @type {{state: string, message: string}}
     * @private
     */
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
      icon: null,
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
    this._attributesFromFAT.icon = fatAttributes.icon;

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

    // suggestions
    // see Properties/Attributes from ui5 on https://sap.github.io/ui5-webcomponents/playground/components/Input/
    if (fatAttributes.suggestions !== undefined) {
      if (typeof fatAttributes.suggestions === 'string') {
        this._setSuggestions(JSON.parse(fatAttributes.suggestions));
      } else if (Array.isArray(fatAttributes.suggestions)) {
        this._setSuggestions(fatAttributes.suggestions);
      }
    }

    // icon
    if (
      this._privilegedAttributes.icon === null &&
      fatAttributes.icon !== undefined
    ) {
      this._setIcon(fatAttributes.icon);
    }
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
    if (this._privilegedAttributes.icon) {
      this._setIcon(this._privilegedAttributes.icon);
    }
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
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'furo-ui5-progress-indicator';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

FuroUi5ProgressIndicator.define();

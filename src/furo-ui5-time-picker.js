import '@ui5/webcomponents/dist/generated/i18n/i18n-defaults.js';
import * as TimePicker from '@ui5/webcomponents/dist/TimePicker.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { Events } from './lib/Events.js';

/**
 * The furo-ui5-time-picker component allows the user to bind a field of type google.type.TimeOfDay.
 * Represents a time of day. The date and time zone are either not significant
 * or are specified elsewhere.
 *
 * https://sap.github.io/ui5-webcomponents/playground/components/TimePicker/
 *
 * Supported format options are pattern-based on Unicode LDML Date Format notation. For more information, see
 * UTS #35: Unicode Locale Data Markup Language.
 *
 * For example, if the format-pattern is "hh:mm:ss", a valid value string is "11:42:35" and the same is displayed in the input.
 *
 * The text field can be editable or read-only (readonly property), and it can be enabled or disabled (enabled property).
 * To visualize semantic states, such as "error" or "warning", the valueState property is provided.
 * When the user makes changes to the time, the change event is fired, which enables you to react on any time change.
 *
 * You can bind a `string` or `google.type.TimeOfDay` (https://github.com/googleapis/googleapis/blob/master/google/type/timeofday.proto).
 *
 * ```html
 *  <furo-ui5-time-picker
 *     fn-bind-data="--data(*.start_time)">
 *  </furo-ui5-time-picker>
 * ```
 *
 * ## supported meta and constraints
 * - **readonly: true** , set the element to readonly
 * - **placeholder:"some string"** set the placeholder for the element
 * - **min:"11:42:35"** set the minDate for the element (use iso date in the constraint)
 * - **max:"23:59:59"** set the maxDate for the element (use iso date in the constraint)
 * - **pattern:"HH:mm:ss"** set the pattern for the element
 *
 * The constraint **required** will mark the element as required
 *
 * ## Methods
 * **bind-data(fieldNode)**
 * Bind a entity field. You can use the entity even when no data was received.
 *
 * When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)
 *
 * @fires {String} furo-value-changed - Fires the field value when it changes in ISO 8601 format.
 * @fires change - Fired when the input operation has finished by pressing Enter or on focusout.
 *
 * @summary furo data time picker field
 * @element furo-ui5-time-picker
 */
export class FuroUi5TimePicker extends FieldNodeAdapter(TimePicker.default) {
  /**
   * Constructor of the element
   */
  constructor() {
    super();
    this.formatPattern = ''; // needed to avoid cldr errors

    /**
     * used to restore the state after a invalidation -> validation change
     *
     * @private
     */
    this._previousValueState = { state: 'None', message: '' };
    /**
     *
     * @private
     */
    this._attributesFromFNA = {
      readonly: undefined,
      placeholder: undefined,
      min: undefined,
      max: undefined,
      pattern: undefined,
    };
    /**
     *
     * @private
     */
    this._constraintsFromFNA = {
      required: undefined,
    };

    /**
     * a list of privileged attributes. when those attributes are set in number-input components initially.
     * they can not be modified later via response or spec
     * null is used because getAttribute returns null or value
     *
     * @private
     */
    this._privilegedAttributes = {
      readonly: null,
      placeholder: null,
      required: null,
      disabled: null,
      maxDate: null,
      minDate: null,
      formatPattern: null,
    };

    // input event is needed to get the reset of the field.
    // change is not fired if the user clears the input field.
    this.addEventListener('input', v => {
      this._updateFNA(v);
    });

    // changed is fired when the input operation has finished by pressing Enter or on focusout.
    this.addEventListener('change', v => {
      this._updateFNA(v);
    });
  }

  /**
   * update of the bound FieldNode
   * @param event {Event}
   * @private
   */
  _updateFNA(event) {
    const e = event.detail;
    const type = this.getDataType();
    switch (type) {
      case 'google.type.TimeOfDay':
        if (e.value !== '' && e.valid) {
          const timeOfDay = {
            hours: null,
            minutes: null,
            seconds: null,
            nanos: null,
          };
          // update only if there is a dateValue
          // becaus during typying there is no value at the beginning
          if (this.dateValue) {
            timeOfDay.hours = this.dateValue.getHours();
            timeOfDay.minutes = this.dateValue.getMinutes();
            timeOfDay.seconds = this.dateValue.getSeconds();
            timeOfDay.nanos = this.dateValue.getMilliseconds();
            this.setFnaFieldValue(timeOfDay);
          }
        } else {
          this.setFnaFieldValue(null);
        }
        break;
      case 'string':
      default:
        if (e.value !== '' && e.valid) {
          const DATE = new Date(`${new Date().toDateString()} ${e.value}`);
          this.setFnaFieldValue(this.formatValue(DATE));
        } else {
          this.setFnaFieldValue('');
        }
    }

    /**
     * Fired when value changed
     * Payload: {Time}
     * @type {Event}
     */
    this.dispatchEvent(Events.buildChangeEvent(this.dateValue));
  }

  /**
   * Workaround for language request
   * @private
   */
  get valueStateMessage() {
    return super.valueStateMessage || [];
  }

  /**
   * FieldNodeAdapter callback function to
   * handle changes on the model.
   * @param value
   *
   */
  onFnaFieldValueChanged(value) {
    const type = this.getDataType();
    switch (type) {
      case 'google.type.TimeOfDay':
        if (
          value === null ||
          value === undefined ||
          value.hours === null ||
          value.hours === 0
        ) {
          this.value = '';
        } else {
          this.value = this.formatValue(
            new Date(
              Date.UTC(
                0,
                0,
                0,
                value.hours - 1,
                value.minutes,
                value.seconds,
                value.nanos
              )
            )
          );
        }
        break;
      case 'string':
      default:
        if (value === '' || value === null || value === undefined) {
          this.value = '';
        } else {
          const DATE = new Date(`${new Date().toDateString()} ${value}`);
          this.value = this.formatValue(DATE);
        }
    }
  }

  /**
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

  /**
   * Reads the attributes which are set on the component dom.
   * those attributes can be set. `value-state`, `value-state-message`,  `icon`, `placeholder`, `required`,`readonly`,`disabled`
   *
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
   * set the value state
   * @param state
   */
  onFnaFieldStateChanged(state) {
    this._setValueStateMessage(state.state, state.description);
  }

  /**
   * overwrite onFnaFieldNodeBecameInvalid function
   * @private
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
   * overwrite onFnaPlaceholderChanged function
   * @private
   * @param placeholder
   */
  onFnaPlaceholderChanged(placeholder) {
    this._attributesFromFNA.placeholder = placeholder;
    if (this._privilegedAttributes.placeholder === null) {
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
    if (this._privilegedAttributes.readonly === null) {
      this.readonly = readonly;
    }
  }

  /**
   * overwrite onFnaConstraintsChanged function
   * @private
   * @param constraints
   */
  onFnaConstraintsChanged(constraints) {
    // set this first if available, the following constraints uses formatValue()
    if (constraints.pattern !== undefined) {
      this._constraintsFromFNA.pattern = constraints.pattern;
      if (this._privilegedAttributes.formatPattern === null) {
        this.formatPattern = constraints.pattern.is;
      }
    }

    // required
    if (constraints.required !== undefined) {
      this._constraintsFromFNA.required = constraints.required;
      if (this._privilegedAttributes.required === null) {
        this.required = constraints.required.is === 'true';
      }
    }

    if (constraints.min !== undefined) {
      this._constraintsFromFNA.min = constraints.min;
      if (this._privilegedAttributes.minDate === null) {
        this.minDate = new Date(
          `${new Date().toDateString()} ${constraints.min.is}`
        );
      }
    }

    if (constraints.max !== undefined) {
      this._constraintsFromFNA.max = constraints.max;
      if (this._privilegedAttributes.maxDate === null) {
        this.maxDate = new Date(
          `${new Date().toDateString()} ${constraints.max.is}`
        );
      }
    }
  }

  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'furo-ui5-time-picker';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

FuroUi5TimePicker.define();

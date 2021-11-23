import { LitElement, css } from 'lit';

import { FBP } from '@furo/fbp';
import { NodeEvent } from '@furo/framework/src/EventTreeNode.js';

/**
 * `furo-ui5-property`
 *  Field for type furo.Property. This can be used to display "dynamic" fields aka properties.
 *  It works with repeated types and non repeating property types.
 *
 *  ```html
 *  <furo-ui5-property ƒ-bind-data="--entity(*.single_type_property)"></furo-ui5-property>
 *  ```
 *
 *  ## Example data for the data-object looks like this
 *
 *  ```json
 *  "single_type_property": {
 *    "data": {
 *      "@type": "google.type.Date",
 *      "day": 8,
 *      "month":  11,
 *      "year": 2022
 *    },
 *    "display_name": "a date",
 *    "id": "date",
 *    "code": "date",
 *    "meta": {
 *      "fields": {
 *        "data": {
 *          "meta": {
 *            "label": "Additional fields",
 *            "hint": "this is data"
 *          },
 *          "constraints": {
 *            "min": {
 *              "value": "2019-09-09",
 *              "message": "to small"
 *            }
 *          }
 *        }
 *      }
 *    }
 *  }
 *  ```
 * ## Example StringOptions Field
 *
 * ```json
 * {
 *   "data": {
 *        "@type": "furo.StringOptionProperty",
 *        "id": "bb",
 *        "display_name": "Display"
 *      },
 *      "display_name": "Display",
 *      "id": "opt",
 *      "code": "option",
 *      "meta": {
 *        "fields": {
 *          "data": {
 *            "meta": {
 *              "label": "Please select",
 *              "hint": "datehint is data",
 *              "repeated": false,
 *              "options": [
 *                {
 *                  "id": "aa",
 *                  "display_name": "The display a"
 *                },
 *                {
 *                  "id": "bb",
 *                  "display_name": "The display b"
 *                }
 *              ]
 *            }
 *          }
 *        }
 *      }
 *    }
 *
 * ```
 *
 *  The current type mappings are:
 *
 * - "google.type.Date": "furo-ui5-date-input"
 * - "furo.StringProperty": "furo-ui5-text-input"
 * - "furo.IntegerProperty": "furo-ui5-number-input"
 * - "furo.NumberProperty": "furo-ui5-number-input"
 * - "furo.StringOptionProperty": "furo-ui5-collection-dropdown"
 *
 * @summary display and bind types of type any
 * @element
 * @demo demo-furo-ui5-property
 * @appliesMixin FBP
 */
export class FuroUi5Property extends FBP(LitElement) {
  constructor() {
    super();
    // default context
    this.context = 'form';
  }

  bindData(propertyField) {
    this.field = propertyField;

    if (propertyField._isRepeater) {
      // we want a fresh list on every update of the list, because the types and order of the list items can change
      // eslint-disable-next-line no-param-reassign
      propertyField.clearListOnNewData = true;

      // add flow repeat to parent and inject on repeated changes
      // repeated
      const r = document.createElement('flow-repeat');
      r.setAttribute('identity-path', 'id._value');

      let attrs = '';
      const l = this.attributes.length;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < l; ++i) {
        const { nodeName } = this.attributes.item(i);
        const { nodeValue } = this.attributes.item(i);
        if (!nodeName.startsWith('@') && !nodeName.startsWith('ƒ')) {
          attrs += `${nodeName}="${nodeValue}"`;
        }
      }
      r.innerHTML = `<template><furo-ui5-property ƒ-bind-data='--init' ${attrs}></furo-ui5-property></template>`;

      const repeater = this.parentNode.insertBefore(r, this);
      this._createdRepeater = repeater;

      this.field.addEventListener('this-repeated-field-changed', () => {
        repeater.injectItems(this.field.repeats);
      });
      // inject if data is already here
      if (this.field.repeats.length > 0) {
        repeater.injectItems(this.field.repeats);
      }
    } else {
      // data already in data-object
      // eslint-disable-next-line no-lonely-if
      if (this.field.data['@type']) {
        this._createPropComponent(propertyField);
      } else {
        this.field.data.addEventListener(
          'branch-value-changed',
          () => {
            this._createPropComponent(propertyField);
          },
          { once: true }
        );
      }
    }
  }

  _createPropComponent(propertyField) {
    if (!this._property_created) {
      const type = propertyField.data['@type']._value.replace(/.*\//, '');
      this.renderName = `${this.context}-${type
        .replace(/.*\//, '')
        .replaceAll('.', '-')
        .replaceAll('_', '-')
        .toLocaleLowerCase()}`;

      const e = document.createElement(this.renderName);

      /**
       * Append all additional flags
       */
      if (propertyField.flags && propertyField.flags.repeats.length) {
        const len = propertyField.flags.repeats.length;
        // eslint-disable-next-line no-plusplus
        for (let f = 0; f < len; ++f) {
          const flag = propertyField.flags.repeats[f]._value;
          if (!flag.startsWith('@') && !flag.startsWith('ƒ')) {
            e.setAttribute(flag, '');
          }
        }
      }

      // Grab all of the original's attributes, and pass them to the replacement
      const l = this.attributes.length;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < l; ++i) {
        const { nodeName } = this.attributes.item(i);
        const { nodeValue } = this.attributes.item(i);
        if (!nodeName.startsWith('@') && !nodeName.startsWith('ƒ')) {
          e.setAttribute(nodeName, nodeValue);
        }
      }

      if (e.bindData) {
        switch (type) {
          // the input elements for string and number are just working with scalar values
          case 'google.protobuf.FloatValue':
          case 'google.protobuf.Int32Value':
          case 'google.protobuf.UInt32Value':
          case 'google.protobuf.Int64Value':
          case 'google.protobuf.UInt64Value':
          case 'google.protobuf.StringValue':
          case 'google.protobuf.BoolValue':
          case 'google.protobuf.DoubleValue':
            e.bindData(propertyField.data.value);
            break;

          default:
            e.bindData(propertyField.data);
        }

        this._createdProp = this.parentNode.insertBefore(e, this);
        propertyField.data.dispatchNodeEvent(
          new NodeEvent('this-metas-changed', propertyField.data, false)
        );
        this._property_created = true;
      } else {
        // eslint-disable-next-line no-console
        console.warn(e, ': bind-data missing or not imported', this);
      }
    }
  }

  disconnectedCallback() {
    if (this._createdProp) {
      this._createdProp.remove();
    }
    if (this._createdRepeater) {
      this._createdRepeater.remove();
    }
  }

  static get styles() {
    // language=CSS
    return css`
      :host {
        display: none;
      }
    `;
  }
}

window.customElements.define('furo-ui5-property', FuroUi5Property);

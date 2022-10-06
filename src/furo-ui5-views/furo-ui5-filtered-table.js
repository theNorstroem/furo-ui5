import { literal, html as statichtml } from 'lit/static-html.js';
import { FuroUi5Table } from '../furo-ui5-table.js';

/**
 * `furo-ui5-filtered-table` is a table which work with `furo-ui5-views`. It accepts field orders and a set of visible fields.
 *
 * It works like a `furo-ui5-table` but has the ability to reorder the columns. The only action you have to take is to set
 * the `id` attribute on the `ui5-table-column`. The id must match to the `field_name` attribute on the table_settings.
 *
 * ```html
 *           <furo-ui5-filtered-table*
 *             fn-bind-data="--collectionDao(*.entities)"
 *             fn-set-columns="|--setColumns"
 *           >
 *             <ui5-table-column
 *               slot="columns"
 *               field="*.data.id"
 *               id="id"
 *               min-width="650"
 *               demand-popin
 *               popin-text="id"
 *               ><span>id</span></ui5-table-column
 *             >
 *             <ui5-table-column
 *               slot="columns"
 *               field="*.data.display_name"
 *               id="display_name"
 *               min-width="400"
 *               demand-popin
 *               popin-text="display_name"
 *               ><span>display_name</span></ui5-table-column
 *             >
 * ```
 *
 * @summary table with flexible columns
 * @customElement furo-ui5-filtered-table
 * @appliesMixin FBP
 */
class FuroUi5FilteredTable extends FuroUi5Table {
  constructor() {
    super();
    // parkplatz
    this._colheaders = {};
  }

  /**
   * ui5 data table cell template
   * @param fields
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  _cellMap() {
    const items = [];
    this._tableSettings.forEach(cell => {
      if (cell.show._value === true && this._pathMap[cell.field_name._value]) {
        items.push(
          `<ui5-table-cell><${this._pathMap[cell.field_name._value].renderer} `
        );
        items.push(
          `fn-bind-data="--init(${
            this._pathMap[cell.field_name._value].fieldPath
          })" `
        );
        items.push(`context="${this._pathMap[cell.field_name._value].ctx}"`);
        items.push(
          `></${
            this._pathMap[cell.field_name._value].renderer
          }></ui5-table-cell>`
        );
      }
    });
    return literal([items.join('')]);
  }

  /**
   *
   * @private
   */
  _initRepeatTemplate() {
    if (this._tableSettings) {
      this._rowRepeatTemplate = statichtml`<template>
        <furo-ui5-table-row fn-set-data='--init(*)' fn-focus='--trigger'>
          ${this._cellMap()}
        </furo-ui5-table-row>
    </template>`;
    } else {
      this._rowRepeatTemplate = statichtml`<template><furo-ui5-table-row></furo-ui5-table-row></template>`;
    }
  }

  /**
   * setColumns sets the column order and the visible columns
   * @public
   * @param sortedlist
   */
  setColumns(sortedlist) {
    this._tableSettings = sortedlist;
    const { children } = this.shadowRoot.querySelector('ui5-table');
    let lastE;
    this._pathMap = {};

    // store a ref to all items
    this._tableSettings.forEach(n => {
      if (children[n.field_name._value]) {
        this._colheaders[n.field_name._value] = children[n.field_name._value];
      }
    });

    this._tableSettings.forEach(n => {
      if (this._colheaders[n.field_name._value]) {
        if (!n.show._value) {
          this._colheaders[n.field_name._value].remove();
        } else {
          if (lastE) {
            lastE.after(this._colheaders[n.field_name._value]);
          } else {
            this.shadowRoot
              .querySelector('ui5-table')
              .append(this._colheaders[n.field_name._value]);
          }

          lastE = this._colheaders[n.field_name._value];

          this._pathMap[n.field_name._value] = {
            fieldPath: children[n.field_name._value].getAttribute('field'),
            renderer:
              children[n.field_name._value].getAttribute('renderer') ||
              'furo-type-renderer',
            ctx:
              children[n.field_name._value].getAttribute('context') || 'cell',
          };
        }
      }
    });

    this._initRepeatTemplate();
    this.requestUpdate();
    // update the repeater template
    this.updateComplete.then(() => {
      const repeater = this.shadowRoot.querySelector('flow-repeat');
      const t = repeater.querySelector('template');
      if (t && t.content) {
        repeater.template = t.content;
      }
    });
  }
}

window.customElements.define('furo-ui5-filtered-table', FuroUi5FilteredTable);

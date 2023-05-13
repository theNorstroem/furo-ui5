import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import './furo-ui5-set-orderby-row.js';

/**
 * `FuroUi5SetOrderby` is a helper component
 *
 *
 * @summary Helper component
 * @customElement
 * @appliesMixin FBP
 */
export class FuroUi5SetOrderby extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      labelEmptySelect: { type: String, attribute: 'label-empty-select' },
    };
  }

  /**
   * bindData
   * @public
   * @param orderByFieldnode
   */
  bindData(settings) {
    this._FBPTriggerWire('|--bindData', settings);
    this._tableSettings = settings.table_settings;
    this._orderBy = settings.order_by;

    // initial adder
    this._tableSettings.addEventListener('repeated-fields-changed', () => {
      this._adderOptions = [
        { id: null, display_name: this.labelEmptySelect, selected: true },
      ];
      this._tableSettings.repeats.forEach(e => {
        if (e.sortable._value === true) {
          this._adderOptions.push({
            id: e.field_name._value,
            display_name: this._tableDO[e.field_name._value]._meta.label,
          });
        }
      });
      this._FBPTriggerWire('|--adderOptions', this._adderOptions);
      this.requestUpdate();
    });

    this._orderBy.addEventListener('field-value-changed', () => {
      //  build up the options
      this._options = [];
      this._adderOptions = [
        { id: null, display_name: this.labelEmptySelect, selected: true },
      ];

      this._parseOrderBy();
      this._tableSettings.repeats.forEach(e => {
        if (
          e.sortable._value === true &&
          this._usedFields.indexOf(e.field_name._value) === -1
        ) {
          this._options.push({
            id: e.field_name._value,
            display_name: this._tableDO[e.field_name._value]._meta.label,
          });
          this._adderOptions.push({
            id: e.field_name._value,
            display_name: this._tableDO[e.field_name._value]._meta.label,
          });
        }
      });

      // set options, without the used ones
      this._selection.forEach(e => {
        e.options = this._options;
      });

      this._FBPTriggerWire('|--items', this._selection);
      if (this._adderOptions.length === 1) {
        this._noMoreItemsToAdd = true;
      } else {
        this._noMoreItemsToAdd = false;
      }
      this._FBPTriggerWire('|--adderOptions', this._adderOptions);
      this.requestUpdate();
    });
  }

  _parseOrderBy() {
    this._selection = [];
    this._usedFields = [];
    if (this._orderBy._value !== '') {
      this._orderBy._value.split(',').forEach(sort => {
        const item = sort.trim().split(' ');
        this._usedFields.push(item[0]);
        this._selection.push({
          id: item[0],
          display_name: this._tableDO[item[0]]._meta.label,
          descending: item.length > 1,
          // options are added above
        });
      });
    }
  }

  /**
   * bindTable
   * @public
   * @param
   */
  bindTable(tableDO) {
    this._tableDO = tableDO;
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()

    this.shadowRoot.addEventListener('orderby-row-changed', e => {
      e.stopPropagation();
      this._selection[e.target.index] = e.detail;
      this._updateOrder();
    });

    this.shadowRoot.addEventListener('move-up', e => {
      this.moveNode(e.detail, Math.max(e.detail - 1, 0));
      e.stopPropagation();
    });

    this.shadowRoot.addEventListener('move-down', e => {
      this.moveNode(
        e.detail,
        Math.min(e.detail + 1, this._selection.length - 1)
      );
      e.stopPropagation();
    });

    this.shadowRoot.addEventListener('delete-sort-clicked', e => {
      delete this._selection[e.detail];
      this._updateOrder();
      e.stopPropagation();
    });

    /**
     * Register hook on wire --addOrderItemSelected to
     * add a new item to the order list
     */
    this._FBPAddWireHook('--addOrderItemSelected', e => {
      let field = e.dataset.id;
      if (field !== 'null') {
        const descBtn = this.shadowRoot.getElementById('desc');
        if (descBtn.pressed) {
          field += ' desc';
        }
        if (this._orderBy._value === '') {
          this._orderBy._value = field;
        } else {
          this._orderBy._value += `,${field}`;
        }
      }

      const oby = new Event('order-by-changed', {
        composed: true,
        bubbles: true,
      });
      oby.detail = this._orderBy._value;
      this.dispatchEvent(oby);
    });
  }

  _updateOrder() {
    const res = [];
    this._selection.forEach(s => {
      let f = s.id;
      if (s.descending) {
        f += ' desc';
      }
      res.push(f);
    });

    this._orderBy._value = res.join(',');

    const oby = new Event('order-by-changed', {
      composed: true,
      bubbles: true,
    });
    oby.detail = this._orderBy._value;
    this.dispatchEvent(oby);
  }

  moveNode(fromIndex, toIndex) {
    const itemRemoved = this._selection.splice(fromIndex, 1); // assign the removed item as an array
    this._selection.splice(toIndex, 0, itemRemoved[0]); // insert itemRemoved into the target index
    this._updateOrder();
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
      :host {
        display: block;
        min-height: 50vh;
        min-width: 50vw;
      }

      :host([hidden]) {
        display: none;
      }

      furo-horizontal-flex {
        min-height: var(--ui5_table_row_height);
        box-sizing: border-box;
        align-items: center;
        background-color: var(--sapList_Background);
        color: var(--sapList_TextColor);
        border-bottom: 1px solid var(--sapList_BorderColor);
        padding-left: var(--FuroUi5MediaSizeIndentationLeft, 2rem);
        padding-right: var(--FuroUi5MediaSizeIndentationRight, 2rem);
      }
    `;
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <flow-repeat fn-inject-items="|--items">
        <template>
          <furo-ui5-set-orderby-row
            set-index="--index"
            fn-inject-data="--init"
          ></furo-ui5-set-orderby-row>
        </template>
      </flow-repeat>

      <furo-horizontal-flex space ?hidden="${this._noMoreItemsToAdd}">
        <furo-ui5-select
          fn-set-options="|--adderOptions"
          at-item-selected="--addOrderItemSelected"
        ></furo-ui5-select>
        <ui5-segmented-button>
          <ui5-segmented-button-item
            icon="sort-ascending"
            pressed
          ></ui5-segmented-button-item>
          <ui5-segmented-button-item
            id="desc"
            icon="sort-descending"
          ></ui5-segmented-button-item>
        </ui5-segmented-button>
        <div flex></div>
      </furo-horizontal-flex>
    `;
  }
}

window.customElements.define('furo-ui5-set-orderby', FuroUi5SetOrderby);

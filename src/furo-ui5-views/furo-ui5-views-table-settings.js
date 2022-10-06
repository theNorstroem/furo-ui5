import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import '@ui5/webcomponents/dist/Dialog.js';
import '@furo/fbp/src/flow-repeat.js';
import '@ui5/webcomponents/dist/TabContainer.js';
import '@ui5/webcomponents/dist/Tab.js';
import { i18n } from '@furo/framework/src/i18n.js';
import './helper/table/furo-ui5-set-fieldorder.js';
import './helper/table/furo-ui5-set-orderby.js';
import './helper/table/furo-ui5-set-groupby.js';

/**
 * `furo-ui5-views-table-settings`  contains the dialog for the table settings for a `furo-ui5-views`.
 *
 * @summary table settings dialog
 * @customElement furo-ui5-views-table-settings
 * @appliesMixin FBP
 */
class FuroUi5ViewsTableSettings extends FBP(LitElement) {
  constructor() {
    super();
    this.headerText = 'View Settings';
    this.tabColumnsLabel = 'Columns';
    this.tabSortLabel = 'Sort';
    this.okButtonText = 'Ok';
    this.cancelButtonText = 'Cancel';
    this.colheaderField = 'Field';
    this.colheaderPosition = 'Position';
    this.labelEmptySelect = 'Sort By';
    this.placeholderSearch = 'Search';
  }

  /**
   * show
   * @public
   */
  show() {
    this._FBPTriggerWire('|--show', null);
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Define the type for a row
       */
      rowType: { type: String, attribute: 'row-type' },
      /**
       * Define fields that are required for your business logic. Required fields are always requested from the server
       * even when they are not displayed.
       */
      requiredFields: { type: String, attribute: 'required-fields' },
      /**
       * Set this to true to enable the sorting view in the dialog.
       */
      sortable: { type: Boolean },
      // groupable: {type: Boolean},
      /**
       * Title of the dialog.
       */
      headerText: { type: String, attribute: 'tablesettings-header-text' },
      /**
       * Label for the column tab.
       */
      tabColumnsLabel: { type: String, attribute: 'tab-columns-label' },
      /**
       * Label for the sorter tab.
       */
      tabSortLabel: { type: String, attribute: 'tab-sort-label' },
      /**
       * Label for the OK button.
       */
      okButtonText: { type: String, attribute: 'ok-button-text' },
      /**
       * Label for the cancel button.
       */
      cancelButtonText: { type: String, attribute: 'cancel-button-text' },
      /**
       * Titel for the field column.
       */
      colheaderField: { type: String, attribute: 'colheader-field' },
      /**
       * Titel for the Position column.
       */
      colheaderPosition: { type: String, attribute: 'colheader-position' },
      /**
       * Text for the "pleace select" dropdown entry.
       */
      labelEmptySelect: { type: String, attribute: 'label-empty-select' },
      /**
       * Placeholder for the searcher field.
       */
      placeholderSearch: { type: String, attribute: 'placeholder-search' },
    };
  }

  /**
   * Bind the settings component from `furo-ui5-views`.
   * @public
   * @param e complete event
   */
  bindSettings(e) {
    this._settings = e.detail;
    this._currentViewFDO = e.target; // this is the component

    this._FBPTriggerWire('|--bindSettings', this._settings);

    this._currentViewFDO.addEventListener('data-injected', di => {
      this.sortedList = [];
      this.usedFields = [];
      const fn = di.detail;
      fn.table_settings.repeats.forEach(s => {
        const fieldnode = this._TableDO._getPath(s.field_name._value);
        const pathArray = s.field_name._value.split('.');

        if (fieldnode._name === pathArray[pathArray.length - 1]) {
          // this check is because _getPath always returns an object
          // eslint-disable-next-line no-param-reassign
          s._fieldRef = fieldnode;
        } else {
          // eslint-disable-next-line no-param-reassign
          s._fieldRef = {
            _meta: { label: i18n.t(`column.${s.field_name._value}`) },
          };
        }

        if (s.show._value === true && s._fieldRef._spec !== undefined) {
          this.usedFields.push(s.field_name._value);
        }
        this.sortedList.push(s);
      });
      this._FBPTriggerWire('|--sortedList', this.sortedList);

      /**
       * @event fields-changed
       * Fired when the field selection for the partial representation is changed
       * detail payload: string with coma separated field names
       */
      const customEvent = new Event('fields-changed', {
        composed: true,
        bubbles: true,
      });
      this.requiredFields.split(',').forEach(field => {
        if (this.usedFields.indexOf(field.trim()) === -1) {
          this.usedFields.push(field.trim());
        }
      });
      customEvent.detail = this.usedFields.join(', ');
      this.dispatchEvent(customEvent);

      /**
       * @event order-by-changed
       * Fired when the sort order changes
       * detail payload: string
       */
      const oby = new Event('order-by-changed', {
        composed: true,
        bubbles: true,
      });
      oby.detail = this._settings.order_by._value;
      this.dispatchEvent(oby);

      /**
       * @event order-changed
       * Fired when the field selection for the partial representation is changed
       * detail payload: sorted table columns
       */
      const oc = new Event('order-changed', { composed: true, bubbles: true });
      oc.detail = this.sortedList;
      this.dispatchEvent(oc);
    });
  }

  /**
   *
   * @param fromIndex
   * @param toIndex
   * @private
   */
  moveNode(fromIndex, toIndex) {
    const itemRemoved = this.sortedList.splice(fromIndex, 1); // assign the removed item as an array
    this.sortedList.splice(toIndex, 0, itemRemoved[0]); // insert itemRemoved into the target index
    this._updateSettings();
  }

  /**
   * update the current settings
   * @private
   */
  _updateSettings() {
    // hard overwrite
    this._settings.table_settings.repeats = this.sortedList;

    const customEvent = new Event('table-order-changed', {
      composed: true,
      bubbles: true,
    });
    this._currentViewFDO.dispatchEvent(customEvent);

    const oc = new Event('order-changed', { composed: true, bubbles: true });
    oc.detail = this.sortedList;
    this.dispatchEvent(oc);
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()

    /**
     * Register hook on wire --showstateChanged to
     * re render the form if a show state was toggled
     */
    this._FBPAddWireHook('--showstateChanged', () => {
      // this is the order of the fields on the ui
      const customEvent = new Event('table-order-changed', {
        composed: true,
        bubbles: true,
      });
      this._currentViewFDO.dispatchEvent(customEvent);

      /**
       * @event fields-changed
       * Fired when the field selection for the partial representation is changed
       * detail payload: string with coma separated field names
       */
      // eslint-disable-next-line no-param-reassign
      this.usedFields = [];

      this.sortedList.forEach(node => {
        if (node.show._value === true && node._fieldRef._spec !== undefined) {
          this.usedFields.push(node.field_name._value);
        }
      });

      const fce = new Event('fields-changed', {
        composed: true,
        bubbles: true,
      });
      this.requiredFields.split(',').forEach(field => {
        if (this.usedFields.indexOf(field.trim()) === -1) {
          this.usedFields.push(field.trim());
        }
      });
      fce.detail = this.usedFields.join(', ');
      this.dispatchEvent(fce);

      /**
       * @event order-by-changed
       * Fired when the sort order changes
       * detail payload: string
       */
      const oby = new Event('order-by-changed', {
        composed: true,
        bubbles: true,
      });
      oby.detail = this._settings.order_by._value;
      this.dispatchEvent(oby);

      /**
       * @event order-changed
       * Fired when the field selection for the partial representation is changed
       * detail payload: sorted table columns
       */
      const oc = new Event('order-changed', { composed: true, bubbles: true });
      oc.detail = this.sortedList;
      this.dispatchEvent(oc);
    });

    /**
     * Register hook on wire move-top to
     * move item to top position
     */
    const order = this.shadowRoot.querySelector('furo-ui5-set-fieldorder');
    order.addEventListener('move-top', e => {
      this.moveNode(e.detail, 0);
      this._FBPTriggerWire('|--sortedList', this.sortedList);
      e.stopPropagation();
    });
    order.addEventListener('move-up', e => {
      this.moveNode(e.detail, Math.max(e.detail - 1, 0));
      this._FBPTriggerWire('|--sortedList', this.sortedList);
      e.stopPropagation();
    });
    order.addEventListener('move-down', e => {
      this.moveNode(
        e.detail,
        Math.min(e.detail + 1, this.sortedList.length - 1)
      );
      this._FBPTriggerWire('|--sortedList', this.sortedList);
      e.stopPropagation();
    });
    order.addEventListener('move-bottom', e => {
      this.moveNode(e.detail, this.sortedList.length - 1);
      this._FBPTriggerWire('|--sortedList', this.sortedList);
      e.stopPropagation();
    });
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
      }

      :host([hidden]) {
        display: none;
      }

      ui5-tabcontainer {
        margin-bottom: var(--FuroUi5MediaSizeIndentationTop, 1rem);
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
      <!-- used to resolve the labels -->
      <furo-data-object
        type="${this.rowType}"
        at-object-ready="((_TableDO)), --tableDO"
      ></furo-data-object>

      <furo-ui5-dialog
        fn-show="|--show"
        fn-close="--OkClicked"
        header-text="${this.headerText}"
        style="--_ui5_popup_content_padding_s: 0;--_ui5_popup_content_padding_m_l: 0;"
      >
        <ui5-tabcontainer
          collapsed
          fixed
          @-tab-select="--subTabSelected"
          tab-layout="Inline"
          style="margin-bottom: var(--FuroUi5MediaSizeIndentationTop, 1rem);"
        >
          <ui5-tab data-tab="cols" text="${this.tabColumnsLabel}"></ui5-tab>
          ${this.sortable
            ? html` <ui5-tab
                data-tab="sort"
                text="${this.tabSortLabel}"
              ></ui5-tab>`
            : ''}
          ${this.groupable
            ? html` <ui5-tab data-tab="group" text="Gruppierung"></ui5-tab>`
            : ''}
        </ui5-tabcontainer>

        <furo-pages
          style="height: 100%;"
          fn-activate-page="--subTabSelected(*.tab.dataset.tab)"
          default="cols"
        >
          <furo-ui5-set-orderby
            label-empty-select="${this.labelEmptySelect}"
            fn-bind-data="|--bindSettings"
            fn-bind-table="--tableDO"
            name="sort"
          ></furo-ui5-set-orderby>
          <furo-ui5-set-groupby
            fn-bind-data="|--bindSettings"
            name="group"
          ></furo-ui5-set-groupby>
          <furo-ui5-set-fieldorder
            colheader-field="${this.colheaderField}"
            colheader-position="${this.colheaderPosition}"
            placeholder-search="${this.placeholderSearch}"
            name="cols"
            fn-inject-items="|--sortedList"
            at-showstate-changed="--showstateChanged"
          >
          </furo-ui5-set-fieldorder>
        </furo-pages>
        <furo-horizontal-flex space style="align-items: center" slot="footer">
          <div flex></div>
          <furo-ui5-button design="Emphasized" at-click="--OkClicked"
            >${this.okButtonText}</furo-ui5-button
          >
        </furo-horizontal-flex>
      </furo-ui5-dialog>
    `;
  }
}

window.customElements.define(
  'furo-ui5-views-table-settings',
  FuroUi5ViewsTableSettings
);

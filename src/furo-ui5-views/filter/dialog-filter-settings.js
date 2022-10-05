import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import '@ui5/webcomponents/dist/Dialog.js';
import '@furo/fbp/src/flow-repeat.js';
import '@ui5/webcomponents/dist/Table.js';
import '@ui5/webcomponents/dist/TableColumn.js';
import '@ui5/webcomponents/dist/TableRow.js';
import '@ui5/webcomponents/dist/TableCell.js';
import '../../furo-ui5-dialog.js';

/**
 * `DialogFilterSettings`
 * is a helper component for `FuroUi5ViewsFilterSettings`
 *
 * @summary Helper component
 * @customElement
 * @appliesMixin FBP
 */
class DialogFilterSettings extends FBP(LitElement) {
  constructor() {
    super();
    this.colheaderField = 'Field';
    this.colheaderPosition = 'Position';
    this.colheaderValue = 'Value';
    this.placeholderSearch = 'Search';
    this.headerText = 'Adapt Filter';
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      colheaderField: { type: String, attribute: 'colheader-field' },
      colheaderPosition: { type: String, attribute: 'colheader-position' },
      colheaderValue: { type: String, attribute: 'colheader-value' },
      placeholderSearch: { type: String, attribute: 'placeholder-search' },
      headerText: { type: String, attribute: 'filtersettings-header-text' },
    };
  }

  /**
   * bindFilter
   * @public
   * @param fieldnode
   */
  bindFilter(fieldnode) {
    this._filterDO = fieldnode;

    this._filterDO.addEventListener('field-value-changed', () => {
      // update the setted filters
      const any = this._filterDO._value;
      any['@type'] = this._filterDO._type;
      this._settings.filter_object._value = any;
    });
  }

  /**
   * Trigger this method after the dialog (parent) is opened.
   */
  dialogOpened() {
    this._FBPTriggerWire('|--sortedList', this.sortedList);
  }

  /**
   * bindSettings
   * @public
   * @param e complete event
   */
  bindSettings(e) {
    this._settings = e.detail;
    this._currentViewFDO = e.target; // this is the component

    this._currentViewFDO.addEventListener('data-injected', di => {
      this.sortedList = [];
      this._initialSortedList = [];
      const fn = di.detail;
      fn.filter_settings.repeats.forEach(s => {
        // eslint-disable-next-line no-param-reassign
        s._fieldRef = this._filterDO._getPath(s.field_name._value);
        this.sortedList.push(s);
        this._initialSortedList.push(s);
      });

      // hide search if less than 10 items are in list
      if (this._initialSortedList.length < 10) {
        this._hideSearch = true;
        this.requestUpdate();
      } else {
        this._hideSearch = false;
        this.requestUpdate();
      }
    });
  }

  moveNode(fromIndex, toIndex) {
    const itemRemoved = this.sortedList.splice(fromIndex, 1); // assign the removed item as an array
    this.sortedList.splice(toIndex, 0, itemRemoved[0]); // insert itemRemoved into the target index
    this._updateSettings();
  }

  _updateSettings() {
    // hard overwrite
    this._settings.filter_settings.repeats = this.sortedList;

    // update the setted filters
    const any = this._filterDO._value;
    any['@type'] = this._filterDO._type;
    this._settings.filter_object._value = any;

    /**
     * @event update-form-requested
     * Fired when form field order of the view changes
     */
    const customEvent = new Event('field-order-changed', {
      composed: true,
      bubbles: true,
    });
    this._currentViewFDO.dispatchEvent(customEvent);
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();

    const reftarget = this.shadowRoot.getElementById('table');
    this._FBPTriggerWire('|--reftarget', reftarget);

    /**
     * Register hook on wire --showstateChanged to
     * re render the form if a show state was toggled
     */
    this._FBPAddWireHook('--showstateChanged', () => {
      const customEvent = new Event('field-order-changed', {
        composed: true,
        bubbles: true,
      });
      this._currentViewFDO.dispatchEvent(customEvent);
    });

    /**
     * Register hook on wire move-top to
     * move item to top position
     */
    this.shadowRoot.addEventListener('move-top', e => {
      this.moveNode(e.detail, 0);
      this._FBPTriggerWire('|--sortedList', this.sortedList);
    });
    this.shadowRoot.addEventListener('move-up', e => {
      this.moveNode(e.detail, Math.max(e.detail - 1, 0));
      this._FBPTriggerWire('|--sortedList', this.sortedList);
    });
    this.shadowRoot.addEventListener('move-down', e => {
      this.moveNode(
        e.detail,
        Math.min(e.detail + 1, this.sortedList.length - 1)
      );
      this._FBPTriggerWire('|--sortedList', this.sortedList);
    });
    this.shadowRoot.addEventListener('move-bottom', e => {
      this.moveNode(e.detail, this.sortedList.length - 1);
      this._FBPTriggerWire('|--sortedList', this.sortedList);
    });

    /**
     * Register hook on wire --search to
     *
     */
    this._FBPAddWireHook('--search', str => {
      const rgx = new RegExp(str, 'i');
      this._filteredList = this._initialSortedList.filter(
        r => r._fieldRef._meta.label.search(rgx) !== -1
      );
      this._FBPTriggerWire('|--sortedList', this._filteredList);
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
        --_ui5_popup_content_padding_s: 0;
        --_ui5_popup_content_padding_m_l: 0;
      }

      :host([hidden]) {
        display: none;
      }

      furo-vertical-flex {
        min-height: 50vh;
      }

      ui5-table-row:hover ui5-button {
        display: inline-block;
      }

      ui5-button {
        display: none;
      }

      .searcher[hidden] {
        display: none;
      }

      .searcher {
        box-sizing: border-box;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 0.5rem;
      }

      .btns {
        padding: 0;
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
      <furo-vertical-flex>
        <furo-horizontal-flex class="searcher" ?hidden="${this._hideSearch}">
          <furo-ui5-text-input
            flex
            icon="search"
            placeholder="${this.placeholderSearch}"
            @-search-requested="--search"
          ></furo-ui5-text-input>
        </furo-horizontal-flex>

        <div flex scroll>
          <ui5-table
            sticky-column-header
            id="table"
            at-showstate-changed="--showstateChanged"
          >
            <!-- Columns -->
            <ui5-table-column slot="columns" style="width: 3rem">
              <div
                at-click="--clearAllClicked"
                style="line-height: 1.4rem; text-align: center"
              >
                <ui5-icon name="clear-all" interactive=""></ui5-icon>
              </div>
            </ui5-table-column>

            <ui5-table-column slot="columns">
              <span style="line-height: 1.4rem">${this.colheaderField}</span>
            </ui5-table-column>
            <ui5-table-column slot="columns">
              <span style="line-height: 1.4rem">${this.colheaderValue}</span>
            </ui5-table-column>

            <ui5-table-column slot="columns" style="width: 11rem">
              <span style="line-height: 1.4rem">${this.colheaderPosition}</span>
            </ui5-table-column>
          </ui5-table>

          <flow-repeat
            fn-set-insert-ref="|--reftarget"
            fn-inject-items="|--sortedList"
          >
            <template>
              <ui5-table-row>
                <ui5-table-cell>
                  <furo-ui5-checkbox-input
                    at-furo-value-changed="^^showstate-changed"
                    fn-bind-data="--init(*.show)"
                    text=""
                    fn-toggle="--toggle"
                  ></furo-ui5-checkbox-input>
                </ui5-table-cell>
                <ui5-table-cell
                  at-click="--toggle"
                  set-inner-text="--init(*._fieldRef._meta.label)"
                >
                </ui5-table-cell>
                <ui5-table-cell>
                  <furo-type-renderer
                    context="celledit"
                    fn-bind-data="--init(*._fieldRef)"
                  ></furo-type-renderer>
                </ui5-table-cell>
                <ui5-table-cell class="btns">
                  <ui5-button
                    design="Transparent"
                    icon="collapse-group"
                    at-click="^move-top(index)"
                  ></ui5-button>
                  <ui5-button
                    design="Transparent"
                    icon="navigation-up-arrow"
                    at-click="^move-up(index)"
                  ></ui5-button>
                  <ui5-button
                    design="Transparent"
                    icon="navigation-down-arrow"
                    at-click="^move-down(index)"
                  ></ui5-button>
                  <ui5-button
                    design="Transparent"
                    icon="expand-group"
                    at-click="^move-bottom(index)"
                  ></ui5-button>
                </ui5-table-cell>
              </ui5-table-row>
            </template>
          </flow-repeat>
        </div>
      </furo-vertical-flex>
    `;
  }
}

window.customElements.define('dialog-filter-settings', DialogFilterSettings);

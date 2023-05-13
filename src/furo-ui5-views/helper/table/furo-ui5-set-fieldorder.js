import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';

/**
 * `FuroUi5SetFieldorder` is a helper component
 *
 *
 * @summary Helper component
 * @customElement
 * @appliesMixin FBP
 */
export class FuroUi5SetFieldorder extends FBP(LitElement) {
  /**
   * bindData
   * @public
   * @param fieldnode
   */
  injectItems(fieldnode) {
    this._initialList = fieldnode;

    this._FBPTriggerWire('|--sortedList', fieldnode);
    // hide search if less then 10 items are in list
    if (this._initialList.length < 10) {
      this._hideSearch = true;
      this.requestUpdate();
    } else {
      this._hideSearch = false;
      this.requestUpdate();
    }
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      placeholderSearch: { type: String, attribute: 'placeholder-search' },
      colheaderField: { type: String, attribute: 'colheader-field' },
      colheaderPosition: { type: String, attribute: 'colheader-position' },
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()

    const reftarget = this.shadowRoot.getElementById('table');
    this._FBPTriggerWire('|--reftarget', reftarget);

    /**
     * Register hook on wire --search to
     *
     */
    this._FBPAddWireHook('--search', str => {
      const rgx = new RegExp(str, 'i');
      this._filteredList = this._initialList.filter(
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
      }

      :host([hidden]) {
        display: none;
      }

      furo-vertical-flex {
        min-height: 50vh;
        min-width: 50vw;
      }

      ui5-table-row:hover ui5-button {
        display: inline-block;
      }

      ui5-button {
        display: none;
      }

      .btns {
        padding: 0;
      }

      .searcher {
        box-sizing: border-box;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 0.5rem;
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
      <furo-vertical-flex name="cols">
        <furo-horizontal-flex class="searcher" ?hidden="${this._hideSearch}">
          <furo-ui5-text-input
            flex
            icon="search"
            placeholder="${this.placeholderSearch}"
            @-search-requested="--search"
          ></furo-ui5-text-input>
        </furo-horizontal-flex>

        <div flex scroll>
          <ui5-table sticky-column-header id="table">
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

            <ui5-table-column slot="columns" style="width: 11rem">
              <span style="line-height: 1.4rem">${this.colheaderPosition}</span>
            </ui5-table-column>
          </ui5-table>

          <flow-repeat
            fn-set-insert-ref="|--reftarget"
            fn-inject-items="|--sortedList"
            fn-trigger-all="--clearAllClicked"
          >
            <template>
              <ui5-table-row>
                <ui5-table-cell>
                  <furo-ui5-checkbox-input
                    fn-uncheck="--trigger"
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

                <ui5-table-cell class="btns">
                  <ui5-button
                    design="Transparent"
                    icon="collapse-group"
                    at-click="^^move-top(index)"
                  ></ui5-button>
                  <ui5-button
                    design="Transparent"
                    icon="navigation-up-arrow"
                    at-click="^^move-up(index)"
                  ></ui5-button>
                  <ui5-button
                    design="Transparent"
                    icon="navigation-down-arrow"
                    at-click="^^move-down(index)"
                  ></ui5-button>
                  <ui5-button
                    design="Transparent"
                    icon="expand-group"
                    at-click="^^move-bottom(index)"
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

window.customElements.define('furo-ui5-set-fieldorder', FuroUi5SetFieldorder);

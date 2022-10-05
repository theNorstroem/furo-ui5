import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import '../furo-ui5-bool-icon.js';
import '../furo-ui5-radio-button.js';

import './dialog-manage-views-deletebutton.js';
/**
 * `DialogManageViews` is a helper component
 *
 *
 * @summary Helper component
 * @customElement
 * @appliesMixin FBP
 */
class DialogManageViews extends FBP(LitElement) {
  constructor() {
    super();
    this.manageViewHeaderText = 'Manage Views';
    this.placeholderSearch = 'Search';
    this.colheaderDefault = 'Default';
    this.colheaderApply = 'Apply Automatically';
    this.colheaderCreator = 'Created By';
    this.colheaderView = 'View';
    this.okButtonText = 'Ok';
    this.cancelButtonText = 'Cancel';
  }

  /**
   * show
   * @public
   */
  show() {
    // move
    if (!this._furoDialogRegistered) {
      const customEvent = new Event('register-furo-ui5-dialog', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = this;
      this.dispatchEvent(customEvent);
      this._furoDialogRegistered = true;
    }

    this._FBPTriggerWire('|--show', null);
  }

  /**
   * close
   * @public
   */
  close() {
    this._FBPTriggerWire('|--close', null);
  }

  /**
   * bindData
   * @public
   * @param fieldnode
   */
  bindData(fieldnode) {
    this._field = fieldnode;
    this._FBPTriggerWire('|--bindData', fieldnode);
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      cancelButtonText: { type: String, attribute: 'cancel-button-text' },
      manageViewHeaderText: {
        type: String,
        attribute: 'manage-view-header-text',
      },
      placeholderSearch: { type: String, attribute: 'placeholder-search' },
      colheaderDefault: { type: String, attribute: 'colheader-default' },
      colheaderApply: { type: String, attribute: 'colheader-apply' },
      colheaderCreator: { type: String, attribute: 'colheader-creator' },
      colheaderView: { type: String, attribute: 'colheader-view' },
      okButtonText: { type: String, attribute: 'ok-button-text' },
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
      }

      .searcher {
        box-sizing: border-box;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 0.5rem;
      }

      ui5-dialog[media-range='M'] .searcher {
        box-sizing: border-box;
        padding-left: 2rem;
        padding-right: 2rem;
        padding-bottom: 0.5rem;
      }

      ui5-dialog[media-range='S'] .searcher {
        box-sizing: border-box;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 0.5rem;
      }

      .btns {
        padding: 0;
      }

      furo-ui5-checkbox-input {
        width: 100%;
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
        <!-- furo-horizontal-flex class="searcher">
            <furo-ui5-text-input flex icon="search" placeholder="$ {this.placeholderSearch}"></furo-ui5-text-input>
          </furo-horizontal-flex -->

        <div flex scroll>
          <ui5-table id="table" sticky-column-header>
            <!-- Columns -->
            <ui5-table-column slot="columns" style="width: 3rem">
              <span></span>
            </ui5-table-column>

            <ui5-table-column slot="columns">
              <span style="line-height: 1.4rem">${this.colheaderView}</span>
            </ui5-table-column>

            <ui5-table-column slot="columns">
              <span style="line-height: 1.4rem">${this.colheaderDefault}</span>
            </ui5-table-column>
            <ui5-table-column slot="columns">
              <span style="line-height: 1.4rem">${this.colheaderApply}</span>
            </ui5-table-column>
            <ui5-table-column slot="columns">
              <span style="line-height: 1.4rem">${this.colheaderCreator}</span>
            </ui5-table-column>
            <ui5-table-column slot="columns" style="width: 2rem">
              <span style="line-height: 1.4rem"></span>
            </ui5-table-column>
          </ui5-table>

          <furo-data-flow-repeat
            identity-path="id._value"
            fn-set-insert-ref="|--reftarget"
            fn-bind-data="|--bindData(*.views)"
          >
            <template>
              <ui5-table-row>
                <ui5-table-cell>
                  <furo-ui5-bool-icon
                    fn-bind-data="--init(*.is_favorite)"
                    symboltrue="favorite"
                    symbolfalse="unfavorite"
                  ></furo-ui5-bool-icon>
                </ui5-table-cell>

                <ui5-table-cell>
                  <span set-inner-text="--init(*.name)"></span>
                </ui5-table-cell>

                <ui5-table-cell>
                  <furo-ui5-radio-button
                    name="groupA"
                    fn-bind-data="--init(*.is_standard)"
                    text=""
                  ></furo-ui5-radio-button>
                </ui5-table-cell>

                <ui5-table-cell>
                  <furo-ui5-checkbox-input
                    fn-bind-data="--init(*.auto_apply)"
                    text=""
                  ></furo-ui5-checkbox-input>
                </ui5-table-cell>

                <ui5-table-cell>
                  <span set-inner-text="--init(*.created_by)"></span>
                </ui5-table-cell>

                <ui5-table-cell>
                  <dialog-manage-views-deletebutton
                    fn-bind-data="--init"
                  ></dialog-manage-views-deletebutton>
                </ui5-table-cell>
              </ui5-table-row>
            </template>
          </furo-data-flow-repeat>
        </div>
      </furo-vertical-flex>

      <furo-horizontal-flex space style="align-items: center" slot="footer">
        <div flex></div>
        <furo-ui5-button design="Emphasized" at-click="^^ok-clicked"
          >${this.okButtonText}</furo-ui5-button
        >
        <furo-ui5-button design="Transparent" at-click="-^abort-clicked"
          >${this.cancelButtonText}</furo-ui5-button
        >
      </furo-horizontal-flex>
    `;
  }
}

window.customElements.define('dialog-manage-views', DialogManageViews);

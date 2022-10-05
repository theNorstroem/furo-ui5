import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';

import '@furo/data/src/furo-reverse-deep-link.js';

import '@furo/layout/src/furo-form-layouter.js';
import '@furo/route/src/furo-app-flow.js';
import '@furo/route/src/furo-pages.js';
import '@furo/layout/src/furo-vertical-flex.js';

import './listreport-filter-options.js';
import './listreport-filter-results.js';

import '@ui5/webcomponents-fiori/dist/IllustratedMessage.js';
import '@ui5/webcomponents-fiori/dist/illustrations/BeforeSearch.js';
import '@ui5/webcomponents-fiori/dist/illustrations/NoFilterResults.js';

import '@furo/data/src/furo-message-container-handler.js';

import '../../src/furo-ui5-views/furo-ui5-views-table-settings.js';

/**
 * `subpage-activity-list-report`
 *
 *
 *
 *```
 *  <subpage-activity-list-report
 *      style="width: 90vw; height: 80vh"
 *      fn-focus="--focusesTheFirstField"
 *      fn-update-query-param="--queryParams"
 *      at-escape-list-report-panel="--FiredWhenEscapeWasPressedInsideTheFilterPanel"
 *      at-record-selected="--recordSelected"
 *      ></subpage-activity-list-report>
 *```
 *
 * @summary searcher implementation for InnerTypeName
 * @customElement subpage-activity-list-report
 * @appliesMixin FBP
 */
class PageActivityListReport extends FBP(LitElement) {
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();

    this._FBPTriggerWire('|--queryParamUpdated', {});
  }

  /**
   * Focuses the first field on the list-report panel
   */
  focus() {
    this._FBPTriggerWire('|--focus', null);
  }

  /**
   * refreshList To refresh the list results
   * @public
   */
  refreshList() {
    this._FBPTriggerWire('|--refreshList', null);
  }

  /**
   * Set Query Params for the deep linker
   * @public
   * @param query
   */
  updateQueryParam(query) {
    //  not trigger when the parameter has not been changed. This fix avoids losing paging information when returning to this page
    if (!this.query || JSON.stringify(this.query) !== JSON.stringify(query)) {
      this.query = query;
      this._FBPTriggerWire('|--queryParamUpdated', query);
    }
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

      /* width */
      ::-webkit-scrollbar {
        width: var(--sapScrollBar_Dimension, 0.75rem);
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: var(--sapScrollBar_TrackColor, #090b0d);
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: var(--sapScrollBar_FaceColor, #91c8f6);
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: var(--sapScrollBar_Hover_FaceColor, #4a5a6a);
      }

      .padding-lr {
        padding-left: var(--FuroUi5MediaSizeIndentationLeft, 2rem);
        padding-right: var(--FuroUi5MediaSizeIndentationRight, 2rem);
      }

      furo-ui5-busy-indicator {
        height: 100%;
      }
    `;
  }

  /**
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-ui5-busy-indicator
        fn-activate="--filterSearchTriggered, --first, --next, --last, --prev, |--refreshList"
        fn-deactivate="--noSearchResults, --hasSearchResults, --grpcError"
      >
        <furo-vertical-flex>
          <activity-listreport-filter-options
            fn-focus="|--focus,--escapeResults"
            at-search-triggered="--filterSearchTriggered"
            at-reset-clicked="--filterResetClicked"
            at-searchterm="--searchterm"
            at-collapsed="--panelCollapsed"
            at-filter-object-ready="--FilterObjectDO"
            at-current-view="--CurrentViewSettingDO"
          ></activity-listreport-filter-options>

          <furo-ui5-message-container-display
            fn-bind-message-container="--MsgContainerDO"
          ></furo-ui5-message-container-display>

          <furo-pages
            flex
            scroll
            default="results"
            fn-activate-page="--noSearchResults, --hasSearchResults"
          >


            <activity-listreport-filter-results
              name="results"
              at-no-results="--noSearchResults"
              at-results="--hasSearchResults"
              fn-bind-filter-object="--FilterObjectDO"
              fn-focus="--escapePaginationBar, --filterSearchTriggered, --panelCollapsed"
              fn-clear-search="--filterResetClicked"
              fn-first="--first"
              fn-next="--next"
              fn-prev="--prev"
              fn-last="--last"
              fn-searchterm="--searchterm"
              fn-update-query-param="|--queryParamUpdated"
              fn-list="--filterSearchTriggered, |--refreshList"
              at-tablerow-selected="^^record-selected"
              at-search-hts-updated="--searchHTS"
              at-escape-pressed="--escapeResults"
              at-response-error="--grpcError"
              at-response="--searchResponse"
              fn-set-fields="--reqFieldsChanged"
              fn-set-order-by="--fieldSortChanged"
              fn-set-columns="--columnOrderChanged"
              at-show-table-settings-clicked="--ShowTableSettingsClicked"
            ></activity-listreport-filter-results>

            <ui5-illustrated-message name="NoFilterResults"></ui5-illustrated-message>
          </furo-pages>

          <!-- Provides HATEOAS based pagination functionality. -->
          <furo-ui5-pagination-bar
            at-pagination-first="--first"
            at-pagination-last="--last"
            at-pagination-next="--next"
            at-pagination-prev="--prev"
            at-escape-pressed="--escapePaginationBar"
            fn-inject="--searchHTS"
          ></furo-ui5-pagination-bar>
        </furo-vertical-flex>
      </furo-ui5-busy-indicator>

      <furo-ui5-views-table-settings
        row-type="project.Project"
        fn-show="--ShowTableSettingsClicked"
        fn-bind-settings="--CurrentViewSettingDO"
        at-fields-changed="--reqFieldsChanged"
        at-order-by-changed="--fieldSortChanged"
        at-order-changed="--columnOrderChanged"
        required-fields="id, url"
        sortable
      ></furo-ui5-views-table-settings>

      <furo-data-object
        type="furo.MessageContainer"
        fn-init="--searchResponse"
        at-object-ready="--MsgContainerDO"
      ></furo-data-object>
      <furo-message-container-handler
        fn-inject-raw="--grpcError"
        fn-bind-message-container="--MsgContainerDO"
      ></furo-message-container-handler>
    `;
  }
}

window.customElements.define('view-list-report', PageActivityListReport);

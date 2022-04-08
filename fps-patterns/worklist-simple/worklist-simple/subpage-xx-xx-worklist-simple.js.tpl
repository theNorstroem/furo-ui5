import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/src/i18n.js';

import '@furo/data/src/furo-reverse-deep-link.js';
import '@furo/ui5/src/furo-ui5-pagination-bar.js';
import '@furo/layout/src/furo-form-layouter.js';
import '@furo/route/src/furo-app-flow.js';
import '@furo/route/src/furo-pages.js';
import '@furo/layout/src/furo-vertical-flex.js';
import '@furo/ui5/src/furo-ui5-header-panel.js';

import './{{.Var.SearchResultsComponentName}}.js';

import '@ui5/webcomponents-fiori/dist/IllustratedMessage.js';
import '@ui5/webcomponents-fiori/dist/illustrations/BeforeSearch.js';
import '@ui5/webcomponents-fiori/dist/illustrations/NoFilterResults.js';

/**
 * `{{.Var.SubPageComponentName}}`
 *
 *
 *
 *```
 *  <{{.Var.SubPageComponentName}}
 *      style="width: 90vw; height: 80vh"
 *      fn-focus="--focusesTheFirstField"
 *      fn-update-query-param="--queryParams"
 *      at-escape-worklist-simple-panel="--FiredWhenEscapeWasPressedInsideTheFilterPanel"
 *      at-record-selected="--recordSelected"
 *      ></{{.Var.SubPageComponentName}}>
 *```
 *
 * @summary searcher implementation for InnerTypeName
 * @customElement {{.Var.SubPageComponentName}}
 * @appliesMixin FBP
 */
class {{.Var.SubPageClassName}} extends FBP(LitElement) {

  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  /**
   * Focuses the first field on the worklist-simple panel
   */
  focus() {
    this._FBPTriggerWire('|--focus', null);
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
      this._FBPTriggerWire('--queryParamUpdated', query);
    }
  }

  /**
   * htsIn Set hts as alternative to the QP
   * @public
   * @param hts
   */
  htsIn(hts) {
    this._FBPTriggerWire('|--htsIn', hts);
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

      furo-ui5-header-panel{
          border-bottom: 1px solid var(--sapGroup_TitleBorderColor);
      }



      furo-pages {
        overflow: hidden;
      }

    `;
  }

  /**
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <furo-ui5-header-panel
         fixed
         collapsed
         header-text="${i18n.t('{{.Var.LowerPrefix}}.worklist.panel.headertext')}">
        </furo-ui5-header-panel>

        <furo-pages
          flex
          default="worklist"
          fn-activate-page="--noSearchResults, --hasSearchResults"
        >


          <{{.Var.SearchResultsComponentName}}
            name="worklist"
            at-no-results="--noSearchResults"
            at-results="--hasSearchResults"
            header-text="Search results"
            fn-focus="|--focus"
            fn-set-filter="--filterSearchTriggered(*._base64)"
            fn-clear-search="--filterResetClicked"
            fn-list="--filterSet"
            fn-first="--first"
            fn-next="--next"
            fn-prev="--prev"
            fn-last="--last"
            fn-searchterm="--searchterm"
            fn-update-query-param="--queryParamUpdated"
            fn-hts-in="|--htsIn"
            at-tablerow-selected="^^record-selected"
            at-search-hts-updated="--searchHTS"
            at-escape-pressed="--escapeResults"
            at-filter-changed="--filterSet"
          ></{{.Var.SearchResultsComponentName}}>
          <ui5-illustrated-message
            name="NoFilterResults"
            title-text="Es wurden keine Resultate gefunden."
            subtitle-text="Überprüfen sie ihre Suchkriterien"
          ></ui5-illustrated-message>
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
    `;
  }
}

window.customElements.define('{{.Var.SubPageComponentName}}', {{.Var.SubPageClassName}} );

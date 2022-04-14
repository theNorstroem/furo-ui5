// Code generated by @furo/ui-builder. DO NOT EDIT.
import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp/src/fbp.js';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/src/i18n.js';

import '@furo/data/src/furo-deep-link.js';
import '@furo/data/src/furo-collection-agent.js';
import '@furo/data/src/furo-data-object.js';
import '@furo/ui5/src/furo-ui5-table.js';
import '@furo/ui5/src/furo-ui5-pagination-bar.js';
import '@furo/ui5/src/furo-ui5-busy-indicator.js';
import '@furo/ui5/src/furo-ui5-message-strip-display.js';
import '@furo/ui5/src/furo-ui5-message-strip.js';
import '@furo/ui5/src/furo-ui5-section.js'
import '@furo/ui5/src/furo-ui5-subsection.js'

/**
 * `{{.Var.SearchResultsComponentName}}`
 * This file will fetch the data and displays the reults table
 *
 * @fires escape-pressed Fired when the ESCAPE key was pressed while the table has the focus.
 * @fires search-hts-updated {HTS} Fired when the agent receives new HTS data from the server.
 * @summary Displays the search results
 * @customElement {{.Var.SearchResultsComponentName}}
 * @appliesMixin FBP
 */
export class {{.Var.SearchResultsClassName}} extends FBP(LitElement) {

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      // Autoload the list after receiving the HATEOAS.
      autoload: {
        type: Boolean,
      },
    };
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
    /**
     * Register hook on wire --nextPageLoaded to delay the focus
     *
     */
    this._FBPAddWireHook('--nextPageLoaded', () => {
      setTimeout(() => {
        this._FBPTriggerWire('|--nextPageLoaded', null);
      }, 1);
    });

    /**
     * Register hook on wire --lastPageLoaded to delay the focus
     *
     */
    this._FBPAddWireHook('--lastPageLoaded', () => {
      setTimeout(() => {
        this._FBPTriggerWire('|--lastPageLoaded', null);
      }, 1);
    });

    /**
     * Register hook on wire --nextPageLoaded to delay the focus
     *
     */
    this._FBPAddWireHook('--prevPageLoaded', () => {
      setTimeout(() => {
        // long wires are not supported by fbp yet, so we do the same
        this._FBPTriggerWire('|--prevPageLoaded', null);
      }, 1);
    });
    /**
     * Register hook on wire --nextPageLoaded to delay the focus
     *
     */
    this._FBPAddWireHook('--firstPageLoaded', () => {
      setTimeout(() => {
        // long wires are not supported by fbp yet, so we do the same
        this._FBPTriggerWire('|--firstPageLoaded', null);
      }, 1);
    });

    /**
     * Register hook on wire --collectionResponse to
     * set the _noresult value based on the number of entities
     */
    this._FBPAddWireHook('--collectionResponse', e => {
      const noresult = !(e.entities && e.entities.length > 0);
      if (noresult) {
        /**
         * @event no-results
         * Fired when a collection does not have any entity
         *
         * Contains a string no-results .
         */
        const customEvent = new Event('no-results', { composed: true, bubbles: true });
        customEvent.detail = 'NoFilterResults';
        this.dispatchEvent(customEvent);
      } else {
        const customEvent = new Event('results', { composed: true, bubbles: true });
        customEvent.detail = 'results';
        this.dispatchEvent(customEvent);
      }
    });
  }

  /**
   * set the list-report
   * fn-set-list-report="--filterChanged"
   */
  setFilter(filter) {
    this._FBPTriggerWire('--filterChanged', filter);
  }

  /**
   * searchterm sets the qp q with ?q=searchterm
   *
   * On the agent we set the qp q, because we do not want autosearch
   * @public
   * @param searchterm
   */
  searchterm(searchterm) {
    this._FBPTriggerWire('|--searchQp', {q:searchterm});
  }

  /**
   * clear the search
   */
  clearSearch(e) {
    this._FBPTriggerWire('--method-clear-search-forwarded', e);
  }

  list(e) {
    this._FBPTriggerWire('--method-list-forwarded', e);
  }

  first(e) {
    this._FBPTriggerWire('--first', e);
  }

  next(e) {
    this._FBPTriggerWire('--next', e);
  }

  prev(e) {
    this._FBPTriggerWire('--prev', e);
  }

  last(e) {
    this._FBPTriggerWire('--last', e);
  }

  /**
   *  Triggers a reload of the collection agent via furo-deep-link
   * @public
   * @param query
   */
  updateQueryParam(query) {
    this._FBPTriggerWire('--queryParamUpdated', query);
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
   * Focuses the heading of the card, so you can navigate with the keyboard (up,down,enter)
   */
  focus() {
    setTimeout(()=>{
      this._FBPTriggerWire('--focus', null);
    },16)
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

      furo-ui5-busy-indicator {
        display: block;
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
      <furo-keydown key="Escape" at-key="^^escape-pressed"></furo-keydown>
      <furo-ui5-message-strip-display></furo-ui5-message-strip-display>
      <furo-ui5-message-strip
        message="Sorry, the services for the App are currently not available. We are working on it."
        fn-show-error="--err"
        fn-show-grpc-localized-message="--grpcError"
      ></furo-ui5-message-strip>

      <furo-ui5-busy-indicator
        fn-activate="--reqStarted"
        fn-deactivate="--collectionResponse, --err"
        size="Small"
      >
        <furo-ui5-section noborder>
          <furo-ui5-subsection>
            <!-- Table cards are a type of object group card, and display a set of items in a table format. -->
            <furo-ui5-table
              at-arrow-down-on-last-row="--nextPageRequested"
              at-arrow-up-on-first-row="--prevPageRequested"
              fn-focus="--focus"
              fn-focus-first="|--nextPageLoaded, |--firstPageLoaded, |--lastPageLoaded"
              fn-focus-last="|--prevPageLoaded"
              no-data-text="No data available"
              fn-bind-data="--collectionDao(*.entities)"
              mode="SingleSelect"
            >

              {{range $key,$type := .Var.InnerType.fields}}
              <ui5-table-column slot="columns" field="*.{{$key}}"></ui5-table-column>
              {{end}}


            </furo-ui5-table>
          </furo-ui5-subsection>
        </furo-ui5-section>
      </furo-ui5-busy-indicator>

      <!-- Creates HATEOAS links according the set specification. Required for DeepLinking. -->
      <furo-deep-link
        service="{{.Var.Service.name}}"
        at-hts-out="--htsOut"
        fn-qp-in="--queryParamUpdated"
      ></furo-deep-link>

      <!-- API communication component. Required to handle collections.
      The search-hts-updated event will be catched in the view and passed down to the pagination bar
      -->
      <furo-collection-agent
        service="{{.Var.Service.name}}"
        at-hts-updated="^^search-hts-updated"
        at-request-started="--reqStarted"
        at-response="--collectionResponse"
        at-response-error="--err"
        at-response-error-400="--grpcError"
        at-fatal-error="--err"
        fn-set-filter="--filterChanged"
        fn-set-qp="|--searchQp"
        fn-list="--method-list-forwarded"
        fn-first="--first"
        fn-hts-in="--htsOut,|--htsIn"
        fn-last="--last"
        at-next-success="--nextPageLoaded"
        at-prev-success="--prevPageLoaded"
        at-first-success="--firstPageLoaded"
        at-last-success="--lastPageLoaded"
        fn-next="--next, --nextPageRequested"
        fn-prev="--prev, --prevPageRequested"
      ></furo-collection-agent>
      <!-- Client data model based on the set data type. -->
      <furo-data-object
        type="{{.Var.CollectionName}}"
        at-object-ready="--collectionDao"
        fn-inject-raw="--collectionResponse"
        fn-init="--method-clear-search-forwarded"
      ></furo-data-object>
    `;
  }
}

window.customElements.define('{{.Var.SearchResultsComponentName}}', {{.Var.SearchResultsClassName}});
import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';




import '@furo/layout/src/furo-vertical-flex.js';
import '@furo/route/src/furo-app-flow.js';
import '@furo/route/src/furo-pages.js';
import '@furo/data/src/furo-reverse-deep-link.js';

import '@furo/layout/src/furo-form-layouter.js';
import '@furo/util/src/furo-keydown.js';


import {Settings} from './settings.js';

/**
 * `activity-listreport-filter-options` contains a search field and also the filter options for the search.
 *
 * @fires reset-clicked {MouseEvent} Fired when the reset button of the list-report panel was clicked.
 * @fires search-triggered {String} Fired when the search button of the list-report panel was clicked. Detail payload: the base64 value of the list-report data object.
 *
 * @customElement activity-listreport-filter-options
 */
class ListreportFilterOptions extends FBP(LitElement) {
  constructor() {
    super();
    // used to clear the search field
    this.EMPTYSTRING = '';
  }

  /**
   * @private
   * @returns {CSSResult}
   */
  static get styles() {
    return css`
      :host {
        display: block;
        --_ui5_checkbox_width_height: 34px;
      }
    `;
  }

  /**
   * Focuses the first field on the form
   * @param e
   */
  focus(e) {
    this._FBPTriggerWire('|--focus', e);
  }

  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();

    setTimeout(() => {
      this._FBPTriggerWire('|--defaultData', Settings);
    }, 64);

    this._FBPTriggerWire('|--formRef', this.shadowRoot.getElementById('form'));
  }

  // Text für reset



  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <furo-ui5-header-panel
        fn-bind-header-text="--CurrentViewSettingDO(*.detail.name)"
        header-text-level="H3"
        at-expanded="--panelExpanded"
        header-icon="navigation-down-arrow"
        at-header-icon-clicked="--showViewDialogClicked"
      >
        <furo-form-layouter id="form" flex six breakpoint-big="1200" breakpoint-small="680">
          <!-- Listen to "Enter" and trigger the search -->
          <furo-keydown key="Enter" at-key="--EnterKeyPressed"></furo-keydown>



          <furo-ui5-text-input-labeled
            id="description"
            context="form"
            fn-bind-data="--filterDO(*.description)"
          ></furo-ui5-text-input-labeled>

          <furo-ui5-date-picker-labeled
            id="start"
            context="form"
            fn-bind-data="--filterDO(*.start)"
          ></furo-ui5-date-picker-labeled>

          <furo-ui5-date-picker-labeled
            id="end"
            context="form"
            fn-bind-data="--filterDO(*.end)"
          ></furo-ui5-date-picker-labeled>

          <furo-ui5-reference-search-labeled
            id="members"
            context="form"
            fn-bind-data="--filterDO(*.members)"
          ></furo-ui5-reference-search-labeled>

          <furo-horizontal-flex end space style="align-items: end;" id="actions">
            <div flex></div>
            <!-- we listen for "Enter" on the fields to trigger the search,
            but clearing and searching does not need to trigger again -->
            <furo-keydown key="Enter" stop-propagation></furo-keydown>
            <furo-ui5-button
              design="Emphasized"
              fn-click="--EnterKeyPressed"
              at-click="-^search-triggered(filterDO)"
              >search
            </furo-ui5-button>

            <furo-ui5-button
              design="Transparent"
              at-click="--setFilterClicked"
              icon="key-user-settings"
            >
            </furo-ui5-button>
          </furo-horizontal-flex>
        </furo-form-layouter>
      </furo-ui5-header-panel>

      <furo-ui5-views
        view-id="activity.list-report"
        fn-inject-default="|--defaultData"
        fn-set-filter-ref="|--formRef"
        at-current-view="--CurrentViewSettingDO"
        at-raw-filter-data="--filterData"
        fn-show-at="--showViewDialogClicked"


      ></furo-ui5-views>

      <furo-ui5-views-filter-settings


        fn-show="--setFilterClicked"
        fn-bind-settings="--CurrentViewSettingDO"
        fn-bind-filter="--filterDO"
      ></furo-ui5-views-filter-settings>

      <furo-data-object
        type="projectfilter.Projectfilter"
        at-object-ready="--filterDO,((filterDO)),^^filter-object-ready"
        fn-init="--clearAllClicked"
        fn-inject-raw="|--initialData, --filterData"
      ></furo-data-object>

      <furo-keydown key="Escape" at-key="^^escape-filter-panel"></furo-keydown>
    `;
  }
}

customElements.define('activity-listreport-filter-options', ListreportFilterOptions);

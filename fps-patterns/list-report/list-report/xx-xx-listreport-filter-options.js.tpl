import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import { i18n } from '@furo/framework/src/i18n.js';

import '@ui5/webcomponents-fiori/dist/Bar.js';
import '@furo/layout/src/furo-vertical-flex.js';
import '@furo/route/src/furo-app-flow.js';
import '@furo/route/src/furo-pages.js';
import '@furo/data/src/furo-reverse-deep-link.js';

import '@furo/layout/src/furo-form-layouter.js';
import '@furo/util/src/furo-keydown.js';
import '@furo/ui5/src/furo-ui5-header-panel.js';

import '@furo/ui5/src/furo-ui5-text-input-labeled.js';
import '@furo/ui5/src/furo-ui5-date-picker-labeled.js';
import '@furo/ui5/src/furo-ui5-select-labeled.js';
import '@furo/ui5/src/furo-ui5-checkbox-input-labeled.js';

/**
 * `{{.Var.FilterPanelComponentName}}` contains a search field and also the filter options for the search.
 *
 * @fires reset-clicked {MouseEvent} Fired when the reset button of the list-report panel was clicked.
 * @fires search-triggered {String} Fired when the search button of the list-report panel was clicked. Detail payload: the base64 value of the list-report data object.
 *
 * @customElement {{.Var.FilterPanelComponentName}}
 */
class {{.Var.FilterPanelClassName}} extends FBP(LitElement) {


  constructor() {
    super();
    // used to clear the search field
    this.EMPTYSTRING = "";
  }

  /**
   * @private
   * @returns {CSSResult}
   */
  static get styles() {
    return css`
      :host {
        display: block;
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
    this._FBPTraceWires();
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <furo-ui5-header-panel
        header-text="${i18n.t('{{.Var.LowerPrefix}}.listreport.panel.headertext')}"
        at-expanded="--panelExpanded"
      >
        <furo-form-layouter flex six breakpoint-big="1000" breakpoint-small="600">
          <!-- Listen to "Enter" and trigger the search -->
          <furo-keydown key="Enter" at-key="--EnterKeyPressed"></furo-keydown>

          <furo-ui5-form-field-container>
            <ui5-label
              label
              slot="label"
              for="Search"></ui5-label>
            <furo-ui5-text-input
              content
              id="Search"
              icon="search"
              fn-focus="|--focus, --panelExpanded"
              set-value="--clearAllClicked"
              at-search-requested="^^searchterm" ></furo-ui5-text-input>
          </furo-ui5-form-field-container>

          {{if .Var.FilterType}}
          <!-- todo: replace the furo-type-renderer with concrete elements for the corresponding types for more control -->
          {{range $key,$type := .Var.FilterType.fields}}
          <furo-type-renderer context="form"
                              fn-bind-data="--filterDO(*.{{$key}})"
          ></furo-type-renderer>{{end}}{{else}}
          <!-- bind your filter object, if you have one
          <furo-type-renderer context="form"
                              fn-focus="--focus"
                              fn-bind-data="--filterDO(*.FIELDNAME)"
          ></furo-type-renderer>
          -->{{end}}

          <furo-horizontal-flex full space>
            <furo-empty-spacer></furo-empty-spacer>
            <!-- we listen for "Enter" on the fields to trigger the search,
            but clearing and searching does not need to trigger again -->
            <furo-keydown key="Enter" stop-propagation></furo-keydown>
            <furo-ui5-button
              design="Emphasized"
              fn-click="--EnterKeyPressed"
              at-click="-^search-triggered(filterDO)"
            >${i18n.t('{{.Var.LowerPrefix}}.filteraction.search')}</furo-ui5-button
            >
            <furo-ui5-button design="Transparent" at-click="--clearAllClicked(EMPTYSTRING),-^reset-clicked"
            >${i18n.t('{{.Var.LowerPrefix}}.filteraction.reset')}</furo-ui5-button
            >
          </furo-horizontal-flex>
        </furo-form-layouter>

      </furo-ui5-header-panel>

      {{if .Var.FilterType}}
      <furo-data-object
        type="{{.Var.FilterObjectName}}"
        at-object-ready="--filterDO,((filterDO))"
        fn-init="--clearAllClicked"
      ></furo-data-object>
      {{else}}
      <!-- uncomment this, if you have a filter object
      <furo-data-object
        type="package.FILTEROBJECT_TYPE"
        at-object-ready="--filterDO,((filterDO))"
        fn-init="--clearAllClicked"
      ></furo-data-object>
      -->
      {{end}}
      <furo-keydown key="Escape" at-key="^^escape-filter-panel"></furo-keydown>
    `;
  }
}

customElements.define('{{.Var.FilterPanelComponentName}}', {{.Var.FilterPanelClassName}});

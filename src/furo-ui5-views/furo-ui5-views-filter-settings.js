import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import '@ui5/webcomponents/dist/Dialog.js';
import '@furo/fbp/src/flow-repeat.js';
import '@ui5/webcomponents/dist/Table.js';
import '@ui5/webcomponents/dist/TableColumn.js';
import '@ui5/webcomponents/dist/TableRow.js';
import '@ui5/webcomponents/dist/TableCell.js';
import '../furo-ui5-dialog.js';
import './helper/filter/helper-dialog-filter-settings.js';

/**
 * `furo-ui5-views-filter-settings` contains the dialog for the filter settings for a `furo-ui5-views`.
 *
 * @summary filter dialog
 * @customElement furo-ui5-views-filter-settings
 * @appliesMixin FBP
 */
export class FuroUi5ViewsFilterSettings extends FBP(LitElement) {
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
      /**
       * Title for the field column.
       */
      colheaderField: { type: String, attribute: 'colheader-field' },
      /**
       * Title for the position column.
       */
      colheaderPosition: { type: String, attribute: 'colheader-position' },
      /**
       * Title for the value column.
       */
      colheaderValue: { type: String, attribute: 'colheader-value' },
      /**
       * Placeholder text for the searcher.
       */
      placeholderSearch: { type: String, attribute: 'placeholder-search' },
      /**
       * Title for the dialog.
       */
      headerText: { type: String, attribute: 'filtersettings-header-text' },
    };
  }

  /**
   * Bind the filter DO.
   * @public
   * @param fieldnode
   */
  bindFilter(fieldnode) {
    this._FBPTriggerWire('|--bindFilter', fieldnode);
  }

  /**
   * Bind the settings DO from `furo-ui5-views`.
   * @public
   * @param fieldnode
   */
  bindSettings(fieldnode) {
    this._FBPTriggerWire('|--bindSettings', fieldnode);
  }

  /**
   * Opens the filter dialog.
   * @public
   */
  show() {
    this._FBPTriggerWire('|--show', null);
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
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
      <furo-ui5-dialog
        style="--_ui5_popup_content_padding_s: 0;--_ui5_popup_content_padding_m_l: 0;"
        fn-show="|--show"
        fn-close="--OkClicked"
        at-after-open="--opened"
        header-text="${this.headerText}"
      >
        <dialog-filter-settings
          fn-bind-settings="|--bindSettings"
          fn-bind-filter="|--bindFilter"
          fn-dialog-opened="--opened"
        ></dialog-filter-settings>

        <furo-horizontal-flex space style="align-items: center" slot="footer">
          <div flex></div>
          <furo-ui5-button design="Emphasized" at-click="--OkClicked"
            >OK</furo-ui5-button
          >
        </furo-horizontal-flex>
      </furo-ui5-dialog>
    `;
  }
}

window.customElements.define(
  'furo-ui5-views-filter-settings',
  FuroUi5ViewsFilterSettings
);

import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import '@ui5/webcomponents/dist/Dialog.js';
import '@furo/fbp/src/flow-repeat.js';
import '@ui5/webcomponents/dist/Table.js';
import '@ui5/webcomponents/dist/TableColumn.js';
import '@ui5/webcomponents/dist/TableRow.js';
import '@ui5/webcomponents/dist/TableCell.js';
import '../furo-ui5-dialog.js';
import './filter/dialog-filter-settings.js';

/**
 * `set-filter`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement
 * @appliesMixin FBP
 */
class FuroUi5ViewsFilterSettings extends FBP(LitElement) {
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
    this._FBPTriggerWire('|--bindFilter', fieldnode);
  }

  /**
   * bindSettings
   * @public
   * @param fieldnode
   */
  bindSettings(fieldnode) {
    this._FBPTriggerWire('|--bindSettings', fieldnode);
  }

  /**
   * show
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

import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import { i18n } from '@furo/framework/src/i18n.js';

import '@furo/ui5/src/furo-ui5-header-panel.js';
import '@furo/ui5/src/furo-ui5-typerenderer-labeled.js';
import '@furo/ui5/src/furo-ui5-message-strip-display.js';
import '@furo/ui5/src/furo-ui5-message-strip.js';
import '@furo/ui5/src/furo-ui5-dialog.js';

import '@furo/route/src/furo-app-flow.js';
import '@furo/route/src/furo-location-updater.js';
import '@furo/route/src/furo-pages.js';

import '@ui5/webcomponents/dist/RatingIndicator.js';
import '@ui5/webcomponents/dist/TabContainer.js';
import '@ui5/webcomponents/dist/Tab.js';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents/dist/Popover.js';

import '@ui5/webcomponents-fiori/dist/ShellBar.js';
import '@ui5/webcomponents-fiori/dist/ShellBarItem.js';

import './data/{{.Var.ComponentsPrefix }}-entity.js';

// Detail tab panels
{{$prefix :=  .Var.ComponentsPrefix }}
{{range $i, $tab := .Var.Tabs}}
import './detail/{{$prefix}}-{{$tab}}.js';
{{end}}

{{$LowerInnerTypeName := .Var.LowerInnerTypeName}}

/**
 * `{{.Var.ViewComponentName}}`
 * Shows an overview for a nat person
 *
 * @customElement
 * @appliesMixin FBP
 */
class {{.Var.ViewComponentClassName}} extends FBP(LitElement) {
  constructor() {
    super();
    this._currentTab = 'basics';
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();

    /**
     * Register hook on wire --pageHashChanged to
     * select the correct tab on deep linked calls or a page reload
     */
    this._FBPAddWireHook('--pageHashChanged', e => {
      this._currentTab = e.hash.tab;
      if (this._currentTab === undefined) {
        // set default
        this._currentTab = 'basics';
      }
      this.requestUpdate();
    });
  }

  /**
   * check if the current tab is selected
   * @param tab
   * @return {boolean}
   * @private
   */
  _checkInitialTab(tab) {
    return this._currentTab === tab;
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return css`
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

      :host {
        display: block;
        height: 100%;
      }

      :host([hidden]) {
        display: none;
      }

      .padding {
        padding: var(--FuroUi5MediaSizeIndentation, 0.625rem 2rem 0 2rem);
      }
      .padding-lr {
        padding-left: var(--FuroUi5MediaSizeIndentationLeft, 2rem);
        padding-right: var(--FuroUi5MediaSizeIndentationRight, 2rem);
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
        <!-- shell Bar with standard functionality -->
        <ui5-shellbar
          primary-title="SYRIUS "
          secondary-title="${i18n.t('{{$LowerInnerTypeName}}.secondarytitle')}"
          @-profile-click="--userRequested(*.detail.targetRef)"
        >
          <ui5-avatar slot="profile" initials="AN"></ui5-avatar>
          <ui5-button
            icon="nav-back"
            slot="startButton"
            @-click="^^return-to-last-waypoint"
          ></ui5-button>
          <ui5-shellbar-item
            id="notes"
            icon="tnt/values"
            title="Technical View"
            text="Technical View"
            @-click="--openAllAttributes"
          ></ui5-shellbar-item>
          <ui5-shellbar-item
            id="notes"
            icon="notes"
            count="2"
            title="Notes"
            text="Notes"
          ></ui5-shellbar-item>
          <ui5-shellbar-item
            id="history"
            icon="history"
            text="History"
            title="History"
          ></ui5-shellbar-item>
          <ui5-shellbar-item id="help" icon="sys-help" text="Help" title="Help"></ui5-shellbar-item>
        </ui5-shellbar>

        <!-- user setting popover menu -->
        <ui5-popover ƒ-show-at="--userRequested" placement-type="Bottom">
          <div class="popover-header">
            <ui5-title style="padding: 0.25rem 1rem 0rem 1rem">Anonymous User</ui5-title>
          </div>
          <div class="popover-content">
            <ui5-list separators="None">
              <ui5-li icon="settings">Language</ui5-li>
              <ui5-li icon="sys-help">Help</ui5-li>
            </ui5-list>
          </div>
        </ui5-popover>

        <!-- all attributes view -->
        <furo-ui5-dialog
          ƒ-show="--openAllAttributes"
          ƒ-close="--closeDialogClicked"
          header-text="${i18n.t('syrius.partnermgmt.technical.view.title')}"
          stretch="true"
        >
          <natperson-all-attributes ƒ-bind-data="--ObjectDetailDO"></natperson-all-attributes>
          <div slot="footer">
            <furo-ui5-button @-click="--closeDialogClicked"
              >${i18n.t('syrius.partnermgmt.dialog.closeaction')}</furo-ui5-button
            >
          </div>
        </furo-ui5-dialog>

        <!-- business object header panel
             most important information comes here -->
        <furo-ui5-header-panel
          ƒ-bind-header-text="--ObjectDetailDO(*.name)"
          ƒ-bind-secondary-text="--ObjectDetailDO(*.id.ulid)"
        >
          <furo-horizontal-flex space slot="action"></furo-horizontal-flex>

          <furo-horizontal-flex>
            <furo-form-layouter six flex>

            </furo-form-layouter>
          </furo-horizontal-flex>
        </furo-ui5-header-panel>

        <!-- tab navigation bar for a better structure (optional) -->
        <ui5-tabcontainer collapsed fixed @-tab-select="--subTabSelected">
          <!-- The ui5-tab represents a selectable item inside an ui5-tabcontainer. -->

          {{range $i, $tab := .Var.Tabs}}
          <ui5-tab
            text="${i18n.t('{{$LowerInnerTypeName}}.tabs.{{$tab}}')}"
            data-tab="{{$tab}}"
            ?selected="${this._checkInitialTab('{{$tab}}')}"
          ></ui5-tab>
          {{end}}

        </ui5-tabcontainer>
        <furo-location-updater ƒ-set-hash="--subTabSelected(*.tab.dataset)"></furo-location-updater>

        <!-- gRPC localized messages -->
        <furo-ui5-message-strip-display class="padding-lr"></furo-ui5-message-strip-display>
        <furo-ui5-message-strip
          message="${i18n.t('partner.errors.static.naturalpersonservice')}"
          ƒ-show-error="--notImplemented, --badGateway"
          ƒ-show-grpc-localized-message="--grpcError"
        ></furo-ui5-message-strip>

        <!-- sub-page handling
             each page must have an attribute name. This name appears in the URL as routing information -->
        <furo-pages scroll ƒ-activate-page="--pageHashChanged(*.hash.tab)" default="{{index .Var.Tabs 0}}">
{{$prefix := .Var.ComponentsPrefix}}
          {{range $i, $tab := .Var.Tabs}}
              <{{$prefix}}-{{$tab}} ƒ-bind-data="--ObjectDetailDO" name={{$tab}}> </{{$prefix}}-{{$tab}}  >
          {{end}}
        </furo-pages>
      </furo-vertical-flex>

      <!-- data model, api connections-->
      <{{.Var.DataEntityComponentName}}
        ƒ-qp-in="--pageActivated(*.query), --pageHashChanged(*.query)"
        ƒ-clear="--pageDeActivated"
        load-on-qp
        @-data-object="--ObjectDetailDO"
        @-response-error-400="--grpcError"
        @-response-error-408="--badGateway(*)"
        @-response-error-501="--notImplemented(*)"
        @-response-error-502="--badGateway(*)"
      ></{{.Var.DataEntityComponentName}}>

      <!-- browser title and way point handling -->
      <furo-document-title
        prefix="Partner Detail: "
        ƒ-bind-title="--ObjectDetailDO(*.name)"
      ></furo-document-title>

      <!-- configurable routing-->
      <furo-app-flow
        ƒ-emit="--processStartRequest"
        event="usertask-start-requested"
      ></furo-app-flow>
    `;
  }
}

window.customElements.define('{{.Var.ViewComponentName}}', {{.Var.ViewComponentClassName}});

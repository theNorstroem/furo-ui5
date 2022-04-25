import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import { i18n } from '@furo/framework/src/i18n.js';

import '@furo/layout/src/furo-vertical-flex.js';
import '@furo/route/src/furo-app-flow.js';
import '@furo/route/src/furo-document-title.js';

import './worklist-simple/subpage-{{.Var.LowerPrefix}}-worklist-simple.js';

/**
 * `{{.Var.PageComponentName}}`
 *
 * With a list report, users can view and work with a large set of items.
 * This floorplan offers powerful features for finding and acting on relevant items.
 *
 * {{.Var.Description}}
 *
 * @summary search
 * @customElement {{.Var.PageComponentName}}
 * @appliesMixin FBP
 */
class {{.Var.PageClassName}} extends FBP(LitElement) {
  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires();
  }

  static get styles() {
    // language=CSS
    return [
      css`
        :host {
          display: block;
          height: 100%;
        }

        :host([hidden]) {
          display: none;
        }
      `,
    ];
  }

  /**
   * @private
   * @returns {TemplateResult|TemplateResult}
   */
  render() {
    // language=HTML
    return html`
      <furo-vertical-flex>
        <ui5-shellbar
          primary-title="${i18n.t('{{.Var.LowerPrefix}}.shellbar.primary.title')}">
          <ui5-button icon="nav-back" slot="startButton" at-click="--homeRequested" fn-focus="--escapeWorklist"></ui5-button>
        </ui5-shellbar>
        <subpage-{{.Var.LowerPrefix}}-worklist-simple
          flex
          fn-focus="--pageActivated"
          fn-update-query-param="--pageQueryChanged(*.query)"
          at-record-selected="--recordSelected"
          at-escape-pressed="--escapeWorklist"
        ></subpage-{{.Var.LowerPrefix}}-worklist-simple>

      </furo-vertical-flex>

      <!-- Required to create query params based on the set data record. -->
      <furo-reverse-deep-link
        rel="self"
        service="{{.Var.Service.name}}"
        at-converted="--queryParams"
        fn-convert="--recordSelected(*.links)"
      ></furo-reverse-deep-link>

      <!-- Navigation component that is configurable through flowConfig.json. -->
      <furo-app-flow event="{{.Var.LowerPrefix}}-selected" fn-emit="--queryParams"></furo-app-flow>
      <furo-app-flow
        event="history-back"
        fn-emit="--homeRequested"
      ></furo-app-flow>

      <furo-document-title
        prefix="${i18n.t('{{.Var.LowerPrefix}}.page.title')}"
        fn-set-waypoint="--pageActivated"
      ></furo-document-title>
    `;
  }
}

window.customElements.define('{{.Var.PageComponentName}}', {{.Var.PageClassName}} );

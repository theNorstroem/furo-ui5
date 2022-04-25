import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';

/**
 * `{{.Var.DataEntityComponentName}}`
 *
 *
 *
 * @customElement {{.Var.DataEntityComponentName}}
 * @appliesMixin FBP
 */
class {{.Var.DataEntityClassName}} extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * load-on-qp triggers a load when qp results in a correct HTS
       */
      loadOnQp: { type: Boolean, attribute: 'load-on-qp' },
    };
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
   // this._FBPTraceWires();
  }

  /**
   * Call the save method to store the modified data if a correct hts link was given.
   * @public
   */
  save() {
    this._FBPTriggerWire('|--save', null);
  }

  /**
   * Set the query params
   * @param d
   * @public
   */
  qpIn(d) {
    this._FBPTriggerWire('|--qpIn', d);
  }

  /**
   * clear Clears the data object
   * @public
   */
  clear() {
    this._FBPTriggerWire('|--clear', null);
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
      <furo-deep-link service="{{.Var.Service.name}}" ƒ-qp-in="|--qpIn" @-hts-out="--HTS">
      </furo-deep-link>
      <furo-entity-agent
        service="{{.Var.Service.name}}"
        ƒ-hts-in="--HTS"
        @-load-success="--response"
        ƒ-bind-request-data="--Entity(*.data)"
        ƒ-save="|--save"
        ?load-on-hts-in="${this.loadOnQp}"
      ></furo-entity-agent>

      <furo-data-object
        type="{{.Var.EntityName}}"
        @-object-ready="--Entity, ^^data-object(*.detail.data), ((entity)), ^^entity"
        ƒ-inject-raw="--response"
        @-data-changed-after-inject="--dataChanged"
        ƒ-init="|--clear"
      ></furo-data-object>
    `;
  }
}

window.customElements.define('{{.Var.DataEntityComponentName}}', {{.Var.DataEntityClassName}});

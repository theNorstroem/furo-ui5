import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';

/**
 * `FuroUi5SetGroupby` is a helper component
 *
 *
 * @summary Helper component
 * @customElement
 * @appliesMixin FBP
 */
class FuroUi5SetGroupby extends FBP(LitElement) {
  /**
   * bindData
   * @public
   * @param orderByFieldnode
   */
  bindData(orderByFieldnode) {
    this._FBPTriggerWire('|--bindData', orderByFieldnode);
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Description
       */
      myBool: { type: Boolean },
    };
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

        min-height: 50vh;
        min-width: 50vw;
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
      <strong
        >Not implemented, feel free to register an issue if you need
        this</strong
      >
    `;
  }
}

window.customElements.define('furo-ui5-set-groupby', FuroUi5SetGroupby);

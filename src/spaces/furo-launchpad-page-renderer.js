import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import './furo-launchpad-section-renderer.js';

/**
 * `furo-launchpad-page-renderer`
 *  Renders a page of a space.
 *
 * @summary tile renderer
 * @customElement furo-launchpad-page-renderer
 * @appliesMixin FBP
 */
class FuroLaunchpadPageRenderer extends FBP(LitElement) {
  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()

    /**
     * Register hook on wire --sectionsAppended to
     * focus the first tile
     */
    this._FBPAddWireHook('--sectionsAppended', () => {
      this._fisrtSection = this.shadowRoot.querySelector(
        'furo-launchpad-section-renderer'
      );
      if (this._fisrtSection) {
        this._fisrtSection.focus();
      }
    });
  }

  /**
   * injectPage to render a page
   * @public
   * @param rawPage
   */
  injectPage(rawPage) {
    this._FBPTriggerWire('|--injectPage', rawPage);
  }

  /**
   * focus Focuses the first tile in the first section
   * @public

   */
  focus() {
    if (this._fisrtSection) {
      this._fisrtSection.focus();
    }
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
      <furo-data-flow-repeat
        fn-bind-data="--pageDO(*.sections)"
        identity-path="id"
        at-items-in-dom="--sectionsAppended"
      >
        <template>
          <furo-launchpad-section-renderer
            fn-bind-section="--init"
          ></furo-launchpad-section-renderer>
        </template>
      </furo-data-flow-repeat>

      <furo-data-object
        type="launchpad.Page"
        fn-inject-raw="|--injectPage"
        at-object-ready="--pageDO"
      ></furo-data-object>
    `;
  }
}

window.customElements.define(
  'furo-launchpad-page-renderer',
  FuroLaunchpadPageRenderer
);

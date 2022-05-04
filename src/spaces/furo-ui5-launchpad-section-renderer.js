import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import './furo-ui5-launchpad-tile-grid.js';
import '@furo/data/src/furo-type-renderer.js';

/**
 * `furo-ui5-launchpad-section-renderer`
 *  Renders a section of a page
 *
 * @summary section renderer for a tile page
 * @customElement furo-ui5-launchpad-section-renderer
 * @appliesMixin FBP
 */
class FuroUi5LaunchpadSectionRenderer extends FBP(LitElement) {
  /**
   * bindSection Bind a fieldnode of type launchpad.Section
   * @public
   * @param fieldNode
   */
  bindSection(fieldNode) {
    this.sectionTitle = fieldNode.display_name._value;
    this._FBPTriggerWire('|--bindSection', fieldNode);
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   * focus Focuses the first tile in the first section
   * @public

   */
  focus() {
    const target = this.shadowRoot.querySelector('*[context=tile]');
    if (target) {
      target.focus();
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

      :host(:first-of-type) ui5-title {
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
      <furo-ui5-launchpad-tile-grid>
        <ui5-title>${this.sectionTitle}</ui5-title>

        <!-- tiles -->
        <furo-data-flow-repeat
          fn-bind-data="|--bindSection(*.tiles)"
          identity-path="id"
        >
          <template>
            <furo-type-renderer
              context="tile"
              fn-bind-data="--init"
            ></furo-type-renderer>
          </template>
        </furo-data-flow-repeat>

        <div class="lines">
          <!-- links -->
          <furo-data-flow-repeat
            fn-bind-data="|--bindSection(*.links)"
            identity-path="id"
          >
            <template>
              <furo-type-renderer
                context="line"
                fn-bind-data="--init"
              ></furo-type-renderer>
            </template>
          </furo-data-flow-repeat>
        </div>
      </furo-ui5-launchpad-tile-grid>
    `;
  }
}

window.customElements.define(
  'furo-ui5-launchpad-section-renderer',
  FuroUi5LaunchpadSectionRenderer
);

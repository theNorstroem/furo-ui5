import { LitElement, html, css } from 'lit';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { FBP } from '@furo/fbp';

/**
 * `line-launchpad-launchtile`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement line-launchpad-launchtile
 * @appliesMixin FBP
 */
class LineLaunchpadLaunchtile extends FieldNodeAdapter(FBP(LitElement)) {
  onFnaFieldValueChanged(val) {
    this.target = val.target_url;
    this.display_name = val.display_name;
    this.subheader = val.subheader;
    this.title = `${val.display_name}\n${val.subheader}\n\n${val.footer}`;
    this.requestUpdate();
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
        display: inline-block;
        background: var(--sapTile_Background);
        margin: 1px 1rem 1rem 1px;
        box-shadow: var(--sapContent_Shadow0);
        border-radius: 0.25rem;
        border: 1px solid var(--sapTile_BorderColor);
        box-sizing: border-box;
      }

      :host(:focus-within) {
        border: 1px dotted var(--sapTile_Interactive_BorderColor);
        background: none;
      }

      :host(:hover) {
        border: 1px solid var(--sapTile_Interactive_BorderColor);
        background: none;
      }

      .subheader {
        color: var(--_ui5_tc_headerItem_color, #9e9e9e);
      }

      a {
        font-size: var(--sapFontHeader4Size);
        display: inline-block;
        padding: var(--launchTilePadding, 0.5rem 1rem 0.5rem 1rem);
        text-decoration: none;
        outline: none;

        color: var(--sapLinkColor);
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
      <a href="${this.target}" at-click="^^tile-clicked"
        >${this.display_name}
        <span class="subheader">${this.subheader}</span>
      </a>
    `;
  }
}

window.customElements.define(
  'line-launchpad-launchtile',
  LineLaunchpadLaunchtile
);

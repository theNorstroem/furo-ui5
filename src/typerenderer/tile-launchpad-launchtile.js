import { LitElement, html, css } from 'lit';
import { FieldNodeAdapter } from '@furo/data/src/lib/FieldNodeAdapter.js';
import { FBP } from '@furo/fbp';

/**
 * `tile-launchpad-launchtile`
 * todo Describe your element
 *
 * @summary todo shortdescription
 * @customElement tile-launchpad-launchtile
 * @appliesMixin FBP
 */
class TileLaunchpadLaunchtile extends FieldNodeAdapter(FBP(LitElement)) {
  onFnaFieldValueChanged(val) {
    this.target = val.target_url;
    this.display_name = val.display_name;
    this.subheader = val.subheader;
    this.footer = val.footer;
    this.image = val.image;

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
   * focus focuses the table
   * @public
   */
  focus() {
    this._FBPTriggerWire('|--focus', null);
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
        box-shadow: var(--sapContent_Shadow0);
        border-radius: 0.25rem;
        border: 1px solid var(--sapTile_BorderColor);
        color: var(--sapTile_TextColor);
        box-sizing: border-box;
        margin: 1px;
        background: var(--sapTile_Background);
        height: var(--launchTileSize, 13rem);
        padding: var(--launchTilePadding, 1rem 0.5rem 1rem 1rem);
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
      }

      :host(:focus-within) {
        border: 1px dotted var(--sapTile_Interactive_BorderColor);
        background: none;
      }

      :host(:hover) {
        border: 1px solid var(--sapTile_Interactive_BorderColor);
        background: none;
      }

      :host([hidden]) {
        display: none;
      }

      .footer {
        color: var(--sapNeutralColor);
        height: 16px;
      }

      .title {
        color: var(--sapTile_TitleTextColor);

        margin-bottom: 0.25rem;
        overflow: hidden;
        font-family: '72override', var(--sapFontFamily);
        font-size: var(--sapFontHeader3Size);
      }

      .subheader {
        display: inline-block;
        font-family: '72override', var(--sapFontFamily);
        font-size: var(--sapFontHeader5Size);
        color: var(--sapTile_TextColor);
        text-align: left;
        line-height: 1.125rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      .content {
        font-family: '72-Light', '72-Lightfull', '72', '72full', Arial,
          Helvetica, sans-serif;
        padding-bottom: 2px;
        font-size: var(--launchTileFontSize, 3rem);
        font-weight: 500;
      }

      ::slotted(small) {
        font-size: 1rem;
      }

      a {
        text-decoration: none;
        color: unset;
        outline: none;
      }

      img {
        max-width: 160px;
        max-height: 70px;
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
      <a href="${this.target}" fn-focus="|--focus">
        <furo-vertical-flex>
          <div class="title">${this.display_name}</div>
          <div class="subheader">${this.subheader}</div>
          <div flex></div>
          <div class="content">
            ${this.image !== ''
              ? html`<img src="${this.image}" alt="${this.display_name}"></img>`
              : ''}
          </div>

          <div class="footer">${this.footer}</div>
        </furo-vertical-flex>
      </a>
    `;
  }
}

window.customElements.define(
  'tile-launchpad-launchtile',
  TileLaunchpadLaunchtile
);

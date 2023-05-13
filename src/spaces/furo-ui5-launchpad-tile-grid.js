import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

/**
 * `furo-ui5-launchpad-tile-grid`
 *  Layout component used in sections.
 *
 * @summary tile layout component
 * @customElement furo-ui5-launchpad-tile-grid
 * @appliesMixin FBP
 */
export class FuroUi5LaunchpadTileGrid extends FBP(LitElement) {
  _FBPReady() {
    super._FBPReady();
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
        padding: var(--FuroUi5MediaSizeIndentation, 1rem);
        position: relative;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none;
      }

      .grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, var(--launchTileSize, 13rem)) [last-col];
        grid-template-rows: repeat(auto-fill, 1rem) [last-row];
        min-height: 100%;
      }

      ::slotted(*[halfheight]) {
        grid-row: auto / span 3;
      }

      ::slotted(*) {
        grid-row: auto / span 7;
      }

      ::slotted(*[doubleheight]) {
        grid-row: auto / span 14;
      }

      ::slotted(*[double]) {
        grid-column: auto / span 2;
      }

      ::slotted(.lines) {
        grid-column-start: 1;
        grid-column-end: last-col;
        grid-row: auto / span 2;
      }

      :host([media-size='S']) ::slotted(ui5-title) {
        line-height: 2rem;
      }

      ::slotted(ui5-title) {
        grid-column-start: 1;
        grid-column-end: last-col;
        grid-row: auto / span 2;
        line-height: 3rem;
        background: none;
      }

      ::slotted(h2) {
        grid-column-start: 1;
        grid-column-end: last-col;
        grid-row: auto / span 2;
        text-align: left;
        white-space: normal;
        overflow-wrap: break-word;
        line-height: 3rem;
        background: none;
        font-weight: 400;
        color: var(--sapTile_TitleTextColor);
        font-size: var(--sapFontHeader2Size);
      }

      ::slotted(div) {
        overflow: auto;
        box-sizing: border-box;
        grid-row: auto / span 1;
        grid-column-start: 1;
        grid-column-end: last-col;
      }

      /* matches media-size S */
      @media screen and (max-width: 598px) {
        ::slotted([main]) {
          grid-column: auto / span 1;
        }

        ::slotted([smallmain]) {
          grid-column: auto / span 1;
        }

        ::slotted([minimain]) {
          grid-column: auto / span 1;
        }

        ::slotted(*) {
          grid-row: auto / span 6;
        }
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
      <div class="grid">
        <slot></slot>
      </div>
    `;
  }
}

window.customElements.define(
  'furo-ui5-launchpad-tile-grid',
  FuroUi5LaunchpadTileGrid
);

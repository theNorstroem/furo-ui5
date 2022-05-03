import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

/**
 * `furo-tile-grid`
 *  Layout component used in sections.
 *
 * @summary tile layout component
 * @customElement furo-tile-grid
 * @appliesMixin FBP
 */
class FuroTileGrid extends FBP(LitElement) {
  _FBPReady() {
    super._FBPReady();
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
        grid-row: auto / span 6;
      }

      ::slotted(*[doubleheight]) {
        grid-row: auto / span 12;
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

      @media screen and (max-width: 687px) {
        ::slotted([main]) {
          grid-column: auto / span 1;
        }

        ::slotted([smallmain]) {
          grid-column: auto / span 1;
        }

        ::slotted([minimain]) {
          grid-column: auto / span 1;
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

window.customElements.define('furo-tile-grid', FuroTileGrid);

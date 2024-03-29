import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';

// eslint-disable-next-line import/no-extraneous-dependencies
import '@furo/util/src/furo-navigation-pad.js';
import '@ui5/webcomponents/dist/Button.js';
import '@ui5/webcomponents-fiori/dist/Bar.js';
import '@ui5/webcomponents-icons/dist/sys-first-page.js';
import '@ui5/webcomponents-icons/dist/sys-last-page.js';
import '@ui5/webcomponents-icons/dist/sys-next-page.js';
import '@ui5/webcomponents-icons/dist/sys-prev-page.js';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/src/i18n.js';

/**
 * The furo-ui5-pagination-bar element loops the hateoas array and finds out the pagination
 * information like prev, next, first and last
 *
 * ```
 *   <furo-ui5-pagination-bar fn-inject="--hateoas"></furo-ui5-pagination-bar>
 * ```
 *
 * @cssprop {1rem} [--furo-ui5-pagination-bar-padding-right=1rem] - Right padding definition
 * @cssprop {#ffffff} [--furo-ui5-pagination-bar-background-color=--sapPageHeader_Background] - Background color
 *
 * @fires {} pagination-first -  Is fired if the pagination button 'sys_first_page' was clicked
 * @fires {} pagination-last -  Is fired if the pagination button 'sys_last_page' was clicked
 * @fires {} pagination-prev -  Is fired if the pagination button 'sys_prev_page' was clicked
 * @fires {} pagination-next -  Is fired if the pagination button 'sys_next_page' was clicked
 *
 * @slot {HTMLElement} start - Defines the content at the start of the bar
 * @slot {HTMLElement} default - Defines the content in the middle of the bar
 *
 * Tags: pagination
 * @summary Pagination Bar
 * @element furo-ui5-pagination-bar
 * @demo demo-furo-ui5-pagination-bar Basic Usage
 * @mixes FBP
 */
export class FuroUi5PaginationBar extends FBP(LitElement) {
  constructor() {
    super();
    this.currentPage = 0;
  }

  static get styles() {
    // language=CSS
    return css`
      :host {
        width: 100%;
        display: block;
      }

      :host([hidden]) {
        display: none;
      }

      span {
        line-height: 36px;
      }
    `;
  }

  /**
   *@private
   */
  static get properties() {
    return {
      currentPage: {
        type: Number,
      },
      first: {
        type: Boolean,
      },
      prev: {
        type: Boolean,
      },
      next: {
        type: Boolean,
      },
      last: {
        type: Boolean,
      },
    };
  }

  /**
   * init pagination attributes
   * Supported type: furo.Link
   * @param hts
   */
  inject(hts) {
    this._disableAll();
    const self = this;
    hts.forEach(link => {
      switch (link.rel) {
        case 'first':
          self.first = true;
          break;
        case 'prev':
          self.prev = true;
          break;
        case 'next':
          self.next = true;
          break;
        case 'last':
          self.last = true;
          break;
        case 'self':
          self.getCurrentPage(link.href);
          break;
        default:
          break;
      }
    });

    /**
     * @error hts-injected
     * Is fired if HATEOAS Array is successfully injected
     */
    this.dispatchEvent(
      new CustomEvent('hts-injected', {
        detail: hts,
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   *
   * @private
   */
  _disableAll() {
    this.first = false;
    this.prev = false;
    this.next = false;
    this.last = false;
  }

  /**
   * get current page number via self link: page=xx
   * @private
   * @param href
   */
  getCurrentPage(href) {
    // assume that we are on the first page, if the qp "page" is not set
    this.currentPage = 1;
    if (href) {
      const regex = /page=[\d]*/;
      const page = href.match(regex);
      if (page && page.length > 0) {
        this.currentPage = page[0].substring(5);
      }
    }
  }

  /**
   *
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    const btns = this.shadowRoot.querySelectorAll('ui5-button');

    /**
     * Register hook on wire --navigated to
     * catch navigation events
     */
    this._FBPAddWireHook('--navigated', e => {
      let start;
      const enabledButtons = [];
      btns.forEach(btn => {
        if (!btn.disabled) {
          const c = enabledButtons.push(btn);
          if (btn.focused) {
            start = c - 1;
          }
        }
      });
      // eslint-disable-next-line default-case
      switch (e) {
        case 'ArrowRight':
          if (start + 1 >= enabledButtons.length) {
            enabledButtons[0].focus();
          } else {
            enabledButtons[start + 1].focus();
          }

          break;
        case 'ArrowLeft':
          // eslint-disable-next-line eqeqeq
          if (start == 0) {
            enabledButtons[enabledButtons.length - 1].focus();
          } else {
            enabledButtons[start - 1].focus();
          }

          break;
      }
    });
  }

  /**
   * @private
   * @returns {TemplateResult}
   */
  render() {
    return html`
      <ui5-bar design="Footer">
        <div slot="startContent"><slot name="start"></slot></div>
        <div slot><slot></slot></div>
        <ui5-button
          slot="endContent"
          title="${i18n.t('sys_first_page')}"
          accessible-name="${i18n.t('sys_first_page')}"
          design="Transparent"
          at-click="^^pagination-first"
          icon="sys-first-page"
          ?disabled="${!this.first}"
        ></ui5-button>
        <ui5-button
          slot="endContent"
          title="${i18n.t('sys_prev_page')}"
          accessible-name="${i18n.t('sys_prev_page')}"
          design="Transparent"
          at-click="^^pagination-prev"
          icon="sys-prev-page"
          ?disabled="${!this.prev}"
        ></ui5-button>
        ${this.currentPage ? html` <span>${this.currentPage}</span> ` : html``}
        <ui5-button
          slot="endContent"
          title="${i18n.t('sys_next_page')}"
          accessible-name="${i18n.t('sys_next_page')}"
          design="Transparent"
          at-click="^^pagination-next"
          icon="sys-next-page"
          ?disabled="${!this.next}"
        ></ui5-button>
        <ui5-button
          slot="endContent"
          title="${i18n.t('sys_last_page')}"
          accessible-name="${i18n.t('sys_last_page')}"
          design="Transparent"
          at-click="^^pagination-last"
          icon="sys-last-page"
          ?disabled="${!this.last}"
        ></ui5-button>
      </ui5-bar>
      <furo-navigation-pad at-navigated="--navigated"></furo-navigation-pad>
    `;
  }
}

customElements.define('furo-ui5-pagination-bar', FuroUi5PaginationBar);

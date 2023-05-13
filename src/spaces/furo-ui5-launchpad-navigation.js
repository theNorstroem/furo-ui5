import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import '@ui5/webcomponents/dist/TabContainer.js';
import '@ui5/webcomponents/dist/Tab.js';
/**
 * `furo-ui5-launchpad-navigation`
 *
 * Is used to navigate between spaces and pages.
 *
 * @fires page-selected {Object} Fired when a page was selected. The object contains the page:id
 *
 * @summary Spaces navigation tabs
 * @customElement furo-ui5-launchpad-navigation
 * @appliesMixin FBP
 */
export class FuroUi5LaunchpadNavigation extends FBP(LitElement) {
  constructor() {
    super();
    const urlParams = new URLSearchParams(window.location.search);
    this._currentTab = urlParams.get('page');
  }

  /**
   * check if the current tab is selected
   * @param tab
   * @return {boolean}
   * @private
   */
  _checkInitialTab(tab) {
    return this._currentTab === tab;
  }

  /**
   * focus Focuses the first tab
   * @public

   */
  focus() {
    this._firstTab.focus();
  }

  bindSpaces(fn) {
    fn.addEventListener('this-repeated-field-changed', () => {
      this._update(fn);
    });
    this._update(fn);
  }

  _update(fn) {
    const TC = this.shadowRoot.getElementById('TC');

    fn.repeats.forEach(space => {
      const node = document.createElement('ui5-tab');
      node.text = space.display_name._value;
      // set page id, not space id
      node.id = space.pages.repeats[0].id._value;
      node.selected = this._checkInitialTab(space.pages.repeats[0].id._value);

      // store focuspoint on first node
      if (this._firstTab === undefined) {
        this._firstTab = node;
      }

      if (space.pages.repeats.length > 1) {
        space.pages.repeats.forEach(t => {
          const subtab = document.createElement('ui5-tab');
          subtab.slot = 'subTabs';
          subtab.text = t.display_name._value;

          subtab.id = t.id._value;

          subtab.selected = this._checkInitialTab(t.id._value);

          if (t.icon) {
            subtab.icon = t.icon._value;
          }

          node.appendChild(subtab);
        });
      }

      TC.appendChild(node);
    });
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();

    /**
     * Register hook on wire --TabSelected to
     * listen on tab clicks
     */
    this._FBPAddWireHook('--TabSelected', e => {
      const tabId = e.tab.id;
      const customEvent = new Event('page-selected', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = { page: tabId };
      this.dispatchEvent(customEvent);
    });
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
      <ui5-tabcontainer id="TC" collapsed fixed at-tab-select="--TabSelected">
      </ui5-tabcontainer>
    `;
  }
}

window.customElements.define(
  'furo-ui5-launchpad-navigation',
  FuroUi5LaunchpadNavigation
);

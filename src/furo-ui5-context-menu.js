import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import '@furo/util/src/furo-keydown';

/**
 * furo-ui5-context-menu is a context menu or menu element.
 *
 * A `furo-ui5-context-menu-display` element must be inserted in one of the parent elements of the element where you
 * use the `furo-ui5-context-menu`. The app-shell or even body is a good place for that.
 *
 * `furo-ui5-context-menu` uses **diplay:inline**, do not forget to change it to display:block if you place it around a block level element.
 *
 * ```html
 *  <furo-ui5-context-menu  fn-trigger="--menuClkd" fn-bind-data="--menuObject" at-menu-item-selected="--menuItem">
 *      <ui5-icon name="menu" at-click="--menuClkd"></ui5-icon>
 *  </furo-ui5-context-menu>
 * ```
 *
 * ## Data signature
 *
 * ```yaml
 *- type: 'menu.Menuitem #Item signature for a context menu'
 *  fields:
 *    icon: 'string:1 #Leading icon of the menu'
 *    display_name: 'string:2 #String representation of the menu item. Menu item text'
 *    disabled: 'bool:3 #Display actions as disabled when they can only be used sometimes and under certain conditions.'
 *    command: 'string:4 #Keyboard command hint'
 *    leading_divider: 'bool:5 #Item has a leading divider line'
 *    children: '[] menu.Menuitem:6 #Children of this item'
 *```
 *
 * ## Minimal data signature
 *
 * ```yaml
 * - type: 'menu.Menuitem #Item signature for a context menu'
 *  fields:
 *    id: 'string:1 #Id of the menu item'
 *    display_name: 'string:2 #String representation of the menu item. Menu item text'
 * ```
 *
 * @fires { {context, menuitem}} menu-item-selected -  Fired when a menu item is selected.
 *
 * @slot {HTMLElement} - default slot to add an individual context menu opener component (e.g. furo-icon-button).
 *
 * @summary Context menu
 * @element furo-ui5-context-menu
 * @demo demo-furo-ui5-context-menu Basic usage
 * @appliesMixin FBP
 */
export class FuroUi5ContextMenu extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Use this to set a string value as context.
       * @private
       */
      _context: { type: String, attribute: 'context' },
    };
  }

  /**
   * Bind your menu object.
   *
   * @param {Fieldnode || RepeaterNode} menu with `menu.Menuitem` signature
   */
  bindData(menu) {
    this._menuNode = menu;
    // queued trigger context
    if (this._queueTrigger) {
      this.triggerContext(this._context);
      this._queueTrigger = false;
    }
  }

  /**
   * Sets the context. Use this if you want to set a Object as context
   * @param ctx {*} Can be anything, will be returned at the menu-item-selected method
   */
  setContext(ctx) {
    this._context = ctx;
  }

  /**
   * Triggers the context menu. Set by keyboard to true to focus the first element for keyboard navigation
   * @param byKeyboard
   */
  trigger(byKeyboard) {
    this.triggerContext(this._context, byKeyboard);
  }

  /**
   * triggers the menu with context
   * @param context {Object}
   */
  triggerContext(context, byKeyboard) {
    // enqueue when menuNode is not set
    if (!this._menuNode) {
      this._queueTrigger = true;
    } else {
      const customEvent = new Event('open-furo-ui5-menu-requested', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = {
        context,
        menu: this._menuNode,
        selectCallback: item => {
          const selectEvent = new Event('menu-item-selected', {
            composed: true,
            bubbles: true,
          });
          selectEvent.detail = {
            context: this._context,
            menuitem: item.detail,
          };
          this.dispatchEvent(selectEvent);
        },
        onClose: () => {
          // focus the childnode
          const slottContents =
            this.shadowRoot.firstElementChild.assignedElements();
          if (slottContents.length > 0) {
            setTimeout(() => {
              slottContents[0].focus();
            }, 10);
          }
        },
        initiator: this,
      };

      customEvent.byKeyboard = byKeyboard;
      this.dispatchEvent(customEvent);
    }
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    /**
     * Register hook on wire --keynav to
     * listen on shift+F10 to open by keyboard
     */
    this._FBPAddWireHook('--keynav', () => {
      // trigger
      this.trigger(true);
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
        display: inline;
        cursor: context-menu;
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
      <slot></slot>
      <furo-keydown shift key="F10" at-key="--keynav"></furo-keydown>
    `;
  }
}

window.customElements.define('furo-ui5-context-menu', FuroUi5ContextMenu);

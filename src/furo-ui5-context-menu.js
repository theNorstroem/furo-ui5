import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import '@furo/util/src/furo-keydown';

/**
 * `furo-ui5-context-menu`
 *  is a context menu or menu element.
 *
 *
 *  You have to put a `furo-ui5-context-menu-display` element in one of the parent elements of the element where you use the `furo-ui5-context-menu`.
 *  The app-shell is a good place for that.
 *
 * ```html
 *  <furo-ui5-context-menu  ƒ-trigger="--menuClkd" ƒ-bind-data="--menuObject" @-menu-item-selected="--menuItem">
 *      <ui5-icon name="menu" @-click="--menuClkd"></ui5-icon>
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
 *    action: 'string:5 #String representation of the menu item action'
 *    leading_divider: 'bool:6 #Item has a leading divider line'
 *    children: '[] menu.Menuitem:7 #Children of this item'
 *    flags: '- [] string:8 #Attribute flags e.g. important, negative, positive'
 *```
 *
 * @fires {{context, menuitem}} open-furo-ui5-menu-requested -  Fired when context menu was triggered
 * @fires { {context, menuitem}} menu-item-selected -  Fired when a menu item is selected
 *
 * @slot {HTMLElement} - default slot to add an individual context menu opener component (e.g. furo-icon-button).
 *
 * @summary a context menu
 * @customElement
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
       */
      _context: { type: String, attribute: 'context' },
    };
  }

  /**
   * Bind your menu object with the signature of menu.Menuitem or [menu.Menuitem].
   *
   * @param {Fieldnode || RepeaterNode}
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
        display: inline-block;
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
      <furo-keydown shift key="F10" @-key="--keynav"></furo-keydown>
    `;
  }
}

window.customElements.define('furo-ui5-context-menu', FuroUi5ContextMenu);

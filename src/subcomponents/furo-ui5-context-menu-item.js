import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import '@furo/layout/src/furo-horizontal-flex.js';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents-icons/dist/slim-arrow-right.js';
import '@ui5/webcomponents-icons/dist/border.js';

/**
 * `furo-ui5-context-menu-item` is a helper component for `furo-ui5-context-menu`.
 *
 * It is not intended for direct usage
 *
 *
 * @fires {index} mousefocus -  Fired when hovered with mouse
 * @fires { menu: this.menuitem, initiator: this } opensub-requested -  Fired when submenu should be opened
 * @fires {item} item-selected -  Fired when item was selected
 *
 * @summary context menu item
 * @element
 * @appliesMixin FBP
 */
export class FuroUi5ContextMenuItem extends FBP(LitElement) {
  constructor() {
    super();
    this.icon = 'border';
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * focused state
       */
      focused: { type: Boolean, reflect: true },
      /**
       * disabled state
       */
      disabled: { type: Boolean, reflect: true },
    };
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()

    this.addEventListener('mouseover', () => {
      this._mouseFocus = true;
      // do not reopen when submenu exist

      const customEvent = new Event('mousefocus', {
        composed: true,
        bubbles: true,
      });
      customEvent.detail = this._index;
      this.dispatchEvent(customEvent);
    });
  }

  /**
   * Bind a single menu node with a `menu.Menuitem` signature.
   * @param menuNode
   */
  bindData(menuNode) {
    this.menuitem = menuNode;

    if (this.menuitem.icon._value) {
      this.icon = this.menuitem.icon._value;
      this._noicon = false;
    } else {
      this._noicon = true;
    }

    if (this.menuitem.disabled) {
      this.disabled = this.menuitem.disabled._value;
    }

    if (this.menuitem.children.repeats.length > 0) {
      this._FBPTriggerWire('--submenu', this.menuitem);
    }
    if (this.menuitem.leading_divider._value === true) {
      const separator = document.createElement('div');
      separator.classList.add('separator');
      this.parentNode.insertBefore(separator, this);
    }
  }

  /**
   * send event to open the submenu

   * @param byKeyboard Boolean
   * @private
   */
  _openSub(byKeyboard) {
    const customEvent = new Event('opensub-requested', {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = { menu: this.menuitem, initiator: this };
    customEvent.byKeyboard = byKeyboard;
    this.dispatchEvent(customEvent);
    this._submenu = customEvent.submenu;
  }

  /**
   * The submenu item was set from the _openSub() event response
   * @private
   */
  _closeSub() {
    if (this._submenu) {
      this._submenu.hideMenu();
    }
  }

  /**
   * Select the item, furo-ui5-context-menu callback will be called
   * @private
   */
  _selectItem() {
    if (this.disabled) {
      return;
    }
    const customEvent = new Event('item-selected', {
      composed: true,
      bubbles: true,
    });
    customEvent.detail = this.menuitem;
    this.dispatchEvent(customEvent);
  }

  /**
   * selects the item if it does not have child elements
   * @private
   */
  select(key) {
    switch (key) {
      case 'Enter':
        // select
        if (this.menuitem.children.repeats.length === 0) {
          this._selectItem();
        }
        break;

      case 'ArrowLeft':
        // closes subnav
        if (this.menuitem.children.repeats.length > 0) {
          this._closeSub();
        }
        break;

      case 'ArrowRight':
        // opens subnav
        if (this.menuitem.children.repeats.length > 0) {
          this._openSub(true);
        }
        break;
      default:
    }
  }

  /**
   * Open the item if it have children
   * @private
   */
  _mouseSelect() {
    // select
    if (this.menuitem.children.repeats.length === 0) {
      this._selectItem();
    }
  }

  /**
   * store the index for mouseover focus
   * @param i
   */
  index(i) {
    this._index = i;
  }

  /**
   * mark item as focused
   */
  setFocused() {
    this.focused = true;
    // opens subnav on mousefocus
    if (this._mouseFocus && this.menuitem.children.repeats.length > 0) {
      this._openSub();
      this._mouseFocus = false;
    }
  }

  /**
   * mark item as unfocused
   */
  unsetFocused() {
    this.focused = false;
    if (this.menuitem.children.repeats.length > 0) {
      this._closeSub();
    }
  }

  disconnectedCallback() {
    this._closeSub();
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
        color: var(--sapTextColor);
        cursor: pointer;
      }

      :host([hidden]) {
        display: none;
      }

      :host([disabled]) {
        color: var(--sapContent_DisabledTextColor);
        cursor: unset;
      }

      .children {
        display: none;
        padding-right: 1rem;
      }

      ui5-icon[children] {
        display: block;
      }

      ui5-icon[hidden] {
        display: none;
      }

      /* the display name */
      .name {
        padding: 0 16px;
        overflow: hidden;
      }

      .command {
        color: #838383;
        padding-right: 1rem;
      }

      furo-horizontal-flex {
        height: 32px;
        line-height: 32px;
        box-sizing: border-box;
        padding-left: 4px;
        align-items: center;
      }
    `;
  }

  /**
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <furo-horizontal-flex @click="${this._mouseSelect}"
        ><ui5-icon ?hidden="${this._noicon}" name="${this.icon}"></ui5-icon>
        <div flex class="name">${this.menuitem.display_name}</div>
        <div class="command">${this.menuitem.command}</div>

        <ui5-icon
          name="slim-arrow-right"
          class="children"
          @click="${this._openSub}"
          ?children="${this.menuitem.children.repeats.length > 0}"
        ></ui5-icon>
      </furo-horizontal-flex>
    `;
  }
}

window.customElements.define(
  'furo-ui5-context-menu-item',
  FuroUi5ContextMenuItem
);

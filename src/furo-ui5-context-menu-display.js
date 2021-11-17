import { LitElement, html, css } from 'lit';

import { FBP } from '@furo/fbp';
import '@furo/fbp/src/flow-repeat';
import '@furo/util/src/furo-navigation-pad';
import { RepeaterNode } from '@furo/data/src/lib/RepeaterNode.js';
import './subcomponents/furo-ui5-context-menu-item.js';
import './subcomponents/furo-ui5-context-submenu.js';

export class FuroUi5ContextMenuDisplay extends FBP(LitElement) {
  /**
   * `furo-ui5-context-menu-display`
   *  is the display element for furo-ui5-context-menu and submenus. Place this component as high as needed in your dom.
   *
   *  You should not interact with this component directly. Use [`furo-ui5-context-menu`](?t=FuroUi5ContextMenu) to show a context menu.
   *
   *  There is nothing more to do. The menu creates a transparent "backdrop" with absolute positions 0 0 0 0
   *
   * ```html
   *  <furo-ui5-context-menu-display></furo-ui5-context-menu-display>
   * ```
   *
   *
   * @summary context menu
   * @customElement
   * @demo demo-furo-ui5-context-menu Basic usage
   * @appliesMixin FBP
   */

  constructor(props) {
    super(props);
    this.borderDistance = 48;

    // for bindData
    this._repeatsChanged = () => {
      /**
       * add flag _noicon if none of the group (between dividers) has no icons
       */
      let noicon = true;
      let stage = [];
      this._children.repeats.forEach((item, i, items) => {
        /**
         * if next item has a leading separator push before, otherwise push after loop
         */
        let pushed = false;
        if (
          item.leading_divider._value &&
          items[i + 1] &&
          items[i + 1].leading_divider._value
        ) {
          stage.push(item);
          pushed = true;
        }

        if (item.icon._value) {
          noicon = false;
        }
        if (item.leading_divider._value) {
          stage.forEach(stg => {
            // eslint-disable-next-line no-param-reassign
            stg._noicon = noicon;
          });
          stage = [];
          noicon = true;
        }
        if (!pushed) {
          stage.push(item);
        }
      });
      noicon = true;
      // do the last stage
      stage.forEach(item => {
        if (item.icon._value) {
          noicon = false;
        }
        stage.forEach(i => {
          // eslint-disable-next-line no-param-reassign
          i._noicon = noicon;
        });
      });

      this._FBPTriggerWire('--menuObject', this._children.repeats);
    };
  }

  /**
   * flow is ready lifecycle method
   * @private
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
    this._repeater = this.shadowRoot.getElementById('repeater');

    const menucontainer = this.shadowRoot.getElementById('menu');

    this.addEventListener('opensub-requested', e => {
      const submenu = document.createElement('furo-ui5-context-submenu');
      this.shadowRoot.appendChild(submenu);

      setTimeout(() => {
        submenu.init(e, this, e.byKeyboard);
      }, 10);
      // add submenu to event, so the requester can close it
      e.submenu = submenu;
    });

    this.parentNode.addEventListener('open-furo-ui5-menu-requested', e => {
      e.stopPropagation();
      this.menuObject = e.detail;

      // if menuObject.menu is an RepeaterNode, a children field was passed in to the menu, otherwise a menuitem itself was passed in
      if (e.detail.menu instanceof RepeaterNode) {
        this._children = this.menuObject.menu;
      } else {
        this._children = this.menuObject.menu.children;
      }

      // listener is de registred in hideMenu()
      this._children.addEventListener(
        'this-repeated-field-changed',
        this._repeatsChanged
      );
      this._repeatsChanged();

      this.setAttribute('backdrop', '');
      const { initiator } = e.detail;

      const thisCR = this.getBoundingClientRect();

      const initiatorCR = initiator.getBoundingClientRect();

      menucontainer.style.removeProperty('maxHeight');
      menucontainer.style.removeProperty('bottom');
      menucontainer.style.removeProperty('height');
      menucontainer.style.removeProperty('left');
      menucontainer.style.removeProperty('right');

      // find the ideal position and direction
      const initiatorCoordinates = {
        left: {
          x: initiatorCR.left,
          y: (initiatorCR.top + initiatorCR.bottom) / 2,
        },
        right: {
          x: initiatorCR.right,
          y: (initiatorCR.top + initiatorCR.bottom) / 2,
        },
      };
      if (
        initiatorCoordinates.left.x >
        thisCR.width - initiatorCoordinates.right.x
      ) {
        menucontainer.style.right = `${
          thisCR.width - initiatorCoordinates.left.x
        }px`;
        menucontainer.style.top = `${initiatorCoordinates.left.y}px`;
      } else {
        menucontainer.style.removeProperty('right');
        menucontainer.style.left = `${initiatorCoordinates.right.x}px`;
        menucontainer.style.top = `${initiatorCoordinates.right.y}px`;
      }

      // calculate container positions from bottom when the initator is in the under third of the screen
      let onUpperSide = true;
      if (initiatorCoordinates.right.y * 2.5 > thisCR.height) {
        // we are in the under half of the screen
        menucontainer.style.removeProperty('top');
        menucontainer.style.bottom = `${
          thisCR.height - initiatorCoordinates.right.y
        }px`;
        onUpperSide = false;
      }

      this._start = true;
      this.requestUpdate();

      // delay fade in effect set height
      setTimeout(() => {
        const menucontainerCr = menucontainer.getBoundingClientRect();

        let maxHeight =
          thisCR.height - initiatorCoordinates.left.y - this.borderDistance;
        if (!onUpperSide) {
          maxHeight = initiatorCoordinates.left.y - this.borderDistance;
        }

        menucontainer.style.maxHeight = `${maxHeight}px`;
        // max height of ctxmenu should  not go outside the screen
        if (menucontainerCr.height > maxHeight) {
          menucontainer.style.height = `${maxHeight}px`;
        }

        this._show = true;
        this.requestUpdate();

        setTimeout(() => {
          menucontainer.focus();
          // mark first element if opened by keyboard
          if (e.byKeyboard) {
            this._repeater.select(0);
          }
        }, 100);
      }, 10);
    });

    /**
     * Register hook on wire --nav to
     * listen to the navigation pad
     */
    this._FBPAddWireHook('--nav', e => {
      this.triggerNavigation(e);
    });

    /**
     * Register hook on wire --backdropClick to
     * remove the menu
     */
    this._FBPAddWireHook('--backdropClick', () => {
      this.hideMenu();
    });

    /**
     * Listen to item-selected to pass it back to furo-context-menu (callback)
     *
     */
    this.addEventListener('item-selected', e => {
      this.menuObject.selectCallback(e);
      this.hideMenu();
    });
  }

  hideMenu() {
    this.removeAttribute('backdrop');
    this._start = false;
    this._show = false;
    this.requestUpdate();

    // remove all submenus
    this.shadowRoot
      .querySelectorAll('furo-ui5-context-submenu')
      .forEach(sub => {
        sub.remove();
      });

    // unregister the event listener from open-furo-ui5-menu-requested
    this._children.removeEventListener(
      'this-repeated-field-changed',
      this._repeatsChanged
    );

    this.menuObject.onClose();
  }

  /**
   * Interface for the furo navigation pad
   * @param key
   */
  triggerNavigation(key) {
    switch (key) {
      case 'Enter':
        this._repeater.triggerSelected(key);
        break;

      case 'ArrowDown':
        this._repeater.selectNextIndex();
        break;
      case 'ArrowUp':
        this._repeater.selectPreviousIndex();
        break;
      case 'PageDown':
        break;
      case 'PageUp':
        this._repeater.select(0);
        break;

      case 'End':
        this.focusLast();
        break;
      case 'Home':
        this._repeater.select(0);
        break;

      case 'ArrowLeft':
        // closes subnav
        this._repeater.triggerSelected(key);
        break;

      case 'ArrowRight':
        // opens subnav
        this._repeater.triggerSelected(key);
        break;

      case 'Escape':
        // closes the menu
        this.hideMenu();
        break;
      default:
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
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        font-family: var(--sapFontFamily), sans-serif;
        font-size: var(--sapFontSize);
      }

      :host([backdrop]) {
        display: block;
      }

      #menu {
        outline: none;
        position: absolute;
        display: none;
        transition: opacity 0.03s linear,
          transform 0.12s cubic-bezier(0, 0, 0.2, 1),
          -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);
        opacity: 0;
        background-color: var(--sapList_Background);
        overflow-y: auto;
        box-sizing: border-box;
        box-shadow: var(--sapContent_Shadow2);
        border-radius: var(--_ui5-popup-border-radius);
      }

      #menu[start] {
        display: block;
        opacity: 0;
      }

      #menu[show] {
        opacity: 1;
        display: block;
      }

      .clickcatcher {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }

      /*  only focus is needed, because the menu closes on select */
      furo-ui5-context-menu-item:hover,
      furo-ui5-context-menu-item[focused] {
        background: var(--sapList_Hover_Background);
      }

      .separator {
        height: 8px;
        box-sizing: border-box;
        border-bottom: var(--ui5-listitem-border-bottom);
        margin-bottom: 8px;
      }
    `;
  }

  /**
   * The host is the backdrop
   *
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <div class="clickcatcher" @-click="--backdropClick"></div>
      <div
        id="menu"
        tabindex="0"
        ?start="${this._start}"
        ?show="${this._show}"
        @-mousefocus="--mousefocus"
      >
        <!-- the wires --itemSelected and --itemDeSelected means focus, they come from flow-repeat -->
        <flow-repeat
          id="repeater"
          ƒ-inject-items="--menuObject"
          ƒ-select="--mousefocus"
        >
          <template>
            <div>
              <furo-ui5-context-menu-item
                ƒ-index="--index"
                ƒ-select="--trigger"
                ƒ-set-focused="--itemSelected"
                ƒ-unset-focused="--itemDeSelected"
                ƒ-bind-data="--itemInjected(*.item)"
              ></furo-ui5-context-menu-item>
            </div>
          </template>
        </flow-repeat>
        <furo-navigation-pad @-navigated="--nav"></furo-navigation-pad>
      </div>
    `;
  }
}

window.customElements.define(
  'furo-ui5-context-menu-display',
  FuroUi5ContextMenuDisplay
);

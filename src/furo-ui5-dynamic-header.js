import { LitElement, html, css } from 'lit';
import { FBP } from '@furo/fbp';
import '@ui5/webcomponents/dist/Title.js';
import '@ui5/webcomponents/dist/Icon.js';
import '@ui5/webcomponents/dist/Avatar.js';
import '@ui5/webcomponents/dist/Label.js';
import '@furo/layout/src/furo-horizontal-flex.js';
import './furo-ui5-show-hide.js';

/**
 * `furo-ui5-dynamic-header`
 *  Header component with action slot
 *
 * @summary Dynamic Header
 * @customElement furo-ui5-dynamic-header
 * @appliesMixin FBP
 */
class FuroUi5DynamicHeader extends FBP(LitElement) {
  constructor() {
    super();

    /**
     *
     * @private
     */
    this._bodyIsScrolling = false;
    this.headerTextLevel = 'H2';
    this.iconSize = 'S';
    this.iconShape = 'Square';
    /**
     * @private
     * @param e
     */
    this._wheelhandler = e => {
      if (!this.isPinned && !this._bodyIsScrolling && e.deltaY > 10) {
        this.collapse();
      }
      if (e.deltaY < -10) {
        this.expand();
      }
    };
    /**
     * // scrolling collapse and expand
     * @private
     */
    setTimeout(() => {
      this._bodyIsScrolling = false;
    }, 1400);
    /**
     * @private
     */
    this._scrollhandler = () => {
      this._bodyIsScrolling = true;
      this._disableBIS();
    };
  }

  /**
   * Collapses the header content.
   * This method will do nothing, if the header is "pinned".
   *
   * @public
   * @method
   * @returns {void}
   */
  collapse() {
    if (!this.collapsed && !this.isPinned) {
      this._showHideComponent.hide();
      this.collapsed = true;
    }
  }

  /**
   * Expands the header content.
   * This method will do nothing, if the header is "pinned".
   *
   * @public
   * @method
   * @returns {void}
   */
  expand() {
    if (this.collapsed && !this.isPinned) {
      this._showHideComponent.show();
      this.collapsed = false;
    }
  }

  /**
   * Bind any **scalar** field to set the title of the panel.
   * Supported types: scalar types
   * @param {FieldNode} fieldNode
   */
  bindHeaderText(fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }
    this.headerText = fieldNode._value;
    fieldNode.addEventListener('field-value-changed', () => {
      this.headerText = fieldNode._value;
    });
  }

  /**
   * Bind any **scalar** field to set the secondaryText of the panel.
   * @param {FieldNode} fieldNode
   */
  bindSecondaryText(fieldNode) {
    if (fieldNode === undefined) {
      // eslint-disable-next-line no-console
      console.warn('Invalid fieldNode in bindData', this);
      return;
    }
    this.secondaryText = fieldNode._value;
    fieldNode.addEventListener('field-value-changed', () => {
      this.secondaryText = fieldNode._value;
    });
  }

  connectedCallback() {
    // eslint-disable-next-line  wc/guard-super-call
    super.connectedCallback();
    this.updateComplete.then(() => {
      // @ts-ignore
      this._showHideComponent = this.shadowRoot.getElementById('showHide');
      let wrappersize = 390;
      // set wrap if content is smaller then 390px
      const ro = new ResizeObserver(entries => {
        window.requestAnimationFrame(() => {
          const { width } = entries[0].contentRect;
          if (width < 406) {
            this.setAttribute('wrap', '');
            // @ts-ignore
            wrappersize = this.shadowRoot.querySelector('.wrapper').offsetWidth;
          } else if (width > 111 + wrappersize) {
            this.removeAttribute('wrap');
          }
        });
      });
      // @ts-ignore
      const contentslot = this.shadowRoot.querySelector('.content');
      if (contentslot != null) {
        ro.observe(contentslot);
      }
      document.addEventListener('scroll', this._scrollhandler, true);
      this.addEventListener('mousewheel', this._wheelhandler, true);
    });
  }

  disconnectedCallback() {
    // eslint-disable-next-line  wc/guard-super-call
    super.disconnectedCallback();
    document.removeEventListener('scroll', this._scrollhandler, true);
    this.removeEventListener('mousewheel', this._wheelhandler, true);
  }

  _toggle() {
    if (!this.isPinned) {
      // @ts-ignore
      const hidden = this.shadowRoot.getElementById('showHide').toggle();
      this.collapsed = !!hidden;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  _toggleOnKeyup() {
    // this event is unreachable, just inserted for the a11 linter
  }

  /**
   * @private
   *
   */
  _pinClicked(e) {
    e.stopPropagation();
    if (!this.isPinned) {
      this.isPinned = true;
      this.dispatchEvent(
        new CustomEvent('pinned', {
          detail: this,
          bubbles: false,
          composed: true,
        })
      );
    } else {
      this.isPinned = false;
      this.dispatchEvent(
        new CustomEvent('unpinned', {
          detail: this,
          bubbles: false,
          composed: true,
        })
      );
    }
    this.requestUpdate();
  }

  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      /**
       * Defines the headerText of the component.
       *
       * @public
       */
      headerText: { type: String, attribute: 'header-text' },
      /**
       * Defines the headerTextLevel of the component.
       *
       * @public
       */
      headerTextLevel: { type: String, attribute: 'header-text-level' },
      /**
       * Defines the icon-size of the icon / image.
       *
       * S, M, L, XL
       *
       * @public
       */
      iconSize: { type: String, attribute: 'icon-size' },
      /**
       * Defines the icon-shape of the icon / image.
       * Square | Circle
       *
       * @public
       */
      iconShape: { type: String, attribute: 'icon-shape' },
      /**
       * Shows the fovorite icon when set.
       *
       * @public
       */
      isFavorite: { type: Boolean, attribute: 'is-favorite' },
      /**
       * Draw a shadow, this is useful when you do not have a `tab-container` after your `dynamic-header`
       *
       * @public
       */
      shadow: { type: Boolean, attribute: 'shadow' },
      /**
       * Show the dropdown button icon after the header text.
       *
       * @public
       */
      showDropdown: { type: Boolean, attribute: 'show-dropdown' },
      /**
       * Set this value to display an object icon.
       *
       * @public
       */
      objectIcon: { type: String, attribute: 'object-icon' },
      /**
       * Set this attribute to get a bigger action slot.
       *
       * @public
       */
      bigAction: { type: Boolean, attribute: 'big-action' },
      /**
       * Set the collapsed attribute to start in a collapsed state. Header which are pinned by the user in collapsed or expanded state, will override
       * this attribute.
       *
       * @public
       */
      collapsed: { type: Boolean, reflect: true },
      /**
       * Set the is-pinned attribute to disable collapse and exand before unpin.
       *
       * @public
       */
      isPinned: { type: Boolean, attribute: 'is-pinned' },
    };
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
        display: block;
        padding: var(--MediaSizeIndentation, 0.625rem 2rem 0 2rem);
        background: var(--sapGroup_ContentBackground, white);
        /*  border-bottom: 1px solid var(--sapGroup_TitleBorderColor); */
        box-sizing: border-box;
        position: relative;
        color: var(--sapTextColor);
      }

      #showHide {
        padding-bottom: 0.5rem;
      }

      :host([shadow]) {
        box-shadow: var(--sapContent_HeaderShadow);
      }

      .splitter_bar {
        left: 20px;
        right: 20px;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        position: absolute;
        bottom: -12px;
        z-index: 1;
      }

      :host([hidden]) {
        display: none;
      }

      .collapser-button {
        transition: rotate ease-in-out 0.75s;
      }

      :host([collapsed]) .collapser-button {
        transition: all ease-in-out 0.75s;
        transform: rotate(180deg);
      }

      .content {
        display: inline-block;
        width: 100%;
      }

      .wrapper {
        display: flex;
        padding-top: var(--MediaSizeIndentationTop, 0.625rem);
        padding-left: 0;
        padding-bottom: 0;
        padding-right: 0;
      }

      :host([wrap]) .wrapper {
        flex-wrap: wrap;
      }

      :host([wrap]) .content {
        padding-top: var(--MediaSizeIndentationTop, 0.625rem);
      }

      :host([fixed]) {
        padding-bottom: var(--MediaSizeIndentationBottom, 0.25rem);
      }

      #titleblock {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        row-gap: 0.625rem;
      }

      #titleblock > *,
      slot[name='kpi']::slotted(*) {
        margin-inline-end: var(--horizontal-flex-space, 0.5rem);
      }

      .badges ::slotted(*) {
        margin-top: var(--MediaSizeIndentationBottom, 0.25rem);
        margin-inline-end: var(--MediaSizeIndentationBottom, 0.625rem);
        margin-bottom: var(--MediaSizeIndentationBottom, 0.25rem);
      }

      .avatar {
        margin-inline-end: 1rem;
      }

      :host([fixed]) .splitter_bar {
        display: none;
      }

      .collapser-button,
      .pin-button {
        width: 1.5rem;
        height: 1.5rem;
        min-width: 1.5rem;
        will-change: transform;
        overflow: visible;
        cursor: pointer;
        color: var(--sapButton_TextColor);
      }

      .splitter {
        width: 4rem;
        height: 1.1rem;
        background-size: 100% 0.0625rem;
        background-repeat: no-repeat;
        background-position: center;
        transition: width ease-in 0.25s;
      }

      .splitter.after {
        background-image: linear-gradient(
          to right,
          var(--sapBrandColor),
          transparent
        );
      }

      .splitter.before {
        background-image: linear-gradient(
          to left,
          var(--sapBrandColor),
          transparent
        );
      }

      .mid {
        width: 0.5rem;
        height: 1.5rem;
        background-size: 100% 0.0625rem;
        background-repeat: no-repeat;
        background-position: center;
        background-image: linear-gradient(
          to right,
          var(--sapBrandColor),
          var(--sapBrandColor)
        );
      }

      .splitter_bar:hover:has(.splitter:hover) > .collapser-button,
      .splitter_bar:hover:not(:has(*:hover)) > .collapser-button {
        border-radius: var(--sapButton_BorderCornerRadius);
        border: 1px solid var(--sapButton_Lite_Hover_BorderColor, #0854a0);
        box-sizing: border-box;
      }

      .collapser-button:hover {
        border-radius: var(--sapButton_BorderCornerRadius);
        border: 1px solid var(--sapButton_Lite_Hover_BorderColor, #0854a0);
        box-sizing: border-box;
      }

      .pin-button:hover {
        border-radius: var(--sapButton_BorderCornerRadius);
        border: 1px solid var(--sapButton_Lite_Hover_BorderColor, #0854a0);
        box-sizing: border-box;
      }

      .splitter_bar:hover > .splitter {
        width: 20%;
        transition: width ease-in 0.5s;
      }

      :host(:not([fixed])) {
        padding-bottom: 0;
      }

      :host(:not([secondary-text])) #ui5-label {
        display: none;
      }

      @media print {
        .splitter_bar,
        slot[name='action'] {
          display: none;
        }

        .splitter_bar > .splitter {
          width: 30%;
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
    // eslint-disable-next-line  lit-a11y/click-events-have-key-events
    return html`
      <furo-form-layouter four style="align-items: center">
        <div
          ?tripple="${!this.bigAction}"
          ?double="${this.bigAction}"
          space
          id="titleblock"
        >
          <ui5-title
            style="display: inline-block"
            level="${this.headerTextLevel}"
          >
            ${this.headerText}
          </ui5-title>
          <ui5-button
            ?hidden="${!this.showDropdown}"
            at-click="^^variant-icon-clicked(*.target)"
            design="Transparent"
            interactive=""
            icon="navigation-down-arrow"
            style="height: 1.5rem; width: 1.5rem"
          ></ui5-button>
          <ui5-icon
            ?hidden="${this.objectIcon === ''}"
            at-click="^^objrct-icon-clicked(*.target)"
            design="Transparent"
            name="${this.objectIcon}"
          ></ui5-icon>
          <ui5-icon
            ?hidden="${!this.isFavorite}"
            at-click="^^header-icon-clicked(*.target)"
            design="Transparent"
            name="favorite"
          ></ui5-icon>

          <slot name="kpi" id="kpinav"></slot>
        </div>

        <div end ?double="${this.bigAction}">
          <slot name="action"></slot>
        </div>
      </furo-form-layouter>
      <furo-ui5-show-hide animated="" id="showHide" ?hidden="${this.collapsed}">
        <ui5-label>${this.secondaryText}</ui5-label>
        <div class="wrapper">
          ${this.icon
            ? html`
                <ui5-avatar
                  class="icon"
                  icon="${this.icon}"
                  size="${this.iconSize}"
                  shape="${this.iconShape}"
                ></ui5-avatar>
              `
            : html``}
          ${this.image
            ? html`
                <ui5-avatar shape="${this.iconShape}" size="${this.iconSize}">
                  <img src="${this.image}" alt=" " />
                </ui5-avatar>
              `
            : html``}
          <div class="content">
            <slot></slot>
          </div>
        </div>
        <div class="badges">
          <slot name="badges"></slot>
        </div>
      </furo-ui5-show-hide>
      <div
        class="splitter_bar"
        @click="${this._toggle}"
        @keyup="${this._toggle}"
      >
        <div class="splitter before"></div>
        <ui5-icon class="collapser-button" name="slim-arrow-up"></ui5-icon>
        <div class="mid"></div>
        <ui5-icon
          class="pin-button"
          @click="${this._pinClicked}"
          name="${this.isPinned ? 'pushpin-on' : 'pushpin-off'}"
        ></ui5-icon>
        <div class="splitter after"></div>
      </div>
    `;
  }
}

window.customElements.define('furo-ui5-dynamic-header', FuroUi5DynamicHeader);

 
import "@ui5/webcomponents/dist/Icon.js";
import "@ui5/webcomponents/dist/Avatar.js";
import "@ui5/webcomponents/dist/Label.js";
import "@furo/layout/furo-responsive-layout";
import "@furo/layout/furo-horizontal-flex";
import "@furo/layout/furo-vertical-flex";
import "../furo-ui5-show-hide";
import "../furo-ui5-button";
import "../furo-ui5-title";
import "@ui5/webcomponents-icons/dist/slim-arrow-up.js";
import "@ui5/webcomponents-icons/dist/slim-arrow-down.js";
import "@ui5/webcomponents-icons/dist/pushpin-off.js";
import "@ui5/webcomponents-icons/dist/pushpin-on.js";
import "@ui5/webcomponents-icons/dist/favorite.js";
import "@ui5/webcomponents-icons/dist/navigation-down-arrow.js";
import "@ui5/webcomponents-icons/dist/share.js";
import "../furo-ui5-icon";

import { css, LitElement, nothing } from "lit";
// eslint-disable-next-line import/extensions
import { property } from "lit/decorators.js";
// eslint-disable-next-line import/extensions
import { html } from "lit/static-html.js";

import IconShape from "@/types/IconShape";
import IconSize from "@/types/IconSize";
import { NavigationGroup } from "@/util/NavigationGroup";
import Throttle from "@/util/Throttle";
import type { FuroUi5ShowHide } from "@/web-components/furo-ui5-show-hide/FuroUi5ShowHide";

/**
 *
 * ### Overview
 *  The dynamic page header contains key information about the object and provides the user with the necessary context. The header initially expands in display mode. It also contains global actions for the object, such as Edit or Delete.
 *
 * ### Usage
 * #### Header Content (default slot)
 * The header content displays app-specific contextual information. You build the content using containers, called facets.
 *
 * The facets are arranged inline with a left float. Each facet adapts its size to the content and makes optimal use of the space without truncating the texts. If the facets do not all fit on one line, those on the right wrap to the line below.
 *
 * <strong>Note:</strong> The Breadcrumb and the TabContainer is not part of the DynamicHeader component.
 *
 *  <a href="https://experience.sap.com/fiori-design-web/dynamic-page-layout/#components">Read more about the DynamicHeader in the DynamicPage page layout.</a>
 *
 *  <a href="https://experience.sap.com/fiori-design-web/object-page/#dynamic-page-header-mandatory">Read more about the DynamicHeader in the ObjectPage floor plan.</a>
 *
 * @slot {HTMLElement[]} search - Place your search input field here.
 * @slot {HTMLElement[]} kpi - Place kpi tags here, do not use more than 3 if possible.
 * @slot {HTMLElement[]} action - Place action items here. If you need more space, set `big-action`.<br>Use a `HorizontalFlex` to align the contents to the end.
 * @slot {HTMLElement[]} summary - Shows when the panel is collapsed.
 * @slot {HTMLElement[]} secondary - Only for special cases. Place additional content here. This slot is always visible (not part of the collapse area).
 * @slot {HTMLElement[]} badges - Place badges here.
 * @slot {HTMLElement[]} - Place your main header content here. Hint: use a ResponsiveLayout with 4 or 6.
 * @slot {HTMLElement[]}  - Place your main header content here. Hint: use a ResponsiveLayout with 4 or 6.
 * @cssprop [--sapBrandColor=--primary-dark] - the gradient-start color of the splitter
 * @event {CustomEvent} pinned - Fired when pin was set.
 * @event {CustomEvent} unpinned - Fired when pin was removed.
 * @event {CustomEvent<Boolean>} hid - hid will be fired when the header is collapsed.
 * @event {CustomEvent<Boolean>} showed - showed will be fired when the header is expanded.
 * @event {CustomEvent<HTMLElement>} variant-icon-clicked - fired when the variant dropdown is clicked or the [arrow down] key is pressed, sends the node ref of the icon.
 * @event {CustomEvent<HTMLElement>} object-icon-clicked - fired when the object icon is clicked, sends the node ref of the icon.
 * @event {CustomEvent<HTMLElement>} favorite-icon-clicked - fired when the favorite icon is clicked, sends the node ref of the icon.
 * @author Furo
 * @tagname furo-ui5-header-panel
 * @public
 */
export class FuroUi5HeaderPanel extends LitElement {
  /**
   * Defines the headerText of the component.
   *
   * @public
   * @attr {string} header-text
   */
  @property({ type: String, attribute: "header-text", reflect: true })
  headerText = "";

  /**
   * Defines the headerTextLevel of the component.
   *
   * @public
   * @attr {string} header-text-level
   */
  @property({ type: String, attribute: "header-text-level" })
  headerTextLevel = "H2";

  /**
   * Defines the image of the component.
   * In the case that an image and an icon are set, only the icon is displayed.
   *
   * @public
   */
  @property({ type: String })
  image!: string;

  /**
   * Defines the icon of the component.
   *
   * To change the size use `icon-size`.
   *
   * To change the shape use `icon-shape`.
   *
   * @public
   */
  @property({ type: String })
  icon!: string;

  /**
   * Defines the icon-size of the icon / image.
   *
   * S, M, L, XL
   *
   * @type IconSize
   * @typeref IconSize - "@furo/ui5/dist/types/IconSize.js"
   * @public
   */
  @property({ type: IconSize, attribute: "icon-size" })
  iconSize: IconSize = IconSize.S;

  /**
   * Defines the icon-shape of the icon / image.
   * Square | Circle
   *
   * @type IconShape
   * @typeref IconShape - "@furo/ui5/dist/types/IconShape.js"
   * @public
   */
  @property({ type: IconShape, attribute: "icon-shape" })
  iconShape: IconShape = IconShape.Square;

  /**
   * Shows the fovorite icon when set.
   *
   * @public
   * @attr {boolean} is-favorite
   */
  @property({ type: Boolean, attribute: "is-favorite" })
  isFavorite = false;

  /**
   * Show the dropdown button icon after the header text.
   *
   * @public
   * @attr {boolean} show-dropdown
   */
  @property({ type: Boolean, attribute: "show-dropdown" })
  showDropdown = false;

  /**
   * Fixes the header as it is. This will remove the collapse and expand buttons.
   *
   * Programmatic expand and collapse will still work.
   *
   * @public
   */
  @property({ type: Boolean, attribute: "fixed" })
  fixed = false;

  /**
   * Draw a shadow, this is useful when you do not have a `tab-container` after your `dynamic-header`
   *
   * @public
   */
  @property({ type: Boolean, attribute: "shadow" })
  shadow = false;

  /**
   * Set this value to display an object icon.
   *
   * @public
   * @attr {string} object-icon
   */
  @property({ type: String, attribute: "object-icon" })
  objectIcon = "";

  /**
   * Set this attribute to get a bigger action slot.
   *
   * @public
   * @attr {boolean} big-action
   */
  @property({ type: Boolean, attribute: "big-action" })
  bigAction = false;

  /**
   * Set the collapsed attribute to start in a collapsed state. Header which are pinned by the user in collapsed or expanded state, will override
   * this attribute.
   *
   * @public
   */
  @property({ type: Boolean, reflect: true })
  collapsed = false;

  /**
   * The secondary text is something like a subtitle, it is placed below the header text and KPI slot.
   * If the secondary text is empty, the label is removed.
   * @public
   * @attr {string} secondary-text
   */
  @property({ type: String, attribute: "secondary-text", reflect: true })
  secondaryText!: string;

  /**
   * Set the is-pinned attribute to disable collapse and expand before unpin.
   *
   * @public
   */
  @property({ type: Boolean, attribute: "is-pinned", reflect: true })
  isPinned = false;

  /**
   * Flag to disable/enable collapsing/expanding on scroll
   *
   * @public
   * @attr {boolean} collapse-on-scroll
   */
  @property({ type: Boolean, attribute: "collapse-on-scroll", reflect: true })
  collapseOnScroll = true;

  /**
   *
   * @private
   */
  private _showHideComponent: FuroUi5ShowHide | undefined;

  private _summaryComponent: FuroUi5ShowHide | undefined;

  /**
   *
   * @private
   */
  private _bodyIsScrolling = false;

  /**
   * @private
   */
  _fireVariantIconClicked(e: MouseEvent) {
    this.dispatchEvent(
      new CustomEvent("variant-icon-clicked", {
        composed: true,
        bubbles: true,
        detail: e.target,
      })
    );
  }

  /**
   * @private
   */
  _variantButtonKeyboardHandler(e: KeyboardEvent) {
    if (e.key === "ArrowDown") {
      this.dispatchEvent(
        new CustomEvent("variant-icon-clicked", {
          composed: true,
          bubbles: true,
          detail: e.target,
        })
      );
    }
  }

  /**
   * @private
   */
  _fireFavoriteIconClicked(e: MouseEvent) {
    this.dispatchEvent(
      new CustomEvent("favorite-icon-clicked", {
        composed: true,
        bubbles: true,
        detail: e.target,
      })
    );
  }

  /**
   * @private
   */
  _fireObjectIconClicked(e: MouseEvent) {
    this.dispatchEvent(
      new CustomEvent("object-icon-clicked", {
        composed: true,
        bubbles: true,
        detail: e.target,
      })
    );
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
      this._summaryComponent?.show();
      this._showHideComponent?.hide();
      setTimeout(() => {
        this.collapsed = true;
      }, 250);
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
      this._summaryComponent?.hide();
      this._showHideComponent?.show();
      setTimeout(() => {
        // rotate the icon when panel is open
        this.collapsed = false;
      }, 250);
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    this.setAttribute("furo-ui5-header-panel", "");

    this.updateComplete.then(() => {
      this._showHideComponent = this.shadowRoot!.getElementById("showHide") as FuroUi5ShowHide;
      this._summaryComponent = this.shadowRoot!.getElementById("summaryShowHide") as FuroUi5ShowHide;

      let wrappersize = 390;
      // set wrap if content is smaller then 390px
      const ro = new ResizeObserver((entries) => {
        window.requestAnimationFrame(() => {
          const { width } = entries[0].contentRect;
          if (width > 0 && width < 406) {
            this.setAttribute("wrap", "");

            wrappersize = (this.shadowRoot!.querySelector(".wrapper")!).offsetWidth;
          } else if (width > 111 + wrappersize) {
            this.removeAttribute("wrap");
          }
        });
      });

      const contentslot = this.shadowRoot!.querySelector(".content");
      if (contentslot != null) {
        ro.observe(contentslot);
      }

      document.addEventListener("scroll", this._scrollhandler, {
        passive: true,
      });

      this.addEventListener("mousewheel", this._wheelhandler as EventListener, {
        passive: true,
      });

      NavigationGroup(this.shadowRoot!.querySelector("#kpinav"), "*");
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("scroll", this._scrollhandler, true);
    this.removeEventListener("mousewheel", this._wheelhandler as EventListener, true);
  }

  /**
   * @private
   * @param e
   */
  _wheelhandler = (e: WheelEvent) => {
    if (!this.fixed && this.collapseOnScroll) {
      if (!this.isPinned && !this._bodyIsScrolling && e.deltaY > 10) {
        this.collapse();
      }
      if (e.deltaY < -10) {
        this.expand();
      }
    }
  };

  /**
   * // scrolling collapse and expand
   * @private
   */
  _disableBIS = Throttle(() => {
    this._bodyIsScrolling = false;
  }, 1200);

  /**
   * @private
   */
  _scrollhandler = () => {
    this._bodyIsScrolling = true;
    this._disableBIS();
  };

  _toggle() {
    if (!this.isPinned) {
      if (this.collapsed) {
        this.expand();
      } else {
        this.collapse();
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  _toggleOnKeyup() {
    // this event is unreachable, just inserted for the a11 linter
  }

  /**
   * Focuses the variant button (dropdown).
   * @param options
   */
  override focus(options?: FocusOptions) {
    this.shadowRoot!.getElementById("variantIcon")!.focus(options);
  }

  /**
   * @private
   *
   */
  _pinClicked(e: Event) {
    e.stopPropagation();

    if (!this.isPinned) {
      this.isPinned = true;

      this.dispatchEvent(
        new CustomEvent("pinned", {
          detail: this,
          bubbles: false,
          composed: true,
        })
      );
    } else {
      this.isPinned = false;

      this.dispatchEvent(
        new CustomEvent("unpinned", {
          detail: this,
          bubbles: false,
          composed: true,
        })
      );
    }
    this.requestUpdate();
  }

  static override styles = css`
    :host {
      display: block;
      padding: var(--MediaSizeIndentation, 1rem 2rem 0.5rem 2rem);
      padding-top: calc(var(--MediaSizeIndentationTop, 1rem) / 2);
      background: var(--sapGroup_ContentBackground, white);
      /*  border-bottom: 1px solid var(--sapGroup_TitleBorderColor); */
      box-sizing: border-box;
      position: relative;
      color: var(--sapTextColor);
    }

    :host([shadow]) {
      box-shadow: var(--sapContent_HeaderShadow);
    }

    #showHide {
      padding-bottom: calc(0.75rem + var(--MediaSizeIndentationBottom, 0.5rem));
    }

    :host([fixed]) #showHide {
      padding-bottom: calc(0.75 * var(--MediaSizeIndentationBottom, 0.5rem));
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
      transition: transform ease-in-out 0.75s;
    }

    :host([collapsed]) .collapser-button {
      transition: transform ease-in-out 0.75s;
      transform: rotate(180deg);
    }

    .content {
      display: inline-block;
      width: 100%;
    }

    .wrapper {
      display: flex;
      padding-top: var(--MediaSizeIndentationTop, 1rem);
      padding-left: 0;
      padding-bottom: 0;
      padding-right: 0;
    }

    :host([wrap]) .wrapper {
      flex-wrap: wrap;
    }

    :host([wrap]) .content {
      padding-top: var(--MediaSizeIndentationTop, 1rem);
    }

    :host([fixed]) {
      padding-bottom: var(--MediaSizeIndentationBottom, 0.5rem);
    }

    #titleblock {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      row-gap: 0.625rem;
    }

    #titleblock > *,
    slot[name="search"]::slotted(*),
    slot[name="kpi"]::slotted(*) {
      margin-inline-end: var(--furo-horizontal-flex-space, 0.5rem);
    }

    .badges ::slotted(*) {
      margin-top: var(--MediaSizeIndentationBottom, 0.5rem);
      margin-inline-end: var(--MediaSizeIndentationBottom, 0.5rem);
      /* margin-bottom: var(--MediaSizeIndentationBottom, 0.25rem); */
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
      background-image: linear-gradient(to right, var(--sapBrandColor), transparent);
    }

    .splitter.before {
      background-image: linear-gradient(to left, var(--sapBrandColor), transparent);
    }

    .mid {
      width: 0.5rem;
      height: 1.5rem;
      background-size: 100% 0.0625rem;
      background-repeat: no-repeat;
      background-position: center;
      background-image: linear-gradient(to right, var(--sapBrandColor), var(--sapBrandColor));
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

    furo-ui5-title {
      font-size: var(--sapObjectHeader_Title_FontSize, 1.5rem);
    }

    #summaryShowHide slot::slotted(*) {
      opacity: 1;
      transition: opacity ease-in-out 1s;
    }

    #summaryShowHide[is-hidden] slot::slotted(*) {
      opacity: 0;
    }

    @media print {
      .splitter_bar,
      slot[name="action"] {
        display: none;
      }

      .splitter_bar > .splitter {
        width: 30%;
      }
    }
  `;

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  override render() {
    // language=HTML
    return html`
      <furo-responsive-layout layout="four" style="align-items: start">
        <div data-sap-ui-fastnavgroup="${this.showDropdown ? "true" : "false"}" ?tripple="${!this.bigAction}" ?double="${this.bigAction}" id="titleblock">
          ${this.showDropdown
            ? html` <furo-ui5-button
                @click="${this._fireVariantIconClicked}"
                @keydown="${this._variantButtonKeyboardHandler}"
                design="Transparent"
                style="margin-left:-0.5rem;--sapButton_Lite_Hover_Background:none;height:2rem;"
              >
                <furo-ui5-title level="${this.headerTextLevel}" wrapping-type="None" style="display: inline-block;cursor: pointer;">
                  <span style="display: flex;align-items: center;"
                    >${this.headerText}

                    <furo-ui5-icon
                      id="variantIcon"
                      design="Default"
                      name="navigation-down-arrow"
                      style="margin-left: 0.25rem; height: 1.5rem; width: 1.5rem"
                    ></furo-ui5-icon>
                  </span>
                </furo-ui5-title>
              </furo-ui5-button>`
            : html`<furo-ui5-title wrapping-type="None" style="display: inline-block" level="${this.headerTextLevel}"> ${this.headerText} </furo-ui5-title> `}
          ${this.objectIcon !== ""
            ? html` <furo-ui5-icon @click="${this._fireObjectIconClicked}" design="Transparent" mode="Interactive" name="${this.objectIcon}"></furo-ui5-icon>`
            : ""}

          <furo-ui5-icon
            ?hidden="${!this.isFavorite}"
            @click="${this._fireFavoriteIconClicked}"
            design="Information"
            name="favorite"
            mode="Decorative"
          ></furo-ui5-icon>

          <slot name="search" id="search"></slot>
          <slot name="kpi" id="kpinav"></slot>
        </div>

        <div end ?double="${this.bigAction}">
          <slot name="action"></slot>
        </div>
      </furo-responsive-layout>
      ${this.secondaryText && this.secondaryText.trim().length ? html` <ui5-label>${this.secondaryText} </ui5-label>` : ""}

      <div>
        <slot name="secondary"></slot>
      </div>
      <furo-ui5-show-hide id="summaryShowHide" ?is-hidden="${!this.collapsed}">
        <slot name="summary"></slot>
      </furo-ui5-show-hide>
      <furo-ui5-show-hide id="showHide" ?is-hidden="${this.collapsed}">
        <div class="wrapper">
          ${this.icon ? html` <ui5-avatar class="avatar" icon="${this.icon}" size="${this.iconSize}" shape="${this.iconShape}"></ui5-avatar> ` : nothing}
          ${this.image && this.icon === ""
            ? html`
                <ui5-avatar shape="${this.iconShape}" class="avatar" size="${this.iconSize}">
                  <img src="${this.image}" alt=" " />
                </ui5-avatar>
              `
            : nothing}
          <div class="content">
            <slot></slot>
          </div>
        </div>
        <div class="badges">
          <slot name="badges"></slot>
        </div>
      </furo-ui5-show-hide>
      <div class="splitter_bar" @click="${this._toggle}" @keyup="${this._toggleOnKeyup}">
        <div class="splitter before"></div>
        <furo-ui5-icon mode="Interactive" class="collapser-button" name="slim-arrow-up"></furo-ui5-icon>
        <div class="mid"></div>
        <furo-ui5-icon
          class="pin-button"
          mode="Interactive"
          @click="${this._pinClicked}"
          name="${this.isPinned ? "pushpin-on" : "pushpin-off"}"
        ></furo-ui5-icon>
        <div class="splitter after"></div>
      </div>
    `;
  }
}

import NavigationMenu from "@ui5/webcomponents-fiori/dist/NavigationMenu.js";

/**
 * A menu specialised for navigation. It is what a collapsed `furo-ui5-side-navigation` opens for nested items.
 *
 * ```html
 * <furo-ui5-navigation-menu open opener="nav-anchor">
 *   <furo-ui5-navigation-menu-item text="Overview" icon="home"></furo-ui5-navigation-menu-item>
 *   <furo-ui5-navigation-menu-item text="Reports" icon="bar-chart"></furo-ui5-navigation-menu-item>
 * </furo-ui5-navigation-menu>
 * <div id="nav-anchor">Menu anchor</div>
 * ```
 *
 * This is a pass-through wrapper around `ui5-navigation-menu`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added. It only adds the imperative
 * `showAt()` / `show()` / `close()` convenience methods the other furo popups expose.
 *
 * @summary Popover menu used by collapsed side navigation.
 * @keywords navigation, menu, popover, overflow, side
 * @category Navigation
 * @usecase Use to show nested navigation entries in a popover when the side navigation is collapsed.
 * @related furo-ui5-navigation-menu-item, furo-ui5-side-navigation, furo-ui5-context-menu
 * @tagname furo-ui5-navigation-menu
 * @public
 */
export class FuroUi5NavigationMenu extends NavigationMenu {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-navigation-menu", "");
    return super.connectedCallback();
  }

  /**
   * Shows the navigation-menu at the opener position.
   * Alternatively you can work with the attributes `opener` and `open` to achieve the same.
   * @param opener
   * @public
   */
  showAt(opener: HTMLElement | string) {
    this.opener = opener;

    this.open = true;
  }

  /**
   * Shows the navigation-menu at the opener position defined with attribute opener.
   * @public
   */
  show() {
    this.open = true;
  }

  /**
   * Closes the popup.
   * @public
   */
  close(): void {
    this.open = false;
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-navigation-menu" };
  }
}

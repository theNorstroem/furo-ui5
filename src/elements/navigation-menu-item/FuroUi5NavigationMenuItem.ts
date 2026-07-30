import NavigationMenuItem from "@ui5/webcomponents-fiori/dist/NavigationMenuItem.js";

/**
 * One entry of a `furo-ui5-navigation-menu`, optionally carrying an `href` and nested children.
 *
 * ```html
 * <furo-ui5-navigation-menu open opener="nav-anchor">
 *   <furo-ui5-navigation-menu-item text="Reports" icon="bar-chart">
 *     <furo-ui5-navigation-menu-item text="Monthly"></furo-ui5-navigation-menu-item>
 *     <furo-ui5-navigation-menu-item text="Yearly"></furo-ui5-navigation-menu-item>
 *   </furo-ui5-navigation-menu-item>
 * </furo-ui5-navigation-menu>
 * <div id="nav-anchor">Menu anchor</div>
 * ```
 *
 * This is a pass-through wrapper around `ui5-navigation-menu-item`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Single entry of a navigation menu.
 * @keywords navigation, menu, item, link, entry
 * @category Navigation
 * @usecase Use as a child of furo-ui5-navigation-menu to offer one navigation target.
 * @related furo-ui5-navigation-menu, furo-ui5-side-navigation-item
 * @tagname furo-ui5-navigation-menu-item
 * @public
 */
export class FuroUi5NavigationMenuItem extends NavigationMenuItem {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-navigation-menu-item", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-navigation-menu-item" };
  }
}

import SideNavigationItem from "@ui5/webcomponents-fiori/dist/SideNavigationItem.js";

/**
 * One entry of a `furo-ui5-side-navigation`. Nest `furo-ui5-side-navigation-sub-item` children to make it expandable.
 *
 * ```html
 * <furo-ui5-side-navigation style="height:200px">
 *   <furo-ui5-side-navigation-item text="Home" icon="home" selected></furo-ui5-side-navigation-item>
 *   <furo-ui5-side-navigation-item text="Settings" icon="action-settings"></furo-ui5-side-navigation-item>
 * </furo-ui5-side-navigation>
 * ```
 *
 * This is a pass-through wrapper around `ui5-side-navigation-item`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Top-level entry of the side navigation.
 * @keywords navigation, side, item, entry, link, menu
 * @category Navigation
 * @usecase Use as a child of furo-ui5-side-navigation to offer one navigation target.
 * @related furo-ui5-side-navigation, furo-ui5-side-navigation-sub-item, furo-ui5-side-navigation-group
 * @tagname furo-ui5-side-navigation-item
 * @public
 */
export class FuroUi5SideNavigationItem extends SideNavigationItem {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-side-navigation-item", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-side-navigation-item" };
  }
}

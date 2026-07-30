import SideNavigationSubItem from "@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js";

/**
 * A second-level entry of the side navigation, rendered when its parent item is expanded.
 *
 * ```html
 * <furo-ui5-side-navigation style="height:220px">
 *   <furo-ui5-side-navigation-item text="Reports" icon="bar-chart" expanded>
 *     <furo-ui5-side-navigation-sub-item text="Monthly"></furo-ui5-side-navigation-sub-item>
 *     <furo-ui5-side-navigation-sub-item text="Yearly"></furo-ui5-side-navigation-sub-item>
 *   </furo-ui5-side-navigation-item>
 * </furo-ui5-side-navigation>
 * ```
 *
 * This is a pass-through wrapper around `ui5-side-navigation-sub-item`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Nested entry below a side navigation item.
 * @keywords navigation, side, sub-item, nested, child, menu
 * @category Navigation
 * @usecase Use inside furo-ui5-side-navigation-item to add a second navigation level.
 * @related furo-ui5-side-navigation-item, furo-ui5-side-navigation, furo-ui5-navigation-menu
 * @tagname furo-ui5-side-navigation-sub-item
 * @public
 */
export class FuroUi5SideNavigationSubItem extends SideNavigationSubItem {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-side-navigation-sub-item", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-side-navigation-sub-item" };
  }
}

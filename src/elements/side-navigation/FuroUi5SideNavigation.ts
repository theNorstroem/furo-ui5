import SideNavigation from "@ui5/webcomponents-fiori/dist/SideNavigation.js";

/**
 * The vertical application navigation. It has a main area (default slot) and a `fixedItems` area pinned to the bottom, and can be collapsed to icons only.
 *
 * ```html
 * <furo-ui5-side-navigation style="height:260px">
 *   <furo-ui5-side-navigation-item text="Home" icon="home" selected></furo-ui5-side-navigation-item>
 *   <furo-ui5-side-navigation-item text="Reports" icon="bar-chart">
 *     <furo-ui5-side-navigation-sub-item text="Monthly"></furo-ui5-side-navigation-sub-item>
 *   </furo-ui5-side-navigation-item>
 *   <furo-ui5-side-navigation-item slot="fixedItems" text="Help" icon="sys-help"></furo-ui5-side-navigation-item>
 * </furo-ui5-side-navigation>
 * ```
 *
 * This is a pass-through wrapper around `ui5-side-navigation`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Collapsible vertical application navigation.
 * @keywords navigation, side, menu, sidebar, vertical, tree
 * @category Navigation
 * @usecase Use as the main navigation of an application, usually inside furo-ui5-navigation-layout.
 * @related furo-ui5-side-navigation-item, furo-ui5-side-navigation-group, furo-ui5-navigation-layout
 * @tagname furo-ui5-side-navigation
 * @public
 */
export class FuroUi5SideNavigation extends SideNavigation {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-side-navigation", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-side-navigation" };
  }
}

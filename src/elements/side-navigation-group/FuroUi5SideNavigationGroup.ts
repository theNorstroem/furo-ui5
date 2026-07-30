import SideNavigationGroup from "@ui5/webcomponents-fiori/dist/SideNavigationGroup.js";

/**
 * Groups `furo-ui5-side-navigation-item` children under a collapsible heading.
 *
 * ```html
 * <furo-ui5-side-navigation style="height:240px">
 *   <furo-ui5-side-navigation-group text="Analytics" expanded>
 *     <furo-ui5-side-navigation-item text="Reports" icon="bar-chart"></furo-ui5-side-navigation-item>
 *     <furo-ui5-side-navigation-item text="Forecast" icon="line-chart"></furo-ui5-side-navigation-item>
 *   </furo-ui5-side-navigation-group>
 * </furo-ui5-side-navigation>
 * ```
 *
 * This is a pass-through wrapper around `ui5-side-navigation-group`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Collapsible group of side navigation items.
 * @keywords navigation, side, group, section, collapsible, menu
 * @category Navigation
 * @usecase Use inside furo-ui5-side-navigation to split entries into labelled, collapsible groups.
 * @related furo-ui5-side-navigation, furo-ui5-side-navigation-item, furo-ui5-side-navigation-sub-item
 * @tagname furo-ui5-side-navigation-group
 * @public
 */
export class FuroUi5SideNavigationGroup extends SideNavigationGroup {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-side-navigation-group", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-side-navigation-group" };
  }
}

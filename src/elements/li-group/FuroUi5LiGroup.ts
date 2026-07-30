import ListItemGroup from "@ui5/webcomponents/dist/ListItemGroup.js";

/**
 * Wraps a set of list items and renders a group header above them.
 *
 * ```html
 * <furo-ui5-list header-text="Grouped">
 *   <furo-ui5-li-group header-text="Europe">
 *     <furo-ui5-li>Zurich</furo-ui5-li>
 *     <furo-ui5-li>Berlin</furo-ui5-li>
 *   </furo-ui5-li-group>
 *   <furo-ui5-li-group header-text="Asia">
 *     <furo-ui5-li>Tokyo</furo-ui5-li>
 *   </furo-ui5-li-group>
 * </furo-ui5-list>
 * ```
 *
 * This is a pass-through wrapper around `ui5-li-group`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Groups list items under a common header.
 * @keywords list, group, section, header, category
 * @category List
 * @usecase Use inside furo-ui5-list to split items into labelled groups.
 * @related furo-ui5-list, furo-ui5-li, furo-ui5-li-group-header
 * @tagname furo-ui5-li-group
 * @public
 */
export class FuroUi5LiGroup extends ListItemGroup {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-li-group", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-li-group" };
  }
}

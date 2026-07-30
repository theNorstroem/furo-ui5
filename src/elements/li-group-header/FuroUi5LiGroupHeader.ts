import ListItemGroupHeader from "@ui5/webcomponents/dist/ListItemGroupHeader.js";

/**
 * A special, non-interactive list item used only to separate other list items into logical groups.
 *
 * ```html
 * <furo-ui5-list header-text="Sectioned">
 *   <furo-ui5-li-group-header>Europe</furo-ui5-li-group-header>
 *   <furo-ui5-li>Zurich</furo-ui5-li>
 *   <furo-ui5-li-group-header>Asia</furo-ui5-li-group-header>
 *   <furo-ui5-li>Tokyo</furo-ui5-li>
 * </furo-ui5-list>
 * ```
 *
 * This is a pass-through wrapper around `ui5-li-group-header`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Header row that separates list items into logical groups.
 * @keywords list, group, header, separator, category
 * @category List
 * @usecase Use inside furo-ui5-list as a standalone group heading between items.
 * @related furo-ui5-list, furo-ui5-li-group, furo-ui5-li
 * @tagname furo-ui5-li-group-header
 * @public
 */
export class FuroUi5LiGroupHeader extends ListItemGroupHeader {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-li-group-header", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-li-group-header" };
  }
}

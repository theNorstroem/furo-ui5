import ListItemStandard from "@ui5/webcomponents/dist/ListItemStandard.js";

/**
 * The simplest type of item for a `furo-ui5-list`, covering the common cases: `text`, `description`, `icon` and `additional-text`.
 *
 * ```html
 * <furo-ui5-list header-text="Team">
 *   <furo-ui5-li icon="employee" description="Developer">Jane Doe</furo-ui5-li>
 *   <furo-ui5-li icon="employee" description="Designer">Sam Lee</furo-ui5-li>
 * </furo-ui5-list>
 * ```
 *
 * This is a pass-through wrapper around `ui5-li`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Standard list item for use inside a list.
 * @keywords list, item, li, entry, row, standard
 * @category List
 * @usecase Use as a child of furo-ui5-list to render a single text/icon entry.
 * @related furo-ui5-list, furo-ui5-li-custom, furo-ui5-li-group
 * @tagname furo-ui5-li
 * @public
 */
export class FuroUi5Li extends ListItemStandard {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-li", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-li" };
  }
}

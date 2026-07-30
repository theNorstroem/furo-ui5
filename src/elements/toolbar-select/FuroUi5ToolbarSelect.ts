import ToolbarSelect from "@ui5/webcomponents/dist/ToolbarSelect.js";

/**
 * A select that participates in the toolbar's overflow logic. Fill it with `furo-ui5-toolbar-select-option` children.
 *
 * ```html
 * <furo-ui5-toolbar>
 *   <furo-ui5-toolbar-select>
 *     <furo-ui5-toolbar-select-option selected>All</furo-ui5-toolbar-select-option>
 *     <furo-ui5-toolbar-select-option>Open</furo-ui5-toolbar-select-option>
 *     <furo-ui5-toolbar-select-option>Closed</furo-ui5-toolbar-select-option>
 *   </furo-ui5-toolbar-select>
 * </furo-ui5-toolbar>
 * ```
 *
 * This is a pass-through wrapper around `ui5-toolbar-select`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Dropdown designed to live inside a toolbar.
 * @keywords toolbar, select, dropdown, filter, choice
 * @category Layout
 * @usecase Use inside furo-ui5-toolbar to offer a view or filter switch.
 * @related furo-ui5-toolbar, furo-ui5-toolbar-select-option, furo-ui5-select
 * @tagname furo-ui5-toolbar-select
 * @public
 */
export class FuroUi5ToolbarSelect extends ToolbarSelect {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-toolbar-select", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-toolbar-select" };
  }
}

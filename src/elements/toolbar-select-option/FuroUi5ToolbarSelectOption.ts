import ToolbarSelectOption from "@ui5/webcomponents/dist/ToolbarSelectOption.js";

/**
 * One option of a `furo-ui5-toolbar-select`. Its label comes from the default slot.
 *
 * ```html
 * <furo-ui5-toolbar>
 *   <furo-ui5-toolbar-select>
 *     <furo-ui5-toolbar-select-option selected>All</furo-ui5-toolbar-select-option>
 *     <furo-ui5-toolbar-select-option>Open</furo-ui5-toolbar-select-option>
 *   </furo-ui5-toolbar-select>
 * </furo-ui5-toolbar>
 * ```
 *
 * This is a pass-through wrapper around `ui5-toolbar-select-option`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Single option of a toolbar select.
 * @keywords toolbar, select, option, dropdown, choice
 * @category Layout
 * @usecase Use as a child of furo-ui5-toolbar-select to offer one choice.
 * @related furo-ui5-toolbar-select, furo-ui5-toolbar, furo-ui5-option
 * @tagname furo-ui5-toolbar-select-option
 * @public
 */
export class FuroUi5ToolbarSelectOption extends ToolbarSelectOption {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-toolbar-select-option", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-toolbar-select-option" };
  }
}

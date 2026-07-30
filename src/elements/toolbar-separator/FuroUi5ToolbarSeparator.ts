import ToolbarSeparator from "@ui5/webcomponents/dist/ToolbarSeparator.js";

/**
 * A vertical divider that participates in the toolbar's overflow logic. For the standalone table toolbar use `furo-ui5-table-toolbar-separator` instead.
 *
 * ```html
 * <furo-ui5-toolbar>
 *   <furo-ui5-toolbar-button text="Create"></furo-ui5-toolbar-button>
 *   <furo-ui5-toolbar-separator></furo-ui5-toolbar-separator>
 *   <furo-ui5-toolbar-button text="Delete"></furo-ui5-toolbar-button>
 * </furo-ui5-toolbar>
 * ```
 *
 * This is a pass-through wrapper around `ui5-toolbar-separator`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Vertical rule between toolbar items.
 * @keywords toolbar, separator, divider, rule, group
 * @category Layout
 * @usecase Use between furo-ui5-toolbar items to separate groups of actions.
 * @related furo-ui5-toolbar, furo-ui5-toolbar-spacer, furo-ui5-table-toolbar-separator
 * @tagname furo-ui5-toolbar-separator
 * @public
 */
export class FuroUi5ToolbarSeparator extends ToolbarSeparator {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-toolbar-separator", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-toolbar-separator" };
  }
}

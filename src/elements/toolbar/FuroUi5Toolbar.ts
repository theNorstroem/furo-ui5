import Toolbar from "@ui5/webcomponents/dist/Toolbar.js";

/**
 * Groups actions in a horizontal bar and moves the ones that do not fit into an overflow popover.
 *
 * ```html
 * <furo-ui5-toolbar>
 *   <furo-ui5-toolbar-button text="Create" design="Emphasized"></furo-ui5-toolbar-button>
 *   <furo-ui5-toolbar-button text="Edit"></furo-ui5-toolbar-button>
 *   <furo-ui5-toolbar-separator></furo-ui5-toolbar-separator>
 *   <furo-ui5-toolbar-spacer></furo-ui5-toolbar-spacer>
 *   <furo-ui5-toolbar-button icon="sort" tooltip="Sort"></furo-ui5-toolbar-button>
 * </furo-ui5-toolbar>
 * ```
 *
 * This is a pass-through wrapper around `ui5-toolbar`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Horizontal bar of actions with automatic overflow.
 * @keywords toolbar, actions, bar, overflow, buttons
 * @category Layout
 * @usecase Use to group actions above a table, list or form section.
 * @related furo-ui5-toolbar-button, furo-ui5-toolbar-spacer, furo-ui5-toolbar-separator
 * @tagname furo-ui5-toolbar
 * @public
 */
export class FuroUi5Toolbar extends Toolbar {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-toolbar", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-toolbar" };
  }
}

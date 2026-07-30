import ToolbarSpacer from "@ui5/webcomponents/dist/ToolbarSpacer.js";

/**
 * Consumes the free space of a `furo-ui5-toolbar`, pushing every item after it to the trailing edge.
 *
 * ```html
 * <furo-ui5-toolbar>
 *   <furo-ui5-toolbar-button text="Create"></furo-ui5-toolbar-button>
 *   <furo-ui5-toolbar-spacer></furo-ui5-toolbar-spacer>
 *   <furo-ui5-toolbar-button icon="settings" tooltip="Settings"></furo-ui5-toolbar-button>
 * </furo-ui5-toolbar>
 * ```
 *
 * This is a pass-through wrapper around `ui5-toolbar-spacer`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Flexible gap that pushes following toolbar items to the end.
 * @keywords toolbar, spacer, flex, gap, align
 * @category Layout
 * @usecase Use inside furo-ui5-toolbar to right-align the items that follow it.
 * @related furo-ui5-toolbar, furo-ui5-toolbar-separator, furo-ui5-shellbar-spacer
 * @tagname furo-ui5-toolbar-spacer
 * @public
 */
export class FuroUi5ToolbarSpacer extends ToolbarSpacer {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-toolbar-spacer", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-toolbar-spacer" };
  }
}

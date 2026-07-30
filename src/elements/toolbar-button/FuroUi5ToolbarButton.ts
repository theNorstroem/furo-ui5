import ToolbarButton from "@ui5/webcomponents/dist/ToolbarButton.js";

/**
 * A button that participates in the toolbar's overflow logic. Use it instead of `furo-ui5-button` inside a toolbar.
 *
 * ```html
 * <furo-ui5-toolbar>
 *   <furo-ui5-toolbar-button text="Create" design="Emphasized"></furo-ui5-toolbar-button>
 *   <furo-ui5-toolbar-button text="Delete" design="Negative" icon="delete"></furo-ui5-toolbar-button>
 * </furo-ui5-toolbar>
 * ```
 *
 * This is a pass-through wrapper around `ui5-toolbar-button`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Button designed to live inside a toolbar.
 * @keywords toolbar, button, action, command, overflow
 * @category Button
 * @usecase Use as a child of furo-ui5-toolbar so the action participates in overflow handling.
 * @related furo-ui5-toolbar, furo-ui5-button, furo-ui5-toolbar-select
 * @tagname furo-ui5-toolbar-button
 * @public
 */
export class FuroUi5ToolbarButton extends ToolbarButton {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-toolbar-button", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-toolbar-button" };
  }
}

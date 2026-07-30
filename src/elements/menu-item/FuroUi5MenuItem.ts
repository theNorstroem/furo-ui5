import MenuItem from "@ui5/webcomponents/dist/MenuItem.js";

/**
 * One selectable entry of a `furo-ui5-context-menu`. Nest further items inside it to build a submenu.
 *
 * ```html
 * <furo-ui5-context-menu open opener="anchor">
 *   <furo-ui5-menu-item text="Open" icon="open-folder"></furo-ui5-menu-item>
 *   <furo-ui5-menu-item text="Rename" icon="edit"></furo-ui5-menu-item>
 * </furo-ui5-context-menu>
 * <div id="anchor">Right-click target</div>
 * ```
 *
 * This is a pass-through wrapper around `ui5-menu-item`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Single entry of a context menu.
 * @keywords menu, item, action, command, context
 * @category Navigation
 * @usecase Use as a child of furo-ui5-context-menu to offer one action.
 * @related furo-ui5-context-menu, furo-ui5-menu-separator, furo-ui5-menu-item-group
 * @tagname furo-ui5-menu-item
 * @public
 */
export class FuroUi5MenuItem extends MenuItem {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-menu-item", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-menu-item" };
  }
}

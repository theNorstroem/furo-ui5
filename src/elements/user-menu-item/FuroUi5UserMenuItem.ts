import UserMenuItem from "@ui5/webcomponents-fiori/dist/UserMenuItem.js";

/**
 * One selectable entry of a `furo-ui5-user-menu`, such as Settings or Sign out.
 *
 * ```html
 * <furo-ui5-user-menu open>
 *   <furo-ui5-user-menu-item text="Settings" icon="action-settings"></furo-ui5-user-menu-item>
 *   <furo-ui5-user-menu-item text="Privacy" icon="locked"></furo-ui5-user-menu-item>
 * </furo-ui5-user-menu>
 * ```
 *
 * This is a pass-through wrapper around `ui5-user-menu-item`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Single action entry in the user menu.
 * @keywords user-menu, item, action, profile, account
 * @category Navigation
 * @usecase Use as a child of furo-ui5-user-menu to offer a profile action.
 * @related furo-ui5-user-menu, furo-ui5-user-menu-item-group, furo-ui5-user-menu-account
 * @tagname furo-ui5-user-menu-item
 * @public
 */
export class FuroUi5UserMenuItem extends UserMenuItem {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-user-menu-item", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-user-menu-item" };
  }
}

import UserMenuItemGroup from "@ui5/webcomponents-fiori/dist/UserMenuItemGroup.js";

/**
 * Groups `furo-ui5-user-menu-item` children into one labelled section of the user menu.
 *
 * ```html
 * <furo-ui5-user-menu open>
 *   <furo-ui5-user-menu-item-group header-text="Preferences">
 *     <furo-ui5-user-menu-item text="Settings" icon="action-settings"></furo-ui5-user-menu-item>
 *     <furo-ui5-user-menu-item text="Theme" icon="palette"></furo-ui5-user-menu-item>
 *   </furo-ui5-user-menu-item-group>
 * </furo-ui5-user-menu>
 * ```
 *
 * This is a pass-through wrapper around `ui5-user-menu-item-group`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Groups user menu items under a shared heading.
 * @keywords user-menu, group, items, section, profile
 * @category Navigation
 * @usecase Use inside furo-ui5-user-menu to group related profile actions.
 * @related furo-ui5-user-menu, furo-ui5-user-menu-item, furo-ui5-user-menu-account
 * @tagname furo-ui5-user-menu-item-group
 * @public
 */
export class FuroUi5UserMenuItemGroup extends UserMenuItemGroup {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-user-menu-item-group", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-user-menu-item-group" };
  }
}

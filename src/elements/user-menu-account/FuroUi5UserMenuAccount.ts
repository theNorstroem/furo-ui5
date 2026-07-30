import UserMenuAccount from "@ui5/webcomponents-fiori/dist/UserMenuAccount.js";

/**
 * Describes one account (title, subtitle, description, avatar) available in a `furo-ui5-user-menu`.
 *
 * ```html
 * <furo-ui5-user-menu open>
 *   <furo-ui5-user-menu-account
 *     slot="accounts"
 *     avatar-src="https://sdk.openui5.org/test-resources/sap/f/images/Woman_avatar_01.png"
 *     title-text="Jane Doe"
 *     subtitle-text="jane.doe@example.com"
 *     selected
 *   ></furo-ui5-user-menu-account>
 * </furo-ui5-user-menu>
 * ```
 *
 * This is a pass-through wrapper around `ui5-user-menu-account`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Account entry shown at the top of the user menu.
 * @keywords user-menu, account, profile, avatar, identity
 * @category Navigation
 * @usecase Use inside furo-ui5-user-menu to show the signed-in account and allow switching.
 * @related furo-ui5-user-menu, furo-ui5-user-menu-item, furo-ui5-avatar
 * @tagname furo-ui5-user-menu-account
 * @public
 */
export class FuroUi5UserMenuAccount extends UserMenuAccount {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-user-menu-account", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-user-menu-account" };
  }
}

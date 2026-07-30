import UserMenu from "@ui5/webcomponents-fiori/dist/UserMenu.js";

/**
 *
 * @summary User account menu accessible from the ShellBar.
 * @keywords user-menu, account, profile, settings, logout
 * @category PageStructure
 * @usecase Use for user account actions like profile, settings, and logout.
 * @related furo-ui5-shellbar, furo-ui5-user-menu-item, furo-ui5-user-menu-account
 * @tagname furo-ui5-user-menu
 */
export class FuroUi5UserMenu extends UserMenu {
  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-user-menu" };
  }

  /**
   * Shows the user-menu at the opener position.
   * Alternatively you can work with the attributes `opener` and `open` to achieve the same.
   * @param opener
   * @public
   */
  showAt(opener: HTMLElement | string) {
    this.opener = opener;

    this.open = true;
  }

  /**
   * Shows the user-menu at the opener position defined with attribute opener.
   * @public
   */
  show() {
    this.open = true;
  }

  /**
   * Closes the popup.
   * @public
   */
  close(): void {
    this.open = false;
  }
}

FuroUi5UserMenu.define();

import ShellBarSpacer from "@ui5/webcomponents-fiori/dist/ShellBarSpacer.js";

/**
 *
 * @summary Flexible spacer for distributing space in ShellBar.
 * @keywords spacer, shellbar, flex, gap, separator
 * @category PageStructure
 * @usecase Use to create flexible space between ShellBar items.
 * @related furo-ui5-shellbar, furo-ui5-toolbar-spacer
 * @tagname furo-ui5-shellbar-spacer
 */
export class FuroUi5ShellBarSpacer extends ShellBarSpacer {
  /**
   * Added for compatibility
   */
  override connectedCallback() {
    this.setAttribute("ui5-shellbar-spacer", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-shellbar-spacer" };
  }
}

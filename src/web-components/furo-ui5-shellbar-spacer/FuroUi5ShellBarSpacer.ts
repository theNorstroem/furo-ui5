import ShellBarSpacer from "@ui5/webcomponents-fiori/dist/ShellBarSpacer.js";

/**
 * @tagname furo-ui5-shellbar-spacer
 */
export class FuroUi5ShellBarSpacer extends ShellBarSpacer {
  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-shellbar-spacer";
    return md;
  }
}

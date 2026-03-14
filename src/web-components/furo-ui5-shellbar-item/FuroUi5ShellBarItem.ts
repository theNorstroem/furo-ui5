import ShellBarItem from "@ui5/webcomponents-fiori/dist/ShellBarItem.js";

/**
 *
 * @tagname furo-ui5-shellbar-item
 */
export class FuroUi5ShellBarItem extends ShellBarItem {
  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-shellbar-item";
    return md;
  }
}

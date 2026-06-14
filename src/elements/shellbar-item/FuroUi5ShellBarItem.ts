import ShellBarItem from "@ui5/webcomponents-fiori/dist/ShellBarItem.js";

/**
 *
 * @summary Action item for the ShellBar header component.
 * @keywords shellbar-item, action, header, button, icon
 * @category PageStructure
 * @usecase Use as children of furo-ui5-shellbar for custom header actions.
 * @related furo-ui5-shellbar, furo-ui5-shellbar-search
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

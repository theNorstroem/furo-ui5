import ShellBarSearch from "@ui5/webcomponents-fiori/dist/ShellBarSearch.js";

/**
 * @tagname furo-ui5-shellbar-search
 */
export class FuroUi5ShellBarSearch extends ShellBarSearch {
  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-shellbar-search";
    return md;
  }

  /**
   * add for compatibility reasons
   */
  override onEnterDOM() {
    super.onEnterDOM();
    this.setAttribute("ui5-shellbar-search", "");
  }
}

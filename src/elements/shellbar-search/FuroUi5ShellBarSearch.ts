import ShellBarSearch from "@ui5/webcomponents-fiori/dist/ShellBarSearch.js";

/**
 *
 * @summary Search input integrated into the ShellBar header.
 * @keywords search, shellbar, header, find, lookup, global-search
 * @category PageStructure
 * @usecase Use within furo-ui5-shellbar for application-wide search.
 * @related furo-ui5-shellbar, furo-ui5-search
 * @tagname furo-ui5-shellbar-search
 */
export class FuroUi5ShellBarSearch extends ShellBarSearch {
  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-shellbar-search" };
  }

  /**
   * add for compatibility reasons
   */
  override onEnterDOM() {
    super.onEnterDOM();
    this.setAttribute("ui5-shellbar-search", "");
  }
}

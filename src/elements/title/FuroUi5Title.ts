import Title from "@ui5/webcomponents/dist/Title.js";

/**
 * @tagname furo-ui5-title
 */
export class FuroUi5Title extends Title {
  /**
   * Added for compatibility
   */
  override connectedCallback() {
    this.setAttribute("ui5-title", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-title";
    return md;
  }
}

import Title from "@ui5/webcomponents/dist/Title.js";

/**
 *
 * @summary Heading text with semantic level for page and section titles.
 * @keywords title, heading, h1, h2, header, typography, section
 * @category Display
 * @usecase Use for page titles, section headers, and semantic headings.
 * @related furo-ui5-text, furo-ui5-label
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

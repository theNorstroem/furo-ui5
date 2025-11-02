import Label from "@ui5/webcomponents/dist/Label.js";

export * from "@ui5/webcomponents/dist/Label.js";

/**
 *
 *
 * @tagname furo-ui5-label
 */
export class FuroUi5Label extends Label {
  /**
   * Added for compatibility
   */
  override connectedCallback() {
    this.setAttribute("ui5-label", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-label";
    return md;
  }
}

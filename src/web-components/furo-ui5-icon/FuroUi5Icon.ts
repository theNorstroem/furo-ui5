import Icon from "@ui5/webcomponents/dist/Icon.js";

export * from "@ui5/webcomponents/dist/Icon.js";

/**
 * @cssprop {N/A} root - Used to style the outermost wrapper of the icon.
 * @tagname furo-ui5-icon
 */
export class FuroUi5Icon extends Icon {
  /**
   * Added for compatibility
   */
  override connectedCallback() {
    this.setAttribute("ui5-icon", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-icon";
    return md;
  }
}

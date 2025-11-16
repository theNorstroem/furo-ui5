import Option from "@ui5/webcomponents/dist/Option.js";

/**
 * @cssprop {N/A} root - Used to style the outermost wrapper of the Option.
 * @tagname furo-ui5-option
 */
export class FuroUi5Option extends Option {
  /**
   * Added for compatibility
   */
  override connectedCallback() {
    this.setAttribute("ui5-option", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-option";
    return md;
  }
}

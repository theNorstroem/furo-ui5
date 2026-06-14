import Icon from "@ui5/webcomponents/dist/Icon.js";

export * from "@ui5/webcomponents/dist/Icon.js";

/**
 * @cssprop {N/A} root - Used to style the outermost wrapper of the icon.
 *
 * @summary Scalable icon from the icon font library.
 * @keywords icon, glyph, symbol, image, sap-icons
 * @category Display
 * @usecase Use to display icons alongside text or as standalone indicators.
 * @related furo-ui5-button, furo-ui5-avatar
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

import ButtonBadge from "@ui5/webcomponents/dist/ButtonBadge.js";

export * from "@ui5/webcomponents/dist/ButtonBadge.js";

/**
 *
 * @tagname furo-ui5-button-badge
 */
export class FuroUi5ButtonBadge extends ButtonBadge {
  /**
   * disables the ButtonBadge
   */
  public hide() {
    this.setAttribute("hidden", "");
  }

  /**
   * enables the ButtonBadge
   */
  public show() {
    this.removeAttribute("hidden");
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-button-badge";
    return md;
  }

  /**
   * @private
   */
  static override get styles() {
    return [
      super.styles,
      // language=CSS
      ``,
    ];
  }
}

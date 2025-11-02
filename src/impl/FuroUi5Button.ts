import Button from "@ui5/webcomponents/dist/Button.js";

export * from "@ui5/webcomponents/dist/Button.js";

/**
 *
 * @tagname furo-ui5-button
 */
export class FuroUi5Button extends Button {
  /**
   * Added for compatibility
   */
  override connectedCallback() {
    this.setAttribute("ui5-button", "");
    return super.connectedCallback();
  }

  /**
   * disables the button
   */
  public disable() {
    this.disabled = true;
  }

  /**
   * enables the button
   */
  public enable() {
    this.disabled = false;
  }

  /**
   * disables the button
   */
  public hide() {
    this.setAttribute("hidden", "");
  }

  /**
   * enables the button
   */
  public show() {
    this.removeAttribute("hidden");
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-button";
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

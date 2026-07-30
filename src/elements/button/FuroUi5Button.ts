import Button from "@ui5/webcomponents/dist/Button.js";

export * from "@ui5/webcomponents/dist/Button.js";

/**
 *
 * @summary Primary interactive button for triggering actions and navigation.
 * @keywords button, action, click, submit, primary, trigger, call-to-action
 * @category Button
 * @usecase Use for primary and secondary actions in forms, toolbars, and dialogs.
 * @related furo-ui5-toggle-button, furo-ui5-split-button, furo-ui5-segmented-button, furo-ui5-button-badge
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
    return { ...super.metadata, tag: "furo-ui5-button" };
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

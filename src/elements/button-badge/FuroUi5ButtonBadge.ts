import ButtonBadge from "@ui5/webcomponents/dist/ButtonBadge.js";

export * from "@ui5/webcomponents/dist/ButtonBadge.js";

/**
 *
 * @summary Badge indicator attached to buttons for counts or status.
 * @keywords badge, button, counter, notification, indicator
 * @category Button
 * @usecase Use to add a count or status indicator to buttons.
 * @related furo-ui5-button
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

import Label from "@ui5/webcomponents/dist/Label.js";

export * from "@ui5/webcomponents/dist/Label.js";
// todo add model binding
/**
 *
 *
 * @summary Text label for form fields and descriptive text.
 * @keywords label, form, text, field, caption, description
 * @category Display
 * @usecase Use to label form fields or display short descriptive text.
 * @related furo-ui5-text, furo-ui5-title, furo-ui5-form-row
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
    return { ...super.metadata, tag: "furo-ui5-label" };
  }
}

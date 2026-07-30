import Link from "@ui5/webcomponents/dist/Link.js";

/**
 *
 * @summary Clickable text link for navigation or actions.
 * @keywords link, anchor, hyperlink, navigation, url, href
 * @category Navigation
 * @usecase Use for text-based navigation or triggering actions.
 * @related furo-ui5-button, furo-ui5-breadcrumbs-item
 * @tagname furo-ui5-link
 */
export class FuroUi5Link extends Link {
  /**
   * UI5 detects links by the original tag name used as an attribute, not by tag name
   * (see the `hasAttribute("ui5-link")` check in @ui5/webcomponents — `furo-ui5-breadcrumbs`
   * relies on it). Without this marker a parent silently ignores the element.
   */
  override connectedCallback() {
    this.setAttribute("ui5-link", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-link" };
  }
}

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
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-link";
    return md;
  }
}

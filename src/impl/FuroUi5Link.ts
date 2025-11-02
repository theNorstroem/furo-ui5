import Link from "@ui5/webcomponents/dist/Link.js";

/**
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

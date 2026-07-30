import BreadcrumbsItem from "@ui5/webcomponents/dist/BreadcrumbsItem.js";

/**
 * The 'furo-ui5-breadcrumbs-item' is a thin wrapper around the
 * [SAP ui5 BreadcrumbsItem element](https://ui5.github.io/webcomponents/components/Breadcrumbs/).
 *
 * It exposes the full UI5 BreadcrumbsItem API unchanged and is meant to be placed inside
 * `furo-ui5-breadcrumbs`. There is intentionally **no data binding**.
 *
 * @summary A single breadcrumb item (no data binding).
 * @keywords breadcrumb, item, navigation, link
 * @category Navigation
 * @usecase Use as a child of furo-ui5-breadcrumbs to represent one trail entry.
 * @related furo-ui5-breadcrumbs
 * @tagname furo-ui5-breadcrumbs-item
 */
export class FuroUi5BreadcrumbsItem extends BreadcrumbsItem {
  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-breadcrumbs-item" };
  }
}

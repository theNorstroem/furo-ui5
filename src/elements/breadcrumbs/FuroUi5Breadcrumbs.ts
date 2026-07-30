import Breadcrumbs from "@ui5/webcomponents/dist/Breadcrumbs.js";

/**
 * The 'furo-ui5-breadcrumbs' is a thin wrapper around the
 * [SAP ui5 Breadcrumbs element](https://ui5.github.io/webcomponents/components/Breadcrumbs/).
 *
 * It exposes the full UI5 Breadcrumbs API unchanged. There is intentionally **no data binding** —
 * place `furo-ui5-breadcrumbs-item` children yourself.
 *
 * @summary Breadcrumb navigation trail (no data binding).
 * @keywords breadcrumbs, navigation, trail, path
 * @category Navigation
 * @usecase Use to show a navigation trail; provide breadcrumb items as children.
 * @related furo-ui5-breadcrumbs-item
 * @tagname furo-ui5-breadcrumbs
 */
export class FuroUi5Breadcrumbs extends Breadcrumbs {
  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-breadcrumbs" };
  }
}

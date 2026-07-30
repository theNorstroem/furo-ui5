import List from "@ui5/webcomponents/dist/List.js";

/**
 * The 'furo-ui5-list' is a thin wrapper around the
 * [SAP ui5 List element](https://ui5.github.io/webcomponents/components/List/).
 *
 * It exposes the full UI5 List API unchanged. There is intentionally **no data binding** — place
 * `ui5-li*` items as children yourself.
 *
 * @summary Vertical list container (no data binding).
 * @keywords list, items, collection, vertical
 * @category Display
 * @usecase Use as a styled list container; provide list items as children.
 * @related furo-ui5-tree
 * @tagname furo-ui5-list
 */
export class FuroUi5List extends List {
  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-list" };
  }
}

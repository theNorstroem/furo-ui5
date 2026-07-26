import Tab from "@ui5/webcomponents/dist/Tab.js";

/**
 * The 'furo-ui5-tab' is a thin wrapper around the
 * [SAP ui5 Tab element](https://sap.github.io/ui5-webcomponents/playground/components/TabContainer/).
 *
 * It exposes the full UI5 Tab API unchanged and is meant to be placed inside
 * `furo-ui5-tabcontainer`. There is intentionally **no data binding**.
 *
 * @summary A single tab (no data binding).
 * @keywords tab, item, navigation, section
 * @category Container
 * @usecase Use as a child of furo-ui5-tabcontainer to represent one tab.
 * @related furo-ui5-tabcontainer
 * @tagname furo-ui5-tab
 */
export class FuroUi5Tab extends Tab {
  /**
   * Added for compatibility
   */
  override connectedCallback() {
    this.setAttribute("ui5-tab", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-tab";
    return md;
  }
}

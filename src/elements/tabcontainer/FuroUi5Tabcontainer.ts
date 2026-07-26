import TabContainer from "@ui5/webcomponents/dist/TabContainer.js";

/**
 * The 'furo-ui5-tabcontainer' is a thin wrapper around the
 * [SAP ui5 TabContainer element](https://sap.github.io/ui5-webcomponents/playground/components/TabContainer/).
 *
 * It exposes the full UI5 TabContainer API unchanged. There is intentionally **no data binding** —
 * place `furo-ui5-tab` children yourself.
 *
 * @summary Tab strip container (no data binding).
 * @keywords tabs, tabcontainer, navigation, sections
 * @category Container
 * @usecase Use to organize content into tabs; provide tabs as children.
 * @related furo-ui5-tab
 * @tagname furo-ui5-tabcontainer
 */
export class FuroUi5Tabcontainer extends TabContainer {
  /**
   * Added for compatibility
   */
  override connectedCallback() {
    this.setAttribute("ui5-tabcontainer", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-tabcontainer";
    return md;
  }
}

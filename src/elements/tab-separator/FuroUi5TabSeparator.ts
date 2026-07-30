import TabSeparator from "@ui5/webcomponents/dist/TabSeparator.js";

/**
 * A thin divider placed between tabs of a `furo-ui5-tabcontainer`.
 *
 * ```html
 * <furo-ui5-tabcontainer>
 *   <furo-ui5-tab text="Overview" selected>Overview content</furo-ui5-tab>
 *   <furo-ui5-tab-separator></furo-ui5-tab-separator>
 *   <furo-ui5-tab text="Settings">Settings content</furo-ui5-tab>
 * </furo-ui5-tabcontainer>
 * ```
 *
 * This is a pass-through wrapper around `ui5-tab-separator`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Vertical rule between tabs in a tab container.
 * @keywords tab, separator, divider, rule, group
 * @category Container
 * @usecase Use between furo-ui5-tab elements to visually separate groups of tabs.
 * @related furo-ui5-tabcontainer, furo-ui5-tab
 * @tagname furo-ui5-tab-separator
 * @public
 */
export class FuroUi5TabSeparator extends TabSeparator {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-tab-separator", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-tab-separator" };
  }
}

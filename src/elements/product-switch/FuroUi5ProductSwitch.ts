import ProductSwitch from "@ui5/webcomponents-fiori/dist/ProductSwitch.js";

/**
 * Lays out `furo-ui5-product-switch-item` children in a responsive grid, usually inside a shellbar popover.
 *
 * ```html
 * <furo-ui5-product-switch>
 *   <furo-ui5-product-switch-item title-text="Home" subtitle-text="Overview" icon="home"></furo-ui5-product-switch-item>
 *   <furo-ui5-product-switch-item title-text="Analytics" subtitle-text="Reports" icon="bar-chart"></furo-ui5-product-switch-item>
 * </furo-ui5-product-switch>
 * ```
 *
 * This is a pass-through wrapper around `ui5-product-switch`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Grid of links to related products or apps.
 * @keywords product, switch, apps, grid, launcher, navigation
 * @category Navigation
 * @usecase Use in the shellbar to let users jump to a sibling product or app.
 * @related furo-ui5-product-switch-item, furo-ui5-shellbar, furo-ui5-navigation-menu
 * @tagname furo-ui5-product-switch
 * @public
 */
export class FuroUi5ProductSwitch extends ProductSwitch {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-product-switch", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-product-switch" };
  }
}

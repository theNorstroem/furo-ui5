import ProductSwitchItem from "@ui5/webcomponents-fiori/dist/ProductSwitchItem.js";

/**
 * One tile of a `furo-ui5-product-switch`, with a title, subtitle, icon and optional `target-src`.
 *
 * ```html
 * <furo-ui5-product-switch>
 *   <furo-ui5-product-switch-item
 *     title-text="Analytics"
 *     subtitle-text="Reports and forecasts"
 *     icon="bar-chart"
 *   ></furo-ui5-product-switch-item>
 * </furo-ui5-product-switch>
 * ```
 *
 * This is a pass-through wrapper around `ui5-product-switch-item`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Single tile inside a product switch.
 * @keywords product, switch, item, tile, app, link
 * @category Navigation
 * @usecase Use as a child of furo-ui5-product-switch to link to one product.
 * @related furo-ui5-product-switch, furo-ui5-shellbar-item, furo-ui5-card
 * @tagname furo-ui5-product-switch-item
 * @public
 */
export class FuroUi5ProductSwitchItem extends ProductSwitchItem {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-product-switch-item", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-product-switch-item" };
  }
}

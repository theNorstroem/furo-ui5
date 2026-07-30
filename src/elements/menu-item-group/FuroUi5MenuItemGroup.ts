import MenuItemGroup from "@ui5/webcomponents/dist/MenuItemGroup.js";

/**
 * Groups menu items so they share a selection mode (`None`, `Single` or `Multiple`).
 *
 * ```html
 * <furo-ui5-context-menu open opener="anchor">
 *   <furo-ui5-menu-item-group item-selection-mode="Single">
 *     <furo-ui5-menu-item text="List view"></furo-ui5-menu-item>
 *     <furo-ui5-menu-item text="Grid view"></furo-ui5-menu-item>
 *   </furo-ui5-menu-item-group>
 * </furo-ui5-context-menu>
 * <div id="anchor">Right-click target</div>
 * ```
 *
 * This is a pass-through wrapper around `ui5-menu-item-group`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Groups context menu items with a shared selection mode.
 * @keywords menu, group, items, selection, radio, check
 * @category Navigation
 * @usecase Use inside furo-ui5-context-menu to give a set of items single- or multi-select behaviour.
 * @related furo-ui5-context-menu, furo-ui5-menu-item, furo-ui5-menu-separator
 * @tagname furo-ui5-menu-item-group
 * @public
 */
export class FuroUi5MenuItemGroup extends MenuItemGroup {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-menu-item-group", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-menu-item-group" };
  }
}

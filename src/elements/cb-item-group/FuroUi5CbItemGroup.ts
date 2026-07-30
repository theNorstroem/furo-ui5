import ComboBoxItemGroup from "@ui5/webcomponents/dist/ComboBoxItemGroup.js";

/**
 * Groups `furo-ui5-cb-item` children under a common header inside a combobox popover.
 *
 * ```html
 * <furo-ui5-combobox placeholder="Pick a city">
 *   <furo-ui5-cb-item-group header-text="Europe">
 *     <furo-ui5-cb-item text="Zurich"></furo-ui5-cb-item>
 *     <furo-ui5-cb-item text="Berlin"></furo-ui5-cb-item>
 *   </furo-ui5-cb-item-group>
 * </furo-ui5-combobox>
 * ```
 *
 * This is a pass-through wrapper around `ui5-cb-item-group`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Groups combobox suggestions under a header.
 * @keywords combobox, group, header, suggestion, category
 * @category Form
 * @usecase Use inside furo-ui5-combobox to group suggestions into labelled sections.
 * @related furo-ui5-combobox, furo-ui5-cb-item, furo-ui5-cb-item-custom
 * @tagname furo-ui5-cb-item-group
 * @public
 */
export class FuroUi5CbItemGroup extends ComboBoxItemGroup {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-cb-item-group", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-cb-item-group" };
  }
}

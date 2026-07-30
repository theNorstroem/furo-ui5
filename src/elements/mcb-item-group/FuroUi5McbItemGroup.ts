import MultiComboBoxItemGroup from "@ui5/webcomponents/dist/MultiComboBoxItemGroup.js";

/**
 * Groups `furo-ui5-mcb-item` children under a common header inside a multi-combobox popover.
 *
 * ```html
 * <furo-ui5-multi-combobox placeholder="Pick cities">
 *   <furo-ui5-mcb-item-group header-text="Europe">
 *     <furo-ui5-mcb-item text="Zurich"></furo-ui5-mcb-item>
 *     <furo-ui5-mcb-item text="Berlin"></furo-ui5-mcb-item>
 *   </furo-ui5-mcb-item-group>
 * </furo-ui5-multi-combobox>
 * ```
 *
 * This is a pass-through wrapper around `ui5-mcb-item-group`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Groups multi-combobox suggestions under a header.
 * @keywords multi-combobox, group, header, suggestion, category
 * @category Form
 * @usecase Use inside furo-ui5-multi-combobox to group suggestions into labelled sections.
 * @related furo-ui5-multi-combobox, furo-ui5-mcb-item, furo-ui5-mcb-item-custom
 * @tagname furo-ui5-mcb-item-group
 * @public
 */
export class FuroUi5McbItemGroup extends MultiComboBoxItemGroup {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-mcb-item-group", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-mcb-item-group" };
  }
}

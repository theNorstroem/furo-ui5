import ComboBoxItemCustom from "@ui5/webcomponents/dist/ComboBoxItemCustom.js";

/**
 * A combobox item whose content comes from the default slot instead of the `text` property.
 *
 * ```html
 * <furo-ui5-combobox placeholder="Pick a city">
 *   <furo-ui5-cb-item-custom text="Zurich">
 *     <div style="display:flex;gap:.5rem;align-items:center">
 *       <furo-ui5-icon name="building"></furo-ui5-icon><span>Zurich</span>
 *     </div>
 *   </furo-ui5-cb-item-custom>
 * </furo-ui5-combobox>
 * ```
 *
 * This is a pass-through wrapper around `ui5-cb-item-custom`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Combobox suggestion with fully custom content.
 * @keywords combobox, item, custom, suggestion, option
 * @category Form
 * @usecase Use inside furo-ui5-combobox when a suggestion needs richer markup than plain text.
 * @related furo-ui5-combobox, furo-ui5-cb-item, furo-ui5-cb-item-group
 * @tagname furo-ui5-cb-item-custom
 * @public
 */
export class FuroUi5CbItemCustom extends ComboBoxItemCustom {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-cb-item-custom", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-cb-item-custom" };
  }
}

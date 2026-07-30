import OptionCustom from "@ui5/webcomponents/dist/OptionCustom.js";

/**
 * A select option whose content is projected from the default slot instead of the `text` property.
 *
 * ```html
 * <furo-ui5-select>
 *   <furo-ui5-option-custom>
 *     <div style="display:flex;gap:.5rem;align-items:center">
 *       <furo-ui5-icon name="accept"></furo-ui5-icon><span>Approved</span>
 *     </div>
 *   </furo-ui5-option-custom>
 *   <furo-ui5-option-custom>
 *     <div style="display:flex;gap:.5rem;align-items:center">
 *       <furo-ui5-icon name="decline"></furo-ui5-icon><span>Rejected</span>
 *     </div>
 *   </furo-ui5-option-custom>
 * </furo-ui5-select>
 * ```
 *
 * This is a pass-through wrapper around `ui5-option-custom`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Select option with fully custom content.
 * @keywords select, option, custom, dropdown, choice
 * @category Form
 * @usecase Use inside furo-ui5-select when an option needs richer markup than plain text.
 * @related furo-ui5-select, furo-ui5-option, furo-ui5-select-enum
 * @tagname furo-ui5-option-custom
 * @public
 */
export class FuroUi5OptionCustom extends OptionCustom {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-option-custom", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-option-custom" };
  }
}

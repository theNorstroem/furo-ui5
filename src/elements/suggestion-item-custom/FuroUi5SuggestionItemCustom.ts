import SuggestionItemCustom from "@ui5/webcomponents/dist/SuggestionItemCustom.js";

/**
 * A suggestion whose content is projected from the default slot instead of the `text` property.
 *
 * ```html
 * <furo-ui5-text-input show-suggestions placeholder="Type 'Z'">
 *   <furo-ui5-suggestion-item-custom text="Zurich">
 *     <div style="display:flex;gap:.5rem;align-items:center">
 *       <furo-ui5-icon name="building"></furo-ui5-icon><span>Zurich, CH</span>
 *     </div>
 *   </furo-ui5-suggestion-item-custom>
 * </furo-ui5-text-input>
 * ```
 *
 * This is a pass-through wrapper around `ui5-suggestion-item-custom`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Input suggestion with fully custom content.
 * @keywords suggestion, autocomplete, custom, input, item
 * @category Form
 * @usecase Use inside furo-ui5-text-input when a suggestion needs richer markup than plain text.
 * @related furo-ui5-text-input, furo-ui5-suggestion-item, furo-ui5-suggestion-item-group
 * @tagname furo-ui5-suggestion-item-custom
 * @public
 */
export class FuroUi5SuggestionItemCustom extends SuggestionItemCustom {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-suggestion-item-custom", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-suggestion-item-custom" };
  }
}

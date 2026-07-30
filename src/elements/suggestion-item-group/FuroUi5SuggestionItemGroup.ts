import SuggestionItemGroup from "@ui5/webcomponents/dist/SuggestionItemGroup.js";

/**
 * Groups `furo-ui5-suggestion-item` children under a common header inside the suggestion popover.
 *
 * ```html
 * <furo-ui5-text-input show-suggestions placeholder="Type 'Z'">
 *   <furo-ui5-suggestion-item-group header-text="Switzerland">
 *     <furo-ui5-suggestion-item text="Zurich"></furo-ui5-suggestion-item>
 *     <furo-ui5-suggestion-item text="Zug"></furo-ui5-suggestion-item>
 *   </furo-ui5-suggestion-item-group>
 * </furo-ui5-text-input>
 * ```
 *
 * This is a pass-through wrapper around `ui5-suggestion-item-group`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Groups input suggestions under a header.
 * @keywords suggestion, group, header, autocomplete, category
 * @category Form
 * @usecase Use inside furo-ui5-text-input to group suggestions into labelled sections.
 * @related furo-ui5-text-input, furo-ui5-suggestion-item, furo-ui5-suggestion-item-custom
 * @tagname furo-ui5-suggestion-item-group
 * @public
 */
export class FuroUi5SuggestionItemGroup extends SuggestionItemGroup {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-suggestion-item-group", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-suggestion-item-group" };
  }
}

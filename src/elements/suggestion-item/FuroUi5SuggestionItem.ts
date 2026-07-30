import SuggestionItem from "@ui5/webcomponents/dist/SuggestionItem.js";

/**
 * One entry of an input's suggestion popover. Requires the parent input to have `show-suggestions` set.
 *
 * ```html
 * <furo-ui5-text-input show-suggestions placeholder="Type 'Z'">
 *   <furo-ui5-suggestion-item text="Zurich"></furo-ui5-suggestion-item>
 *   <furo-ui5-suggestion-item text="Zug"></furo-ui5-suggestion-item>
 * </furo-ui5-text-input>
 * ```
 *
 * This is a pass-through wrapper around `ui5-suggestion-item`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Suggestion entry for an input field.
 * @keywords suggestion, autocomplete, input, typeahead, item
 * @category Form
 * @usecase Use inside furo-ui5-text-input or furo-ui5-multi-input to offer an autocomplete suggestion.
 * @related furo-ui5-text-input, furo-ui5-multi-input, furo-ui5-suggestion-item-group
 * @tagname furo-ui5-suggestion-item
 * @public
 */
export class FuroUi5SuggestionItem extends SuggestionItem {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-suggestion-item", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-suggestion-item" };
  }
}

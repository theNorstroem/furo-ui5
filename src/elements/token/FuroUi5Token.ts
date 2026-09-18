import Token from "@ui5/webcomponents/dist/Token.js";

/**
 * A small, removable item of information (similar to a tag), mainly used to visualize previously
 * selected values. Place tokens inside a `furo-ui5-tokenizer` or a `furo-ui5-multi-input`.
 *
 * ```html
 * <furo-ui5-tokenizer style="width:20rem">
 *   <furo-ui5-token text="Zurich"></furo-ui5-token>
 *   <furo-ui5-token text="Berlin" selected></furo-ui5-token>
 * </furo-ui5-tokenizer>
 * ```
 *
 * This is a pass-through wrapper around `ui5-token`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Small removable item of information, displayed inside a tokenizer.
 * @keywords token, chip, tag, item, multi-input, tokenizer, removable
 * @category Form
 * @usecase Use inside furo-ui5-tokenizer or furo-ui5-multi-input to display a selected value.
 * @related furo-ui5-tokenizer, furo-ui5-multi-input, furo-ui5-multi-combobox, furo-ui5-tag
 * @tagname furo-ui5-token
 * @public
 */
export class FuroUi5Token extends Token {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-token", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-token" };
  }
}

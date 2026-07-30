import Tokenizer from "@ui5/webcomponents/dist/Tokenizer.js";

/**
 * Lays out a set of tokens and moves the ones that do not fit into an overflow popover.
 *
 * ```html
 * <furo-ui5-tokenizer style="width:20rem">
 *   <ui5-token text="Zurich"></ui5-token>
 *   <ui5-token text="Berlin"></ui5-token>
 *   <ui5-token text="Tokyo"></ui5-token>
 * </furo-ui5-tokenizer>
 * ```
 *
 * This is a pass-through wrapper around `ui5-tokenizer`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Container that lays out and overflows a set of tokens.
 * @keywords tokenizer, tokens, chips, tags, overflow
 * @category Form
 * @usecase Use standalone to display a removable set of tokens outside a multi-input.
 * @related furo-ui5-multi-input, furo-ui5-multi-combobox, furo-ui5-tag
 * @tagname furo-ui5-tokenizer
 * @public
 */
export class FuroUi5Tokenizer extends Tokenizer {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-tokenizer", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-tokenizer" };
  }
}

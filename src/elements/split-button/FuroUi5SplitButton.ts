import SplitButton from "@ui5/webcomponents/dist/SplitButton.js";

/**
 * Two buttons in one: the text area triggers the default action, the arrow opens alternatives — usually a `furo-ui5-context-menu`.
 *
 * ```html
 * <furo-ui5-split-button design="Emphasized">Save</furo-ui5-split-button>
 * ```
 *
 * This is a pass-through wrapper around `ui5-split-button`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Button with a default action plus an arrow for alternatives.
 * @keywords button, split, dropdown, action, menu, arrow
 * @category Button
 * @usecase Use when one action is the obvious default but variants should stay reachable.
 * @related furo-ui5-button, furo-ui5-context-menu, furo-ui5-toggle-button
 * @tagname furo-ui5-split-button
 * @public
 */
export class FuroUi5SplitButton extends SplitButton {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-split-button", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-split-button" };
  }
}

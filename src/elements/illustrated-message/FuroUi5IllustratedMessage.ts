import IllustratedMessage from "@ui5/webcomponents-fiori/dist/IllustratedMessage.js";

/**
 * Pairs an SAP illustration with a title, description and optional actions. Import the illustration you reference, e.g. `@ui5/webcomponents-fiori/dist/illustrations/NoData.js`.
 *
 * ```html
 * <furo-ui5-illustrated-message name="NoData">
 *   <furo-ui5-button slot="actions" design="Emphasized">Create entry</furo-ui5-button>
 * </furo-ui5-illustrated-message>
 * ```
 *
 * This is a pass-through wrapper around `ui5-illustrated-message`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Illustration with title and description for empty or error states.
 * @keywords illustration, empty, error, message, placeholder, no-data
 * @category Feedback
 * @usecase Use to explain an empty list, a failed search or an error, with an optional recovery action.
 * @related furo-ui5-message-strip, furo-ui5-busy-indicator, furo-ui5-toast
 * @tagname furo-ui5-illustrated-message
 * @public
 */
export class FuroUi5IllustratedMessage extends IllustratedMessage {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-illustrated-message", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-illustrated-message" };
  }
}

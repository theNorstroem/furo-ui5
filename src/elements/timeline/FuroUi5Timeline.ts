import Timeline from "@ui5/webcomponents-fiori/dist/Timeline.js";

/**
 * Displays `furo-ui5-timeline-item` children in chronological order, vertically or horizontally.
 *
 * ```html
 * <furo-ui5-timeline>
 *   <furo-ui5-timeline-item title-text="Created" subtitle-text="10:24" icon="add">Order created.</furo-ui5-timeline-item>
 *   <furo-ui5-timeline-item title-text="Shipped" subtitle-text="14:02" icon="shipping-status">Left the warehouse.</furo-ui5-timeline-item>
 * </furo-ui5-timeline>
 * ```
 *
 * This is a pass-through wrapper around `ui5-timeline`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Chronological list of events.
 * @keywords timeline, history, events, chronology, activity, feed
 * @category Display
 * @usecase Use to show the history of an object as an ordered list of events.
 * @related furo-ui5-timeline-item, furo-ui5-timeline-group-item, furo-ui5-list
 * @tagname furo-ui5-timeline
 * @public
 */
export class FuroUi5Timeline extends Timeline {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-timeline", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-timeline" };
  }
}

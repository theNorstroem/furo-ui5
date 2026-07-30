import TimelineItem from "@ui5/webcomponents-fiori/dist/TimelineItem.js";

/**
 * One event of a `furo-ui5-timeline`, with a title, subtitle, icon and free content in the default slot.
 *
 * ```html
 * <furo-ui5-timeline>
 *   <furo-ui5-timeline-item title-text="Approved" subtitle-text="2 days ago" icon="accept" name="Jane Doe">
 *     Budget approved without changes.
 *   </furo-ui5-timeline-item>
 * </furo-ui5-timeline>
 * ```
 *
 * This is a pass-through wrapper around `ui5-timeline-item`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Single event on a timeline.
 * @keywords timeline, item, event, entry, history, activity
 * @category Display
 * @usecase Use as a child of furo-ui5-timeline to describe one event.
 * @related furo-ui5-timeline, furo-ui5-timeline-group-item, furo-ui5-relative-time-display
 * @tagname furo-ui5-timeline-item
 * @public
 */
export class FuroUi5TimelineItem extends TimelineItem {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-timeline-item", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-timeline-item" };
  }
}

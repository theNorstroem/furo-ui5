import TimelineGroupItem from "@ui5/webcomponents-fiori/dist/TimelineGroupItem.js";

/**
 * Groups `furo-ui5-timeline-item` children under a collapsible heading, for example one per day.
 *
 * ```html
 * <furo-ui5-timeline>
 *   <furo-ui5-timeline-group-item item-name="Yesterday">
 *     <furo-ui5-timeline-item title-text="Created" icon="add">Order created.</furo-ui5-timeline-item>
 *     <furo-ui5-timeline-item title-text="Paid" icon="money-bills">Payment received.</furo-ui5-timeline-item>
 *   </furo-ui5-timeline-group-item>
 * </furo-ui5-timeline>
 * ```
 *
 * This is a pass-through wrapper around `ui5-timeline-group-item`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Collapsible group of timeline events.
 * @keywords timeline, group, collapse, events, section, history
 * @category Display
 * @usecase Use inside furo-ui5-timeline to fold a run of events under one heading.
 * @related furo-ui5-timeline, furo-ui5-timeline-item
 * @tagname furo-ui5-timeline-group-item
 * @public
 */
export class FuroUi5TimelineGroupItem extends TimelineGroupItem {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-timeline-group-item", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-timeline-group-item" };
  }
}

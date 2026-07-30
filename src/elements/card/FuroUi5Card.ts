import Card from "@ui5/webcomponents/dist/Card.js";

/**
 * A container that visually groups content belonging to a single topic. Put a `furo-ui5-card-header` in its `header` slot.
 *
 * ```html
 * <furo-ui5-card style="width:20rem">
 *   <furo-ui5-card-header slot="header" title-text="Revenue" subtitle-text="Q3"></furo-ui5-card-header>
 *   <div style="padding:1rem">EUR 1.2 M</div>
 * </furo-ui5-card>
 * ```
 *
 * This is a pass-through wrapper around `ui5-card`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Rectangular container for a single topic.
 * @keywords card, tile, container, box, dashboard, panel
 * @category Container
 * @usecase Use on overview pages to group content about one topic into a tile.
 * @related furo-ui5-card-header, furo-ui5-panel, furo-ui5-list
 * @tagname furo-ui5-card
 * @public
 */
export class FuroUi5Card extends Card {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-card", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-card" };
  }
}

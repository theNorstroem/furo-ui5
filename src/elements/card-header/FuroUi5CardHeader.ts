import CardHeader from "@ui5/webcomponents/dist/CardHeader.js";

/**
 * The header of a `furo-ui5-card`: title, subtitle, status and an optional avatar. Set `interactive` to make it clickable.
 *
 * ```html
 * <furo-ui5-card style="width:20rem">
 *   <furo-ui5-card-header
 *     slot="header"
 *     title-text="Revenue"
 *     subtitle-text="Q3 2026"
 *     status="3 of 5"
 *     interactive
 *   ></furo-ui5-card-header>
 *   <div style="padding:1rem">EUR 1.2 M</div>
 * </furo-ui5-card>
 * ```
 *
 * This is a pass-through wrapper around `ui5-card-header`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Title area of a card.
 * @keywords card, header, title, subtitle, avatar, tile
 * @category Container
 * @usecase Use in the header slot of furo-ui5-card to show a title, subtitle and status.
 * @related furo-ui5-card, furo-ui5-title, furo-ui5-avatar
 * @tagname furo-ui5-card-header
 * @public
 */
export class FuroUi5CardHeader extends CardHeader {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-card-header", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-card-header" };
  }
}

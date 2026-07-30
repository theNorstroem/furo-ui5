import ListItemCustom from "@ui5/webcomponents/dist/ListItemCustom.js";

/**
 * A list item whose entire content is projected from the default slot. Combine it with `furo-ui5-typerenderer` to render field nodes inside a list row.
 *
 * ```html
 * <furo-ui5-list header-text="Custom rows">
 *   <furo-ui5-li-custom>
 *     <div style="display:flex;gap:.5rem;align-items:center;padding:.5rem">
 *       <furo-ui5-icon name="paper-plane"></furo-ui5-icon>
 *       <strong>Anything you like</strong>
 *     </div>
 *   </furo-ui5-li-custom>
 * </furo-ui5-list>
 * ```
 *
 * This is a pass-through wrapper around `ui5-li-custom`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary List item with fully custom content.
 * @keywords list, item, custom, li, template, slot
 * @category List
 * @usecase Use inside furo-ui5-list when the row needs arbitrary markup instead of text and icon.
 * @related furo-ui5-list, furo-ui5-li, furo-ui5-typerenderer
 * @tagname furo-ui5-li-custom
 * @public
 */
export class FuroUi5LiCustom extends ListItemCustom {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-li-custom", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-li-custom" };
  }
}

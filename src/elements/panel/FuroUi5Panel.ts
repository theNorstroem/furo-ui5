import Panel from "@ui5/webcomponents/dist/Panel.js";

/**
 * A container with a header that can be expanded and collapsed. For object-page layout use `furo-ui5-section` / `furo-ui5-subsection` instead.
 *
 * ```html
 * <furo-ui5-panel header-text="Details">
 *   <div style="padding:.5rem">Collapsible content.</div>
 * </furo-ui5-panel>
 * ```
 *
 * This is a pass-through wrapper around `ui5-panel`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Collapsible container with a header.
 * @keywords panel, collapsible, expand, container, accordion, section
 * @category Container
 * @usecase Use to group related content under a heading the user can collapse.
 * @related furo-ui5-section, furo-ui5-show-hide, furo-ui5-card
 * @tagname furo-ui5-panel
 * @public
 */
export class FuroUi5Panel extends Panel {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-panel", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-panel" };
  }
}

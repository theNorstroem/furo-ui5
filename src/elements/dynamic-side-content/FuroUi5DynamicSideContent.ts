import DynamicSideContent from "@ui5/webcomponents-fiori/dist/DynamicSideContent.js";

/**
 * Places additional content next to the main content and repositions or hides it as the screen gets narrower.
 *
 * ```html
 * <furo-ui5-dynamic-side-content>
 *   <div style="padding:1rem">Main content</div>
 *   <div slot="sideContent" style="padding:1rem">Side content</div>
 * </furo-ui5-dynamic-side-content>
 * ```
 *
 * This is a pass-through wrapper around `ui5-dynamic-side-content`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Main area with responsive, collapsible side content.
 * @keywords side, content, responsive, aside, layout, split
 * @category PageStructure
 * @usecase Use to show supporting content beside the main content that folds away on small screens.
 * @related furo-ui5-flexible-column-layout, furo-ui5-navigation-layout, furo-ui5-page
 * @tagname furo-ui5-dynamic-side-content
 * @public
 */
export class FuroUi5DynamicSideContent extends DynamicSideContent {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-dynamic-side-content", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-dynamic-side-content" };
  }
}

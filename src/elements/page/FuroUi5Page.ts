import Page from "@ui5/webcomponents-fiori/dist/Page.js";

/**
 * A screen container with three areas: a fixed `header`, a scrollable default slot and a fixed `footer`.
 *
 * ```html
 * <furo-ui5-page style="height:300px" show-footer>
 *   <furo-ui5-bar slot="header" design="Header"><b slot="startContent">Title</b></furo-ui5-bar>
 *   <div style="padding:1rem">Scrollable page content.</div>
 *   <furo-ui5-bar slot="footer" design="FloatingFooter">
 *     <furo-ui5-button slot="endContent" design="Emphasized">Save</furo-ui5-button>
 *   </furo-ui5-bar>
 * </furo-ui5-page>
 * ```
 *
 * This is a pass-through wrapper around `ui5-page`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Page shell with fixed header, scrollable content and footer.
 * @keywords page, layout, header, footer, content, scroll
 * @category PageStructure
 * @usecase Use as the outermost container of a screen that needs a fixed header and footer.
 * @related furo-ui5-bar, furo-ui5-section, furo-ui5-flexible-column-layout
 * @tagname furo-ui5-page
 * @public
 */
export class FuroUi5Page extends Page {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-page", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-page" };
  }
}

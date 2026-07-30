import NavigationLayout from "@ui5/webcomponents-fiori/dist/NavigationLayout.js";

/**
 * The application frame: a `header` slot for the shellbar, a `sideContent` slot for the side navigation and a default slot for the page content.
 *
 * ```html
 * <furo-ui5-navigation-layout style="height:320px">
 *   <furo-ui5-shellbar slot="header" primary-title="My App"></furo-ui5-shellbar>
 *   <furo-ui5-side-navigation slot="sideContent">
 *     <furo-ui5-side-navigation-item text="Home" icon="home" selected></furo-ui5-side-navigation-item>
 *     <furo-ui5-side-navigation-item text="Reports" icon="bar-chart"></furo-ui5-side-navigation-item>
 *   </furo-ui5-side-navigation>
 *   <div style="padding:1rem">Page content</div>
 * </furo-ui5-navigation-layout>
 * ```
 *
 * This is a pass-through wrapper around `ui5-navigation-layout`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary App shell combining a shellbar, side navigation and content.
 * @keywords layout, navigation, shell, sidebar, app, frame
 * @category PageStructure
 * @usecase Use as the top-level frame of an application with a collapsible side navigation.
 * @related furo-ui5-side-navigation, furo-ui5-shellbar, furo-ui5-flexible-column-layout
 * @tagname furo-ui5-navigation-layout
 * @public
 */
export class FuroUi5NavigationLayout extends NavigationLayout {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-navigation-layout", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-navigation-layout" };
  }
}

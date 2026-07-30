import ShellBarBranding from "@ui5/webcomponents-fiori/dist/ShellBarBranding.js";

/**
 * The branding area of a `furo-ui5-shellbar`: a logo slot plus the product name, rendered as one link.
 *
 * ```html
 * <furo-ui5-shellbar>
 *   <furo-ui5-shellbar-branding slot="branding" href="#">
 *     <img slot="logo" src="https://sdk.openui5.org/resources/sap/ui/documentation/sdk/images/logo_ui5.png" alt="UI5" />
 *     My Product
 *   </furo-ui5-shellbar-branding>
 * </furo-ui5-shellbar>
 * ```
 *
 * This is a pass-through wrapper around `ui5-shellbar-branding`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Logo and product name area of the shellbar.
 * @keywords shellbar, branding, logo, product, title
 * @category PageStructure
 * @usecase Use inside furo-ui5-shellbar to render the app logo and name as a clickable brand area.
 * @related furo-ui5-shellbar, furo-ui5-shellbar-item, furo-ui5-shellbar-spacer
 * @tagname furo-ui5-shellbar-branding
 * @public
 */
export class FuroUi5ShellBarBranding extends ShellBarBranding {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-shellbar-branding", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-shellbar-branding" };
  }
}

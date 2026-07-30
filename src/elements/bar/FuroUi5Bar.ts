import Bar from "@ui5/webcomponents/dist/Bar.js";

/**
 * A horizontal container with `startContent`, default (middle) and `endContent` slots, designed as a page or dialog header/footer.
 *
 * ```html
 * <furo-ui5-bar design="Header">
 *   <furo-ui5-button slot="startContent" icon="nav-back" design="Transparent"></furo-ui5-button>
 *   <furo-ui5-title level="H5">Order 4711</furo-ui5-title>
 *   <furo-ui5-button slot="endContent" design="Emphasized">Save</furo-ui5-button>
 * </furo-ui5-bar>
 * ```
 *
 * This is a pass-through wrapper around `ui5-bar`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Header or footer bar with start, middle and end areas.
 * @keywords bar, header, footer, subheader, toolbar, layout
 * @category PageStructure
 * @usecase Use as the header or footer of a page, dialog or card.
 * @related furo-ui5-page, furo-ui5-toolbar, furo-ui5-shellbar
 * @tagname furo-ui5-bar
 * @public
 */
export class FuroUi5Bar extends Bar {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-bar", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-bar" };
  }
}

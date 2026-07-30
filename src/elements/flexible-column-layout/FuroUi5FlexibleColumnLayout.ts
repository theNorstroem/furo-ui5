import FlexibleColumnLayout from "@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js";

/**
 * Implements the SAP Fiori Flexible Column Layout: up to three columns whose widths follow the current `layout` value.
 *
 * ```html
 * <furo-ui5-flexible-column-layout layout="TwoColumnsMidExpanded" style="height:300px">
 *   <div slot="startColumn" style="padding:1rem">Master</div>
 *   <div slot="midColumn" style="padding:1rem">Detail</div>
 * </furo-ui5-flexible-column-layout>
 * ```
 *
 * This is a pass-through wrapper around `ui5-flexible-column-layout`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary One-, two- or three-column master-detail layout.
 * @keywords layout, columns, master-detail, split, responsive, fcl
 * @category PageStructure
 * @usecase Use for list-detail screens where the number of visible columns changes with the workflow.
 * @related furo-ui5-navigation-layout, furo-ui5-page, furo-ui5-dynamic-side-content
 * @tagname furo-ui5-flexible-column-layout
 * @public
 */
export class FuroUi5FlexibleColumnLayout extends FlexibleColumnLayout {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-flexible-column-layout", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-flexible-column-layout" };
  }
}

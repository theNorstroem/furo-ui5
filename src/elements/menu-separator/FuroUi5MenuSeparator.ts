import MenuSeparator from "@ui5/webcomponents/dist/MenuSeparator.js";

/**
 * A thin divider used to separate groups of actions inside a `furo-ui5-context-menu`.
 *
 * ```html
 * <furo-ui5-context-menu open opener="anchor">
 *   <furo-ui5-menu-item text="Open" icon="open-folder"></furo-ui5-menu-item>
 *   <furo-ui5-menu-separator></furo-ui5-menu-separator>
 *   <furo-ui5-menu-item text="Delete" icon="delete"></furo-ui5-menu-item>
 * </furo-ui5-context-menu>
 * <div id="anchor">Right-click target</div>
 * ```
 *
 * This is a pass-through wrapper around `ui5-menu-separator`: the UI5 API (properties, events,
 * slots) is inherited unchanged and no data binding is added.
 *
 * @summary Horizontal rule between context menu items.
 * @keywords menu, separator, divider, rule, group
 * @category Navigation
 * @usecase Use between furo-ui5-menu-item elements to visually separate action groups.
 * @related furo-ui5-context-menu, furo-ui5-menu-item, furo-ui5-menu-item-group
 * @tagname furo-ui5-menu-separator
 * @public
 */
export class FuroUi5MenuSeparator extends MenuSeparator {
  /**
   * UI5 parents detect slotted children by the original tag name used as an attribute,
   * not by tag name. Without this marker the parent silently ignores the child.
   */
  override connectedCallback() {
    this.setAttribute("ui5-menu-separator", "");
    return super.connectedCallback();
  }

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-menu-separator" };
  }
}

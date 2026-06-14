import { css, LitElement, nothing } from "lit";

/**
 * ### Description
 * This is a separator for the table toolbar component.
 *
 * ### ES6 Module Import
 * `import '@furo/ui5/dist/table-toolbar-separator.js'`
 *
 *
 * @author FURO
 *
 * @summary Separator for table toolbar items.
 * @keywords table-toolbar-separator, divider
 * @category Table
 * @usecase Use to separate groups of actions in table toolbar.
 * @related furo-ui5-table-toolbar
 * @tagname furo-ui5-table-toolbar-separator
 * @public
 */
export class FuroUi5TableToolbarSeparator extends LitElement {
  override render() {
    return nothing;
  }

  static override styles = css`
    :host {
      width: 1px;
      height: 1.5rem;
      background: var(--sapToolbar_SeparatorColor);
      margin: 0 0.25rem;
    }
  `;
}

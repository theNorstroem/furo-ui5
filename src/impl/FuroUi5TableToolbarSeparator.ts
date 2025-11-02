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

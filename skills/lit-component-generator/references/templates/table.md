# Table Templates

> Prefer regular HTML `<table>` over `<ui5-table>` for better performance and flexibility.

## HTML Table with FuroUi5TableCss (Recommended)

```typescript
import { FuroUi5TableCss } from "@furo/ui5/styles/table.css";
import { css, html, LitElement, TemplateResult } from "lit";

export class MyTableComponent extends LitElement {
  // IMPORTANT: Include FuroUi5TableCss in styles array for shadowRoot components
  static styles = [FuroUi5TableCss, css`
    :host { display: block; }
    /* your additional styles */
  `];

  private renderRows(): TemplateResult[] {
    return this.items.map(item => html`
      <tr>
        <td>${item.name}</td>
        <td>${item.value}</td>
      </tr>
    `);
  }

  render() {
    return html`
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          ${this.renderRows()}
        </tbody>
      </table>
    `;
  }
}
```

> **Note for Angular/React**: In frameworks without shadowRoot, `FuroUi5TableCss` is already included globally via asset imports, so no additional import is needed.

## ui5-table (use only when specific features are required)

```typescript
import "@ui5/webcomponents/dist/Table.js";
import "@ui5/webcomponents/dist/TableHeaderCell.js";
import "@ui5/webcomponents/dist/TableRow.js";
import "@ui5/webcomponents/dist/TableCell.js";

import { html, TemplateResult } from "lit";

private renderRows(): TemplateResult[] {
  return this.items.map(item => html`
    <ui5-table-row>
      <ui5-table-cell>${item.name}</ui5-table-cell>
      <ui5-table-cell>${item.value}</ui5-table-cell>
    </ui5-table-row>
  `);
}

render() {
  return html`
    <ui5-table>
      <ui5-table-header-cell slot="columns">Name</ui5-table-header-cell>
      <ui5-table-header-cell slot="columns">Value</ui5-table-header-cell>
      ${this.renderRows()}
    </ui5-table>
  `;
}
```

## Tree Table (uses HTML table)

```typescript
import "@furo/ui5/tree-table";
import { TreeTableCSS } from "@furo/ui5/styles/table.css";

// Add TreeTableCSS to static styles array
static styles = [TreeTableCSS, componentStyles];

// Wait for tree-table to be defined
protected override async scheduleUpdate(): Promise<void> {
  await customElements.whenDefined("furo-ui5-tree-table");
  await super.scheduleUpdate();
}

render() {
  return html`
    <furo-ui5-tree-table @row-click="${this.onRowClick}">
      <table>
        <thead>
          <tr><th>Name</th><th>Value</th></tr>
        </thead>
        <tbody>
          <tr aria-level="1" data-has-children="true">
            <td>Parent</td><td>10</td>
          </tr>
          <tr aria-level="2">
            <td>Child</td><td>5</td>
          </tr>
        </tbody>
      </table>
    </furo-ui5-tree-table>
  `;
}
```

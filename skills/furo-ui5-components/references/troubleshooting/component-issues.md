# Component Issues

## Components Not Rendering
**Problem**: Components appear as empty or don't render.

**Solutions**:

1. **Add the `:not(:defined)` rule** to hide undefined components until they load:
```css
*:not(:defined) { display: none; }
```

2. **Wait for component definitions** before rendering content that depends on them. Delay your component's first render until required child components are registered (e.g., `customElements.whenDefined("furo-ui5-tabcontainer")`).

3. **Check that imports are correct**:
```html
<!-- Import from dist path, not main package -->
<!-- ✅ Correct: @furo/ui5/button -->
<!-- ❌ Wrong:  @furo/ui5/Button -->
```

## Tree Table Not Styled
**Problem**: `furo-ui5-tree-table` renders without proper styling.

**Solution**: Import and apply TreeTableCSS. The tree table requires its dedicated CSS module (`@furo/ui5/styles/table.css`) and a `customElements.whenDefined("furo-ui5-tree-table")` guard before first render.

```html
<furo-ui5-tree-table>
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
```

## Tree Table Wrong Structure
**Problem**: Using `ui5-table-row`/`ui5-table-cell` inside tree table.
```html
<furo-ui5-tree-table>
  <ui5-table-row>...</ui5-table-row>  <!-- WRONG -->
</furo-ui5-tree-table>
```

**Solution**: Use standard HTML table elements.
```html
<furo-ui5-tree-table>
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
```

## Dialog Not Opening
**Problem**: Dialog `open()` method doesn't work.

**Solution**: Obtain a reference to the dialog element and call `open()` on it. Ensure the dialog component is defined before interacting with it. Use Lit's `ref` directive (`createRef` / `ref` from `lit/directives/ref.js`); the ref's `.value` is populated once the element has rendered. To wait for registration, `await customElements.whenDefined("furo-ui5-dialog")` first.

```html
<furo-ui5-dialog id="myDialog" header-text="My Dialog">
  <div>Dialog content</div>
  <ui5-bar slot="footer" design="Footer">
    <furo-ui5-button slot="endContent">Close</furo-ui5-button>
  </ui5-bar>
</furo-ui5-dialog>
```

## Events Not Firing
**Problem**: Event handlers don't receive expected data.

**Solution**: Use correct event names and access the `detail` property of the `CustomEvent`. Component-specific event detail types are exported from `@furo/ui5` (e.g., `TabContainerTabSelectEventDetail`).

```html
<!-- Handle "tab-select" event — detail contains { tab } -->
<furo-ui5-tabcontainer>
  <!-- Handle "tab-select" event to get the selected tab -->
  <furo-ui5-tab id="overview" text="Overview"></furo-ui5-tab>
  <furo-ui5-tab id="details" text="Details"></furo-ui5-tab>
</furo-ui5-tabcontainer>
```

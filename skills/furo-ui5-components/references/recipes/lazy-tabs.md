# Tabs with Lazy Loading

Tab content that loads data only when the tab is activated.

> **Note:** CSS is shown in `<style>` blocks for illustration. In your framework, use the appropriate styling approach (e.g., `static styles` in Lit, scoped styles in Angular, CSS modules in React).

## HTML Structure

```html
<style>
  :host { display: block; }
  *:not(:defined) { display: none; }
</style>

<!-- Handle "tab-select" event to switch active tab and trigger data loading -->
<furo-ui5-tabcontainer collapsed fixed tab-layout="Inline">
  <furo-ui5-tab id="overview" text="Overview" selected></furo-ui5-tab>
  <furo-ui5-tab id="details" text="Details"></furo-ui5-tab>
  <furo-ui5-tab id="history" text="History"></furo-ui5-tab>
</furo-ui5-tabcontainer>

<!-- Show busy indicator while tab data is loading -->
<furo-ui5-busy-indicator>
  <!-- Tab content rendered here based on active tab -->
  <div style="padding: 1rem;">Overview content here</div>
</furo-ui5-busy-indicator>
```

## Pattern

**Lazy loading behavior:**
1. Track which tabs have been loaded (e.g., a `Set` of tab IDs)
2. On `tab-select` event, check if the tab's data has already been loaded
3. If not loaded: show a loading indicator, fetch the data, then mark the tab as loaded
4. If already loaded: display the cached content immediately

**Key attributes:**
- `collapsed` on `furo-ui5-tabcontainer` — makes the tab bar act as navigation only (no built-in content area)
- `fixed` — prevents the tab bar from scrolling with content
- `tab-layout="Inline"` — compact tab style

**Event detail:** The `tab-select` event provides `e.detail.tab` with the selected tab element. Use `e.detail.tab.id` to identify which tab was selected.

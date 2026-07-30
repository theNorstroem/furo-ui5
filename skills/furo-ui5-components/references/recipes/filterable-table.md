# Table with Filter Bar and Pagination

A data table with search, filters, sorting, and pagination.

> **Note:** CSS is shown in `<style>` blocks for illustration. In your framework, use the appropriate styling approach (e.g., `static styles` in Lit, scoped styles in Angular, CSS modules in React).

## HTML Structure

```html
<style>
  :host { display: block; height: 100%; }
  *:not(:defined) { display: none; }
  .filter-bar { gap: var(--furo-ui5-horizontal-flex-space, 0.5rem); padding: var(--MediaSizeIndentation); }
  .pagination { justify-content: space-between; align-items: center; }
</style>

<furo-vertical-flex style="height: 100%">
  <!-- Filter Bar -->
  <ui5-bar design="Header" class="filter-bar">
    <!-- Handle "input" event to filter by search term -->
    <furo-ui5-text-input
      slot="startContent"
      placeholder="Search..."
      show-clear-icon
      style="width: 250px;">
    </furo-ui5-text-input>
    <!-- Handle "change" event to filter by status -->
    <furo-ui5-select slot="startContent" style="width: 150px;">
      <furo-ui5-option value="all" selected>All Status</furo-ui5-option>
      <furo-ui5-option value="active">Active</furo-ui5-option>
      <furo-ui5-option value="pending">Pending</furo-ui5-option>
      <furo-ui5-option value="inactive">Inactive</furo-ui5-option>
    </furo-ui5-select>
    <span slot="endContent"><!-- Display filtered item count --></span>
  </ui5-bar>

  <!-- Table -->
  <ui5-table flex>
    <!-- Handle "click" event on columns to sort -->
    <ui5-table-header-cell slot="columns">ID</ui5-table-header-cell>
    <ui5-table-header-cell slot="columns">Name</ui5-table-header-cell>
    <ui5-table-header-cell slot="columns">Status</ui5-table-header-cell>
    <ui5-table-header-cell slot="columns">Amount</ui5-table-header-cell>
    <ui5-table-header-cell slot="columns">Date</ui5-table-header-cell>
    <!-- Rows rendered dynamically from filtered/paginated data -->
    <ui5-table-row>
      <ui5-table-cell>1</ui5-table-cell>
      <ui5-table-cell>Item A</ui5-table-cell>
      <ui5-table-cell>
        <furo-ui5-tag design="Positive">active</furo-ui5-tag>
      </ui5-table-cell>
      <ui5-table-cell>1,000</ui5-table-cell>
      <ui5-table-cell>2024-03-01</ui5-table-cell>
    </ui5-table-row>
  </ui5-table>

  <!-- Pagination -->
  <ui5-bar design="Footer" class="pagination">
    <span slot="startContent">Page 1 of 5</span>
    <div slot="endContent">
      <!-- Handle "click" events to navigate pages -->
      <furo-ui5-button design="Transparent" icon="navigation-left-arrow" disabled></furo-ui5-button>
      <furo-ui5-button design="Transparent" icon="navigation-right-arrow"></furo-ui5-button>
    </div>
  </ui5-bar>
</furo-vertical-flex>
```

## Pattern

**Data flow:**
1. Load data into an array
2. Apply search filter (match against name/ID)
3. Apply status filter
4. Sort by selected column and direction
5. Paginate the result (e.g., 10 items per page)

**Status design mapping:**
| Status | Tag Design |
|--------|-----------|
| active | `Positive` |
| inactive | `Negative` |
| pending | `Warning` |
| default | `Information` |

**Sorting:** Toggle sort direction when clicking the same column; reset to ascending when clicking a different column.

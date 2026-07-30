---
title: List Report Layout
tags: [list-report, filter-bar, table, data-table, toolbar, search]
use-when: user asks for list report content, filter bar with table, or data grid with filters
---

# List Report Layout

Filter bar combined with a data table and toolbar for comprehensive data viewing.

## Use Cases
- Data management interfaces
- Admin panels
- Inventory lists
- Order management
- User administration

## Preview

### Standard List Report
```
┌─────────────────────────────────────────────────────────────────────────┐
│ Orders                                          [+ Create] [Export ▼]   │
├─────────────────────────────────────────────────────────────────────────┤
│ 🔍 [Search...          ]  Status: [All ▼]  Date: [Last 30 days ▼]      │
│ [More Filters]  [Clear All]                    Showing 1-25 of 1,234    │
├─────────────────────────────────────────────────────────────────────────┤
│ □ │ Order #    │ Customer      │ Date       │ Amount    │ Status       │
├───┼────────────┼───────────────┼────────────┼───────────┼──────────────┤
│ □ │ ORD-001    │ Acme Corp     │ 2024-03-01 │ $1,500.00 │ 🟢 Complete  │
│ □ │ ORD-002    │ TechStart     │ 2024-03-01 │ $2,300.00 │ 🟡 Pending   │
│ □ │ ORD-003    │ BigCo Inc     │ 2024-02-28 │ $890.00   │ 🟢 Complete  │
│ □ │ ORD-004    │ SmallBiz      │ 2024-02-28 │ $450.00   │ 🔴 Cancelled │
│ □ │ ORD-005    │ MegaCorp      │ 2024-02-27 │ $5,200.00 │ 🟡 Pending   │
├─────────────────────────────────────────────────────────────────────────┤
│ Selected: 0                              [◀ Prev]  Page 1 of 50  [Next ▶]│
└─────────────────────────────────────────────────────────────────────────┘
```

### With Selection Actions
```
┌─────────────────────────────────────────────────────────────────────────┐
│ ✓ 3 selected                    [Delete] [Export] [Change Status ▼]     │
├─────────────────────────────────────────────────────────────────────────┤
│ ✓ │ ORD-001    │ Acme Corp     │ ...                                    │
│ ✓ │ ORD-002    │ TechStart     │ ...                                    │
│ □ │ ORD-003    │ BigCo Inc     │ ...                                    │
│ ✓ │ ORD-004    │ SmallBiz      │ ...                                    │
└─────────────────────────────────────────────────────────────────────────┘
```

### Compact Filter Bar
```
┌─────────────────────────────────────────────────────────────────────────┐
│ [🔍 Search] [Status: All ▼] [Date ▼] [+ Add Filter]     [⚙] [↓ Export] │
├─────────────────────────────────────────────────────────────────────────┤
│ Active Filters: [Status: Pending ×] [Date: This Week ×]   [Clear All]   │
└─────────────────────────────────────────────────────────────────────────┘
```

## Implementation

<!-- TODO: Add full implementation -->

## Related Components
- `ui5-table` - import `@ui5/webcomponents/dist/Table.js`
- Filter bar: compose from `furo-ui5-combobox` / `furo-ui5-date-picker` inside a `ui5-toolbar` — there is no dedicated filter-bar component
- `ui5-toolbar` - import `@ui5/webcomponents/dist/Toolbar.js`
- `furo-ui5-text-input` - [Component docs](../furo-ui5-components/components/furo-ui5-text-input.md)

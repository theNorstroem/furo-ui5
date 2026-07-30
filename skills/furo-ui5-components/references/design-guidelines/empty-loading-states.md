# Empty States & Loading Patterns

## Empty States

Use illustrated messages for empty content areas:

```html
<!-- No data available -->
<ui5-illustrated-message name="NoData">
  <furo-ui5-title slot="title" level="H3">No Items Found</furo-ui5-title>
  <div slot="subtitle">There are no items matching your criteria.</div>
  <furo-ui5-button slot="actions" design="Emphasized">Create New Item</furo-ui5-button>
</ui5-illustrated-message>

<!-- No search results -->
<ui5-illustrated-message name="NoSearchResults">
  <furo-ui5-title slot="title" level="H3">No Results</furo-ui5-title>
  <div slot="subtitle">Try adjusting your search or filter criteria.</div>
  <furo-ui5-button slot="actions">Clear Filters</furo-ui5-button>
</ui5-illustrated-message>

<!-- Error state -->
<ui5-illustrated-message name="ErrorScreen">
  <furo-ui5-title slot="title" level="H3">Something Went Wrong</furo-ui5-title>
  <div slot="subtitle">We couldn't load the data. Please try again.</div>
  <furo-ui5-button slot="actions" design="Emphasized">Retry</furo-ui5-button>
</ui5-illustrated-message>

<!-- No access -->
<ui5-illustrated-message name="NoAccess">
  <furo-ui5-title slot="title" level="H3">Access Denied</furo-ui5-title>
  <div slot="subtitle">You don't have permission to view this content.</div>
  <furo-ui5-button slot="actions">Request Access</furo-ui5-button>
</ui5-illustrated-message>
```

## Available Illustration Names

| Name | Use Case |
|------|----------|
| `NoData` | Empty list/table, no content |
| `NoSearchResults` | Search returned nothing |
| `NoTasks` | Empty task list |
| `NoMail` | Empty inbox |
| `NoNotifications` | No notifications |
| `NoEntries` | No entries found |
| `ErrorScreen` | General error |
| `UnableToLoad` | Failed to load data |
| `NoAccess` | Permission denied |
| `PageNotFound` | 404 error |
| `BeforeSearch` | Initial search state |
| `AddColumn` | Prompt to add columns |
| `AddPeople` | Prompt to add users |

## Loading States

```html
<!-- Full page loading — set "active" attribute when loading -->
<furo-ui5-busy-indicator active>
  <div class="page-content">
    <!-- Content loads here -->
  </div>
</furo-ui5-busy-indicator>

<!-- Inline loading indicator -->
<furo-ui5-busy-indicator active size="Medium"></furo-ui5-busy-indicator>

<!-- Button loading state — set "loading" attribute during async action -->
<!-- Handle "click" event to trigger save -->
<furo-ui5-button loading>Saving...</furo-ui5-button>

<!-- Table loading -->
<ui5-table loading>
  <!-- Table content -->
</ui5-table>
```

## Loading Pattern Best Practices

| Pattern | When to Use |
|---------|-------------|
| `furo-ui5-busy-indicator` | Full page/section loading |
| `furo-ui5-busy-indicator` | Small inline loading |
| Button `loading` prop | Async button actions |
| Table `loading` prop | Table data loading |
| Skeleton screens | Complex layout loading (custom) |

## Skeleton Loading (Custom Pattern)

For complex layouts, show placeholder shapes while data loads:

```html
<div class="skeleton">
  <div class="skeleton-header"></div>
  <div class="skeleton-line"></div>
  <div class="skeleton-line short"></div>
</div>
```

```css
.skeleton-header, .skeleton-line {
  background: var(--sapContent_ImagePlaceholderBackground);
  border-radius: 4px;
  animation: pulse 1.5s infinite;
}
.skeleton-header { height: 2rem; width: 60%; margin-bottom: 1rem; }
.skeleton-line { height: 1rem; margin-bottom: 0.5rem; }
.skeleton-line.short { width: 40%; }

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

## Combining Loading and Empty States

Use the following priority order when rendering content:

1. **Loading**: Show `furo-ui5-busy-indicator` with `active` attribute while data is being fetched
2. **Error**: Show `ui5-illustrated-message` with `name="ErrorScreen"` and a Retry button
3. **Empty**: Show `ui5-illustrated-message` with `name="NoData"` and a Create button
4. **Content**: Render the actual data (e.g., a list of items)

This ensures the user always sees the most relevant state. Only one state should be visible at a time.

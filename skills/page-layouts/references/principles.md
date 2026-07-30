# Layout Design Principles

Core principles for creating effective page layouts in Furo UI5 applications.

## 1. Page Structure

### Always Use Full Height
```css
:host {
  display: block;
  height: 100%;
}
```

> **Exception:** Elements placed inside a scrolling parent (e.g. `<furo-pages scroll>`, `<furo-resizer content-scroll>`, or any container with `overflow: auto`) do not need `height: 100%` on `:host`. The scrolling parent manages the content height — setting `height: 100%` on children can actually prevent natural content flow.

### Standard Page Skeleton
```html
<furo-vertical-flex style="height: 100%">
  <!-- Fixed header (optional) -->
  <ui5-dynamic-page-header header-text="Page Title" collapsed>
    <furo-horizontal-flex slot="action" align-end><furo-ui5-button slot="action">Action</furo-ui5-button></furo-horizontal-flex>

  </ui5-dynamic-page-header>

  <!-- Scrollable content (some examples do not need a furo-layout-indent) -->
  <furo-layout-indent flex scroll>
    <!-- Page content here -->
  </furo-layout-indent>

  <!-- Optional fixed footer (optional) -->
  <ui5-bar design="Footer">
    <furo-ui5-button slot="endContent">Cancel</furo-ui5-button>
    <furo-ui5-button slot="endContent" design="Emphasized">Save</furo-ui5-button>
  </ui5-bar>
</furo-vertical-flex>
```

## 2. Responsive Design

### Automatic Responsiveness
Use `furo-responsive-layout` for content that should reflow:

| Layout | Columns | Collapses at |
|--------|---------|--------------|
| `one` | 1 | Never |
| `two` | 2 | `breakpoint-small` → 1 |
| `three` | 3 | `breakpoint-big` → 1 |
| `four` | 4 | `breakpoint-big` → 2 → `breakpoint-small` → 1 |
| `six` | 6 | `breakpoint-big` → 3 → `breakpoint-small` → 1 |

```html
<style>
  ui5-panel{
    height: 100%;
    padding:1rem;
  }
</style>
<furo-responsive-layout layout="two" breakpoint-small="600">
  <ui5-panel design="Island">Card 1</ui5-panel>
  <ui5-panel design="Island">Card 2</ui5-panel>
  <ui5-panel design="Island">Card 3</ui5-panel>
</furo-responsive-layout>
```

### Custom Grid Control
Use `furo-responsive-layout` with per-child span attributes when you need uneven columns.
A child marked `layout-double` occupies two of the container's columns:

```html
<furo-responsive-layout layout="three">
  <div layout-double>Wide content (2/3)</div>
  <div>Sidebar (1/3)</div>
</furo-responsive-layout>
```

## 3. Spacing & Visual Hierarchy

### Use CSS Variables when needed and requested
```css
/* Page padding */
padding: var(--MediaSizeIndentation);

/* Standard gap between elements */
gap: 1rem;

/* Borders */
border: 1px solid var(--sapGroup_ContentBorderColor);

/* Backgrounds */
background: var(--sapBackgroundColor);
background: var(--sapGroup_TitleBackground);
```

### Visual Grouping
- Use `ui5-card` to group related content
- Use `ui5-panel` for collapsible sections
- Use `furo-ui5-section` for semantic grouping in object pages

## 4. Navigation Patterns

### Horizontal Navigation
Use tabs for switching between related content views:
```html
<furo-ui5-tabcontainer> <!-- Handle "tab-select" event to update current page -->
  <furo-ui5-tab text="Overview" id="overview"></furo-ui5-tab>
  <furo-ui5-tab text="Details" id="details"></furo-ui5-tab>
</furo-ui5-tabcontainer>
<furo-pages page="overview"> <!-- Update "page" attribute based on selected tab -->
  <div id="overview">...</div>
  <div id="details">...</div>
</furo-pages>
```

### Vertical Navigation
Use side navigation for app sections:
```html
<furo-horizontal-flex style="height: 100%">
  <ui5-side-navigation>
    <ui5-side-navigation-item text="Home" icon="home"></ui5-side-navigation-item>
    <ui5-side-navigation-item text="Settings" icon="action-settings"></ui5-side-navigation-item>
  </ui5-side-navigation>
  <div flex>Main content</div>
</furo-horizontal-flex>
```

### Drill-Down Navigation
Use flexible column layout for master-detail patterns:
```html
<ui5-flexible-column-layout layout="TwoColumnsMidExpanded"> <!-- Change layout based on selection state -->
  <div slot="startColumn">List</div>
  <div slot="midColumn">Detail</div>
  <div slot="endColumn">Sub-detail</div>
</ui5-flexible-column-layout>
```

## 5. Loading States

### Wrap with Busy Indicator
```html
<furo-ui5-busy-indicator active> <!-- Toggle "active" when loading -->
  <div>Content that's loading</div>
</furo-ui5-busy-indicator>
```

### Prevent Flash of Unstyled Content
```css
*:not(:defined) {
  display: none;
}
```

## 6. Forms

### Use Form Layout Components
```html
<furo-ui5-form-layout form-title="User Details">
  <furo-ui5-form-group label="Personal Information">
    <furo-ui5-form-row>
      <furo-ui5-label show-colon slot="label" for="NameFieldID">
        Name
      </furo-ui5-label>
      <furo-ui5-text-input id="NameFieldID"></furo-ui5-text-input>
    </furo-ui5-form-row>
    <furo-ui5-form-row>
      <furo-ui5-label show-colon slot="label" for="EmailFieldID">
        Name
      </furo-ui5-label>
      <furo-ui5-text-input id="EmailFieldID" type="Email"></furo-ui5-text-input>
    </furo-ui5-form-row>
  </furo-ui5-form-group>
</furo-ui5-form-layout>
```

### Display-Only Forms
```html
<furo-ui5-form-row>
  <furo-ui5-label show-colon slot="label" for="StatusFieldID">
    Active
  </furo-ui5-label>
  <span id="StatusFieldID">Active</span>
</furo-ui5-form-row>
```

## 7. Component Composition Tips

### Cards with Headers
```html
<!-- Simple header -->
<ui5-card>
  <ui5-card-header slot="header" title-text="Title" subtitle-text="Subtitle">
    <furo-ui5-button slot="action" icon="overflow" design="Transparent"></furo-ui5-button>
  </ui5-card-header>
  <div style="padding: 1rem">Content</div>
</ui5-card>

<!-- KPI header -->
<ui5-card>
  <ui5-card-header slot="header" title-text="Revenue" status="Positive">
    <furo-ui5-typerenderer slot="value" value="125000" display-type="Currency" element-currency="USD">
    </furo-ui5-typerenderer>
  </ui5-card-header>
</ui5-card>
```

### Resizable Panels
```html
<furo-horizontal-flex style="height: 100%">
  <furo-resizer righthandle remember-id="pageNamePanelId" minwidth="200" maxwidth="500" style="width: 300px">
    <div>Resizable panel</div>
  </furo-resizer>
  <div flex>Main content</div>
</furo-horizontal-flex>
```

## 8. When to Break the Rules

These principles are guidelines, not laws. Break them when:

- **User experience demands it** - If following a pattern creates friction, adapt
- **Content doesn't fit** - Some data needs a unique presentation
- **Performance matters** - Simpler layouts can be faster
- **Accessibility requires it** - Always prioritize accessibility over visual consistency

> **The goal is effective UI, not template conformance.**

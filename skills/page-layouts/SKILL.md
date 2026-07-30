---
name: page-layouts
description: Page layout reference patterns. Use as inspiration when creating pages.
---

# Page Layout Examples & Principles

This skill provides **inspiration and reference patterns** for building pages in applications.

> **Important**: These layouts are **examples, not requirements**. Feel free to:
> - Combine patterns from different layouts
> - Create entirely new designs using available components
> - Adapt layouts to fit the specific use case
> - Use the furo-ui5-components skill as your primary component reference

## When to Use This Skill

| Situation | Approach |
|-----------|----------|
| User asks for a specific pattern (e.g., "master-detail", "wizard") | Reference the example as a starting point, adapt as needed |
| User describes a new page without specifying a pattern | Design freely using components from furo-ui5-components |
| User asks for a "dashboard" or "overview" | Take inspiration but create a design that fits the actual data/use case |
| Complex/custom UI requirements | Compose your own layout using layout primitives (see below) |

## Layout Primitives (Building Blocks)

These are the fundamental components for building any layout:

### Structure
- `furo-vertical-flex` - Stack elements vertically, use `flex` and `scroll` attributes
- `furo-horizontal-flex` - Arrange elements horizontally, use `space` for gaps
- `furo-responsive-layout` - Auto-responsive grid (one/two/three/four/six columns)
- `furo-responsive-layout` children accept `layout-double` / `layout-tripple` / `layout-full` for uneven spans

### Page Chrome
- `ui5-dynamic-page-header` - Collapsible page header with title, subtitle, actions
- `ui5-bar` - Fixed header/footer bars with slots for content
- `ui5-side-navigation` - Collapsible sidebar navigation

### Content Containers
- `ui5-card` - Cards with optional `ui5-card-header` or `ui5-card-header`
- `ui5-panel` - Collapsible content panels
- `furo-ui5-section` / `furo-ui5-subsection` - Semantic content sections

### Navigation
- `furo-ui5-tabcontainer` + `furo-ui5-tab` - Tab navigation
- `ui5-wizard` + `ui5-wizard-step` - Step-by-step flows
- `ui5-flexible-column-layout` - Multi-column drill-down navigation
- `furo-pages` - Show/hide content based on route

### Utilities
- `furo-resizer` - Draggable panel dividers
- `furo-ui5-busy-indicator` - Loading overlay

## Design Principles

### 1. Full-Height Pages
Always make pages fill available height:
```css
:host {
  display: block;
  height: 100%;
}
```

### 2. Scroll Containment
Use `flex scroll` on the scrollable area, not the whole page:
```html
<furo-vertical-flex style="height: 100%">
  <ui5-dynamic-page-header>Fixed</ui5-dynamic-page-header>
  <div flex scroll>Scrollable content</div>
  <ui5-bar design="Footer">Fixed footer</ui5-bar>
</furo-vertical-flex>
```

### 3. Scroll Containment
Tab content components must wrap their content in `<furo-vertical-flex>` to enable scrolling. Do NOT use `overflow: hidden` on `:host` for tab components — it clips content and prevents scrolling. Use `:host { display: block; height: 100%; }` instead.

### 4. Responsive by Default
Prefer `furo-responsive-layout` for automatic responsiveness:
```html
<furo-responsive-layout layout="two" breakpoint-small="600">
  <!-- 2 columns above 600px, 1 column below -->
</furo-responsive-layout>
```

### 5. Consistent Spacing
Use CSS variables for spacing:
- `var(--MediaSizeIndentation)` - Standard page padding
- `var(--sapGroup_ContentBorderColor)` - Borders between sections
- `gap: 1rem` - Consistent gaps between cards/items

### 6. Hide Undefined Components
Prevent flash of unstyled content:
```css
*:not(:defined) {
  display: none;
}
```

## Framework-Specific Syntax

The examples use framework-agnostic HTML. For event binding, boolean attributes, property binding, and component setup in your framework, see:

- [Lit](references/frameworks/lit.md) - `html\`\``, `@event`, `?boolean`, `@state()`, `css\`\``
- [Angular](references/frameworks/angular.md) - `CUSTOM_ELEMENTS_SCHEMA`, `(event)`, `[attr]`, `@if`
- [React](references/frameworks/react.md) - `useRef`, `addEventListener`, JSX attribute binding

## Example Layouts (Reference)

See `references/examples/` for complete implementation examples:

### Available Patterns
- [Master-Detail](references/examples/master-detail.md) - List with detail view
- [Master-Detail-Detail](references/examples/master-detail-detail.md) - Three-column drill-down
- [Side Navigation](references/examples/side-navigation-page.md) - Sidebar navigation
- [Dashboard Grid](references/examples/dashboard-grid.md) - Card-based dashboard
- [Split View](references/examples/split-view-resizable.md) - Resizable panels
- [Tabbed Content](references/examples/tabbed-content.md) - Tab navigation
- [Wizard Flow](references/examples/wizard-flow.md) - Multi-step process
- [Blank Page](references/examples/blank-page.md) - Minimal starter

> **Note**: For SAP Fiori floorplans (List Report, Object Page, Worklist, etc.), refer to the [SAP Fiori Design Guidelines](https://experience.sap.com/fiori-design-web/) and compose using the primitives above.

## Creative Freedom Guidelines

When designing pages:

1. **Start with the use case**, not the template
2. **Mix and match** - Use a dashboard header with a master-detail body
3. **Simplify** - Not every page needs all the bells and whistles
4. **Innovate** - If none of the examples fit, create something new
5. **Component-first** - Know what components are available (furo-ui5-components skill) and compose them creatively

> For the full design principles guide, see [Principles](references/principles.md).

> Use the [Layout Review Checklist](references/LAYOUT_REVIEW_CHECKLIST.md) to verify your layout implementation.

> **Remember**: The best layout is the one that serves the user's needs, not the one that matches a template exactly.

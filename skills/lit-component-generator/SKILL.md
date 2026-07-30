---
name: lit-component-generator
description: Create Lit components/pages with canonical folder structure. Use for new components, pages, forms, dialogs.
---

# Lit Component Generator

Generate Lit web components and pages using @furo/ui5, @furo/route, and @furo/open-models.

> **NEVER hallucinate components!** Verify `furo-ui5-` components exist in furo-ui5-components skill before using.

## Quick Start: New Page

### Step 1: Create Folder Structure FIRST

```bash
PAGE_NAME="{name}"
mkdir -p src/pages/page-${PAGE_NAME}/{components,tabs,data}
```

Creates:
```
src/pages/page-{name}/
├── components/    # Page-specific UI components
├── tabs/          # Tab content components
└── data/          # DataStore (model, service, decorators)
```

### Step 2: Create Files

```
src/pages/page-{name}/
├── Page{Name}.ts           # Main page (thin orchestrator)
├── index.ts                # Registration + HTMLElementTagNameMap
├── components/header/      # Extract header here
├── tabs/overview/          # Each tab gets own folder
└── data/                   # DataStore files
```

### Step 3: Update MainStage.ts

- Add lazy-load case in `connectedCallback()` switch
- Add page element to `<furo-pages>` in render()

> Once your component is ready, use the **lit-testing** skill to generate tests for it.

## Anti-Patterns (DO NOT)

- Create monolithic page files with all rendering logic
- Skip creating folder structure (`components/`, `tabs/`, `data/`)
- Put header rendering in main page - extract to `components/header/`
- Put tab content in main page - extract to `tabs/tab-{name}/`
- Define `_renderHeader()` or `_renderOverviewTab()` in page file

**The main page should be a thin orchestrator** - imports and composes, no complex rendering.

## Templates

See reference files for complete templates:
- **[Page Template](references/templates/page.md)** - Thin orchestrator, header, tabs
- **[Component Template](references/templates/component.md)** - Basic component, forms, bindable
- **[Dialog Template](references/templates/dialog.md)** - Form dialog, confirmation
- **[Table Template](references/templates/table.md)** - HTML table, ui5-table, tree table
- **[Key Patterns](references/patterns.md)** - Ref, model binding, scheduleUpdate, i18n
- **[TabController](references/tab-controller.md)** - URL-synced tabs

## Component Naming

| Type | Tag Prefix | Class Prefix | Example |
|------|------------|--------------|---------|
| Page | `page-` | `Page` | `page-user-profile` / `PageUserProfile` |
| Tab | `tab-` | `Tab` | `tab-overview` / `TabOverview` |
| Header | `header-` | `Header` | `header-user` / `HeaderUser` |

## Component File Structure

Always create in folder with separate files:

```
component-name/           # kebab-case folder
├── ComponentName.ts      # Class (NO registration)
└── index.ts              # Registration + HTMLElementTagNameMap
```

**index.ts:**
```typescript
import { ComponentName } from "./ComponentName";
window.customElements.define("component-name", ComponentName);
declare global {
  interface HTMLElementTagNameMap {
    "component-name": ComponentName;
  }
}
export { ComponentName };
```

## Import Pattern

```typescript
// Components from dist path
import "@furo/ui5/button";

// Types from main package
import { TabContainerTabSelectEventDetail } from "@furo/ui5";

// Both (use eslint-disable)
import "@furo/ui5/tabcontainer";
import FuroUi5Tabcontainer from "@furo/ui5/tabcontainer";
```

## Path Aliases

- `@/` -> `src/`
- `@components/` -> `src/components/`
- `@x/` -> `src/x/`

## Project Structure

### Global Components (`src/components/`)
- Reusable across all pages
- NO DataStore access
- Receive data via props/events

### Page Components (`src/pages/page-xxx/components/`)
- Page-specific
- CAN access page's DataStore (`./data/`)

## Troubleshooting

See reference files for common Lit-specific issues:
- **[Lint Errors](references/lint-errors.md)** - Reserved property names, Array.map() in templates, import order
- **[Routing Issues](references/routing-issues.md)** - Page not activating, URL parameters not available
- **[Data Binding](references/data-binding.md)** - Model updates not reflected, form fields not updating

## Related Skills

- **page-layouts** - Page-level layout patterns
- **content-layouts** - Content blocks (timelines, cards)
- **furo-ui5-components** - Component documentation
- **open-models** - Data binding patterns
- **lit-testing** - Write tests for components after creation

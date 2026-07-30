# Validation Rules

## 1. Folder Structure (Pages)

**Required folders** for pages (`src/pages/page-{name}/`):

| Folder | Required | Purpose |
|--------|----------|---------|
| `components/` | Yes | Page-specific UI components |
| `tabs/` | Yes | Tab content components |
| `data/` | Yes | DataStore (model, service, decorators) |
| `utils/` | Optional | Page-specific utilities |

**Anti-patterns:**
- Missing required folders (even if empty initially)
- Extra top-level .ts files that should be in subfolders

---

## 2. Page Component Pattern

**Main page file** (`Page{Name}.ts`) must be a **thin orchestrator**:

```typescript
// Required: Implements FuroPage interface
export class Page{Name} extends LitElement implements FuroPage {
  // Required: lifecycle methods
  onPageActivated(location: LocationObject): void { }
  onPageUpdated(location: LocationObject): void { }
  onPageDeactivated(): void { }

  // Required if tabs: TabController
  private tabs = new TabController(this, { ... });

  // Required if waiting for components: scheduleUpdate
  protected override async scheduleUpdate(): Promise<void> { ... }
}
```

**Anti-patterns:**
- Render helpers like `_renderHeader()`, `_renderOverviewTab()` in page file
- Complex rendering logic (should be in child components)
- More than ~50 lines in render()
- Missing FuroPage lifecycle methods

---

## 3. Component Structure Pattern

**Required structure:**
```
component-name/           # kebab-case folder
├── ComponentName.ts      # PascalCase class (NO registration)
└── index.ts              # Registration + HTMLElementTagNameMap
```

**ComponentName.ts:**
```typescript
export class ComponentName extends LitElement {
  static styles = css`
    :host { display: block; }
    *:not(:defined) { display: none; }
  `;
}
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

**Anti-patterns:**
- Standalone component file (e.g., `src/components/MyComponent.ts`)
- customElements.define in the component class file
- Missing HTMLElementTagNameMap declaration

---

## 4. Data Layer Pattern

**Required files** in `data/`:

| File | Purpose |
|------|---------|
| `{Name}Model.ts` | Entity model singleton |
| `{Name}Service.ts` | API service with events |
| `Decorators.ts` | Pre-configured bindings |
| `index.ts` | Public exports |

---

## 5. Import Conventions

```typescript
// CORRECT: Import the web component
import "@furo/ui5/button";

// CORRECT: Import the web component and class
import "@furo/ui5/tabcontainer";
import {FuroUi5Tabcontainer} from "@furo/ui5";

// CORRECT: Use path aliases
import { msg } from "@/config/i18n/localize";
import { MyComponent } from "@components/my-component";
```

**Anti-patterns:**
- Deep import into package internals: `import "@furo/ui5/dist/elements/button/index.js"`
  (use the subpath export: `import "@furo/ui5/button"`)
- Importing a class from a deep path instead of the barrel:
  `import { FuroUi5Button } from "@furo/ui5/dist/..."` → `from "@furo/ui5"`
- Relative climbs out of the current feature folder (`../../../config/i18n/localize`)
  instead of the `@/` alias
- Importing a component class without also importing its registration side-effect module

---

## 6. CSS Standards

**Required rules:**
```css
:host { display: block; }
:host([hidden]) { display: none; }
*:not(:defined) { display: none; }
```

**Use CSS variables:**
```css
/* CORRECT */
padding: var(--MediaSizeIndentation);
color: var(--sapTextColor);
background: var(--sapBackgroundColor);

/* WRONG: Hardcoded */
padding: 16px;
color: #333;
```

**Common variables:**
- `--sapTextColor` - Primary text
- `--sapBackgroundColor` - Background
- `--MediaSizeIndentation` - Responsive padding
- `--sapElement_BorderCornerRadius` - Border radius

---

## 7. Naming Conventions

**Tag names:** kebab-case (`page-user-profile`, `tab-overview`)

**Component prefixes:**
- Tab: `tab-` prefix required (e.g., `tab-overview`)
- Page: `page-` prefix required (e.g., `page-user-profile`)
- Header: `header-` prefix recommended

**Class names:** PascalCase with matching prefix
- Tab: `TabOverview`, `TabDetails`
- Page: `PageUserProfile`
- Header: `HeaderUser`

**Files:**
- Folders: kebab-case
- Class files: PascalCase
- Index: lowercase `index.ts`

---

## 8. Tab Structure

```
tabs/
├── overview/
│   ├── TabOverview.ts
│   └── index.ts
└── details/
    ├── TabDetails.ts
    └── index.ts
```

**Requirements:**
- Tag MUST start with `tab-`
- Class MUST start with `Tab`
- Page uses TabController for URL sync
- Tab IDs match between TabController and furo-pages

---

## 9. Header Structure

```
components/
└── header/
    ├── Header{Name}.ts
    └── index.ts
```

**Requirements:**
- Extracted from main page (not inline `_renderHeader()`)
- Uses `ui5-dynamic-page-header` component
- Can import from `../../data/` for DataStore access

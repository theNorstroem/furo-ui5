# Tab Controller

A Lit ReactiveController for managing tab state with URL synchronization. Follows the URL-first principle where the URL is the source of truth.

## When to Use

Use TabController when:
- Page has tabs that should be deep-linkable via URL
- Multiple independent tab sets on the same page
- Nested tabs in child components
- You need tab state to survive page refresh

## Key Principles

| Principle | Description |
|-----------|-------------|
| **URL is source of truth** | `selectTab()` updates URL, not state directly |
| **Deep-linkable** | Every tab combination has a unique URL |
| **Multiple instances** | Each controller uses different `urlParam` |
| **Works with furo-pages** | Provides `current` value for page routing |

## Flow

```
User clicks tab → selectTab() → URL updates → syncFromUrl() → state updates → UI re-renders
```

## Setup

### 1. Import TabController

```typescript
import { TabController } from "@furo/route/dist/TabController";
```

### 2. Create Instance

```typescript
class MyPage extends LitElement implements FuroPage {
  private tabs = new TabController(this, {
    urlParam: "tab",           // URL query param: ?tab=overview
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "details", label: "Details" },
      { id: "settings", label: "Settings", icon: "action-settings" },
    ],
    defaultTab: "overview",    // Used when no tab in URL
    tabContainerSelector: "#Tabs",  // Optional: sync visual selection
  });
}
```

### 3. Sync from URL in Page Lifecycle

```typescript
onPageActivated(location: LocationObject) {
  this.tabs.syncFromUrl(location);
  // ... other activation logic
}

onPageUpdated(location: LocationObject) {
  this.tabs.syncFromUrl(location);
}
```

### 4. Render Tabs and Content

```typescript
render() {
  return html`
    <!-- Add id matching tabContainerSelector for visual sync -->
    <furo-ui5-tabcontainer id="Tabs" @tab-select="${this.tabs.handleTabSelect}" collapsed fixed tab-layout="Inline">
      <furo-ui5-tab text="Overview" id="overview"></furo-ui5-tab>
      <furo-ui5-tab text="Details" id="details"></furo-ui5-tab>
      <furo-ui5-tab text="Settings" id="settings" icon="action-settings"></furo-ui5-tab>
    </furo-ui5-tabcontainer>

    <furo-pages page="${this.tabs.current}" default="${this.tabs.defaultTab}">
      <page-overview id="overview"></page-overview>
      <page-details id="details"></page-details>
      <page-settings id="settings"></page-settings>
    </furo-pages>
  `;
}
```

**Note:** When using `tabContainerSelector`, the controller automatically calls `selectTabById()` on the tabcontainer when syncing from URL. This ensures the visual tab selection stays in sync with URL-based navigation (e.g., browser back/forward buttons).

## Complete Example

```typescript
import { FuroPage, LocationObject } from "@furo/route";
import { TabController } from "@furo/route/dist/TabController";
import { css, html, LitElement } from "lit";
import { state } from "lit/decorators.js";

import "@furo/ui5/tabcontainer";
import "@furo/ui5/tab";
import "@furo/route/dist/furo-pages";

export class PageExample extends LitElement implements FuroPage {
  private tabs = new TabController(this, {
    urlParam: "tab",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "details", label: "Details" },
      { id: "settings", label: "Settings", design: "Neutral" },
    ],
    defaultTab: "overview",
  });

  onPageActivated(location: LocationObject) {
    this.tabs.syncFromUrl(location);
  }

  onPageUpdated(location: LocationObject) {
    this.tabs.syncFromUrl(location);
  }

  render() {
    return html`
      <furo-ui5-tabcontainer @tab-select="${this.tabs.handleTabSelect}" collapsed fixed tab-layout="Inline">
        <furo-ui5-tab text="Overview" id="overview"></furo-ui5-tab>
        <furo-ui5-tab text="Details" id="details"></furo-ui5-tab>
        <furo-ui5-tab text="Settings" id="settings"></furo-ui5-tab>
      </furo-ui5-tabcontainer>

      <furo-pages page="${this.tabs.current}" default="${this.tabs.defaultTab}">
        <section-overview id="overview"></section-overview>
        <section-details id="details"></section-details>
        <section-settings id="settings"></section-settings>
      </furo-pages>
    `;
  }
}
```

## Multiple Tab Sets

Use different `urlParam` values for independent tab sets:

```typescript
class MyPage extends LitElement implements FuroPage {
  // Main content tabs: ?tab=editor
  private mainTabs = new TabController(this, {
    urlParam: "tab",
    tabs: [
      { id: "editor", label: "Editor" },
      { id: "preview", label: "Preview" },
    ],
    defaultTab: "editor",
  });

  // Side panel tabs: ?panel=properties
  private sideTabs = new TabController(this, {
    urlParam: "panel",
    tabs: [
      { id: "properties", label: "Properties" },
      { id: "history", label: "History" },
    ],
    defaultTab: "properties",
  });

  onPageActivated(location: LocationObject) {
    this.mainTabs.syncFromUrl(location);
    this.sideTabs.syncFromUrl(location);
  }

  onPageUpdated(location: LocationObject) {
    this.mainTabs.syncFromUrl(location);
    this.sideTabs.syncFromUrl(location);
  }

  render() {
    return html`
      <main>
        <furo-ui5-tabcontainer @tab-select="${this.mainTabs.handleTabSelect}" collapsed fixed tab-layout="Inline">
          <furo-ui5-tab text="Editor" id="editor"></furo-ui5-tab>
          <furo-ui5-tab text="Preview" id="preview"></furo-ui5-tab>
        </furo-ui5-tabcontainer>

        <furo-pages page="${this.mainTabs.current}">
          <tab-editor id="editor"></tab-editor>
          <tab-preview id="preview"></tab-preview>
        </furo-pages>
      </main>

      <aside>
        <furo-ui5-tabcontainer @tab-select="${this.sideTabs.handleTabSelect}" collapsed fixed tab-layout="Inline">
          <furo-ui5-tab text="Properties" id="properties"></furo-ui5-tab>
          <furo-ui5-tab text="History" id="history"></furo-ui5-tab>
        </furo-ui5-tabcontainer>

        <furo-pages page="${this.sideTabs.current}">
          <panel-properties id="properties"></panel-properties>
          <panel-history id="history"></panel-history>
        </furo-pages>
      </aside>
    `;
  }
}
// URL: ?tab=editor&panel=history
```

## Nested Tabs

Child components can have their own TabController with their own URL param:

```typescript
// Parent page: ?tab=editor&editorMode=advanced
class ParentPage extends LitElement {
  private tabs = new TabController(this, {
    urlParam: "tab",
    tabs: [{ id: "editor", label: "Editor" }, { id: "preview", label: "Preview" }],
    defaultTab: "editor",
  });
}

// Child component (tab-editor): uses "editorMode" param
class TabEditor extends LitElement {
  private modeTabs = new TabController(this, {
    urlParam: "editorMode",
    tabs: [{ id: "basic", label: "Basic" }, { id: "advanced", label: "Advanced" }],
    defaultTab: "basic",
  });
}
```

## API Reference

### TabControllerConfig

```typescript
interface TabControllerConfig {
  /** URL query parameter name (e.g., "tab", "subtab") */
  urlParam: string;
  /** Tab definitions */
  tabs: readonly TabDefinition[];
  /** Default tab ID when none specified in URL */
  defaultTab: string;
  /** Optional: CSS selector for furo-ui5-tabcontainer to sync visual selection */
  tabContainerSelector?: string;
}
```

### TabDefinition

```typescript
interface TabDefinition {
  /** Unique ID, used in URL and furo-pages */
  id: string;
  /** Display label for the tab */
  label: string;
  /** Optional: Tab design variant */
  design?: "Default" | "Positive" | "Negative" | "Critical" | "Neutral";
  /** Optional: Icon name (SAP icon) */
  icon?: string;
  /** Optional: Whether tab is disabled */
  disabled?: boolean;
}
```

### TabController Properties

| Property | Type | Description |
|----------|------|-------------|
| `current` | `string` | Current tab ID (for `furo-pages page=`) |
| `defaultTab` | `string` | Default tab ID (for `furo-pages default=`) |
| `urlParam` | `string` | URL parameter name |
| `tabs` | `TabDefinition[]` | Tab definitions |

### TabController Methods

| Method | Description |
|--------|-------------|
| `syncFromUrl(location)` | Read tab from URL and update state. Call in `onPageActivated`/`onPageUpdated` |
| `selectTab(tabId)` | Select tab by updating URL (does not update state directly) |
| `handleTabSelect` | Event handler for `@tab-select` - bind to tabcontainer |
| `isValidTab(tabId)` | Check if tab ID exists |
| `getTab(tabId)` | Get tab definition by ID |

## URL Examples

| Scenario | URL |
|----------|-----|
| Single tab set | `?id=123&tab=details` |
| Multiple tab sets | `?id=123&tab=editor&panel=history` |
| Nested tabs | `?id=123&tab=editor&editorMode=advanced` |

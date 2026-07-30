---
title: Tabbed Content Layout
tags: [tabs, tabbed, tab-navigation, sections, views, switch]
use-when: user asks for tabs, tabbed interface, tab navigation, or switching between content sections
---

# Tabbed Content Layout

A page layout with tab-based navigation for switching between different content areas.

## Use Cases
- Object pages with multiple sections
- Settings with categories
- Multi-step forms (non-wizard)
- Detail views with related data

## Required Components
| Tag | ES Module |
|-----|-----------|
| `furo-vertical-flex` | `@furo/layout/furo-vertical-flex` |
| `furo-horizontal-flex` | `@furo/layout/furo-horizontal-flex` |
| `furo-ui5-tabcontainer` | `@furo/ui5/tabcontainer` |
| `furo-ui5-tab` | `@furo/ui5/tab` |
| `ui5-dynamic-page-header` | `@ui5/webcomponents-fiori/dist/DynamicPageHeader.js` |
| `ui5-bar` | `@ui5/webcomponents/dist/Bar.js` |
| `furo-ui5-button` | `@furo/ui5/button` |
| `furo-ui5-tag` | `@furo/ui5/tag` |
| `furo-ui5-label` | `@furo/ui5/label` |
| `furo-ui5-text` | `@furo/ui5/text` |
| `furo-pages` | `@furo/route/dist/FuroPages` |

> How you load these modules depends on your framework. See [Framework References](#framework-specific-syntax) below.

## Preview
```
+-----------------------------------------------------------------------+
| Dynamic Header                                                         |
| Title: John Doe                                                        |
| Status: Active | Department: Engineering | Role: Developer             |
+-----------------------------------------------------------------------+
| [ Overview ] [ Details ] [ Documents ] [ History ]                     |
+-----------------------------------------------------------------------+
|                                                                        |
|  Tab Content Area                                                      |
|                                                                        |
|  (Changes based on selected tab)                                       |
|                                                                        |
|                                                                        |
+-----------------------------------------------------------------------+
|                                                [Cancel] [Save]         |
+-----------------------------------------------------------------------+
```

## Styles

```css
:host {
  display: block;
  height: 100%;
  /* to avoid multiple scrollbars  */
  overflow: hidden;
}

*:not(:defined) {
  display: none;
}
```

## Implementation

Handle the `tab-select` event on `furo-ui5-tabcontainer` to update the active page. Use `furo-pages` to show/hide content based on the selected tab.

```html
<furo-vertical-flex>
  <!-- Dynamic Header -->
  <ui5-dynamic-page-header header-text="John Doe" collapsed>
    <furo-horizontal-flex slot="summary" space v-align-center>
      <furo-ui5-tag design="Positive">Active</furo-ui5-tag>
      <furo-ui5-label show-colon>Department</furo-ui5-label>
      <furo-ui5-text>Engineering</furo-ui5-text>
      <furo-ui5-label show-colon>Role</furo-ui5-label>
      <furo-ui5-text>Developer</furo-ui5-text>
    </furo-horizontal-flex>
  </ui5-dynamic-page-header>

  <!-- Tab Navigation -->
  <furo-ui5-tabcontainer
    id="tabs"
    collapsed
    fixed
    tab-layout="Inline"> <!-- Handle "tab-select" event to update current page -->
    <furo-ui5-tab text="Overview" id="overview"></furo-ui5-tab>
    <furo-ui5-tab text="Details" id="details"></furo-ui5-tab>
    <furo-ui5-tab text="Documents" id="documents" additional-text="5"></furo-ui5-tab>
    <furo-ui5-tab text="History" id="history"></furo-ui5-tab>
  </furo-ui5-tabcontainer>

  <!-- Tab Content -->
  <furo-pages flex scroll page="overview" default="overview"> <!-- Update "page" attribute based on selected tab -->
    <div id="overview" class="tab-content">
      <h3>Overview Tab</h3>
      <p>Overview content goes here...</p>
    </div>

    <div id="details" class="tab-content">
      <h3>Details Tab</h3>
      <p>Detailed information...</p>
    </div>

    <div id="documents" class="tab-content">
      <h3>Documents Tab</h3>
      <p>Document list...</p>
    </div>

    <div id="history" class="tab-content">
      <h3>History Tab</h3>
      <p>Change history...</p>
    </div>
  </furo-pages>

  <!-- Footer -->
  <ui5-bar design="Footer">
    <furo-ui5-button slot="endContent">Cancel</furo-ui5-button>
    <furo-ui5-button slot="endContent" design="Emphasized">Save</furo-ui5-button>
  </ui5-bar>
</furo-vertical-flex>
```

### Tab Selection with URL Sync

For Lit applications using `@furo/route`, you can sync the active tab with the URL:

```
- Handle "tab-select" event to call FuroLocationUpdater.updateQueryParams({ tab: selectedTabId })
- On page activation, read the tab query param and call tabContainer.selectTabById(tabId)
- Use scheduleUpdate() to wait for furo-ui5-tabcontainer to be defined before first render
```

See [Lit framework reference](../frameworks/lit.md) for `Ref` and `FuroPage` lifecycle patterns.

## Tab Variations

### With Icons
```html
<furo-ui5-tabcontainer>
  <furo-ui5-tab text="Overview" id="overview" icon="home"></furo-ui5-tab>
  <furo-ui5-tab text="Details" id="details" icon="detail-view"></furo-ui5-tab>
  <furo-ui5-tab text="Documents" id="documents" icon="document"></furo-ui5-tab>
</furo-ui5-tabcontainer>
```

### Icon Only (Compact)
```html
<furo-ui5-tabcontainer>
  <furo-ui5-tab id="overview" icon="home" tooltip="Overview"></furo-ui5-tab>
  <furo-ui5-tab id="details" icon="detail-view" tooltip="Details"></furo-ui5-tab>
  <furo-ui5-tab id="documents" icon="document" tooltip="Documents"></furo-ui5-tab>
</furo-ui5-tabcontainer>
```

### With Badges/Counters
```html
<furo-ui5-tabcontainer>
  <furo-ui5-tab text="Messages" id="messages" additional-text="12"></furo-ui5-tab>
  <furo-ui5-tab text="Notifications" id="notifications" additional-text="3"></furo-ui5-tab>
</furo-ui5-tabcontainer>
```

### With Separators
```html
<furo-ui5-tabcontainer>
  <furo-ui5-tab text="Tab 1" id="tab1"></furo-ui5-tab>
  <furo-ui5-tab text="Tab 2" id="tab2"></furo-ui5-tab>
  <ui5-tab-separator></ui5-tab-separator>
  <furo-ui5-tab text="Tab 3" id="tab3"></furo-ui5-tab>
</furo-ui5-tabcontainer>
```

### Nested Tabs (Sub-tabs)
```html
<furo-ui5-tabcontainer>
  <furo-ui5-tab text="Main Tab" id="main">
    <furo-ui5-tab text="Sub Tab 1" id="sub1"></furo-ui5-tab>
    <furo-ui5-tab text="Sub Tab 2" id="sub2"></furo-ui5-tab>
  </furo-ui5-tab>
</furo-ui5-tabcontainer>
```

## Tab Container Attributes

| Attribute | Type | Description |
|-----------|------|-------------|
| `collapsed` | boolean | Shows tabs in collapsed mode (no content area) |
| `fixed` | boolean | Fixed tab bar position |
| `tab-layout` | `"Inline" \| "Standard"` | Tab appearance style |
| `overflow-mode` | `"End" \| "StartAndEnd"` | How to handle overflow tabs |

## Component-Based Tabs

For complex tab content, create separate components for each tab:

```html
<furo-pages page="overview"> <!-- Update "page" based on selected tab -->
  <tab-overview id="overview"></tab-overview>
  <tab-details id="details"></tab-details>
  <tab-documents id="documents"></tab-documents>
</furo-pages>
```

### Tab Component
Example of a tab component:

```html
<furo-vertical-flex>
  <furo-ui5-section heading="Overview" scroll>
    <!-- Tab content -->
  </furo-ui5-section>
</furo-vertical-flex>
```

```css
:host {
  display: block;
  height: 100%;
  /* to avoid multiple scrollbars  */
  overflow: hidden;
}
```

## Related Components
- `furo-ui5-tabcontainer` - [Component docs](../furo-ui5-components/components/furo-ui5-tabcontainer.md)
- `furo-ui5-tab` - [Component docs](../furo-ui5-components/components/furo-ui5-tab.md)
- `ui5-dynamic-page-header` - import `@ui5/webcomponents-fiori/dist/DynamicPageHeader.js`
- `furo-pages` - For tab content switching

## Framework-Specific Syntax
For event handling, boolean attributes, and property binding syntax in your framework:
- [Lit](../frameworks/lit.md)
- [Angular](../frameworks/angular.md)
- [React](../frameworks/react.md)

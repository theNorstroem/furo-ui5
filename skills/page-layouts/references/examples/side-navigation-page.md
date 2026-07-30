---
title: Side Navigation Page Layout
tags: [side-navigation, sidebar, left-nav, menu, navigation, collapsible]
use-when: user asks for sidebar navigation, side menu, left navigation, or collapsible nav menu
---

# Side Navigation Page Layout

A page layout with a collapsible side navigation menu on the left and main content area on the right.

## Use Cases
- Application with multiple sections
- Settings pages with categories
- Documentation or help pages

## Required Components
| Tag | ES Module |
|-----|-----------|
| `furo-horizontal-flex` | `@furo/layout/furo-horizontal-flex` |
| `furo-vertical-flex` | `@furo/layout/furo-vertical-flex` |
| `ui5-side-navigation` | `@ui5/webcomponents-fiori/dist/SideNavigation.js` |
| `ui5-side-navigation-item` | `@ui5/webcomponents-fiori/dist/SideNavigationItem.js` |
| `ui5-side-navigation-sub-item` | `@ui5/webcomponents-fiori/dist/SideNavigationSubItem.js` |
| `ui5-dynamic-page-header` | `@ui5/webcomponents-fiori/dist/DynamicPageHeader.js` |
| `ui5-bar` | `@ui5/webcomponents/dist/Bar.js` |
| `furo-ui5-button` | `@furo/ui5/button` |
| `furo-pages` | `@furo/route/dist/FuroPages` |

> How you load these modules depends on your framework. See [Framework References](#framework-specific-syntax) below.

## Preview
```
+---------------------------------------------------------------------+
| Shellbar                                                             |
+-----------+---------------------------------------------------------+
|           | Dynamic Header                                           |
| Nav       +---------------------------------------------------------+
|           |                                                          |
| o Home    |  Main Content Area                                       |
| * Users   |                                                          |
| o Reports |  [Form fields, tables, etc.]                             |
| o Settings|                                                          |
|           |                                                          |
| ----------|                                                          |
| o Help    |                                                          |
| o Logout  |                                                          |
|           +---------------------------------------------------------+
|           | Footer Bar                              [Cancel] [Save]  |
+-----------+---------------------------------------------------------+
```

## Styles

```css
:host {
  display: block;
  height: 100%;
}

*:not(:defined) {
  display: none;
}

ui5-side-navigation {
  height: 100%;
}
```

## Implementation

Handle the `selection-change` event on `ui5-side-navigation` to update the current page. Use `furo-pages` to show/hide content based on the selected navigation item.

```html
<furo-horizontal-flex style="height: 100%">
  <!-- Side Navigation -->
  <ui5-side-navigation> <!-- Handle "selection-change" event to update selected page -->
    <!-- Main Navigation Items -->
    <ui5-side-navigation-item
      id="home"
      text="Home"
      icon="home"
      selected> <!-- Toggle "selected" based on current page -->
    </ui5-side-navigation-item>

    <ui5-side-navigation-item
      id="users"
      text="Users"
      icon="employee"
      expanded>
      <ui5-side-navigation-sub-item
        id="users-list"
        text="All Users">
      </ui5-side-navigation-sub-item>
      <ui5-side-navigation-sub-item
        id="users-roles"
        text="Roles">
      </ui5-side-navigation-sub-item>
    </ui5-side-navigation-item>

    <ui5-side-navigation-item
      id="reports"
      text="Reports"
      icon="business-objects-experience">
    </ui5-side-navigation-item>

    <ui5-side-navigation-item
      id="settings"
      text="Settings"
      icon="action-settings">
    </ui5-side-navigation-item>

    <!-- Fixed Items (Bottom) -->
    <ui5-side-navigation-item
      slot="fixedItems"
      id="help"
      text="Help"
      icon="sys-help">
    </ui5-side-navigation-item>

    <ui5-side-navigation-item
      slot="fixedItems"
      id="logout"
      text="Logout"
      icon="log">
    </ui5-side-navigation-item>
  </ui5-side-navigation>

  <!-- Main Content Area -->
  <furo-vertical-flex class="main-content">
    <!-- Dynamic Header -->
    <ui5-dynamic-page-header header-text="Home" collapsed> <!-- Update header-text based on selected page -->
      <furo-horizontal-flex slot="action" space>
        <div flex></div>
        <furo-ui5-button design="Transparent" icon="refresh">Refresh</furo-ui5-button>
      </furo-horizontal-flex>
    </ui5-dynamic-page-header>

    <!-- Page Content -->
    <furo-pages flex scroll page="home" default="home"> <!-- Update "page" attribute based on selection -->
      <div id="home" class="content-area">
        <h2>Welcome Home</h2>
        <p>Dashboard content here...</p>
      </div>
      <div id="users" class="content-area">
        <h2>Users Management</h2>
        <!-- Users content -->
      </div>
      <div id="reports" class="content-area">
        <h2>Reports</h2>
        <!-- Reports content -->
      </div>
      <div id="settings" class="content-area">
        <h2>Settings</h2>
        <!-- Settings content -->
      </div>
    </furo-pages>

    <!-- Footer -->
    <ui5-bar design="Footer">
      <furo-ui5-button slot="endContent">Cancel</furo-ui5-button>
      <furo-ui5-button slot="endContent" design="Emphasized">Save</furo-ui5-button>
    </ui5-bar>
  </furo-vertical-flex>
</furo-horizontal-flex>
```

## Side Navigation Features

### Collapsible Mode
```html
<ui5-side-navigation collapsed>
  <!-- Shows only icons when collapsed -->
</ui5-side-navigation>
```

### With Header Slot
```html
<ui5-side-navigation>
  <div slot="header">
    <furo-ui5-avatar initials="JD"></furo-ui5-avatar>
    <span>John Doe</span>
  </div>
  <!-- Navigation items -->
</ui5-side-navigation>
```

### External Links
```html
<ui5-side-navigation-item
  text="Documentation"
  icon="document"
  href="https://docs.example.com"
  target="_blank">
</ui5-side-navigation-item>
```

## Icon Reference

Common icons for navigation:
- `home` - Home/Dashboard
- `employee` - Users/People
- `business-objects-experience` - Reports/Analytics
- `action-settings` - Settings
- `sys-help` - Help
- `log` - Logout
- `document` - Documents
- `folder` - Folders
- `calendar` - Calendar
- `cart` - Shopping/Orders

## Related Components
- `ui5-side-navigation` - import `@ui5/webcomponents-fiori/dist/SideNavigation.js`
- `ui5-side-navigation-item` - import `@ui5/webcomponents-fiori/dist/SideNavigationItem.js`
- `ui5-dynamic-page-header` - import `@ui5/webcomponents-fiori/dist/DynamicPageHeader.js`

## Framework-Specific Syntax
For event handling, boolean attributes, and property binding syntax in your framework:
- [Lit](../frameworks/lit.md)
- [Angular](../frameworks/angular.md)
- [React](../frameworks/react.md)

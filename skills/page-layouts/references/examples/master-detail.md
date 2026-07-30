---
title: Master-Detail Layout
tags: [master-detail, list-detail, two-column, split-view, selection, drill-down]
use-when: user asks for list with detail view, email-style interface, file browser with preview, or two-column layout
---

# Master-Detail Layout

A two-column layout with a list/tree on the left and detail view on the right. The layout automatically adjusts column widths based on content.

## Use Cases
- Object list with detail view
- File browser with preview
- Email client style interface

## Required Components
| Tag | ES Module |
|-----|-----------|
| `ui5-flexible-column-layout` | `@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js` |
| `furo-ui5-list` | `@furo/ui5/list` |
| `ui5-li` | `@ui5/webcomponents/dist/ListItemStandard.js` |
| `ui5-bar` | `@ui5/webcomponents/dist/Bar.js` |
| `furo-ui5-title` | `@furo/ui5/title` |
| `furo-ui5-button` | `@furo/ui5/button` |
| `furo-resizer` | `@furo/layout/furo-resizer` (for resizable variant) |
| `furo-horizontal-flex` | `@furo/layout/furo-horizontal-flex` |
| `furo-vertical-flex` | `@furo/layout/furo-vertical-flex` |
| `ui5-dynamic-page-header` | `@ui5/webcomponents-fiori/dist/DynamicPageHeader.js` |

> How you load these modules depends on your framework. See [Framework References](#framework-specific-syntax) below.

## Preview
```
+---------------------------------------------------------+
| Header                                                   |
+-----------------+---------------------------------------+
|                 |                                        |
|  Master List    |     Detail Content                     |
|                 |                                        |
|  o Item 1       |     Title: Item 2                      |
|  * Item 2  <--  |     Description: ...                   |
|  o Item 3       |     [Edit] [Delete]                    |
|  o Item 4       |                                        |
|                 |                                        |
+-----------------+---------------------------------------+
| Footer                                                   |
+---------------------------------------------------------+
```

## Styles

```css
:host {
  display: block;
  height: 100%;
}
```

## Implementation

### Using FlexibleColumnLayout (Recommended)

Initial state shows one column. When an item is selected, switch `layout` to `"TwoColumnsMidExpanded"`. When the detail is closed, switch back to `"OneColumn"`.

```html
<ui5-flexible-column-layout layout="TwoColumnsMidExpanded"> <!-- Change layout based on selection state -->
  <!-- Master (Start Column) -->
  <div slot="startColumn">
    <furo-ui5-list header-text="Items"> <!-- Handle "item-click" event to select an item -->
      <ui5-li id="1" text="Item 1"></ui5-li>
      <ui5-li id="2" text="Item 2"></ui5-li>
      <ui5-li id="3" text="Item 3"></ui5-li>
    </furo-ui5-list>
  </div>

  <!-- Detail (Mid Column) - show when an item is selected -->
  <div slot="midColumn">
    <ui5-bar design="Header">
      <furo-ui5-title slot="startContent">Item Detail</furo-ui5-title>
      <furo-ui5-button slot="endContent" icon="decline" design="Transparent">
      </furo-ui5-button> <!-- Handle click to close detail (set layout="OneColumn") -->
    </ui5-bar>
    <div style="padding: 1rem;">
      Detail content for selected item
    </div>
  </div>
</ui5-flexible-column-layout>
```

### Using HorizontalFlex with Resizer
```html
<furo-horizontal-flex style="height: 100%">
  <!-- Master Panel (Resizable) -->
  <furo-resizer righthandle remember-id="master-panel" minwidth="250" maxwidth="500" style="width: 320px;">
    <furo-vertical-flex style="height: 100%">
      <ui5-bar design="Header">
        <furo-ui5-title slot="startContent" level="H5">Items</furo-ui5-title>
      </ui5-bar>
      <furo-ui5-list flex scroll>
        <!-- List items -->
      </furo-ui5-list>
    </furo-vertical-flex>
  </furo-resizer>

  <!-- Detail Panel -->
  <furo-vertical-flex flex>
    <ui5-dynamic-page-header header-text="Selected Item Title"> <!-- Update header-text based on selection -->
    </ui5-dynamic-page-header>
    <div flex scroll style="padding: 1rem;">
      <!-- Detail content -->
    </div>
    <ui5-bar design="Footer">
      <furo-ui5-button slot="endContent" design="Emphasized">Save</furo-ui5-button>
    </ui5-bar>
  </furo-vertical-flex>
</furo-horizontal-flex>
```

## Layout Modes (FlexibleColumnLayout)

| Layout | Description |
|--------|-------------|
| `OneColumn` | Only start column visible (100%) |
| `TwoColumnsMidExpanded` | Start (33%) + Mid (67%) |
| `TwoColumnsStartExpanded` | Start (67%) + Mid (33%) |
| `ThreeColumnsMidExpanded` | All three, mid largest |
| `ThreeColumnsEndExpanded` | All three, end largest |
| `ThreeColumnsStartExpanded` | All three, start largest |

## Related Components
- `ui5-flexible-column-layout` - import `@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js`
- `furo-resizer` - import `@furo/layout/furo-resizer`
- `furo-ui5-list` - [Component docs](../furo-ui5-components/components/furo-ui5-list.md)

## Framework-Specific Syntax
For event handling, boolean attributes, and property binding syntax in your framework:
- [Lit](../frameworks/lit.md)
- [Angular](../frameworks/angular.md)
- [React](../frameworks/react.md)

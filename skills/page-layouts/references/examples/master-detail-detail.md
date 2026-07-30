---
title: Master-Detail-Detail Layout
tags: [master-detail-detail, three-column, drill-down, nested, hierarchy]
use-when: user asks for three-column layout, deep drill-down, list-detail-subdetail, or nested navigation
---

# Master-Detail-Detail Layout

A three-column layout for deep drill-down scenarios. Shows list -> detail -> sub-detail navigation.

## Use Cases
- Order -> Line Items -> Item Details
- Categories -> Products -> Product Specs
- Folders -> Files -> File Preview

## Required Components
| Tag | ES Module |
|-----|-----------|
| `ui5-flexible-column-layout` | `@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js` |
| `ui5-bar` | `@ui5/webcomponents/dist/Bar.js` |
| `furo-ui5-button` | `@furo/ui5/button` |
| `furo-ui5-list` | `@furo/ui5/list` |
| `ui5-li` | `@ui5/webcomponents/dist/ListItemStandard.js` |
| `furo-ui5-title` | `@furo/ui5/title` |
| `furo-ui5-form-layout` | `@furo/ui5/form-layout` |
| `furo-ui5-form-group` | `@furo/ui5/form-group` |
| `furo-ui5-form-row` | `@furo/ui5/form-row` |
| `furo-ui5-label` | `@furo/ui5/label` |
| `furo-ui5-text` | `@furo/ui5/text` |

> How you load these modules depends on your framework. See [Framework References](#framework-specific-syntax) below.

## Preview
```
+---------------------------------------------------------------------+
| Header                                                               |
+-------------+-------------------+-----------------------------------+
|             |                   |                                    |
|  Master     |  Detail           |  Sub-Detail                       |
|             |                   |                                    |
|  o Order 1  |  Line Items:      |  Item: Widget A                   |
|  * Order 2  |  * Widget A  -->  |  Quantity: 5                      |
|  o Order 3  |  o Widget B       |  Price: $10.00                    |
|             |  o Widget C       |  [Edit] [Remove]                  |
|             |                   |                                    |
+-------------+-------------------+-----------------------------------+
| Footer                                                               |
+---------------------------------------------------------------------+
```

## Styles

```css
:host {
  display: block;
  height: 100%;
}

.column-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.column-body {
  flex: 1;
  overflow: auto;
  padding: 1rem;
}
```

## Implementation

The layout transitions through column modes as the user drills deeper. Start with `OneColumn`, switch to `TwoColumnsMidExpanded` when a master item is selected, then `ThreeColumnsEndExpanded` when a detail item is selected.

```html
<ui5-flexible-column-layout layout="ThreeColumnsEndExpanded">
  <!-- Change layout based on selection depth:
       No selection:       "OneColumn"
       Master selected:    "TwoColumnsMidExpanded"
       Detail selected:    "ThreeColumnsEndExpanded"
       Handle "layout-change" event for responsive adjustments -->

  <!-- Start Column: Master List -->
  <div slot="startColumn" class="column-content">
    <ui5-bar design="Header">
      <furo-ui5-title slot="startContent" level="H5">Orders</furo-ui5-title>
    </ui5-bar>
    <furo-ui5-list class="column-body"> <!-- Handle "item-click" event to select master item -->
      <ui5-li id="order-1" text="Order #1001" description="3 items"></ui5-li>
      <ui5-li id="order-2" text="Order #1002" description="5 items"></ui5-li>
      <ui5-li id="order-3" text="Order #1003" description="2 items"></ui5-li>
    </furo-ui5-list>
  </div>

  <!-- Mid Column: Detail List - show when master item is selected -->
  <div slot="midColumn" class="column-content">
    <ui5-bar design="Header">
      <furo-ui5-title slot="startContent" level="H5">Line Items</furo-ui5-title>
      <furo-ui5-button slot="endContent" icon="decline" design="Transparent">
      </furo-ui5-button> <!-- Handle click to close mid column (set layout="OneColumn") -->
    </ui5-bar>
    <furo-ui5-list class="column-body"> <!-- Handle "item-click" event to select detail item -->
      <ui5-li id="item-a" text="Widget A" description="Qty: 5"></ui5-li>
      <ui5-li id="item-b" text="Widget B" description="Qty: 3"></ui5-li>
      <ui5-li id="item-c" text="Widget C" description="Qty: 10"></ui5-li>
    </furo-ui5-list>
  </div>

  <!-- End Column: Sub-Detail View - show when detail item is selected -->
  <div slot="endColumn" class="column-content">
    <ui5-bar design="Header">
      <furo-ui5-title slot="startContent" level="H5">Item Details</furo-ui5-title>
      <furo-ui5-button slot="endContent" icon="decline" design="Transparent">
      </furo-ui5-button> <!-- Handle click to close end column (set layout="TwoColumnsMidExpanded") -->
    </ui5-bar>
    <div class="column-body">
      <furo-ui5-form-layout form-title="Widget A">
        <furo-ui5-form-group label="Details">
          <furo-ui5-form-row>
            <furo-ui5-label show-colon>SKU</furo-ui5-label><furo-ui5-text>WDG-001</furo-ui5-text>
          </furo-ui5-form-row>
          <furo-ui5-form-row>
            <furo-ui5-label show-colon>Quantity</furo-ui5-label><furo-ui5-text>5</furo-ui5-text>
          </furo-ui5-form-row>
          <furo-ui5-form-row>
            <furo-ui5-label show-colon>Unit Price</furo-ui5-label><furo-ui5-text>$10.00</furo-ui5-text>
          </furo-ui5-form-row>
        </furo-ui5-form-group>
      </furo-ui5-form-layout>
    </div>
    <ui5-bar design="Footer">
      <furo-ui5-button slot="endContent" design="Transparent">Remove</furo-ui5-button>
      <furo-ui5-button slot="endContent" design="Emphasized">Edit</furo-ui5-button>
    </ui5-bar>
  </div>

</ui5-flexible-column-layout>
```

## Layout Transitions

| Action | Layout Mode |
|--------|-------------|
| Initial state | `OneColumn` |
| Select master item | `TwoColumnsMidExpanded` |
| Select detail item | `ThreeColumnsEndExpanded` |
| Close end column | `TwoColumnsMidExpanded` |
| Close mid column | `OneColumn` |

## Responsive Behavior

The `ui5-flexible-column-layout` automatically adapts to screen size:
- **Desktop (>1280px)**: All three columns visible
- **Tablet (960-1280px)**: Two columns, third overlays
- **Mobile (<960px)**: Single column with navigation

## Related Components
- `ui5-flexible-column-layout` - import `@ui5/webcomponents-fiori/dist/FlexibleColumnLayout.js`

## Framework-Specific Syntax
For event handling, boolean attributes, and property binding syntax in your framework:
- [Lit](../frameworks/lit.md)
- [Angular](../frameworks/angular.md)
- [React](../frameworks/react.md)

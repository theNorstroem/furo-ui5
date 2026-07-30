---
title: Split View Resizable Layout
tags: [split-view, resizable, panels, draggable, divider, two-panel]
use-when: user asks for resizable panels, split view, draggable divider, or adjustable two-panel layout
---

# Split View Resizable Layout

A two-panel layout with a draggable divider allowing users to resize the panels.

## Use Cases
- Tree view + content
- Code editor + preview
- File explorer + file content
- Comparison views

## Required Components
| Tag | ES Module |
|-----|-----------|
| `furo-resizer` | `@furo/layout/furo-resizer` |
| `furo-horizontal-flex` | `@furo/layout/furo-horizontal-flex` |
| `furo-vertical-flex` | `@furo/layout/furo-vertical-flex` |
| `furo-ui5-title` | `@furo/ui5/title` |
| `ui5-bar` | `@ui5/webcomponents/dist/Bar.js` |
| `furo-ui5-button` | `@furo/ui5/button` |
| `furo-ui5-tree` | `@furo/ui5/tree` |
| `furo-ui5-tree-item` | `@furo/ui5/tree` |

> How you load these modules depends on your framework. See [Framework References](#framework-specific-syntax) below.

## Preview
```
+---------------------------------------------------------------------+
| Header                                                               |
+----------------------+-+--------------------------------------------+
|                      |#|                                             |
|  Left Panel          |#|  Right Panel                                |
|                      |#|                                             |
|  - Tree              |#|  Content details                            |
|    - Item 1          |#|                                             |
|    - Item 2     <----##---->  [Drag to resize]                       |
|                      |#|                                             |
|                      |#|                                             |
|                      |#|                                             |
+----------------------+-+--------------------------------------------+
| Footer                                                               |
+---------------------------------------------------------------------+
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

.panel {
  height: 100%;
}

.panel-header {
  padding: 1rem;
  border-bottom: 1px solid var(--sapGroup_ContentBorderColor);
  background: var(--sapGroup_TitleBackground);
}

.panel-content {
  padding: 1rem;
  overflow: auto;
}

furo-resizer {
  border-right: 1px solid var(--sapGroup_ContentBorderColor);
}

.right-panel {
  flex: 1;
  min-width: 0;
}
```

## Implementation

### Basic Split View
```html
<furo-horizontal-flex style="height: 100%">
  <!-- Left Panel (Resizable) -->
  <furo-resizer
    righthandle
    remember-id="split-left-panel"
    minwidth="200"
    maxwidth="600"
    style="width: 300px;">
    <furo-vertical-flex class="panel">
      <div class="panel-header">
        <furo-ui5-title level="H6" size="H6">Navigation</furo-ui5-title>
      </div>
      <div class="panel-content" flex>
        <furo-ui5-tree> <!-- Handle "item-click" event to update right panel -->
          <furo-ui5-tree-item id="folder-1" text="Folder 1" expanded>
            <furo-ui5-tree-item id="file-1" text="File 1.txt"></furo-ui5-tree-item>
            <furo-ui5-tree-item id="file-2" text="File 2.txt"></furo-ui5-tree-item>
          </furo-ui5-tree-item>
          <furo-ui5-tree-item id="folder-2" text="Folder 2">
            <furo-ui5-tree-item id="file-3" text="File 3.txt"></furo-ui5-tree-item>
          </furo-ui5-tree-item>
        </furo-ui5-tree>
      </div>
    </furo-vertical-flex>
  </furo-resizer>

  <!-- Right Panel (Flexible) -->
  <furo-vertical-flex class="right-panel">
    <div class="panel-header">
      <furo-ui5-title level="H6" size="H6">
        Content <!-- Update title based on selected item -->
      </furo-ui5-title>
    </div>
    <div class="panel-content" flex>
      <p>Select an item from the left panel</p>
      <!-- Show content for selected item -->
    </div>
  </furo-vertical-flex>
</furo-horizontal-flex>
```

### Three-Panel Split (Left | Center | Right)
```html
<furo-horizontal-flex style="height: 100%">
  <!-- Left Panel -->
  <furo-resizer
    righthandle
    remember-id="split-left"
    minwidth="150"
    maxwidth="400"
    style="width: 250px;">
    <div class="panel">Left Panel</div>
  </furo-resizer>

  <!-- Center Panel (flexible) -->
  <furo-vertical-flex flex style="min-width: 200px;">
    <div class="panel">Center Panel</div>
  </furo-vertical-flex>

  <!-- Right Panel -->
  <furo-resizer
    lefthandle
    remember-id="split-right"
    minwidth="150"
    maxwidth="400"
    style="width: 250px;">
    <div class="panel">Right Panel</div>
  </furo-resizer>
</furo-horizontal-flex>
```

### Vertical Split (Top/Bottom)
```html
<furo-vertical-flex style="height: 100%">
  <!-- Top Panel -->
  <furo-resizer
    bottomhandle
    remember-id="split-top"
    minheight="100"
    maxheight="400"
    style="height: 200px;">
    <div class="panel">Top Panel (e.g., Editor)</div>
  </furo-resizer>

  <!-- Bottom Panel (flexible) -->
  <div flex class="panel">
    Bottom Panel (e.g., Terminal/Output)
  </div>
</furo-vertical-flex>
```

### Collapsible Panel

Use the resizer's `toggle()` method to show/hide the panel programmatically. Access the resizer element and call `toggle()`, `show()`, or `hide()`.

```html
<furo-horizontal-flex style="height: 100%">
  <furo-resizer
    id="leftResizer"
    righthandle
    remember-id="collapsible-panel"
    minwidth="200"
    maxwidth="500"
    style="width: 300px;">
    <furo-vertical-flex class="panel">
      <div class="panel-header">
        <furo-ui5-title level="H6">Panel</furo-ui5-title>
      </div>
      <div class="panel-content" flex>
        Panel content...
      </div>
    </furo-vertical-flex>
  </furo-resizer>

  <furo-vertical-flex flex>
    <ui5-bar design="Header">
      <furo-ui5-button slot="startContent" icon="menu" design="Transparent">
      </furo-ui5-button> <!-- Handle click to call resizer.toggle() -->
      <furo-ui5-title slot="startContent">Main Content</furo-ui5-title>
    </ui5-bar>
    <div flex class="panel-content">
      Main content area...
    </div>
  </furo-vertical-flex>
</furo-horizontal-flex>
```

## Resizer Attributes

| Attribute | Type | Description |
|-----------|------|-------------|
| `righthandle` | boolean | Adds resize handle on right side |
| `lefthandle` | boolean | Adds resize handle on left side |
| `bottomhandle` | boolean | Adds resize handle on bottom side |
| `remember-id` | string | ID for persisting size in localStorage |
| `minwidth` | number | Minimum width in pixels |
| `maxwidth` | number | Maximum width in pixels |
| `minheight` | number | Minimum height in pixels |
| `maxheight` | number | Maximum height in pixels |

## Resizer Methods

| Method | Description |
|--------|-------------|
| `toggle()` | Toggle visibility of the panel |
| `show()` | Show the panel |
| `hide()` | Hide the panel |
| `resetSize()` | Reset to initial size |

## Tips

1. **Double-click** on the resize handle to reset to original size
2. Use `remember-id` attribute to persist user's preferred size
3. Set `min-width: 0` on the flexible panel to prevent overflow issues
4. Add `overflow: hidden` or `overflow: auto` to panel content

## Related Components
- `furo-resizer` - import `@furo/layout/furo-resizer`
- `furo-horizontal-flex` - import `@furo/layout/furo-horizontal-flex`
- `furo-vertical-flex` - import `@furo/layout/furo-vertical-flex`

## Framework-Specific Syntax
For event handling, boolean attributes, and property binding syntax in your framework:
- [Lit](../frameworks/lit.md)
- [Angular](../frameworks/angular.md)
- [React](../frameworks/react.md)

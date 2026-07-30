---
title: furo-ui5-bar
tags: [bar, header, footer, subheader, toolbar, layout]
category: PageStructure
use-when: Use as the header or footer of a page, dialog or card.
---

# furo-ui5-bar

> Header or footer bar with start, middle and end areas.

**Class:** `FuroUi5Bar`
**Import:** `import "@furo/ui5/bar"`
**Extends:** `Bar`
**Category:** PageStructure

**Related:** [`furo-ui5-page`](furo-ui5-page.md), [`furo-ui5-toolbar`](furo-ui5-toolbar.md), [`furo-ui5-shellbar`](furo-ui5-shellbar.md)

## Overview

A horizontal container with `startContent`, default (middle) and `endContent` slots, designed as a page or dialog header/footer.

```html
<furo-ui5-bar design="Header">
  <furo-ui5-button slot="startContent" icon="nav-back" design="Transparent"></furo-ui5-button>
  <furo-ui5-title level="H5">Order 4711</furo-ui5-title>
  <furo-ui5-button slot="endContent" design="Emphasized">Save</furo-ui5-button>
</furo-ui5-bar>
```

This is a pass-through wrapper around `furo-ui5-bar`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview
The Bar is a container which is primarily used to hold titles, buttons and input elements
and its design and functionality is the basis for page headers and footers.
The component consists of three areas to hold its content - startContent slot, default slot and endContent slot.
It has the capability to center content, such as a title, while having other components on the left and right side.

### Usage
With the use of the design property, you can set the style of the Bar to appear designed like a Header, Subheader, Footer and FloatingFooter.

**Note:** Do not place a Bar inside another Bar or inside any bar-like component. Doing so may cause unpredictable behavior.

### Responsive Behavior
The default slot will be centered in the available space between the startContent and the endContent areas,
therefore it might not always be centered in the entire bar.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the bar. |
| `accessible-role` | `"None" \| "Toolbar"` | "Toolbar" | Specifies the ARIA role applied to the component for accessibility purposes. |
| `design` | `"Header" \| "Subheader" \| "Footer" \| "FloatingFooter"` | "Header" | Defines the component's design. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the bar. |
| `accessibleRole` | `BarAccessibleRole` | Specifies the ARIA role applied to the component for accessibility purposes. |
| `design` | `BarDesign` | Defines the component's design. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the content in the middle of the bar.

### `endContent`

Defines the content at the end of the bar.

### `startContent`

Defines the content at the start of the bar.

## CSS Parts

- `bar`: Used to style the wrapper of the content of the component
- `endContent`: Used to style the wrapper of the end content of the component
- `midContent`: Used to style the wrapper of the middle content of the component
- `startContent`: Used to style the wrapper of the start content of the component

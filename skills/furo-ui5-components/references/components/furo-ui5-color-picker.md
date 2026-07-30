---
title: furo-ui5-color-picker
tags: [color, picker, hex, rgb, swatch, value]
category: Form
use-when: Use to let users pick a color value stored as a string.
---

# furo-ui5-color-picker

> Color selection control bound to a string field.

**Class:** `FuroUi5ColorPicker`
**Import:** `import "@furo/ui5/color-picker"`
**Extends:** `ColorPicker`
**Category:** Form

**Related:** [`furo-ui5-text-input`](furo-ui5-text-input.md)

## Overview

The 'furo-ui5-color-picker' component lets the user select a color, with data binding.

It supports all features from the [SAP ui5 ColorPicker element](https://ui5.github.io/webcomponents/components/ColorPicker/).

The selected color is a plain `string` (HEX, RGB, RGBA, HSV or a CSS color name). You can bind any
`string` type: `primitives.STRING`, the `furo.fat.String` type or the `google.protobuf.StringValue` type.

```html
<furo-ui5-color-picker .model="${fieldNode}"></furo-ui5-color-picker>
```

### Overview
The `furo-ui5-color-picker` allows users to choose any color and provides different input options for selecting colors.

### Usage

#### When to use
Use the color picker if:

-  users need to select any color freely.

#### When not to use

-  Users need to select one color from a predefined set of colors. Use the ColorPalette component instead.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `simplified` | `boolean` | false | When set to `true`, the alpha slider and inputs for RGB values will not be displayed. |
| `value` | `string` | "rgba(255,255,255,1)" | Defines the currently selected color of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the component. |
| `model` | `STRING \| FuroFatString \| StringValue` | Use this to bind a model field by attribute. |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `simplified` | `boolean` | When set to `true`, the alpha slider and inputs for RGB values will not be displayed. |
| `value` | `string` | Defines the currently selected color of the component. |

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `CustomEvent` | Fired when the the selected color is changed |

## Methods

### `bindData(fieldNode: STRING | FuroFatString | StringValue | undefined): void`

Connects your data model to this component.

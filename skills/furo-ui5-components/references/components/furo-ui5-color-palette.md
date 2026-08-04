---
title: furo-ui5-color-palette
tags: [color, palette, swatch, picker, value]
category: Form
use-when: Use to let users pick a color from a predefined set stored as a string.
---

# furo-ui5-color-palette

> Predefined color swatches with selected-color data binding.

**Class:** `FuroUi5ColorPalette`
**Import:** `import "@furo/ui5/color-palette"`
**Import type:** `import type { FuroUi5ColorPalette } from "@furo/ui5/color-palette"`
**Extends:** `ColorPalette`
**Category:** Form

**Related:** [`furo-ui5-color-palette-popover`](furo-ui5-color-palette-popover.md), [`furo-ui5-color-palette-item`](furo-ui5-color-palette-item.md), [`furo-ui5-color-picker`](furo-ui5-color-picker.md)

## Overview

The furo-ui5-color-palette displays a predefined set of color swatches and binds the selected color.

It supports all features from the [SAP ui5 ColorPalette element](https://ui5.github.io/webcomponents/components/ColorPalette/).

### Selected color (`model`)
Bind any `string` type (a CSS color). The component writes the picked color to the model on the
`item-click` event and marks the matching swatch as selected when the model changes.

### Swatches (`colorsModel`)
Bind an `ARRAY` of `string` colors to generate the `furo-ui5-color-palette-item` swatches. You can
also place `furo-ui5-color-palette-item` children manually.

```html
<furo-ui5-color-palette .model="${selected}" .colorsModel="${colorList}"></furo-ui5-color-palette>
```

### Overview
The `furo-ui5-color-palette` provides the users with a range of predefined colors. The colors are fixed and do not change with the theme.

### Usage

The `furo-ui5-color-palette` is meant for users that need to select a color from a predefined set.
To define the colors, use the `furo-ui5-color-palette-item` component inside the default slot of the `furo-ui5-color-palette`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the component. |
| `colorsModel` | `ARRAY<STRING, string> \| undefined` | Use this to bind a list of color strings that generate the swatches. |
| `model` | `STRING \| FuroFatString \| StringValue` | Use this to bind the selected-color model field by attribute. |
| `value` | `string` | The selected color as a string. Bridged between the model and the swatch selection. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the `ui5-color-palette-item` elements.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `item-click` | `CustomEvent<ColorPaletteItemClickEventDetail>` | Fired when the user selects a color. |

## Methods

### `bindColors(fieldNode: ARRAY<STRING, string> | undefined): void`

Connects a list of color strings; each entry renders one `furo-ui5-color-palette-item` swatch.

### `bindData(fieldNode: STRING | FuroFatString | StringValue | undefined): void`

Connects the selected-color data model to this component.

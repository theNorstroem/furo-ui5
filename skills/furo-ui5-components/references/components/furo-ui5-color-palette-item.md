---
title: furo-ui5-color-palette-item
tags: [color, palette, item, swatch]
category: Form
use-when: Use as a child of furo-ui5-color-palette / furo-ui5-color-palette-popover.
---

# furo-ui5-color-palette-item

> A single color swatch bound to a string (CSS color) field.

**Class:** `FuroUi5ColorPaletteItem`
**Import:** `import "@furo/ui5/color-palette-item"`
**Extends:** `ColorPaletteItem`
**Category:** Form

**Related:** [`furo-ui5-color-palette`](furo-ui5-color-palette.md), [`furo-ui5-color-palette-popover`](furo-ui5-color-palette-popover.md)

## Overview

The `furo-ui5-color-palette-item` is a single color swatch, meant to be used inside a
`furo-ui5-color-palette` or `furo-ui5-color-palette-popover`.

It extends the [SAP ui5 ColorPaletteItem element](https://ui5.github.io/webcomponents/components/ColorPalette/).

You can bind any `string` type (a CSS color): `primitives.STRING`, the `furo.fat.String` type or the
`google.protobuf.StringValue` type. Display-only: the component reads the color from the model into
the inherited `value` property and never writes back.

### Overview

The `furo-ui5-color-palette-item` component represents a color in the the `furo-ui5-color-palette`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `selected` | `boolean` | false | Defines if the component is selected. |
| `tooltip` | `string \| undefined` | undefined | Defines the tooltip of the component. When not set, the color value is used as the tooltip. |
| `value` | `string` | "" | Defines the colour of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `model` | `STRING \| FuroFatString \| StringValue` | Use this to bind a model field by attribute. |
| `selected` | `boolean` | Defines if the component is selected. |
| `tooltip` | `string \| undefined` | Defines the tooltip of the component. When not set, the color value is used as the tooltip. |
| `value` | `string` | Defines the colour of the component. |

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<ColorPaletteItemNativeClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |

## Methods

### `bindData(fieldNode: STRING | FuroFatString | StringValue | undefined): void`

Connects your data model to this component. Display-only: the component reads from the model but
never writes back.

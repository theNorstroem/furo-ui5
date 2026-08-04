---
title: furo-ui5-color-palette-popover
tags: [color, palette, popover, swatch, picker, value]
category: Form
use-when: Use to let users pick a color from a predefined set shown in a popover.
---

# furo-ui5-color-palette-popover

> Color swatches in a popover with selected-color data binding.

**Class:** `FuroUi5ColorPalettePopover`
**Import:** `import "@furo/ui5/color-palette-popover"`
**Import type:** `import type { FuroUi5ColorPalettePopover } from "@furo/ui5/color-palette-popover"`
**Extends:** `ColorPalettePopover`
**Category:** Form

**Related:** [`furo-ui5-color-palette`](furo-ui5-color-palette.md), [`furo-ui5-color-palette-item`](furo-ui5-color-palette-item.md), [`furo-ui5-color-picker`](furo-ui5-color-picker.md)

## Overview

The furo-ui5-color-palette-popover shows a predefined set of color swatches in a popover and binds
the selected color.

It supports all features from the [SAP ui5 ColorPalettePopover element](https://ui5.github.io/webcomponents/components/ColorPalettePopover/),
including `open` / `opener` / `placement` and the "more colors" / "default color" buttons.

### Selected color (`model`)
Bind any `string` type (a CSS color). The component writes the picked color to the model on the
`item-click` event and marks the matching swatch as selected when the model changes.

### Swatches (`colorsModel`)
Bind an `ARRAY` of `string` colors to generate the `furo-ui5-color-palette-item` swatches. You can
also place `furo-ui5-color-palette-item` children manually.

### Overview
Represents a predefined range of colors for easier selection.

Overview
The ColorPalettePopover provides the users with a slot to predefine colors.

You can customize them with the use of the colors property. You can specify a defaultColor and display a "Default color" button for the user to choose directly.
You can display a "More colors..." button that opens an additional color picker for the user to choose specific colors that are not present in the predefined range.

### Usage

The palette is intended for users, who don't want to check and remember the different values of the colors and spend large amount of time to configure the right color through the color picker.

For the `furo-ui5-color-palette-popover`

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component. |
| `default-color` | `string \| undefined` | undefined | Defines the default color of the component. |
| `open` | `boolean` | false | Defines the open \| closed state of the popover. |
| `opener` | `string \| HTMLElement \| null \| undefined` | undefined | Defines the ID or DOM Reference of the element that the popover is shown at. |
| `placement` | `"Top" \| "Bottom" \| "Start" \| "End"` | "Bottom" | Determines on which side the component is placed at. |
| `show-default-color` | `boolean` | false | Defines whether the user can choose the default color from a button. |
| `show-more-colors` | `boolean` | false | Defines whether the user can choose a custom color from a component. |
| `show-recent-colors` | `boolean` | false | Defines whether the user can see the last used colors in the bottom of the component |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the component. |
| `colorsModel` | `ARRAY<STRING, string> \| undefined` | Use this to bind a list of color strings that generate the swatches. |
| `defaultColor` | `string \| undefined` | Defines the default color of the component. |
| `model` | `STRING \| FuroFatString \| StringValue` | Use this to bind the selected-color model field by attribute. |
| `open` | `boolean` | Defines the open \| closed state of the popover. |
| `opener` | `HTMLElement \| string \| null \| undefined` | Defines the ID or DOM Reference of the element that the popover is shown at. |
| `placement` | `PopoverPlacement` | Determines on which side the component is placed at. |
| `showDefaultColor` | `boolean` | Defines whether the user can choose the default color from a button. |
| `showMoreColors` | `boolean` | Defines whether the user can choose a custom color from a component. |
| `showRecentColors` | `boolean` | Defines whether the user can see the last used colors in the bottom of the component |
| `value` | `string` | The selected color as a string. Bridged between the model and the swatch selection. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the content of the component.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `close` | `CustomEvent` | Fired when the `furo-ui5-color-palette-popover` is closed due to user interaction. |
| `item-click` | `CustomEvent<ColorPalettePopoverItemClickEventDetail>` | Fired when the user selects a color. |

## Methods

### `bindColors(fieldNode: ARRAY<STRING, string> | undefined): void`

Connects a list of color strings; each entry renders one `furo-ui5-color-palette-item` swatch.

### `bindData(fieldNode: STRING | FuroFatString | StringValue | undefined): void`

Connects the selected-color data model to this component.

### `close(): void`

Closes the popup.

### `show(): void`

Shows the popover at the opener position defined with attribute opener.

### `showAt(opener: HTMLElement | string): void`

Shows the popover at the opener position.
Alternatively you can work with the attributes `opener` and `open` to achieve the same.

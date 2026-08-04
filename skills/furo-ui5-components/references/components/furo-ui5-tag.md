---
title: furo-ui5-tag
tags: [tag, badge, status, label, display, string]
category: Display
use-when: Use to render a bound string value as a styled status tag.
---

# furo-ui5-tag

> Display-only tag / status label bound to a string field.

**Class:** `FuroUi5Tag`
**Import:** `import "@furo/ui5/tag"`
**Import type:** `import type { FuroUi5Tag } from "@furo/ui5/tag"`
**Extends:** `Tag`
**Category:** Display

**Related:** [`furo-ui5-relative-time-badge`](furo-ui5-relative-time-badge.md)

## Overview

The 'furo-ui5-tag' is a display-only component which renders a bound `string` value as a tag /
status label, with data binding.

It extends the [SAP ui5 Tag element](https://ui5.github.io/webcomponents/components/Tag/).
Use the inherited `design` / `colorScheme` / `icon` properties for styling. The date-specific sibling
is `furo-ui5-relative-time-badge`.

You can bind any `string` type: `primitives.STRING`, the `furo.fat.String` type or the
`google.protobuf.StringValue` type. Display-only: the component reads from the model but never writes back.

```html
<furo-ui5-tag .model="${fieldNode}"></furo-ui5-tag>
```

### Overview

The `furo-ui5-tag` is a component which serves
the purpose to attract the user attention to some piece
of information (state, quantity, condition, etc.).
It can contain icon and text information, and its design can be chosen from specific design types.

### Usage Guidelines

- If the text is longer than the width of the component, it can wrap, or it can show ellipsis, depending on the `wrappingType` property.
- Colors can be semantic or not semantic.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `color-scheme` | `string` | "1" | Defines the color scheme of the component. There are 10 predefined schemes. To use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default. |
| `design` | `"Positive" \| "Critical" \| "Negative" \| "Information" \| "Neutral" \| "Set1" \| "Set2"` | "Neutral" | Defines the design type of the component. |
| `hide-state-icon` | `boolean` | false | Defines if the default state icon is shown. |
| `interactive` | `boolean` | false | Defines if the component is interactive (focusable and pressable). |
| `size` | `"S" \| "L"` | "S" | Defines predefined size of the component. |
| `wrapping-type` | `"None" \| "Normal"` | "Normal" | Defines how the text of a component will be displayed when there is not enough space. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `colorScheme` | `string` | Defines the color scheme of the component. There are 10 predefined schemes. To use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default. |
| `design` | `TagDesign` | Defines the design type of the component. |
| `hideStateIcon` | `boolean` | Defines if the default state icon is shown. |
| `interactive` | `boolean` | Defines if the component is interactive (focusable and pressable). |
| `model` | `STRING \| FuroFatString \| StringValue` | Use this to bind a model field by attribute. |
| `size` | `TagSize` | Defines predefined size of the component. |
| `value` | `string` | The bound value as a string. Populated by the reader from the bound model and mirrored to the slotted text content. |
| `wrappingType` | `WrappingType` | Defines how the text of a component will be displayed when there is not enough space. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

### `icon`

Defines the icon to be displayed in the component.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent` | Fired when the user clicks on an interactive tag. |

## Methods

### `bindData(fieldNode: STRING | FuroFatString | StringValue | undefined): void`

Connects your data model to this component. Display-only: the component reads from the model but
never writes back.

## CSS Parts

- `root`: Used to style the root element.

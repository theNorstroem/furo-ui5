---
title: furo-ui5-text
tags: [text, display, label, string, value]
category: Display
use-when: Use to render a bound string value as read-only text.
---

# furo-ui5-text

> Display-only text bound to a string field.

**Class:** `FuroUi5Text`
**Import:** `import "@furo/ui5/text"`
**Import type:** `import type { FuroUi5Text } from "@furo/ui5/text"`
**Extends:** `Text`
**Category:** Display

**Related:** [`furo-ui5-label`](furo-ui5-label.md), [`furo-ui5-expandable-text`](furo-ui5-expandable-text.md)

## Overview

The 'furo-ui5-text' is a display-only component which renders a bound `string` value as plain text,
with data binding.

It extends the [SAP ui5 Text element](https://ui5.github.io/webcomponents/components/Text/).

You can bind any `string` type: `primitives.STRING`, the `furo.fat.String` type or the
`google.protobuf.StringValue` type. Display-only: the component reads from the model but never writes back.

```html
<furo-ui5-text .model="${fieldNode}"></furo-ui5-text>
```

### Overview

The `furo-ui5-text` component displays text that can be used in any content area of an application.

### Usage

- Use the `furo-ui5-text` if you want to display text inside a form, table, or any other content area.
- Do not use the `furo-ui5-text` if you need to reference input type of components (use furo-ui5-label).

### Responsive behavior

The `furo-ui5-text` component is fully adaptive to all screen sizes.
By default, the text will wrap when the space is not enough.
In addition, the component supports truncation via the `max-lines` property,
by defining the number of lines the text should wrap before start truncating.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `empty-indicator-mode` | `"On" \| "Off"` | "Off" | Specifies if an empty indicator should be displayed when there is no text. |
| `max-lines` | `number` | Infinity | Defines the number of lines the text should wrap before it truncates. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `emptyIndicatorMode` | `TextEmptyIndicatorMode` | Specifies if an empty indicator should be displayed when there is no text. |
| `maxLines` | `number` | Defines the number of lines the text should wrap before it truncates. |
| `model` | `STRING \| FuroFatString \| StringValue` | Use this to bind a model field by attribute. |
| `value` | `string` | The bound value as a string. Populated by the reader from the bound model and mirrored to the slotted text content. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the text of the component.

## Methods

### `bindData(fieldNode: STRING | FuroFatString | StringValue | undefined): void`

Connects your data model to this component. Display-only: the component reads from the model but
never writes back.

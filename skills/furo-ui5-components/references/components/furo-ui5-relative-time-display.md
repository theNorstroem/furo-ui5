---
title: furo-ui5-relative-time-display
tags: [relative-time, time, ago, timestamp, display, text, relative]
category: Display
use-when: Use to show a timestamp as human-friendly relative time text.
---

# furo-ui5-relative-time-display

> Display-only text showing a relative time (e.g. "in 2 hours").

**Class:** `FuroUi5RelativeTimeDisplay`
**Import:** `import "@furo/ui5/relative-time-display"`
**Import type:** `import type { FuroUi5RelativeTimeDisplay } from "@furo/ui5/relative-time-display"`
**Extends:** `Text`
**Category:** Display

**Related:** [`furo-ui5-relative-time-badge`](furo-ui5-relative-time-badge.md)

## Overview

The 'furo-ui5-relative-time-display' is a display-only component which shows relative time
information as plain text (e.g. "in 2 days", "5 days ago"), with data binding.

It extends the [SAP ui5 Text element](https://ui5.github.io/webcomponents/components/Text/)
and is the chrome-less sibling of `furo-ui5-relative-time-badge` (no color scheme).

You can bind a `string` (ISO 8601), a `google.protobuf.Timestamp`, a unix-seconds `int32` / `int64`,
or a `google.type.Date`. `int32` / `int64` are interpreted as seconds since epoch.

Configuration is set via properties: `optionStyle` (`long` | `short` | `narrow`) and `optionNumeric`
(`always` | `auto`).

```html
<furo-ui5-relative-time-display .model="${fieldNode}"></furo-ui5-relative-time-display>
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
| `model` | `STRING \| Timestamp \| INT32 \| INT64 \| XDate` | Use this to bind a model field by attribute. |
| `optionNumeric` | `"always" \| "auto"` | The output format of the relative time: `always` or `auto`. Default: `auto`. |
| `optionStyle` | `"long" \| "short" \| "narrow"` | The output style of the relative time: `long`, `short` or `narrow`. Default: `long`. |
| `value` | `string` | The bound value, as a canonical ISO 8601 string. Populated by the reader from the bound model. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the text of the component.

## Methods

### `bindData(fieldNode: STRING | Timestamp | INT32 | INT64 | XDate | undefined): void`

Connects your data model to this component. Display-only: the component reads from the model but
never writes back.

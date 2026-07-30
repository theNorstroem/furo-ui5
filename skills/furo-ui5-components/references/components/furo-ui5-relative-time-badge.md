---
title: furo-ui5-relative-time-badge
tags: [relative-time, time, badge, ago, timestamp, display, relative]
category: Display
use-when: Use to show a timestamp as a human-friendly relative time badge.
---

# furo-ui5-relative-time-badge

> Display-only badge showing a relative time (e.g. "3 days ago").

**Class:** `FuroUi5RelativeTimeBadge`
**Import:** `import "@furo/ui5/relative-time-badge"`
**Extends:** `Tag`
**Category:** Display

**Related:** [`furo-ui5-relative-time-display`](furo-ui5-relative-time-display.md)

## Overview

The 'furo-ui5-relative-time-badge' is a small, non-interactive, display-only component which shows
relative time information (e.g. "in 2 days", "5 days ago"), with data binding.

It extends the [SAP ui5 Tag element](https://ui5.github.io/webcomponents/components/Tag/)
and drives its text and `colorScheme` from the bound value: a future time uses the POSITIVE scheme,
a past time the NEGATIVE one.

You can bind a `string` (ISO 8601), a `google.protobuf.Timestamp`, a unix-seconds `int32` / `int64`,
or a `google.type.Date`. `int32` / `int64` are interpreted as seconds since epoch.

Configuration is set via properties: `colorSchemePositive`, `colorSchemeNegative`, `optionStyle`
(`long` | `short` | `narrow`) and `optionNumeric` (`always` | `auto`).

```html
<furo-ui5-relative-time-badge .model="${fieldNode}"></furo-ui5-relative-time-badge>
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
| `colorSchemeNegative` | `string` | The color scheme (`"1"`–`"10"`) applied when the bound time is in the past (NEGATIVE). |
| `colorSchemePositive` | `string` | The color scheme (`"1"`–`"10"`) applied when the bound time is in the future (POSITIVE). |
| `design` | `TagDesign` | Defines the design type of the component. |
| `hideStateIcon` | `boolean` | Defines if the default state icon is shown. |
| `interactive` | `boolean` | Defines if the component is interactive (focusable and pressable). |
| `model` | `STRING \| Timestamp \| INT32 \| INT64 \| XDate` | Use this to bind a model field by attribute. |
| `optionNumeric` | `"always" \| "auto"` | The output format of the relative time: `always` or `auto`. Default: `auto`. |
| `optionStyle` | `"long" \| "short" \| "narrow"` | The output style of the relative time: `long`, `short` or `narrow`. Default: `long`. |
| `size` | `TagSize` | Defines predefined size of the component. |
| `value` | `string` | The bound value, as a canonical ISO 8601 string. Populated by the reader from the bound model. |
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

### `bindData(fieldNode: STRING | Timestamp | INT32 | INT64 | XDate | undefined): void`

Connects your data model to this component. Display-only: the badge reads from the model but
never writes back.

## CSS Parts

- `root`: Used to style the root element.

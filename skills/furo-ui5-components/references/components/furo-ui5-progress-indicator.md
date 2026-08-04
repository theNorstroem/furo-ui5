---
title: furo-ui5-progress-indicator
tags: [progress, bar, percentage, loading, completion, indicator]
category: Feedback
use-when: Use to show determinate progress of an operation.
---

# furo-ui5-progress-indicator

> Linear progress bar showing completion percentage.

**Class:** `FuroUi5ProgressIndicator`
**Import:** `import "@furo/ui5/progress-indicator"`
**Import type:** `import type { FuroUi5ProgressIndicator } from "@furo/ui5/progress-indicator"`
**Extends:** `ProgressIndicator`
**Category:** Feedback

**Related:** [`furo-ui5-busy-indicator`](furo-ui5-busy-indicator.md)

## Overview

A furo-ui5-progress-indicator shows the progress of a process in a graphical way. To indicate the progress, the inside of the component is filled with a color..
https://ui5.github.io/webcomponents/components/ProgressIndicator/

Supported type: You can bind any `number` type, any `furo.fat.xxx` number type, `furo.BigDecimal` or the `google.wrapper.xxx` number types

```html
<furo-ui5-progress-indicator fn-bind-data="--dao(FIELDNODE)"></furo-ui5-progress-indicator>
```

### Overview
Shows the progress of a process in a graphical way. To indicate the progress,
the inside of the component is filled with a color.

### Responsive Behavior
You can change the size of the Progress Indicator by changing its `width` or `height` CSS properties.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `display-value` | `string \| undefined` | undefined | Specifies the text value to be displayed in the bar. |
| `hide-value` | `boolean` | false | Defines whether the component value is shown. |
| `value` | `number` | 0 | Specifies the numerical value in percent for the length of the component. |
| `value-state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the value state of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `displayValue` | `string \| undefined` | Specifies the text value to be displayed in the bar. |
| `hideValue` | `boolean` | Defines whether the component value is shown. |
| `model` | `\| INT32     \| INT64     \| UINT32     \| UINT64     \| DOUBLE     \| FLOAT     \| FuroFatFloat     \| FuroFatInt32     \| FuroFatInt64     \| FuroFatUint32     \| FuroFatUint64     \| FloatValue     \| Int32Value     \| Int64Value     \| UInt32Value     \| UInt64Value` | Use this to bind a model field by attribute. |
| `value` | `number` | Specifies the numerical value in percent for the length of the component. |
| `valueState` | `ValueState` | Defines the value state of the component. |

## Methods

### `bindData(fieldNode: | INT32
      | INT64
      | UINT32
      | UINT64
      | DOUBLE
      | FLOAT
      | FuroFatFloat
      | FuroFatInt32
      | FuroFatInt64
      | FuroFatUint32
      | FuroFatUint64
      | FloatValue
      | Int32Value
      | Int64Value
      | UInt32Value
      | UInt64Value
      | undefined): void`

Connects your data model to this component.

## CSS Parts

- `bar`: Used to style the main bar of the `ui5-progress-indicator`
- `remaining-bar`: Used to style the remaining bar of the `ui5-progress-indicator`

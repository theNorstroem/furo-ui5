---
title: furo-ui5-range-slider
tags: [slider, range, numeric, lower, upper, bound]
category: Form
use-when: Use for selecting a numeric range between two values.
---

# furo-ui5-range-slider

> Horizontal slider for selecting a numeric range (lower/upper bound).

**Class:** `FuroUi5RangeSlider`
**Import:** `import "@furo/ui5/range-slider"`
**Extends:** `RangeSlider`
**Category:** Form

**Related:** [`furo-ui5-slider`](furo-ui5-slider.md), [`furo-ui5-step-input`](furo-ui5-step-input.md)

## Overview

The furo-ui5-range-slider component lets the user select a numeric range (a lower and an upper
bound), with data binding.

It supports all features from the [SAP ui5 RangeSlider element](https://ui5.github.io/webcomponents/components/RangeSlider/).

A range has two ends, so it binds two separate numeric field nodes:
 - `model` (or `bindData`) binds the **start** value (`startValue`).
 - `modelTo` (or `bindDataTo`) binds the **end** value (`endValue`).

You can bind any `number` type, any `furo.fat.xxx` number type or the `google.wrapper.xxx` number
types to either end.

## supported FAT attributes
 - **"min" / "max" / "step" / "labelInterval" / "showTickmarks" / "showTooltip"**

## supported meta and constraints
- **readonly: true** , set the element to disabled
- **minimum / maximum** set the slider min / max

### Overview
Represents a numerical interval and two handles (grips) to select a sub-range within it.
The purpose of the component to enable visual selection of sub-ranges within a given interval.

### Structure
The most important properties of the Range Slider are:

- min - The minimum value of the slider range.
- max - The maximum value of the slider range.
- value - The current value of the slider.
- step - Determines the increments in which the slider will move.
- showTooltip - Determines if a tooltip should be displayed above the handle.
- showTickmarks - Displays a visual divider between the step values.
- labelInterval - Labels some or all of the tickmarks with their values.

#### Notes:

- The right and left handle can be moved individually and their positions could therefore switch.
- The entire range can be moved along the interval.

### Usage
The most common use case is to select and move sub-ranges on a continuous numerical scale.

### Responsive Behavior
You can move the currently selected range by clicking on it and dragging it along the interval.

### Keyboard Handling

- `Left or Down Arrow` - Moves a component's handle or the entire selection one step to the left;
- `Right or Up Arrow` - Moves a component's handle or the entire selection one step to the right;
- `Left or Down Arrow + Ctrl/Cmd` - Moves a component's handle to the left or the entire range with step equal to 1/10th of the entire range;
- `Right or Up Arrow + Ctrl/Cmd` - Moves a component's handle to the right or the entire range with step equal to 1/10th of the entire range;
- `Plus` - Same as `Right or Up Arrow`;
- `Minus` - Same as `Left or Down Arrow`;
- `Home` - Moves the entire selection or the selected handle to the beginning of the component's range;
- `End` - Moves the entire selection or the selected handle to the end of the component's range;
- `Page Up` - Same as `Right or Up Arrow + Ctrl/Cmd`;
- `Page Down` - Same as `Left or Down Arrow + Ctrl/Cmd`;
- `Escape` - Resets the `startValue` and `endValue` properties to the values prior the component focusing;

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `disabled` | `boolean` | false | Defines whether the slider is in disabled state. |
| `editable-tooltip` | `boolean` | false | Indicates whether input fields should be used as tooltips for the handles. |
| `end-value` | `any` | undefined | Defines end point of a selection - position of a second handle on the slider. |
| `label-interval` | `number` | 0 | Displays a label with a value on every N-th step. |
| `max` | `number` | 100 | Defines the maximum value of the slider. |
| `min` | `number` | 0 | Defines the minimum value of the slider. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `show-tickmarks` | `boolean` | false | Enables tickmarks visualization for each step. |
| `show-tooltip` | `boolean` | false | Enables handle tooltip displaying the current value. |
| `start-value` | `any` | undefined | Defines start point of a selection - position of a first handle on the slider. |
| `step` | `number` | 1 | Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10). |
| `tickmarks` | `Tickmark[]` | [] | Defines custom tickmarks with labels on the slider scale. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `disabled` | `boolean` | Defines whether the slider is in disabled state. |
| `editableTooltip` | `boolean` | Indicates whether input fields should be used as tooltips for the handles. |
| `endValue` | `number` | Defines end point of a selection - position of a second handle on the slider. |
| `labelInterval` | `number` | Displays a label with a value on every N-th step. |
| `max` | `number` | Defines the maximum value of the slider. |
| `min` | `number` | Defines the minimum value of the slider. |
| `model` | `\| INT32     \| INT64     \| UINT32     \| UINT64     \| DOUBLE     \| FLOAT     \| FuroFatFloat     \| FuroFatInt32     \| FuroFatInt64     \| FuroFatUint32     \| FuroFatUint64     \| FloatValue     \| Int32Value     \| Int64Value     \| UInt32Value     \| UInt64Value` | Use this to bind the **start** (lower bound) model field by attribute. |
| `modelTo` | `\| INT32     \| INT64     \| UINT32     \| UINT64     \| DOUBLE     \| FLOAT     \| FuroFatFloat     \| FuroFatInt32     \| FuroFatInt64     \| FuroFatUint32     \| FuroFatUint64     \| FloatValue     \| Int32Value     \| Int64Value     \| UInt32Value     \| UInt64Value` | Use this to bind the **end** (upper bound) model field by attribute. |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `showTickmarks` | `boolean` | Enables tickmarks visualization for each step. |
| `showTooltip` | `boolean` | Enables handle tooltip displaying the current value. |
| `startValue` | `number` | Defines start point of a selection - position of a first handle on the slider. |
| `step` | `number` | Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10). |
| `tickmarks` | `Array<Tickmark>` | Defines custom tickmarks with labels on the slider scale. |

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `CustomEvent` | Fired when the value changes and the user has finished interacting with the slider. |
| `input` | `CustomEvent` | Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging. |

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

Connects the **start** (lower bound) data model to this component.

### `bindDataTo(fieldNode: | INT32
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

Connects the **end** (upper bound) data model to this component.

## CSS Parts

- `handle`: Used to style the handles of the `ui5-range-slider`.
- `progress-bar`: Used to style the progress bar, which shows the progress of the `ui5-range-slider`.
- `progress-container`: Used to style the progress container, the horizontal bar that visually represents the range between the minimum and maximum values, of the `ui5-range-slider`.

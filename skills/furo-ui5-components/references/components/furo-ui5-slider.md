---
title: furo-ui5-slider
tags: [slider, range, numeric, input, value, draggable]
category: Form
use-when: Use for selecting a single numeric value from a continuous range.
---

# furo-ui5-slider

> Horizontal slider for selecting numeric values within a range.

**Class:** `FuroUi5Slider`
**Import:** `import "@furo/ui5/slider"`
**Extends:** `Slider`
**Category:** Form

**Related:** [`furo-ui5-range-slider`](furo-ui5-range-slider.md), [`furo-ui5-step-input`](furo-ui5-step-input.md)

## Overview

The furo-ui5-slider component allows the user to enter and edit numbers with data binding.

You can bind any `number` type, any `furo.fat.xxx` number type, `furo.BigDecimal` or the `google.wrapper.xxx` number types.

## supported FAT attributes
 - **"placeholder":"string"** set the placeholder for the element

## supported FAT labels
 - **"readonly":"true"** set the element to readonly
 - **"required":"true"** set the element to required
 - **"disabled":"true"** set the element to disabled
 - **"hidden":"true"** hides the element

## supported meta and constraints
- **readonly: true** , set the element to readonly
- **placeholder:"some string"** set the placeholder for the element

### Overview
The Slider component represents a numerical range and a handle (grip).
The purpose of the component is to enable visual selection of a value in
a continuous numerical range by moving an adjustable handle.

### Structure
The most important properties of the Slider are:

- min - The minimum value of the slider range.
- max - The maximum value of the slider range.
- value - The current value of the slider range.
- step - Determines the increments in which the slider will move.
- showTooltip - Determines if a tooltip should be displayed above the handle.
- showTickmarks - Displays a visual divider between the step values.
- labelInterval - Labels some or all of the tickmarks with their values.

### Usage
The most common use case is to select values on a continuous numerical scale (e.g. temperature, volume, etc. ).

### Responsive Behavior
The `furo-ui5-slider` component adjusts to the size of its parent container by recalculating and
resizing the width of the control. You can move the slider handle in several different ways:

- Drag and drop the handle to the desired value.
- Click/tap on the range bar to move the handle to that location.

### Keyboard Handling

- `Left or Down Arrow` - Moves the handle one step to the left, effectively decreasing the component's value by `step` amount;
- `Right or Up Arrow` - Moves the handle one step to the right, effectively increasing the component's value by `step` amount;
- `Left or Down Arrow + Ctrl/Cmd` - Moves the handle to the left with step equal to 1/10th of the entire range, effectively decreasing the component's value by 1/10th of the range;
- `Right or Up Arrow + Ctrl/Cmd` - Moves the handle to the right with step equal to 1/10th of the entire range, effectively increasing the component's value by 1/10th of the range;
- `Plus` - Same as `Right or Up Arrow`;
- `Minus` - Same as `Left or Down Arrow`;
- `Home` - Moves the handle to the beginning of the range;
- `End` - Moves the handle to the end of the range;
- `Page Up` - Same as `Right or Up + Ctrl/Cmd`;
- `Page Down` - Same as `Left or Down + Ctrl/Cmd`;
- `Escape` - Resets the value property after interaction, to the position prior the component's focusing;

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `disabled` | `boolean` | false | Defines whether the slider is in disabled state. |
| `editable-tooltip` | `boolean` | false | Indicates whether input fields should be used as tooltips for the handles. |
| `label-interval` | `number` | 0 | Displays a label with a value on every N-th step. |
| `max` | `number` | 100 | Defines the maximum value of the slider. |
| `min` | `number` | 0 | Defines the minimum value of the slider. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `show-tickmarks` | `boolean` | false | Enables tickmarks visualization for each step. |
| `show-tooltip` | `boolean` | false | Enables handle tooltip displaying the current value. |
| `step` | `number` | 1 | Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10). |
| `tickmarks` | `Tickmark[]` | [] | Defines custom tickmarks with labels on the slider scale. |
| `value` | `number` | 0 | Current value of the slider |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `disabled` | `boolean` | Defines whether the slider is in disabled state. |
| `editableTooltip` | `boolean` | Indicates whether input fields should be used as tooltips for the handles. |
| `labelInterval` | `number` | Displays a label with a value on every N-th step. |
| `max` | `number` | Defines the maximum value of the slider. |
| `min` | `number` | Defines the minimum value of the slider. |
| `model` | `\| INT32     \| INT64     \| UINT32     \| UINT64     \| DOUBLE     \| FLOAT     \| FuroFatFloat     \| FuroFatInt32     \| FuroFatInt64     \| FuroFatUint32     \| FuroFatUint64     \| FloatValue     \| Int32Value     \| Int64Value     \| UInt32Value     \| UInt64Value` | Use this to bind a model field by attribute. |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `showTickmarks` | `boolean` | Enables tickmarks visualization for each step. |
| `showTooltip` | `boolean` | Enables handle tooltip displaying the current value. |
| `step` | `number` | Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10). |
| `tickmarks` | `Array<Tickmark>` | Defines custom tickmarks with labels on the slider scale. |
| `value` | `number` | Current value of the slider |

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

Connects your data model to this component.

## CSS Parts

- `handle`: Used to style the handle of the `ui5-slider`.
- `progress-bar`: Used to style the progress bar, which shows the progress of the `ui5-slider`.
- `progress-container`: Used to style the progress container, the horizontal bar that visually represents the range between the minimum and maximum values, of the `ui5-slider`.

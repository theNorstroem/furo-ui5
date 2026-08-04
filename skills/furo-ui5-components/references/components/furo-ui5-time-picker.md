---
title: furo-ui5-time-picker
tags: [time, picker, hours, minutes, clock, input]
category: Form
use-when: Use for selecting time values without date.
---

# furo-ui5-time-picker

> Time selection input for picking hours, minutes, and optionally seconds.

**Class:** `FuroUi5TimePicker`
**Import:** `import "@furo/ui5/time-picker"`
**Import type:** `import type { FuroUi5TimePicker } from "@furo/ui5/time-picker"`
**Extends:** `TimePicker`
**Category:** Form

**Related:** [`furo-ui5-date-time-picker`](furo-ui5-date-time-picker.md), [`furo-ui5-date-picker`](furo-ui5-date-picker.md)

## Overview

The 'furo-ui5-time-picker' component lets the user select a time of day, with data binding.

It supports all features from the [SAP ui5 TimePicker element](https://ui5.github.io/webcomponents/components/TimePicker/).

You can bind a `string` (e.g. "11:42:35") or a `google.type.TimeOfDay`. The bound value is always
handled as a 24-hour `HH:mm:ss` string.

## supported meta and constraints
- **readonly: true** — set the element to readonly
- **required: true** — mark the element as required
- **placeholder:"some string"** — set the placeholder for the element

Note: UI5 `TimePicker` has no min/max date range, so `min` / `max` constraints are not applied.

### Overview
The `furo-ui5-time-picker` component provides an input field with assigned clocks which are opened on user action.
The `furo-ui5-time-picker` allows users to select a localized time using touch, mouse, or keyboard input.
It consists of two parts: the time input field and the clocks.

### Usage
The user can enter a time by:

- Using the clocks that are displayed in a popup
- Typing it in directly in the input field

When the user makes an entry and chooses the enter key, the clocks show the corresponding time (hours, minutes and seconds separately).
When the user directly triggers the clocks display, the actual time is displayed.
For the `furo-ui5-time-picker`

### Formatting

If a time is entered by typing it into
the input field, it must fit to the used time format.

Supported format options are pattern-based on Unicode LDML Date Format notation.
For more information, see [UTS #35: Unicode Locale Data Markup Language](https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).

For example, if the valueFormat is "HH:mm:ss", the displayFormat is "hh:mm: ss a", and the used locale is English, a valid value string is "11:42:35", which leads to an output of "11:42:35 AM".
If no placeholder is set to the TimePicker, the used displayFormat is displayed as a placeholder. If another placeholder is needed, it must be set.

### Keyboard handling
[F4], [Alt]+[Up], [Alt]+[Down] Open/Close picker dialog and move focus to it.

When closed:

- [Page Up] - Increments hours by 1. If 12 am is reached, increment hours to 1 pm and vice versa.
- [Page Down] - Decrements the corresponding field by 1. If 1 pm is reached, decrement hours to 12 am and vice versa.
- [Shift]+[Page Up] - Increments minutes by 1.
- [Shift]+[Page Down] - Decrements minutes by 1.
- [Shift]+[Ctrl]+[Page Up] - Increments seconds by 1.
- [Shift]+[Ctrl]+[Page Down] - Decrements seconds by 1.
-

When opened:

- [Page Up] - Increments hours by 1. If 12 am is reached, increment hours to 1 pm and vice versa.
- [Page Down] - Decrements the corresponding field by 1. If 1 pm is reached, decrement hours to 12 am and vice versa.
- [Shift]+[Page Up] - Increments minutes by 1.
- [Shift]+[Page Down] - Decrements minutes by 1.
- [Shift]+[Ctrl]+[Page Up] - Increments seconds by 1.
- [Shift]+[Ctrl]+[Page Down] - Decrements seconds by 1.
- [A] or [P] - Selects AM or PM respectively.
- [0]-[9] - Allows direct time selecting (hours/minutes/seconds).
- [:] - Allows switching between hours/minutes/seconds clocks. If the last clock is displayed and [:] is pressed, the first clock is beind displayed.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-description` | `string \| undefined` | undefined | Defines the accessible description of the component. |
| `accessible-description-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that describe the input. |
| `accessible-name` | `string \| undefined` | undefined | Defines the aria-label attribute for the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id (or many ids) of the elements that label the component. |
| `date-value` | `any` | null | Currently selected time represented as JavaScript Date instance |
| `disabled` | `boolean` | false | Defines the disabled state of the comonent. |
| `display-format` | `string \| undefined` | undefined | Determines the format, displayed in the input field. |
| `format-pattern` | `string \| undefined` | undefined | Determines the format, displayed in the input field. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `open` | `boolean` | false | Defines the open or closed state of the popover. |
| `placeholder` | `string \| undefined` | undefined | Defines a short hint, intended to aid the user with data entry when the component has no value. |
| `readonly` | `boolean` | false | Defines the readonly state of the comonent. |
| `required` | `boolean` | false | Defines whether the component is required. |
| `value` | `string` | "" | Defines a formatted time value. |
| `value-format` | `string \| undefined` | undefined | Determines the format, used for the value attribute. |
| `value-state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the value state of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleDescription` | `string \| undefined` | Defines the accessible description of the component. |
| `accessibleDescriptionRef` | `string \| undefined` | Receives id(or many ids) of the elements that describe the input. |
| `accessibleName` | `string \| undefined` | Defines the aria-label attribute for the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id (or many ids) of the elements that label the component. |
| `dateValue` | `Date \| null` | Currently selected time represented as JavaScript Date instance |
| `disabled` | `boolean` | Defines the disabled state of the comonent. |
| `displayFormat` | `string \| undefined` | Determines the format, displayed in the input field. |
| `formatPattern` | `string \| undefined` | Determines the format, displayed in the input field. |
| `model` | `STRING \| TimeOfDay` | Use this to bind a model field by attribute. |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `open` | `boolean` | Defines the open or closed state of the popover. |
| `placeholder` | `string \| undefined` | Defines a short hint, intended to aid the user with data entry when the component has no value. |
| `readonly` | `boolean` | Defines the readonly state of the comonent. |
| `required` | `boolean` | Defines whether the component is required. |
| `value` | `string` | Defines a formatted time value. |
| `valueFormat` | `string \| undefined` | Determines the format, used for the value attribute. |
| `valueState` | `ValueState` | Defines the value state of the component. |

## Slots

### `valueStateMessage`

Defines the value state message that will be displayed as pop up under the `ui5-time-picker`.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The `valueStateMessage` would be displayed,
when the `ui5-time-picker` is in `Information`, `Critical` or `Negative` value state.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `CustomEvent<TimePickerChangeEventDetail>` | Fired when the input operation has finished by clicking the "OK" button or when the text in the input field has changed and the focus leaves the input field. |
| `close` | `CustomEvent` | Fired after the value-help dialog of the component is closed. |
| `input` | `CustomEvent<TimePickerInputEventDetail>` | Fired when the value of the `furo-ui5-time-picker` is changed at each key stroke. |
| `open` | `CustomEvent` | Fired after the value-help dialog of the component is opened. |

## Methods

### `bindData(fieldNode: STRING | TimeOfDay | undefined): void`

Connects your data model to this component.

### `clear(): void`

Clears the value of the time picker.

### `formatValue(date: Date): string`

Formats a Java Script date object into a string representing a locale date and time
according to the `formatPattern` property of the TimePicker instance

### `isValid(value: string | undefined): boolean`

Checks if a value is valid against the current `formatPattern` value.

**Note:** an empty string is considered as valid value.

### `isValidValue(value: string | undefined): boolean`

Checks if a value is valid against the current `valueFormat` value.

**Note:** an empty string is considered as valid value.

## CSS Parts

- `input`: Used to style the input element. This part is forwarded to the underlying ui5-input element.

---
title: furo-ui5-daterange-picker
tags: [daterange, range, date, picker, calendar, from, to]
category: Form
use-when: Use to let users select a start and end date as a single range.
---

# furo-ui5-daterange-picker

> Date range selection (start and end date) in a single input.

**Class:** `FuroUi5DaterangePicker`
**Import:** `import "@furo/ui5/daterange-picker"`
**Import type:** `import type { FuroUi5DaterangePicker } from "@furo/ui5/daterange-picker"`
**Extends:** `DateRangePicker`
**Category:** Form

**Related:** [`furo-ui5-date-picker`](furo-ui5-date-picker.md), [`furo-ui5-date-time-picker`](furo-ui5-date-time-picker.md)

## Overview

The 'furo-ui5-daterange-picker' component lets the user select a date range (a start and an end
date), with data binding.

It supports all features from the [SAP ui5 DateRangePicker element](https://ui5.github.io/webcomponents/components/DateRangePicker/).

The bound value is the formatted range `string` ("from - to", joined by the `delimiter`). You can
bind any `string` type: `primitives.STRING`, the `furo.fat.String` type or the
`google.protobuf.StringValue` type. Use `startDateValue` / `endDateValue` to read the parsed ends.

```html
<furo-ui5-daterange-picker .model="${fieldNode}"></furo-ui5-daterange-picker>
```

### Overview
The DateRangePicker enables the users to enter a localized date range using touch, mouse, keyboard input, or by selecting a date range in the calendar.

### Usage
The user can enter a date by:
Using the calendar that opens in a popup or typing it in directly in the input field (not available for mobile devices).
For the `furo-ui5-daterange-picker`:

**Note:** Relative date values such as "today", "yesterday", or "tomorrow" are not supported.
Entering a relative date sets the component to an error state.

### Keyboard Handling
The `furo-ui5-daterange-picker` provides advanced keyboard handling.

When the `furo-ui5-daterange-picker` input field is focused the user can
increment or decrement respectively the range start or end date, depending on where the cursor is.
The following shortcuts are available:

- [Page Down] - Decrements the corresponding day of the month by one
- [Shift] + [Page Down] - Decrements the corresponding month by one
- [Shift] + [Ctrl] + [Page Down] - Decrements the corresponding year by one
- [Page Up] - Increments the corresponding day of the month by one
- [Shift] + [Page Up] - Increments the corresponding month by one
- [Shift] + [Ctrl] + [Page Up] - Increments the corresponding year by one

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-description` | `string \| undefined` | undefined | Defines the accessible description of the component. |
| `accessible-description-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that describe the input. |
| `accessible-name` | `string \| undefined` | undefined | Defines the aria-label attribute for the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component. |
| `calendar-week-numbering` | `"Default" \| "ISO_8601" \| "MiddleEastern" \| "WesternTraditional"` | "Default" | Defines how to calculate calendar weeks and first day of the week. If not set, the calendar will be displayed according to the currently set global configuration. |
| `date-value` | `any` | null | **Note:** The getter method is inherited and not supported. If called it will return an empty value. |
| `date-value-async` | `any` | Promise | Promise that resolves to the currently selected date represented as a Local JavaScript Date instance. |
| `date-value-utc` | `any` | null | **Note:** The getter method is inherited and not supported. If called it will return an empty value. |
| `delimiter` | `string` | "-" | Determines the symbol which separates the dates. If not supplied, the default time interval delimiter for the current locale will be used. |
| `disabled` | `boolean` | false | Determines whether the component is displayed as disabled. |
| `display-format` | `string \| undefined` | undefined | Determines the format, displayed in the input field. |
| `end-date-value` | `any` | null | Returns the end date of the currently selected range as JavaScript Date instance. |
| `format-pattern` | `string \| undefined` | undefined | Determines the format, displayed in the input field. |
| `hide-week-numbers` | `boolean` | false | Defines the visibility of the week numbers column. |
| `max-date` | `string` | "" | Determines the maximum date available for selection. |
| `min-date` | `string` | "" | Determines the minimum date available for selection. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `open` | `boolean` | false | Defines the open or closed state of the popover. |
| `placeholder` | `string \| undefined` | undefined | Defines a short hint, intended to aid the user with data entry when the component has no value. |
| `primary-calendar-type` | `"Gregorian" \| "Islamic" \| "Japanese" \| "Buddhist" \| "Persian" \| undefined` | undefined | Sets a calendar type used for display. If not set, the calendar type of the global configuration is used. |
| `readonly` | `boolean` | false | Determines whether the component is displayed as read-only. |
| `required` | `boolean` | false | Defines whether the component is required. |
| `secondary-calendar-type` | `"Gregorian" \| "Islamic" \| "Japanese" \| "Buddhist" \| "Persian" \| undefined` | undefined | Defines the secondary calendar type. If not set, the calendar will only show the primary calendar type. |
| `show-clear-icon` | `boolean` | false | Defines whether the clear icon of the input will be shown. |
| `show-two-months` | `boolean` | false | Defines whether the component displays two months side by side in the picker popup. |
| `start-date-value` | `any` | null | Returns the start date of the currently selected range as JavaScript Date instance. |
| `value` | `string` | "" | Defines a formatted date value. |
| `value-format` | `string \| undefined` | undefined | Determines the format, used for the value attribute. |
| `value-state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the value state of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleDescription` | `string \| undefined` | Defines the accessible description of the component. |
| `accessibleDescriptionRef` | `string \| undefined` | Receives id(or many ids) of the elements that describe the input. |
| `accessibleName` | `string \| undefined` | Defines the aria-label attribute for the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the component. |
| `calendarWeekNumbering` | `CalendarWeekNumbering` | Defines how to calculate calendar weeks and first day of the week. If not set, the calendar will be displayed according to the currently set global configuration. |
| `dateValue` | `Date \| null` | **Note:** The getter method is inherited and not supported. If called it will return an empty value. |
| `dateValueAsync` | `Promise<Date \| null>` | Promise that resolves to the currently selected date represented as a Local JavaScript Date instance. |
| `dateValueUTC` | `Date \| null` | **Note:** The getter method is inherited and not supported. If called it will return an empty value. |
| `delimiter` | `string` | Determines the symbol which separates the dates. If not supplied, the default time interval delimiter for the current locale will be used. |
| `disabled` | `boolean` | Determines whether the component is displayed as disabled. |
| `displayFormat` | `string \| undefined` | Determines the format, displayed in the input field. |
| `endDateValue` | `Date \| null` | Returns the end date of the currently selected range as JavaScript Date instance. |
| `formatPattern` | `string \| undefined` | Determines the format, displayed in the input field. |
| `hideWeekNumbers` | `boolean` | Defines the visibility of the week numbers column. |
| `maxDate` | `string` | Determines the maximum date available for selection. |
| `minDate` | `string` | Determines the minimum date available for selection. |
| `model` | `STRING \| FuroFatString \| StringValue` | Use this to bind a model field by attribute. |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `open` | `boolean` | Defines the open or closed state of the popover. |
| `placeholder` | `string \| undefined` | Defines a short hint, intended to aid the user with data entry when the component has no value. |
| `primaryCalendarType` | `CalendarType \| undefined` | Sets a calendar type used for display. If not set, the calendar type of the global configuration is used. |
| `readonly` | `boolean` | Determines whether the component is displayed as read-only. |
| `required` | `boolean` | Defines whether the component is required. |
| `secondaryCalendarType` | `CalendarType \| undefined` | Defines the secondary calendar type. If not set, the calendar will only show the primary calendar type. |
| `showClearIcon` | `boolean` | Defines whether the clear icon of the input will be shown. |
| `showTwoMonths` | `boolean` | Defines whether the component displays two months side by side in the picker popup. |
| `startDateValue` | `Date \| null` | Returns the start date of the currently selected range as JavaScript Date instance. |
| `value` | `string` | Defines a formatted date value. |
| `valueFormat` | `string \| undefined` | Determines the format, used for the value attribute. |
| `valueState` | `ValueState` | Defines the value state of the component. |

## Slots

### `valueStateMessage`

Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The `valueStateMessage` would be displayed,
when the component is in `Information`, `Critical` or `Negative` value state.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `CustomEvent<DatePickerChangeEventDetail>` | Fired when the input operation has finished by pressing Enter or on focusout. |
| `close` | `CustomEvent` | Fired after the component's picker is closed. |
| `input` | `CustomEvent<DatePickerInputEventDetail>` | Fired when the value of the component is changed at each key stroke. |
| `open` | `CustomEvent` | Fired after the component's picker is opened. |
| `value-state-change` | `CustomEvent<DatePickerValueStateChangeEventDetail>` | Fired before the value state of the component is updated internally. The event is preventable, meaning that if it's default action is prevented, the component will not update the value state. |

## Methods

### `bindData(fieldNode: STRING | FuroFatString | StringValue | undefined): void`

Connects your data model to this component.

### `clear(): void`

Clears the value of the date range picker.

### `formatValue(date: Date): string`

Formats a Java Script date object into a string representing a locale date
according to the `formatPattern` property of the DatePicker instance

### `isInValidRange(value: string): boolean`

Checks if a date is between the minimum and maximum date.

### `isValid(value: string): boolean`

Checks if a value is valid against the current date format of the DatePicker.

### `isValidDisplayValue(value: string): boolean`

Checks if a value is valid against the current date format of the DatePicker.

### `isValidValue(value: string): boolean`

Checks if a value is valid against the current date format of the DatePicker.

## CSS Parts

- `input`: Used to style the input element. This part is forwarded to the underlying ui5-input element.

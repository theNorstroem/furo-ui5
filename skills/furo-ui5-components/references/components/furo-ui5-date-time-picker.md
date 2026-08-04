---
title: furo-ui5-date-time-picker
tags: [datetime, date, time, picker, calendar, combined]
category: Form
use-when: Use when both date and time need to be selected together.
---

# furo-ui5-date-time-picker

> Combined date and time selection in a single input.

**Class:** `FuroUi5DateTimePicker`
**Import:** `import "@furo/ui5/date-time-picker"`
**Import type:** `import type { FuroUi5DateTimePicker } from "@furo/ui5/date-time-picker"`
**Extends:** `DateTimePicker`
**Category:** Form

**Related:** [`furo-ui5-date-picker`](furo-ui5-date-picker.md), [`furo-ui5-time-picker`](furo-ui5-time-picker.md)

## Overview

The 'furo-ui5-date-time-picker' component lets the user select a date and time, with data binding.

It supports all features from the [SAP ui5 DateTimePicker element](https://ui5.github.io/webcomponents/components/DateTimePicker/).

You can bind a `string` (ISO 8601 / RFC 3339, e.g. "2017-01-15T01:30:15.000Z"), a
`google.protobuf.Timestamp`, or a unix-seconds `int32` / `int64`. The bound value is always
handled as a canonical RFC 3339 string; `int32` / `int64` are interpreted as seconds since epoch.

## supported meta and constraints
- **readonly: true** — set the element to readonly
- **required: true** — mark the element as required
- **placeholder:"some string"** — set the placeholder for the element
- **min:"1999-12-31"** — set the minDate for the element (use iso date in the constraint)
- **max:"1999-12-31"** — set the maxDate for the element (use iso date in the constraint)

### Overview
The `DateTimePicker` component alows users to select both date (day, month and year) and time (hours, minutes and seconds)
and for the purpose it consists of input field and Date/Time picker.

### Usage

Use the `DateTimePicker` if you need a combined date and time input component.
Don't use it if you want to use either date, or time value.
In this case, use the `DatePicker` or the `TimePicker` components instead.

The user can set date/time by:

- using the calendar and the time selectors
- typing in the input field

Programmatically, to set date/time for the `DateTimePicker`, use the `value` property

### Formatting

The value entered by typing into the input field must fit to the used date/time format.

Supported format options are pattern-based on Unicode LDML Date Format notation.
For more information, see [UTS #35: Unicode Locale Data Markup Language](https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).

**Example:** the following format `dd/MM/yyyy, hh:mm:ss aa`
corresponds the `13/04/2020, 03:16:16 AM` value.

The small 'h' defines "12" hours format and the "aa" symbols - "AM/PM" time periods.

**Example:** the following format `dd/MM/yyyy, HH:mm:ss`
corresponds the `13/04/2020, 15:16:16` value.

The capital 'H' indicates "24" hours format.

**Note:** If the `formatPattern` does NOT include time,
the `DateTimePicker` will fallback to the default time format according to the locale.

**Note:** If no placeholder is set to the `DateTimePicker`,
the current `formatPattern` is displayed as a placeholder.
If another placeholder is needed, it must be set or in case no placeholder is needed - it can be set to an empty string.

**Note:** If the user input does NOT match the `formatPattern`,
the `DateTimePicker` makes an attempt to parse it based on the
locale settings.

### Responsive behavior

The `DateTimePicker` is responsive and fully adapts to all devices.
For larger screens, such as tablet or desktop, it is displayed as a popover, while
on phone devices, it is displayed full screen.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-description` | `string \| undefined` | undefined | Defines the accessible description of the component. |
| `accessible-description-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that describe the input. |
| `accessible-name` | `string \| undefined` | undefined | Defines the aria-label attribute for the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component. |
| `calendar-week-numbering` | `"Default" \| "ISO_8601" \| "MiddleEastern" \| "WesternTraditional"` | "Default" | Defines how to calculate calendar weeks and first day of the week. If not set, the calendar will be displayed according to the currently set global configuration. |
| `date-value` | `any` | null | Currently selected date represented as a Local JavaScript Date instance. |
| `date-value-async` | `any` | Promise | Promise that resolves to the currently selected date represented as a Local JavaScript Date instance. |
| `disabled` | `boolean` | false | Determines whether the component is displayed as disabled. |
| `display-format` | `string \| undefined` | undefined | Determines the format, displayed in the input field. |
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
| `dateValue` | `Date \| null` | Currently selected date represented as a Local JavaScript Date instance. |
| `dateValueAsync` | `Promise<Date \| null>` | Promise that resolves to the currently selected date represented as a Local JavaScript Date instance. |
| `disabled` | `boolean` | Determines whether the component is displayed as disabled. |
| `displayFormat` | `string \| undefined` | Determines the format, displayed in the input field. |
| `formatPattern` | `string \| undefined` | Determines the format, displayed in the input field. |
| `hideWeekNumbers` | `boolean` | Defines the visibility of the week numbers column. |
| `maxDate` | `string` | Determines the maximum date available for selection. |
| `minDate` | `string` | Determines the minimum date available for selection. |
| `model` | `STRING \| Timestamp \| INT32 \| INT64` | Use this to bind a model field by attribute. |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `open` | `boolean` | Defines the open or closed state of the popover. |
| `placeholder` | `string \| undefined` | Defines a short hint, intended to aid the user with data entry when the component has no value. |
| `primaryCalendarType` | `CalendarType \| undefined` | Sets a calendar type used for display. If not set, the calendar type of the global configuration is used. |
| `readonly` | `boolean` | Determines whether the component is displayed as read-only. |
| `required` | `boolean` | Defines whether the component is required. |
| `secondaryCalendarType` | `CalendarType \| undefined` | Defines the secondary calendar type. If not set, the calendar will only show the primary calendar type. |
| `showClearIcon` | `boolean` | Defines whether the clear icon of the input will be shown. |
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

### `bindData(fieldNode: STRING | Timestamp | INT32 | INT64 | undefined): void`

Connects your data model to this component.

### `clear(): void`

Clears the value of the date time picker.

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

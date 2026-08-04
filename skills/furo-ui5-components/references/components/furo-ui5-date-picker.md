---
title: furo-ui5-date-picker
tags: [date, picker, calendar, input, selection, form]
category: Form
use-when: Use for selecting a single date value.
---

# furo-ui5-date-picker

> Date selection input with calendar popup for picking single dates.

**Class:** `FuroUi5DatePicker`
**Import:** `import "@furo/ui5/date-picker"`
**Import type:** `import type { FuroUi5DatePicker } from "@furo/ui5/date-picker"`
**Extends:** `DatePicker`
**Category:** Form

**Related:** [`furo-ui5-daterange-picker`](furo-ui5-daterange-picker.md), [`furo-ui5-date-time-picker`](furo-ui5-date-time-picker.md)

## Overview

The 'furo-ui5-date-picker' component lets the user select a date, with data binding.

It supports all features from the [SAP ui5 DatePicker element](https://ui5.github.io/webcomponents/components/DatePicker/).

You can bind a `string` (ISO 8601, e.g. "2020-12-31"), a `google.type.Date` or a `furo.type.Date`.
Because the UI5 DatePicker is date-only, the bindable value is always handled as an ISO
`YYYY-MM-DD` string.

## supported meta and constraints
- **readonly: true** — set the element to readonly
- **required: true** — mark the element as required
- **placeholder:"some string"** — set the placeholder for the element
- **min:"1999-12-31"** — set the minDate for the element (use iso date in the constraint)
- **max:"1999-12-31"** — set the maxDate for the element (use iso date in the constraint)

### Overview

The `furo-ui5-date-picker` component provides an input field with assigned calendar which opens on user action.
The `furo-ui5-date-picker` allows users to select a localized date using touch,
mouse, or keyboard input. It consists of two parts: the date input field and the
date picker.

### Usage

The user can enter a date by:

- Using the calendar that opens in a popup
- Typing it in directly in the input field

When the user makes an entry and presses the enter key, the calendar shows the corresponding date.
When the user directly triggers the calendar display, the actual date is displayed.

### Formatting

If a date is entered by typing it into
the input field, it must fit to the used date format.

Supported format options are pattern-based on Unicode LDML Date Format notation.
For more information, see [UTS #35: Unicode Locale Data Markup Language](https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).

For example, if the valueFormat is "yyyy-MM-dd", the displayFormat is "MMM d, y", and the used locale is English, a valid value string is "2015-07-30", which leads to an output of "Jul 30, 2015".
If no placeholder is set to the DatePicker, the used displayFormat is displayed as a placeholder. If another placeholder is needed, it must be set.

### Keyboard Handling
The `furo-ui5-date-picker` provides advanced keyboard handling.
If the `furo-ui5-date-picker` is focused,
you can open or close the drop-down by pressing [F4], [Alt] + [Up] or [Alt] + [Down] keys.
Once the drop-down is opened, you can use the [Up], [Down], [Left] or [Right] arrow keys
to navigate through the dates and select one by pressing the `Space` or `Enter` keys. Moreover you can
use TAB to reach the buttons for changing month and year.

If the `furo-ui5-date-picker` input field is focused and its corresponding picker dialog is not opened,
then users can increment or decrement the date referenced by `dateValue` property
by using the following shortcuts:

- [Page Down] - Decrements the corresponding day of the month by one
- [Shift] + [Page Down] - Decrements the corresponding month by one
- [Shift] + [Ctrl] + [Page Down] - Decrements the corresponding year by one
- [Page Up] - Increments the corresponding day of the month by one
- [Shift] + [Page Up] - Increments the corresponding month by one
- [Shift] + [Ctrl] + [Page Up] - Increments the corresponding year by one

### Calendar types
The component supports several calendar types - Gregorian, Buddhist, Islamic, Japanese and Persian.
By default the Gregorian Calendar is used. In order to use the Buddhist, Islamic, Japanese or Persian calendar,
you need to set the `primaryCalendarType` property and import one or more of the following modules:

Or, you can use the global configuration and set the `calendarType` key:

```html
<script data-id="sap-ui-config" type="application/json">
	{
		"calendarType": "Japanese"
	}
<script>
```

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
| `model` | `STRING \| XDate \| FuroXDate` | Use this to bind a model field by attribute. |
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

### `bindData(fieldNode: STRING | XDate | FuroXDate | undefined): void`

Connects your data model to this component.

### `clear(): void`

Clears the value of the date picker.

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

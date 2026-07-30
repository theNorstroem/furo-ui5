---
title: furo-ui5-step-input
tags: [step-input, spinner, numeric, increment, decrement, number, step, input]
category: Form
use-when: Use for precise numeric input with step controls.
---

# furo-ui5-step-input

> Numeric input with increment/decrement buttons.

**Class:** `FuroUi5StepInput`
**Import:** `import "@furo/ui5/step-input"`
**Extends:** `StepInput`
**Category:** Form

**Related:** [`furo-ui5-text-input`](furo-ui5-text-input.md), [`furo-ui5-slider`](furo-ui5-slider.md)

## Overview

The furo-ui5-step-input component allows the user to enter and edit numbers with data binding. It consists of an
input field and buttons with icons to increase/decrease the value with the predefined step.
It supports all features from the [SAP ui5 Input element](https://ui5.github.io/webcomponents/components/StepInput/).

You can bind any `number` type, any `furo.fat.xxx` number type, `furo.BigDecimal` or the `google.wrapper.xxx` number types.

```html
<furo-ui5-number-input
    fn-bind-data="--dao(FIELDNODE)"
 ></furo-ui5-number-input>
```

## supported FAT attributes
 - **"readonly":"true"** set the element to readonly
 - **"required":"true"** set the element to required
 - **"disabled":"true"** set the element to disabled
 - **"placeholder":"string"** set the placeholder for the element

## supported meta and constraints
- **readonly: true** , set the element to readonly
- **placeholder:"some string"** set the placeholder for the element

The constraint **required** will mark the element as required

### Overview

The `furo-ui5-step-input` consists of an input field and buttons with icons to increase/decrease the value
with the predefined step.

The user can change the value of the component by pressing the increase/decrease buttons,
by typing a number directly, by using the keyboard up/down and page up/down,
or by using the mouse scroll wheel. Decimal values are supported.

### Usage

The default step is 1 but the app developer can set a different one.

App developers can set a maximum and minimum value for the `StepInput`.
The increase/decrease button and the up/down keyboard navigation become disabled when
the value reaches the max/min or a new value is entered from the input which is greater/less than the max/min.

#### When to use:

- To adjust amounts, quantities, or other values quickly.
- To adjust values for a specific step.

#### When not to use:

- To enter a static number (for example, postal code, phone number, or ID). In this case,
use the regular `furo-ui5-input` instead.
- To display a value that rarely needs to be adjusted and does not pertain to a particular step.
In this case, use the regular `furo-ui5-input` instead.
- To enter dates and times. In this case, use date/time related components instead.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component. |
| `disabled` | `boolean` | false | Determines whether the component is displayed as disabled. |
| `max` | `number \| undefined` | undefined | Defines a maximum value of the component. |
| `min` | `number \| undefined` | undefined | Defines a minimum value of the component. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `placeholder` | `string \| undefined` | undefined | Defines a short hint, intended to aid the user with data entry when the component has no value. |
| `readonly` | `boolean` | false | Determines whether the component is displayed as read-only. |
| `required` | `boolean` | false | Defines whether the component is required. |
| `step` | `number` | 1 | Defines a step of increasing/decreasing the value of the component. |
| `value` | `number` | 0 | Defines a value of the component. |
| `value-precision` | `number` | 0 | Determines the number of digits after the decimal point of the component. |
| `value-state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the value state of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the component. |
| `disabled` | `boolean` | Determines whether the component is displayed as disabled. |
| `max` | `number \| undefined` | Defines a maximum value of the component. |
| `min` | `number \| undefined` | Defines a minimum value of the component. |
| `model` | `\| INT32     \| INT64     \| UINT32     \| UINT64     \| DOUBLE     \| FLOAT     \| FuroFatFloat     \| FuroFatInt32     \| FuroFatInt64     \| FuroFatUint32     \| FuroFatUint64     \| FloatValue     \| Int32Value     \| Int64Value     \| UInt32Value     \| UInt64Value` | Use this to bind a model field by attribute. |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `placeholder` | `string \| undefined` | Defines a short hint, intended to aid the user with data entry when the component has no value. |
| `readonly` | `boolean` | Determines whether the component is displayed as read-only. |
| `required` | `boolean` | Defines whether the component is required. |
| `step` | `number` | Defines a step of increasing/decreasing the value of the component. |
| `value` | `number` | Defines a value of the component. |
| `valuePrecision` | `number` | Determines the number of digits after the decimal point of the component. |
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
| `change` | `CustomEvent` | Fired when the input operation has finished by pressing Enter or on focusout. |
| `input` | `CustomEvent` | Fired when the value of the component changes at each keystroke. |
| `value-state-change` | `CustomEvent<StepInputValueStateChangeEventDetail>` | Fired before the value state of the component is updated internally. The event is preventable, meaning that if it's default action is prevented, the component will not update the value state. |

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

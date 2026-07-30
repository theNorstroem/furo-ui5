---
title: furo-ui5-checkbox
tags: [checkbox, check, toggle, boolean, selection, tick, form]
category: Form
use-when: Use for independent on/off choices or multiple selections from a group.
---

# furo-ui5-checkbox

> Binary selection control for enabling or disabling options.

**Class:** `FuroUi5Checkbox`
**Import:** `import "@furo/ui5/checkbox"`
**Extends:** `CheckBox`
**Category:** Form

**Related:** [`furo-ui5-switch`](furo-ui5-switch.md), [`furo-ui5-radio-button`](furo-ui5-radio-button.md)

## Overview

The 'furo-ui5-checkbox' component allows the user to switch true and false for type Bool with data binding.

It supports all features from the [SAP ui5 checkbox element](https://ui5.github.io/webcomponents/components/CheckBox/).

Bindable FieldNodes: `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.

## supported FAT attributes
 - **"readonly":"true"** set the element to readonly
 - **"disabled":"true"** set the element to disabled

## supported meta and constraints
- **readonly: true** , set the element to readonly

### Overview

Allows the user to set a binary value, such as true/false or yes/no for an item.

The `furo-ui5-checkbox` component consists of a box and a label that describes its purpose.
If it's checked, an indicator is displayed inside the box.
To check/uncheck the `furo-ui5-checkbox`, the user has to click or tap the square
box or its label.

The `furo-ui5-checkbox` component only has 2 states - checked and unchecked.
Clicking or tapping toggles the `furo-ui5-checkbox` between checked and unchecked state.

### Usage

You can define the checkbox text with via the `text` property. If the text exceeds the available width, it is truncated by default.
In case you prefer text to truncate, set the `wrappingType` property to "None".
The touchable area for toggling the `furo-ui5-checkbox` ends where the text ends.

You can disable the `furo-ui5-checkbox` by setting the `disabled` property to
`true`,
or use the `furo-ui5-checkbox` in read-only mode by setting the `readonly`
property to `true`.

### Keyboard Handling

The user can use the following keyboard shortcuts to toggle the checked state of the `furo-ui5-checkbox`.

- [Space],[Enter] - Toggles between different states: checked, not checked.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component |
| `checked` | `boolean` | false | Defines if the component is checked. |
| `disabled` | `boolean` | false | Defines whether the component is disabled. |
| `display-only` | `boolean` | false | Determines whether the `furo-ui5-checkbox` is in display only state. |
| `indeterminate` | `boolean` | false | Defines whether the component is displayed as partially checked. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `readonly` | `boolean` | false | Defines whether the component is read-only. |
| `required` | `boolean` | false | Defines whether the component is required. |
| `text` | `string \| undefined` | undefined | Defines the text of the component. |
| `value` | `string` | "on" | Defines the form value of the component that is submitted when the checkbox is checked. |
| `value-state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the value state of the component. |
| `wrapping-type` | `"None" \| "Normal"` | "Normal" | Defines whether the component text wraps when there is not enough space. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the component |
| `checked` | `boolean` | Defines if the component is checked. |
| `disabled` | `boolean` | Defines whether the component is disabled. |
| `displayOnly` | `boolean` | Determines whether the `furo-ui5-checkbox` is in display only state. |
| `indeterminate` | `boolean` | Defines whether the component is displayed as partially checked. |
| `model` | `BOOLEAN \| FuroFatBool \| BoolValue` | FieldNode setter |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `readonly` | `boolean` | Defines whether the component is read-only. |
| `required` | `boolean` | Defines whether the component is required. |
| `text` | `string \| undefined` | Defines the text of the component. |
| `value` | `string` | Defines the form value of the component that is submitted when the checkbox is checked. |
| `valueState` | `ValueState` | Defines the value state of the component. |
| `wrappingType` | `WrappingType` | Defines whether the component text wraps when there is not enough space. |

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `CustomEvent` | Fired when the checkbox checked state changes. |

## Methods

### `bindData(fieldNode: BOOLEAN | FuroFatBool | BoolValue | undefined): void`

### `check(): void`

Checks the checkbox and updates the value

### `uncheck(): void`

Unhecks the checkbox and updates the value

## CSS Parts

- `icon`: Used to style the icon of the `ui5-checkbox`
- `label`: Used to style the label of the `ui5-checkbox`
- `root`: Used to style the outermost wrapper of the `ui5-checkbox`

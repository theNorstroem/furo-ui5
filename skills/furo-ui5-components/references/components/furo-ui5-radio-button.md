---
title: furo-ui5-radio-button
tags: [radio, button, selection, exclusive, choice, form, option]
category: Form
use-when: Use for selecting exactly one option from a small set of mutually exclusive choices.
---

# furo-ui5-radio-button

> Single selection control within a mutually exclusive group.

**Class:** `FuroUi5RadioButton`
**Import:** `import "@furo/ui5/radio-button"`
**Extends:** `RadioButton`
**Category:** Form

**Related:** [`furo-ui5-checkbox`](furo-ui5-checkbox.md), [`furo-ui5-select`](furo-ui5-select.md), [`furo-ui5-segmented-button`](furo-ui5-segmented-button.md)

## Overview

The 'furo-ui5-radio-button' component allows the user to switch true and false for Bool with data binding.

It supports all features from the [SAP ui5 toggleButton element](https://ui5.github.io/webcomponents/components/ToggleButton/).

You can bind  `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.

```html
<furo-ui5-radio-button
    name="groupA"
    .model=${this.BoolFieldNode}
 ></furo-ui5-radio-button>
 <furo-ui5-radio-button
    name="groupA"
    fn-bind-data="--dao(OTHERFIELDNODE)"
 ></furo-ui5-radio-button>
```

## supported FAT attributes
 - **"readonly":"true"** set the element to readonly
 - **"disabled":"true"** set the element to disabled
 - **"value-state":""** set the value-state

## supported  constraints
- **readonly: true** , set the element to readonly

The constraint **required** will mark the element as required

When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)

### Overview

The `furo-ui5-radio-button` component enables users to select a single option from a set of options.
When a `furo-ui5-radio-button` is selected by the user, the
`change` event is fired.
When a `furo-ui5-radio-button` that is within a group is selected, the one
that was previously selected gets automatically deselected. You can group radio buttons by using the `name` property.

**Note:** If `furo-ui5-radio-button` is not part of a group, it can be selected once, but can not be deselected back.

### Keyboard Handling

Once the `furo-ui5-radio-button` is on focus, it might be selected by pressing the Space and Enter keys.

The Arrow Down/Arrow Up and Arrow Left/Arrow Right keys can be used to change selection between next/previous radio buttons in one group,
while TAB and SHIFT + TAB can be used to enter or leave the radio button group.

**Note:** On entering radio button group, the focus goes to the currently selected radio button.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Defines the IDs of the elements that label the component. |
| `checked` | `boolean` | false | Defines whether the component is checked or not. |
| `disabled` | `boolean` | false | Defines whether the component is disabled. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `readonly` | `boolean` | false | Defines whether the component is read-only. |
| `required` | `boolean` | false | Defines whether the component is required. |
| `text` | `string \| undefined` | undefined | Defines the text of the component. |
| `value` | `string` | "" | Defines the form value of the component. When a form with a radio button group is submitted, the group's value will be the value of the currently selected radio button. |
| `value-state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the value state of the component. |
| `wrapping-type` | `"None" \| "Normal"` | "Normal" | Defines whether the component text wraps when there is not enough space. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Defines the IDs of the elements that label the component. |
| `checked` | `boolean` | Defines whether the component is checked or not. |
| `disabled` | `boolean` | Defines whether the component is disabled. |
| `model` | `BOOLEAN \| FuroFatBool \| BoolValue` | FieldNode setter |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `readonly` | `boolean` | Defines whether the component is read-only. |
| `required` | `boolean` | Defines whether the component is required. |
| `text` | `string \| undefined` | Defines the text of the component. |
| `value` | `string` | Defines the form value of the component. When a form with a radio button group is submitted, the group's value will be the value of the currently selected radio button. |
| `valueState` | `ValueState` | Defines the value state of the component. |
| `wrappingType` | `WrappingType` | Defines whether the component text wraps when there is not enough space. |

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `CustomEvent` | Fired when the component checked state changes. |

## Methods

### `bindData(fieldNode: BOOLEAN | FuroFatBool | BoolValue | undefined): void`

### `check(): void`

Checks the checkbox and updates the value

### `uncheck(): void`

Unhecks the checkbox and updates the value

## CSS Parts

- `inner-ring`: Used to style the inner ring of the `ui5-radio-button`.
- `outer-ring`: Used to style the outer ring of the `ui5-radio-button`.
- `root`: Used to style the root DOM element of the component.

---
title: furo-ui5-textarea
tags: [textarea, multiline, text, input, form, description, notes]
category: Form
use-when: Use when users need to enter multiple lines of text like descriptions or comments.
---

# furo-ui5-textarea

> Multi-line text input for longer content entry.

**Class:** `FuroUi5Textarea`
**Import:** `import "@furo/ui5/textarea"`
**Import type:** `import type { FuroUi5Textarea } from "@furo/ui5/textarea"`
**Extends:** `TextArea`
**Category:** Form

**Related:** [`furo-ui5-text-input`](furo-ui5-text-input.md), [`furo-ui5-expandable-text`](furo-ui5-expandable-text.md)

## Overview

The 'furo-ui5-textarea' component allows the user to enter and edit texts with data binding.

It supports all features from the [SAP ui5 Input element](https://ui5.github.io/webcomponents/components/Input/).

You can bind any `string` type, like `furo.fat.String` type or the `google.protobuf.StringValue` type.
## supported FAT attributes
 - **"readonly":"true"** set the element to readonly
 - **"required":"true"** set the element to required
 - **"disabled":"true"** set the element to disabled
 - **"icon":"home"** set the icon
 - **"placeholder":"string"** set the placeholder for the element
 - **"max":"number"** set the maximum number of characters available in the input field.

## supported meta and constraints
- **readonly: true** , set the element to readonly
- **placeholder:"some string"** set the placeholder for the element
- **max:"number"** set the maximum number of characters available in the input field.

### Overview

The `furo-ui5-textarea` component is used to enter multiple rows of text.

When empty, it can hold a placeholder similar to a `furo-ui5-input`.
You can define the rows of the `furo-ui5-textarea` and also determine specific behavior when handling long texts.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-description` | `string \| undefined` | undefined | Defines the accessible description of the component. |
| `accessible-description-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that describe the textarea. |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the textarea. |
| `disabled` | `boolean` | false | Indicates whether the user can interact with the component or not. |
| `growing` | `boolean` | false | Enables the component to automatically grow and shrink dynamically with its content. |
| `growing-max-rows` | `number` | 0 | Defines the maximum number of rows that the component can grow. |
| `maxlength` | `number \| undefined` | undefined | Defines the maximum number of characters that the `value` can have. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `placeholder` | `string \| undefined` | undefined | Defines a short hint intended to aid the user with data entry when the component has no value. |
| `readonly` | `boolean` | false | Defines whether the component is read-only. |
| `required` | `boolean` | false | Defines whether the component is required. |
| `rows` | `number` | 0 | Defines the number of visible text rows for the component. |
| `show-exceeded-text` | `boolean` | false | Determines whether the characters exceeding the maximum allowed character count are visible in the component. |
| `value` | `string` | "" | Defines the value of the component. |
| `value-state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the value state of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleDescription` | `string \| undefined` | Defines the accessible description of the component. |
| `accessibleDescriptionRef` | `string \| undefined` | Receives id(or many ids) of the elements that describe the textarea. |
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the textarea. |
| `disabled` | `boolean` | Indicates whether the user can interact with the component or not. |
| `growing` | `boolean` | Enables the component to automatically grow and shrink dynamically with its content. |
| `growingMaxRows` | `number` | Defines the maximum number of rows that the component can grow. |
| `maxlength` | `number \| undefined` | Defines the maximum number of characters that the `value` can have. |
| `model` | `STRING \| FuroFatString \| StringValue` | Use this to bind a model field by attribute. |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `placeholder` | `string \| undefined` | Defines a short hint intended to aid the user with data entry when the component has no value. |
| `readonly` | `boolean` | Defines whether the component is read-only. |
| `required` | `boolean` | Defines whether the component is required. |
| `rows` | `number` | Defines the number of visible text rows for the component. |
| `showExceededText` | `boolean` | Determines whether the characters exceeding the maximum allowed character count are visible in the component. |
| `value` | `string` | Defines the value of the component. |
| `valueState` | `ValueState` | Defines the value state of the component. |

## Slots

### `valueStateMessage`

Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.
 
**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The `valueStateMessage` would be displayed if the component has
`valueState` of type `Information`, `Critical` or `Negative`.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `CustomEvent` | Fired when the text has changed and the focus leaves the component. |
| `input` | `CustomEvent<TextAreaInputEventDetail>` | Fired when the value of the component changes at each keystroke or when something is pasted. |
| `scroll` | `CustomEvent` | Fired when textarea is scrolled. |
| `select` | `CustomEvent` | Fired when some text has been selected. |

## Methods

### `bindData(fieldNode: STRING | FuroFatString | StringValue | undefined): void`

Connects your data model to this component.

### `clear(): void`

Clears the value of the input field.

## CSS Parts

- `textarea`: Used to style the native textarea

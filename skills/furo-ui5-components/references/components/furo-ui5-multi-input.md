---
title: furo-ui5-multi-input
tags: [multi-input, tokens, tags, multiple, values, input, form, multi]
category: Form
use-when: Use when users need to enter multiple freeform values displayed as tokens.
---

# furo-ui5-multi-input

> Text input supporting multiple values displayed as tokens.

**Class:** `FuroUi5MultiInput`
**Import:** `import "@furo/ui5/multi-input"`
**Import type:** `import type { FuroUi5MultiInput } from "@furo/ui5/multi-input"`
**Extends:** `MultiInput`
**Category:** Form

**Related:** [`furo-ui5-multi-combobox`](furo-ui5-multi-combobox.md), [`furo-ui5-text-input`](furo-ui5-text-input.md)

## Overview

The 'furo-ui5-multi-input' component lets the user enter and edit a list of strings with data binding.

It supports all features from the [SAP ui5 MultiInput element](https://ui5.github.io/webcomponents/components/MultiInput/).
Each bound array element is rendered as a deletable `furo-ui5-token`. Typing a value and committing it
(Enter / focus-out → `change`) appends an element to the model; deleting a token (`token-delete`)
removes the matching element from the model. The model is the single source of truth — tokens are
(re)rendered from the array whenever it changes.

You can bind a repeated `string` type: an array of `primitives.STRING`, of `furo.fat.String`, or of
`google.protobuf.StringValue`.

## supported meta and constraints
- **readonly: true** , set the element to readonly
- **required: true** , set the element to required
- **max:"number"** set the maximum number of characters available in the input field.

### Overview
A `furo-ui5-multi-input` field allows the user to enter multiple values, which are displayed as `furo-ui5-token`.

User can choose interaction for creating tokens.
Fiori Guidelines say that user should create tokens when:

- Type a value in the input and press enter or focus out the input field (`change` event is fired)
- Move between suggestion items (`selection-change` event is fired)
- Clicking on a suggestion item (`selection-change` event is fired if the clicked item is different than the current value. Also `change` event is fired )

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-description` | `string \| undefined` | undefined | Defines the accessible description of the component. |
| `accessible-description-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that describe the input. |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the input. |
| `disabled` | `boolean` | false | Defines whether the component is in disabled state. |
| `filter` | `"None" \| "StartsWithPerTerm" \| "StartsWith" \| "Contains"` | "None" | Defines the filter type of the component. |
| `maxlength` | `number \| undefined` | undefined | Sets the maximum number of characters available in the input field. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `no-typeahead` | `boolean` | false | Defines whether the value will be autcompleted to match an item |
| `open` | `boolean` | false | Defines whether the suggestions picker is open. |
| `placeholder` | `string \| undefined` | undefined | Defines a short hint intended to aid the user with data entry when the component has no value. |
| `readonly` | `boolean` | false | Defines whether the component is read-only. |
| `required` | `boolean` | false | Defines whether the component is required. |
| `show-clear-icon` | `boolean` | false | Defines whether the clear icon of the input will be shown. |
| `show-suggestions` | `boolean` | false | Defines whether the component should show suggestions, if such are present. |
| `show-value-help-icon` | `boolean` | false | Determines whether a value help icon will be visualized in the end of the input. Pressing the icon will fire `value-help-trigger` event. |
| `type` | `"Text" \| "Email" \| "Number" \| "Password" \| "Tel" \| "URL" \| "Search"` | "Text" | Defines the HTML type of the component. |
| `value` | `string` | "" | Defines the value of the component. |
| `value-state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the value state of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleDescription` | `string \| undefined` | Defines the accessible description of the component. |
| `accessibleDescriptionRef` | `string \| undefined` | Receives id(or many ids) of the elements that describe the input. |
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the input. |
| `disabled` | `boolean` | Defines whether the component is in disabled state. |
| `filter` | `InputSuggestionsFilter` | Defines the filter type of the component. |
| `maxlength` | `number \| undefined` | Sets the maximum number of characters available in the input field. |
| `model` | `ARRAY<STRING, string> \| ARRAY<FuroFatString, IFuroFatString> \| ARRAY<StringValue, string>` | Use this to bind a model field by attribute. |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `noTypeahead` | `boolean` | Defines whether the value will be autcompleted to match an item |
| `open` | `boolean` | Defines whether the suggestions picker is open. |
| `placeholder` | `string \| undefined` | Defines a short hint intended to aid the user with data entry when the component has no value. |
| `readonly` | `boolean` | Defines whether the component is read-only. |
| `required` | `boolean` | Defines whether the component is required. |
| `showClearIcon` | `boolean` | Defines whether the clear icon of the input will be shown. |
| `showSuggestions` | `boolean` | Defines whether the component should show suggestions, if such are present. |
| `showValueHelpIcon` | `boolean` | Determines whether a value help icon will be visualized in the end of the input. Pressing the icon will fire `value-help-trigger` event. |
| `type` | `InputType` | Defines the HTML type of the component. |
| `value` | `string` | Defines the value of the component. |
| `valueState` | `ValueState` | Defines the value state of the component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the suggestion items.

**Note:** The suggestions would be displayed only if the `showSuggestions`
property is set to `true`.

**Note:** The `<ui5-suggestion-item>`, `<ui5-suggestion-item-group>` and `ui5-suggestion-item-custom` are recommended to be used as suggestion items.

**Note:** Input with type `Number` does not support suggestions.

### `icon`

Defines the icon to be displayed in the component.

### `tokens`

Defines the component tokens.

### `valueStateMessage`

Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The `valueStateMessage` would be displayed,
when the component is in `Information`, `Critical` or `Negative` value state.

**Note:** If the component has `suggestionItems`,
the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `CustomEvent` | Fired when the input operation has finished by pressing Enter or on focusout. |
| `close` | `CustomEvent` | Fired when the suggestions picker is closed. |
| `input` | `CustomEvent` | Fired when the value of the component changes at each keystroke, and when a suggestion item has been selected. |
| `open` | `CustomEvent` | Fired when the suggestions picker is open. |
| `select` | `CustomEvent` | Fired when some text has been selected. |
| `selection-change` | `CustomEvent<InputSelectionChangeEventDetail>` | Fired when the user navigates to a suggestion item via the ARROW keys, as a preview, before the final selection. |
| `token-delete` | `CustomEvent<MultiInputTokenDeleteEventDetail>` | Fired when tokens are being deleted. |
| `value-help-trigger` | `CustomEvent` | Fired when the value help icon is pressed and F4 or ALT/OPTION + ARROW_UP/ARROW_DOWN keyboard keys are used. |

## Methods

### `bindData(fieldNode: ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | ARRAY<StringValue, string> | undefined): void`

Connects your data model to this component.

## CSS Parts

- `clear-icon`: Used to style the clear icon, which can be pressed to clear user input text
- `input`: Used to style the native input element
- `root`: Used to style the root DOM element of the Input component

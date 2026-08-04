---
title: furo-ui5-text-input
tags: [input, text, field, form, textbox, entry, value]
category: Form
use-when: Use for single-line text entry like names, emails, or short values.
---

# furo-ui5-text-input

> Single-line text input field for user data entry.

**Class:** `FuroUi5TextInput`
**Import:** `import "@furo/ui5/text-input"`
**Import type:** `import type { FuroUi5TextInput } from "@furo/ui5/text-input"`
**Extends:** `Input`
**Category:** Form

**Related:** [`furo-ui5-textarea`](furo-ui5-textarea.md), [`furo-ui5-multi-input`](furo-ui5-multi-input.md), [`furo-ui5-combobox`](furo-ui5-combobox.md)

## Overview

The 'furo-ui5-text-input' component allows the user to enter and edit texts with data binding.

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

The `furo-ui5-input` component allows the user to enter and edit text or numeric values in one line.

Additionally, you can provide `suggestionItems`
that are displayed in a popover right under the input. Keep in mind that `furo-ui5-input` with type `Number` does not support suggestions.

The text field can be editable or read-only (`readonly` property),
and it can be enabled or disabled (`disabled` property).
To visualize semantic states, such as "Negative" or "Critical", the `valueState` property is provided.
When the user makes changes to the text, the change event is fired,
which enables you to react on any text change.

### Keyboard Handling
The `furo-ui5-input` provides the following keyboard shortcuts:

- [Escape] - Closes the suggestion list, if open. If closed or not enabled, cancels changes and reverts to the value which the Input field had when it got the focus.
- [Enter] or [Return] - If suggestion list is open takes over the current matching item and closes it. If value state or group header is focused, does nothing.
- [Down] - Focuses the next matching item in the suggestion list. Selection-change event is fired.
- [Up] - Focuses the previous matching item in the suggestion list. Selection-change event is fired.
- [Home] - If focus is in the text input, moves caret before the first character. If focus is in the list, highlights the first item and updates the input accordingly.
- [End] - If focus is in the text input, moves caret after the last character. If focus is in the list, highlights the last item and updates the input accordingly.
- [Page Up] - If focus is in the list, moves highlight up by page size (10 items by default). If focus is in the input, does nothing.
- [Page Down] - If focus is in the list, moves highlight down by page size (10 items by default). If focus is in the input, does nothing.
- [Ctrl]+[Alt]+[F8] or [Command]+[Option]+[F8] - Focuses the first link in the value state message, if available. Pressing [Tab] moves the focus to the next link in the value state message, or closes the value state message if there are no more links.

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
| `model` | `STRING \| FuroFatString \| StringValue` | Use this to bind a model field by attribute. |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `noTypeahead` | `boolean` | Defines whether the value will be autcompleted to match an item |
| `open` | `boolean` | Defines whether the suggestions picker is open. |
| `placeholder` | `string \| undefined` | Defines a short hint intended to aid the user with data entry when the component has no value. |
| `readonly` | `boolean` | Defines whether the component is read-only. |
| `required` | `boolean` | Defines whether the component is required. |
| `showClearIcon` | `boolean` | Defines whether the clear icon of the input will be shown. |
| `showSuggestions` | `boolean` | Defines whether the component should show suggestions, if such are present. |
| `type` | `InputType` | Defines the HTML type of the component. |
| `value` | `string` | Defines the value of the component. |
| `valueState` | `ValueState` | Defines the value state of the component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the suggestion items.

**Note:** The suggestions would be displayed only if the `showSuggestions`
property is set to `true`.

**Note:** The ``, `` and `ui5-suggestion-item-custom` are recommended to be used as suggestion items.

**Note:** Input with type `Number` does not support suggestions.

### `icon`

Defines the icon to be displayed in the component.

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
| `search-requested` | `CustomEvent<String>` | Fired when typing in input (debounced, default 500ms). |
| `select` | `CustomEvent` | Fired when some text has been selected. |
| `selection-change` | `CustomEvent<InputSelectionChangeEventDetail>` | Fired when the user navigates to a suggestion item via the ARROW keys, as a preview, before the final selection. |

## Methods

### `bindData(fieldNode: STRING | FuroFatString | StringValue | undefined): void`

Connects your data model to this component.

### `clear(): void`

Clears the value of the input field.

### `closePopover(): void`

Closes the popover from value-state-message or suggestions imperatively.

## CSS Parts

- `clear-icon`: Used to style the clear icon, which can be pressed to clear user input text
- `input`: Used to style the native input element
- `root`: Used to style the root DOM element of the Input component

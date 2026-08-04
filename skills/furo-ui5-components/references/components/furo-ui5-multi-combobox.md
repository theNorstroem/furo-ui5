---
title: furo-ui5-multi-combobox
tags: [multi-combobox, multiple, selection, tokens, tags, filter, multiselect, multi, combobox]
category: Form
use-when: Use for selecting multiple items from a searchable list displayed as tokens.
---

# furo-ui5-multi-combobox

> Filterable dropdown allowing multiple selections as tokens.

**Class:** `FuroUi5MultiCombobox`
**Import:** `import "@furo/ui5/multi-combobox"`
**Import type:** `import type { FuroUi5MultiCombobox } from "@furo/ui5/multi-combobox"`
**Extends:** `MultiComboBox`
**Category:** Form

**Related:** [`furo-ui5-combobox`](furo-ui5-combobox.md), [`furo-ui5-multi-input`](furo-ui5-multi-input.md), [`furo-ui5-mcb-item`](furo-ui5-mcb-item.md)

## Overview

The furo-ui5-multi-combobox component is used to create a drop-down list. The items inside the furo-ui5-multi-combobox define
the available options by using the furo-ui5-mcb-item component. Use the function bindOptions to bind a RepeaterNode as a option list.

```html
<furo-ui5-multi-combobox
   fn-bind-data="--entity(*.data.description)"
   fn-bind-options="--collection(*.entities)">
</furo-ui5-multi-combobox>
```

*

### Overview

The `furo-ui5-multi-combobox` component consists of a list box with items and a text field allowing the user to either type a value directly into the text field, or choose from the list of existing items.

The drop-down list is used for selecting and filtering values, it enables users to select one or more options from a predefined list. The control provides an editable input field to filter the list, and a dropdown arrow to expand/collapse the list of available options.
The options in the list have checkboxes that permit multi-selection. Entered values are displayed as tokens.
### Structure
The `furo-ui5-multi-combobox` consists of the following elements:

-  Tokenizer - a list of tokens with selected options.
-  Input field - displays the selected option/s as token/s. Users can type to filter the list.
-  Drop-down arrow - expands\collapses the option list.
-  Option list - the list of available options.

### Keyboard Handling

The `furo-ui5-multi-combobox` provides advanced keyboard handling.

#### Picker
If the `furo-ui5-multi-combobox` is focused,
you can open or close the drop-down by pressing [F4], [Alt] + [Up] or [Alt] + [Down] keys.
Once the drop-down is opened, you can use the `UP` and `DOWN` arrow keys
to navigate through the available options and select one by pressing the `Space` or `Enter` keys.
[Ctrl]+[Alt]+[F8] or [Command]+[Option]+[F8] - Focuses the first link in the value state message, if available. Pressing [Tab] moves the focus to the next link in the value state message, or closes the value state message if there are no more links.

#### Tokens

-  Left/Right arrow keys - moves the focus selection form the currently focused token to the previous/next one (if available).
-  Delete -  deletes the token and focuses the previous token.
-  Backspace -  deletes the token and focus the next token.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component. |
| `disabled` | `boolean` | false | Defines whether the component is in disabled state. |
| `filter` | `"None" \| "StartsWithPerTerm" \| "StartsWith" \| "Contains"` | "StartsWithPerTerm" | Defines the filter type of the component. |
| `loading` | `boolean` | false | Indicates whether a loading indicator should be shown in the picker. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `no-typeahead` | `boolean` | false | Defines whether the value will be autcompleted to match an item |
| `no-validation` | `boolean` | false | Defines if the user input will be prevented, if no matching item has been found |
| `open` | `boolean` | false | Indicates whether the items picker is open. |
| `placeholder` | `string \| undefined` | undefined | Defines a short hint intended to aid the user with data entry when the component has no value. |
| `readonly` | `boolean` | false | Defines whether the component is read-only. |
| `required` | `boolean` | false | Defines whether the component is required. |
| `selected-values` | `string[]` | [] | Defines the values of the selected items. |
| `show-clear-icon` | `boolean` | false | Defines whether the clear icon of the multi-combobox will be shown. |
| `show-select-all` | `boolean` | false | Determines if the select all checkbox is visible on top of suggestions. |
| `value` | `string` | "" | Defines the value of the component. |
| `value-state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the value state of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the component. |
| `disabled` | `boolean` | Defines whether the component is in disabled state. |
| `filter` | `ComboBoxFilter` | Defines the filter type of the component. |
| `loading` | `boolean` | Indicates whether a loading indicator should be shown in the picker. |
| `model` | `ARRAY<STRING, string> \| ARRAY<FuroFatString, IFuroFatString> \| IdentifiableList` | Use this to bind a model field by attribute. |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `noTypeahead` | `boolean` | Defines whether the value will be autcompleted to match an item |
| `noValidation` | `boolean` | Defines if the user input will be prevented, if no matching item has been found |
| `open` | `boolean` | Indicates whether the items picker is open. |
| `optionList` | `McbItem[] \| undefined` | Use this to bind a options field by attribute. |
| `optionsModel` | `OptionLikeList \| undefined` | Use this to bind a options field by attribute. |
| `placeholder` | `string \| undefined` | Defines a short hint intended to aid the user with data entry when the component has no value. |
| `readonly` | `boolean` | Defines whether the component is read-only. |
| `required` | `boolean` | Defines whether the component is required. |
| `selectedValues` | `Array<string>` | Defines the values of the selected items. |
| `showClearIcon` | `boolean` | Defines whether the clear icon of the multi-combobox will be shown. |
| `showSelectAll` | `boolean` | Determines if the select all checkbox is visible on top of suggestions. |
| `value` | `string` | Defines the value of the component. |
| `valueState` | `ValueState` | Defines the value state of the component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the component items.

### `icon`

Defines the icon to be displayed in the component.

### `valueStateMessage`

Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The `valueStateMessage` would be displayed,
when the component is in `Information`, `Critical` or `Negative` value state.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `CustomEvent` | Fired when the input operation has finished by pressing Enter or on focusout. |
| `close` | `CustomEvent` | Fired when the dropdown is closed. |
| `input` | `CustomEvent` | Fired when the value of the component changes at each keystroke or clear icon is pressed. |
| `open` | `CustomEvent` | Fired when the dropdown is opened. |
| `selection-change` | `CustomEvent<MultiComboBoxSelectionChangeEventDetail>` | Fired when selection is changed by user interaction. |
| `value-state-change` | `CustomEvent<MultiComboBoxValueStateChangeEventDetail>` | Fired before the value state of the component is updated internally. The event is preventable, meaning that if it's default action is prevented, the component will not update the value state. |

## Methods

### `bindData(fieldNode: ARRAY<STRING, string> | ARRAY<FuroFatString, IFuroFatString> | IdentifiableList | undefined): void`

Connects your data model to this component.

### `bindOptions(fieldNode: OptionLikeList | undefined): void`

Connects your data model to this component.

### `clear(): void`

Clears the value of the input field.

### `setSelectedItems(): void`

## CSS Parts

- `token-\{index\}`: Used to style each token(where `token-0` corresponds to the first item)

---
title: furo-ui5-combobox
tags: [combobox, autocomplete, dropdown, search, filter, typeahead, select]
category: Form
use-when: Use when users benefit from searching/filtering a large list of options.
---

# furo-ui5-combobox

> Filterable dropdown with type-ahead search functionality.

**Class:** `FuroUi5Combobox`
**Import:** `import "@furo/ui5/combobox"`
**Import type:** `import type { FuroUi5Combobox } from "@furo/ui5/combobox"`
**Extends:** `ComboBox`
**Category:** Form

**Related:** [`furo-ui5-select`](furo-ui5-select.md), [`furo-ui5-multi-combobox`](furo-ui5-multi-combobox.md), [`furo-ui5-cb-item`](furo-ui5-cb-item.md)

## Overview

The furo-ui5-combobox component is used to create a drop-down list for quick data entry, but allows you to enter any string.

### Possible ways to set the option list
- Use `bindOptions()` or `optionsModel=` to bind a RepeaterNode as an option list.
- Add the options manually to the html
- Use `setOptionList()` or `optionList=` to build up the option list.

### OptionLikeList Signature
The optionsModel uses a FieldNode which fulfills the `IdentiableList` interface,
this means that you have an ARRAY FieldNode where the items have at least an id:string and a displayName:string field.

### Sample

```html
<furo-ui5-combobox
   .model="${this.model.stringlike}"
   .optionsModel="${this.OptionLikeListKind}">
</furo-ui5-combobox>
```

---

### Overview

The `furo-ui5-combobox` component represents a drop-down menu with a list of the available options and a text input field to narrow down the options.

It is commonly used to enable users to select an option from a predefined list.

### Structure
The `furo-ui5-combobox` consists of the following elements:

-  Input field - displays the selected option or a custom user entry. Users can type to narrow down the list or enter their own value.
-  Drop-down arrow - expands\collapses the option list.
-  Option list - the list of available options.

### Working with Values

The ComboBox offers two ways to work with item selection:

**1. Display Text Only (using `value`):**

```html
<ui5-combobox value="Germany">
  <ui5-cb-item text="Germany"></ui5-cb-item>
  <ui5-cb-item text="France"></ui5-cb-item>
</ui5-combobox>
```

Use this approach when the displayed text is sufficient for your needs.

**2. Unique Identifiers - Recommended (using `selectedValue` and item `value`):**

```html
<ui5-combobox value="Germany" selected-value="DE">
  <ui5-cb-item text="Germany" value="DE"></ui5-cb-item>
  <ui5-cb-item text="France" value="FR"></ui5-cb-item>
</ui5-combobox>
```

This is the recommended approach when you need to work with unique identifiers (IDs, codes) separate from display text.
The `selectedValue` property references the `value` property of the selected item.
In forms, the item's `value` (e.g., "DE") will be submitted instead of the display text.

**Important:** Do not mix the `selectedValue` approach with the deprecated `selected` property on items.

### Keyboard Handling

The `furo-ui5-combobox` provides advanced keyboard handling.

- [F4], [Alt]+[Up], or [Alt]+[Down] - Toggles the picker.
- [Escape] - Closes the picker, if open. If closed, cancels changes and reverts the typed in value.
- [Enter] or [Return] - If picker is open, takes over the currently selected item and closes it.
- [Down] - Selects the next matching item in the picker.
- [Up] - Selects the previous matching item in the picker.
- [Page Down] - Moves selection down by page size (10 items by default).
- [Page Up] - Moves selection up by page size (10 items by default).
- [Home] - If focus is in the ComboBox, moves cursor at the beginning of text. If focus is in the picker, selects the first item.
- [End] - If focus is in the ComboBox, moves cursor at the end of text. If focus is in the picker, selects the last item.
- [Ctrl]+[Alt]+[F8] or [Command]+[Option]+[F8] - Focuses the first link in the value state message, if available. Pressing [Tab] moves the focus to the next link in the value state message, or closes the value state message if there are no more links.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component |
| `disabled` | `boolean` | false | Defines whether the component is in disabled state. |
| `filter` | `"None" \| "StartsWithPerTerm" \| "StartsWith" \| "Contains"` | "StartsWithPerTerm" | Defines the filter type of the component. |
| `loading` | `boolean` | false | Indicates whether a loading indicator should be shown in the picker. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `no-typeahead` | `boolean` | false | Defines whether the value will be autocompleted to match an item |
| `open` | `boolean` | false | Indicates whether the items picker is open. |
| `placeholder` | `string \| undefined` | undefined | Defines a short hint intended to aid the user with data entry when the component has no value. |
| `readonly` | `boolean` | false | Defines whether the component is read-only. |
| `required` | `boolean` | false | Defines whether the component is required. |
| `selected-value` | `string \| undefined` | undefined | Defines the value of the selected item (references the `value` property of `furo-ui5-cb-item`). |
| `show-clear-icon` | `boolean` | false | Defines whether the clear icon of the combobox will be shown. |
| `value` | `string` | "" | Defines the value of the component. |
| `value-state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the value state of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the component |
| `disabled` | `boolean` | Defines whether the component is in disabled state. |
| `filter` | `ComboBoxFilter` | Defines the filter type of the component. |
| `loading` | `boolean` | Indicates whether a loading indicator should be shown in the picker. |
| `model` | `STRING \| FuroFatString \| StringValue` | Use this to bind a model field by attribute. |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `noTypeahead` | `boolean` | Defines whether the value will be autocompleted to match an item |
| `open` | `boolean` | Indicates whether the items picker is open. |
| `optionList` | `SelectOption[] \| undefined` | Use this to set and render the optionList as an attribute. |
| `optionsModel` | `OptionLikeList \| undefined` | Use this to bind a options field by attribute. |
| `placeholder` | `string \| undefined` | Defines a short hint intended to aid the user with data entry when the component has no value. |
| `readonly` | `boolean` | Defines whether the component is read-only. |
| `required` | `boolean` | Defines whether the component is required. |
| `selectedValue` | `string \| undefined` | Defines the value of the selected item (references the `value` property of `furo-ui5-cb-item`). |
| `showClearIcon` | `boolean` | Defines whether the clear icon of the combobox will be shown. |
| `value` | `string` | Defines the value of the component. |
| `valueState` | `ValueState` | Defines the value state of the component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the component items.

### `icon`

Defines the icon to be displayed in the input field.

### `valueStateMessage`

Defines the value state message that will be displayed as pop up under the component.
The value state message slot should contain only one root element.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The `valueStateMessage` would be displayed,
when the `ui5-combobox` is in `Information`, `Critical` or `Negative` value state.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `CustomEvent` | Fired when the input operation has finished by pressing Enter, focusout or an item is selected. |
| `close` | `CustomEvent` | Fired when the dropdown is closed. |
| `input` | `CustomEvent` | Fired when typing in input or clear icon is pressed. |
| `open` | `CustomEvent` | Fired when the dropdown is opened. |
| `selection-change` | `CustomEvent<ComboBoxSelectionChangeEventDetail>` | Fired when selection is changed by user interaction |

## Methods

### `bindData(fieldNode: STRING | FuroFatString | StringValue | undefined): void`

Connects your data model to this component.

### `bindOptions(fieldNode: OptionLikeList | undefined): void`

Connects your data model to this component.

### `clear(): void`

Clears the value of the input field.

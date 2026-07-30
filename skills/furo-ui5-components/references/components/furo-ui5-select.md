---
title: furo-ui5-select
tags: [select, dropdown, picker, options, choice, form, list]
category: Form
use-when: Use when selecting from a fixed list without typing; for searchable lists use combobox.
---

# furo-ui5-select

> Dropdown selection from a predefined list of options.

**Class:** `FuroUi5Select`
**Import:** `import "@furo/ui5/select"`
**Extends:** `Select`
**Category:** Form

**Related:** [`furo-ui5-combobox`](furo-ui5-combobox.md), [`furo-ui5-option`](furo-ui5-option.md), [`furo-ui5-radio-button`](furo-ui5-radio-button.md)

## Overview

The furo-ui5-select component is used to create a drop-down list. The items inside the furo-ui5-select define
the available options by using the furo-ui5-option component.

### Possible ways to set the option list
- Use `bindOptions()` or `optionsModel=` to bind a RepeaterNode as an option list.
- Add the options manually to the html
- Use `setOptionList()` or `optionList=` to build up the option list.

### Warning
- This component updates the model with the first option, if the value was empty, to keep the data in sync with the visual impression.
- This component will render an empty value if the value is not in the list of options

**Note:** Use either the Select's value or the Options' selected property. Mixed usage could result in unexpected behavior.

**Note:** If the given value does not match any existing option, no option will be selected and the Select component will be displayed as empty.

### OptionLikeList Signature
The optionsModel uses a FieldNode which fulfills the `IdentiableList` interface,
this means that you have an ARRAY FieldNode where the items have at least an id:string and a displayName:string field.

### Sample

```html
<furo-ui5-select
   .model="${this.model.stringlike}"
   .optionsModel="${this.OptionLikeListKind}">
</furo-ui5-select>
```

### Overview

The `furo-ui5-select` component is used to create a drop-down list.

### Usage

There are two main usages of the `furo-ui5-select>`.

- With Option (`furo-ui5-option`) web component:

The available options of the Select are defined by using the Option component.
The Option comes with predefined design and layout, including `icon`, `text` and `additional-text`.

- With OptionCustom (`furo-ui5-option-custom`) web component.

Options with custom content are defined by using the OptionCustom component.
The OptionCustom component comes with no predefined layout and it expects consumers to define it.

### Selection

The options can be selected via user interaction (click or with the use of the Space and Enter keys)
and programmatically - the Select component supports two distinct selection APIs, though mixing them is not supported:
- The "value" property of the Select component
- The "selected" property on individual options

**Note:** If the "value" property is set but does not match any option,
no option will be selected and the Select component will be displayed as empty.

**Note:** when both "value" and "selected" are both used (although discouraged),
the "value" property will take precedence.

### Keyboard Handling

The `furo-ui5-select` provides advanced keyboard handling.

- [F4] / [Alt] + [Up] / [Alt] + [Down] / [Space] or [Enter] - Opens/closes the drop-down.
- [Up] or [Down] - If the drop-down is closed - changes selection to the next or the previous option. If the drop-down is opened - moves focus to the next or the previous option.
- [Space], [Enter] - If the drop-down is opened - selects the focused option.
- [Escape] - Closes the drop-down without changing the selection.
- [Home] - Navigates to first option
- [End] - Navigates to the last option

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-description` | `string \| undefined` | undefined | Defines the accessible description of the component. |
| `accessible-description-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that describe the select. |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the select. |
| `disabled` | `boolean` | false | Defines whether the component is in disabled state. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `readonly` | `boolean` | false | Defines whether the component is read-only. |
| `required` | `boolean` | false | Defines whether the component is required. |
| `selected-option` | `any` | undefined | Currently selected `furo-ui5-option` element. |
| `text-separator` | `"Bullet" \| "Dash" \| "VerticalLine"` | "Dash" | Defines the separator type for the two columns layout when Select is in read-only mode. |
| `tooltip` | `string \| undefined` | undefined | Defines the tooltip of the select. |
| `value` | `any` | "" | Defines the value of the component: |
| `value-state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the value state of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleDescription` | `string \| undefined` | Defines the accessible description of the component. |
| `accessibleDescriptionRef` | `string \| undefined` | Receives id(or many ids) of the elements that describe the select. |
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the select. |
| `disabled` | `boolean` | Defines whether the component is in disabled state. |
| `model` | `STRING \| FuroFatString \| StringValue` | Use this to bind a model field by attribute. |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `optionList` | `SelectOption[] \| undefined` | Use this to set and render the optionList as an attribute. |
| `optionsModel` | `OptionLikeList \| undefined` | Use this to bind a options field by attribute. |
| `readonly` | `boolean` | Defines whether the component is read-only. |
| `required` | `boolean` | Defines whether the component is required. |
| `selectedOption` | `IOption \| undefined` | Currently selected `furo-ui5-option` element. |
| `textSeparator` | `SelectTextSeparator` | Defines the separator type for the two columns layout when Select is in read-only mode. |
| `tooltip` | `string \| undefined` | Defines the tooltip of the select. |
| `value` | `string` | Defines the value of the component: |
| `valueState` | `ValueState` | Defines the value state of the component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the component options.

**Note:** Only one selected option is allowed.
If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the `ui5-option` component to define the desired options.

### `label`

Defines the HTML element that will be displayed in the component input part,
representing the selected option.

**Note:** If not specified and `ui5-option-custom` is used,
either the option's `display-text` or its textContent will be displayed.

**Note:** If not specified and `ui5-option` is used,
the option's textContent will be displayed.

### `valueStateMessage`

Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The `valueStateMessage` would be displayed,
when the component is in `Information`, `Critical` or `Negative` value state.

**Note:** If the component has `suggestionItems`,
the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `CustomEvent<SelectChangeEventDetail>` | Fired when the selected option changes. |
| `close` | `CustomEvent` | Fired after the component's dropdown menu closes. |
| `live-change` | `CustomEvent<SelectLiveChangeEventDetail>` | Fired when the user navigates through the options, but the selection is not finalized, or when pressing the ESC key to revert the current selection. |
| `open` | `CustomEvent` | Fired after the component's dropdown menu opens. |

## Methods

### `bindData(fieldNode: STRING | FuroFatString | StringValue | undefined): void`

Connects your data model to this component.

### `bindOptions(fieldNode: OptionLikeList | undefined): void`

Connects your data model to this component.

### `clear(): void`

Clears the value of the input field.

## CSS Parts

- `popover`: Used to style the popover element

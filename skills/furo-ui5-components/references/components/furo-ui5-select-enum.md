---
title: furo-ui5-select-enum
tags: [select, enum, dropdown, options, choice, form, list]
category: Form
use-when: Use to select a single value from an enum-typed field.
---

# furo-ui5-select-enum

> Dropdown selection bound to a protobuf enum field.

**Class:** `FuroUi5SelectEnum`
**Import:** `import "@furo/ui5/select-enum"`
**Import type:** `import type { FuroUi5SelectEnum } from "@furo/ui5/select-enum"`
**Extends:** `Select`
**Category:** Form

**Related:** [`furo-ui5-select`](furo-ui5-select.md), [`furo-ui5-option`](furo-ui5-option.md)

## Overview

### FuroUi5SelectEnum
With FuroUi5SelectEnum you can bind a ENUM field to the model. It will build up all defined options from the ENUM.

It extends the UI5 Select.

---

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
| `show-unspecified` | `boolean` | false | Allows you to select the `unspecified` option. |
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
| `model` | `ENUM<unknown> \| undefined` |  |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
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

### `bindData(fieldNode: ENUM<unknown> | undefined): void`

## CSS Parts

- `popover`: Used to style the popover element

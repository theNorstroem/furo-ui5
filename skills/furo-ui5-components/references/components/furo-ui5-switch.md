---
title: furo-ui5-switch
tags: [switch, toggle, on-off, boolean, slider, form]
category: Form
use-when: Use when the state change should take effect immediately without form submission.
---

# furo-ui5-switch

> Toggle control for immediate on/off state changes.

**Class:** `FuroUi5Switch`
**Import:** `import "@furo/ui5/switch"`
**Import type:** `import type { FuroUi5Switch } from "@furo/ui5/switch"`
**Extends:** `Switch`
**Category:** Form

**Related:** [`furo-ui5-checkbox`](furo-ui5-checkbox.md), [`furo-ui5-toggle-button`](furo-ui5-toggle-button.md)

## Overview

The 'furo-ui5-switch' component allows the user to switch true and false for type Bool with data binding.

Bindable FieldNodes: `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.

## supported FAT attributes
 - **"disabled":"true"** set the element to disabled

## supported meta and constraints
- **readonly: true** , set the element to readonly

### Overview
The `furo-ui5-switch` component is used for changing between binary states.

The component can display texts, that will be switched, based on the component state, via the `textOn` and `textOff` properties,
but texts longer than 3 letters will be cutted off.

However, users are able to customize the width of `furo-ui5-switch` with pure CSS (``), and set widths, depending on the texts they would use.

Note: the component would not automatically stretch to fit the whole text width.

### Keyboard Handling
The state can be changed by pressing the Space and Enter keys.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Sets the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component. |
| `checked` | `boolean` | false | Defines if the component is checked. |
| `design` | `"Textual" \| "Graphical"` | "Textual" | Defines the component design. |
| `disabled` | `boolean` | false | Defines whether the component is disabled. |
| `name` | `string \| undefined` | undefined | Determines the name by which the component will be identified upon submission in an HTML form. |
| `readonly` | `boolean` | false | Defines whether the component is in readonly state. |
| `required` | `boolean` | false | Defines whether the component is required. |
| `text-off` | `string \| undefined` | undefined | Defines the text, displayed when the component is not checked. |
| `text-on` | `string \| undefined` | undefined | Defines the text, displayed when the component is checked. |
| `tooltip` | `string \| undefined` | undefined | Defines the tooltip of the component. |
| `value` | `string` | "" | Defines the form value of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Sets the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the component. |
| `checked` | `boolean` | Defines if the component is checked. |
| `design` | `SwitchDesign` | Defines the component design. |
| `disabled` | `boolean` | Defines whether the component is disabled. |
| `model` | `BOOLEAN \| FuroFatBool \| BoolValue` | FieldNode setter |
| `name` | `string \| undefined` | Determines the name by which the component will be identified upon submission in an HTML form. |
| `readonly` | `boolean` | Defines whether the component is in readonly state. |
| `required` | `boolean` | Defines whether the component is required. |
| `textOff` | `string \| undefined` | Defines the text, displayed when the component is not checked. |
| `textOn` | `string \| undefined` | Defines the text, displayed when the component is checked. |
| `tooltip` | `string \| undefined` | Defines the tooltip of the component. |
| `value` | `string` | Defines the form value of the component. |

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `CustomEvent` | Fired when the switch checked state changes. |

## Methods

### `bindData(fieldNode: BOOLEAN | FuroFatBool | BoolValue | undefined): void`

### `check(): void`

Checks the switch and updates the value

### `uncheck(): void`

Unhecks the switch and updates the value

## CSS Parts

- `handle`: Used to style the handle of the switch
- `slider`: Used to style the track, where the handle is being slid
- `text-off`: Used to style the `textOff` property text
- `text-on`: Used to style the `textOn` property text
